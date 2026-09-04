import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { POST as registerMembership } from "@/app/api/members/public-register/route";
import { sendMail } from "@/lib/mail/sendMail";
import { membersCol } from "@/lib/vogMongo";
import {
  createPasswordSetupToken,
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

function publicSuccess() {
  return NextResponse.json({
    ok: true,
    status: "pending",
    next: "check_email",
  });
}

function baseUrl() {
  if (process.env.PUBLIC_BASE_URL) return process.env.PUBLIC_BASE_URL;
  if (process.env.NEXT_PUBLIC_BASE_URL) return process.env.NEXT_PUBLIC_BASE_URL;
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

async function sendExistingMemberAccessEmail(memberId: string, email: string) {
  try {
    const { token } = await createPasswordSetupToken(memberId);
    const setupUrl = `${baseUrl()}/konto/passwort?token=${encodeURIComponent(token)}`;
    await sendMail({
      to: email,
      subject: "VoiceOpenGov – Mitgliedszugang",
      html: [
        `<div style="font-family:'Segoe UI',Arial,sans-serif;color:#0f172a;">`,
        `<h2>Dein VoiceOpenGov-Mitgliedszugang</h2>`,
        `<p>Für diese E-Mail-Adresse besteht bereits eine bestätigte Mitgliedschaft. Über den folgenden Link kannst du deinen Zugang einrichten oder dein Passwort neu setzen.</p>`,
        `<p><a href="${setupUrl}" style="display:inline-block;padding:10px 18px;border-radius:999px;background:linear-gradient(90deg,#1a8cff,#18cfc8);color:#071727;text-decoration:none;font-weight:700;">Zugang einrichten</a></p>`,
        `<p style="font-size:12px;color:#64748b;">Der Link ist zwei Stunden gültig. Wenn du diese Aktion nicht ausgelöst hast, kannst du die E-Mail ignorieren.</p>`,
        `</div>`,
      ].join(""),
    });
  } catch (error) {
    console.warn("[member-register] existing-member access mail failed", error);
  }
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
  if ("error" in passwordValidation) return jsonError(passwordValidation.error, 400);

  const email = normalizeMemberEmail(credentials.data.email);
  const members = await membersCol();
  const existingMember = await members.findOne(
    { email },
    { projection: { _id: 1, status: 1 } },
  );

  // Never disclose whether an email already belongs to an active member or
  // whether credentials already exist. Recovery continues only through the
  // mailbox controlled by that member, while the public response stays equal.
  if (existingMember?.status === "active") {
    await sendExistingMemberAccessEmail(String(existingMember._id), email);
    return publicSuccess();
  }

  const credentialExists = await hasMemberCredential(email);
  if (existingMember?.status === "pending" && credentialExists) {
    const verified = await verifyMemberCredential(email, credentials.data.password);
    if (!verified.ok) {
      // Same outward response as a successful registration. Do not reveal a
      // pending membership or account state to a caller who lacks the password.
      return publicSuccess();
    }
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
    { projection: { _id: 1 } },
  );
  if (!member?._id) return jsonError("membership_not_persisted", 500);

  if (!credentialExists) {
    await setMemberPassword(String(member._id), email, credentials.data.password);
  }

  return publicSuccess();
}
