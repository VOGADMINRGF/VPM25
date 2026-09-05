import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { membersCol } from "@/lib/vogMongo";
import { createPasswordSetupToken, normalizeMemberEmail } from "@/lib/memberAuth";
import { sendMail } from "@/lib/mail/sendMail";
import {
  getMemberFlowStrings,
  memberFlowDirection,
  resolveMemberFlowLocale,
} from "@/lib/i18n/memberFlowI18n";
import { rateLimitFromRequest, rateLimitHeaders } from "@/utils/rateLimitHelpers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RATE_LIMIT = { limit: 5, windowMs: 30 * 60 * 1000 };
const StartSchema = z.object({ email: z.string().email().max(320) });

function baseUrl() {
  if (process.env.PUBLIC_BASE_URL) return process.env.PUBLIC_BASE_URL;
  if (process.env.NEXT_PUBLIC_BASE_URL) return process.env.NEXT_PUBLIC_BASE_URL;
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export async function POST(req: NextRequest) {
  const rate = await rateLimitFromRequest(req, RATE_LIMIT.limit, RATE_LIMIT.windowMs, {
    scope: "member-password-start",
  });
  if (!rate.ok) {
    return NextResponse.json(
      { ok: false, error: "rate_limited", retryIn: rate.retryIn },
      { status: 429, headers: rateLimitHeaders(rate) },
    );
  }

  const body = await req.json().catch(() => null);
  const parsed = StartSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: true });

  const email = normalizeMemberEmail(parsed.data.email);
  const members = await membersCol();
  const member = await members.findOne(
    { email, status: "active" },
    { projection: { _id: 1, preferredLocale: 1 } },
  );

  // Always return the same public response to avoid account enumeration.
  if (!member?._id) return NextResponse.json({ ok: true });

  try {
    const locale = resolveMemberFlowLocale(
      member.preferredLocale || req.cookies.get("lang")?.value,
    );
    const strings = getMemberFlowStrings(locale);
    const { token } = await createPasswordSetupToken(String(member._id));
    const setupUrl = `${baseUrl()}/konto/passwort?token=${encodeURIComponent(token)}&lang=${locale}`;
    await sendMail({
      to: email,
      subject: strings.setupSubject,
      html: [
        `<div lang="${locale}" dir="${memberFlowDirection(locale)}" style="font-family:'Segoe UI',Arial,sans-serif;color:#0f172a;">`,
        `<h2>${strings.setupTitle}</h2>`,
        `<p>${strings.setupBody}</p>`,
        `<p><a href="${setupUrl}" style="display:inline-block;padding:10px 18px;border-radius:999px;background:linear-gradient(90deg,#1a8cff,#18cfc8);color:#071727;text-decoration:none;font-weight:700;">${strings.setupButton}</a></p>`,
        `<p style="font-size:12px;color:#64748b;">${strings.setupExpiry}</p>`,
        `</div>`,
      ].join(""),
    });
  } catch (error) {
    console.warn("[member-password-start] setup mail failed", error);
  }

  return NextResponse.json({ ok: true });
}
