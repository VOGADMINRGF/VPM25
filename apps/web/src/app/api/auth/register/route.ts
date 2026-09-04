import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { POST as registerMembership } from "@/app/api/members/public-register/route";
import { membersCol } from "@/lib/vogMongo";
import {
  hasMemberCredential,
  normalizeMemberEmail,
  setMemberPassword,
  validateMemberPassword,
  verifyMemberCredential,
} from "@/lib/memberAuth";
import { rateLimitFromRequest, rateLimitHeaders } from "@/utils/rateLimitHelpers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RATE_LIMIT = { limit: 4, windowMs: 15 * 60 * 1000 };

const CredentialsSchema = z.object({
  email: z.string().email().max(320),
  password: z.string().min(1).max(128),
});

function jsonError(error: string, status: number) {
  return NextResponse.json({ ok: false, error }, { status });
}

export async function POST(req: NextRequest) {
  const rate = await rateLimitFromRequest(req, RATE_LIMIT.limit, RATE_LIMIT.windowMs, {
    scope: "member-register",
  });
  if (!rate.ok) {
    return NextResponse.json(
      { ok: false, error: "rate_limited", retryIn: rate.retryIn },
      { status: 429, headers: rateLimitHeaders(rate) },
    );
  }

  let body: Record<string, unknown>;
  try {
    const parsedBody = await req.json();
    if (!parsedBody || typeof parsedBody !== "object" || Array.isArray(parsedBody)) {
      return jsonError("invalid_payload", 400);
    }
    body = parsedBody as Record<string, unknown>;
  } catch {
    return jsonError("invalid_json", 400);
  }

  const credentials = CredentialsSchema.safeParse({
    email: body.email,
    password: body.password,
  });
  if (!credentials.success) return jsonError("invalid_credentials_payload", 400);

  const passwordValidation = validateMemberPassword(credentials.data.password);
  if (!passwordValidation.ok) return jsonError(passwordValidation.error, 400);

  const email = normalizeMemberEmail(credentials.data.email);
  const members = await membersCol();
  const existingMember = await members.findOne(
    { email },
    { projection: { _id: 1, status: 1 } },
  );
  const credentialExists = await hasMemberCredential(email);

  if (existingMember?.status === "active") {
    return jsonError(credentialExists ? "account_exists" : "account_setup_required", 409);
  }

  if (existingMember?.status === "pending" && credentialExists) {
    const verified = await verifyMemberCredential(email, credentials.data.password);
    if (!verified.ok) return jsonError("registration_pending", 409);
  }

  const { password: _password, ...membershipPayload } = body;
  membershipPayload.email = email;

  const forwardedRequest = new Request(req.url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(membershipPayload),
  });
  const membershipResponse = await registerMembership(forwardedRequest);
  if (!membershipResponse.ok) return membershipResponse;

  const member = await members.findOne(
    { email },
    { projection: { _id: 1, status: 1 } },
  );
  if (!member?._id) return jsonError("membership_not_persisted", 500);

  if (!credentialExists) {
    await setMemberPassword(String(member._id), email, credentials.data.password);
  }

  return NextResponse.json({
    ok: true,
    status: member.status,
    next: "confirm_email",
  });
}
