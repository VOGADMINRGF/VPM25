import { membersCol } from "@/lib/vogMongo";
import { VOG_SUPPORT_URL } from "@/config/links";
import {
  getMemberFlowStrings,
  localizedRegionName,
  memberFlowDirection,
  resolveMemberFlowLocale,
  type MemberFlowLocale,
} from "@/lib/i18n/memberFlowI18n";

type MemberPreview = {
  type: "person" | "organisation";
  preferredLocale?: string;
  firstName?: string;
  lastName?: string;
  orgName?: string;
  city?: string;
  country?: string;
  avatarUrl?: string;
  supporterImageUrl?: string;
  publicSupporter?: boolean;
  supporterNote?: string;
  wantsNewsletter?: boolean;
  wantsNewsletterEdDebatte?: boolean;
  isPublic?: boolean;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function initialsFromName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "V";
  return parts.slice(0, 2).map((part) => part[0].toUpperCase()).join("");
}

function withLang(url: string, locale: MemberFlowLocale) {
  return `${url}${url.includes("?") ? "&" : "?"}lang=${locale}`;
}

export function renderMemberConfirmationPage(opts: {
  title: string;
  message: string;
  ok: boolean;
  baseUrl: string;
  locale: MemberFlowLocale;
  member?: MemberPreview | null;
}) {
  const { title, message, ok, baseUrl, locale, member } = opts;
  const s = getMemberFlowStrings(locale);
  const dir = memberFlowDirection(locale);
  const name = member?.type === "organisation"
    ? member.orgName?.trim()
    : [member?.firstName?.trim(), member?.lastName?.trim()].filter(Boolean).join(" ");
  const location = [member?.city?.trim(), localizedRegionName(member?.country, locale)].filter(Boolean).join(", ");
  const visibility = member?.isPublic ? s.publicVisibility : s.privateVisibility;
  const supporter = member?.publicSupporter ? s.yes : s.no;
  const newsletter = member?.wantsNewsletter ? s.yes : s.no;
  const newsletterEd = member?.wantsNewsletterEdDebatte ? s.yes : s.no;
  const initials = initialsFromName(name || "VoiceOpenGov");
  const avatarSrc = member?.supporterImageUrl || member?.avatarUrl || "";
  const avatarUrl = avatarSrc ? escapeHtml(avatarSrc) : "";
  const statusColor = ok ? "#18cfc8" : "#ef4444";

  const profileCard = member ? `
    <div style="margin-top:18px;border:1px solid #e2e8f0;border-radius:16px;padding:16px;background:#f8fafc;">
      <div style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#64748b;font-weight:700;margin-bottom:10px;">${s.profilePreview}</div>
      <div style="display:flex;gap:14px;align-items:center;">
        ${avatarUrl
          ? `<img src="${avatarUrl}" alt="${s.profilePreview}" style="width:64px;height:64px;border-radius:999px;object-fit:cover;border:2px solid #e2e8f0;" />`
          : `<div style="width:64px;height:64px;border-radius:999px;background:#e2e8f0;color:#0f172a;display:flex;align-items:center;justify-content:center;font-weight:700;">${escapeHtml(initials)}</div>`}
        <div>
          <div style="font-size:16px;font-weight:700;color:#0f172a;">${name ? escapeHtml(name) : s.member}</div>
          <div style="font-size:13px;color:#475569;">${location || s.locationPending}</div>
          <div style="font-size:12px;color:#64748b;margin-top:4px;">${visibility}</div>
        </div>
      </div>
      <table style="width:100%;margin-top:12px;font-size:12px;color:#0f172a;border-collapse:collapse;">
        <tr><td style="padding:4px 0;color:#475569;">${s.supporter}</td><td style="padding:4px 0;font-weight:600;">${supporter}</td></tr>
        ${member.supporterNote ? `<tr><td style="padding:4px 0;color:#475569;">${s.motivation}</td><td style="padding:4px 0;font-weight:600;">${escapeHtml(member.supporterNote)}</td></tr>` : ""}
        <tr><td style="padding:4px 0;color:#475569;">${s.newsletterVog}</td><td style="padding:4px 0;font-weight:600;">${newsletter}</td></tr>
        <tr><td style="padding:4px 0;color:#475569;">${s.newsletterEdeb}</td><td style="padding:4px 0;font-weight:600;">${newsletterEd}</td></tr>
      </table>
    </div>` : "";

  const steps = (ok ? s.successSteps : s.failureSteps)
    .map((step) => `<li>${escapeHtml(step)}</li>`)
    .join("");
  const actions = ok
    ? `<a href="${baseUrl}/login?lang=${locale}" style="background:linear-gradient(90deg,#1a8cff,#18cfc8);color:#071727;text-decoration:none;padding:10px 16px;border-radius:999px;font-weight:700;font-size:13px;">${s.login}</a>
       <a href="${baseUrl}/konto/passwort?lang=${locale}" style="background:#0b1220;color:#f8fafc;text-decoration:none;padding:10px 16px;border-radius:999px;font-weight:600;font-size:13px;">${s.setupAccess}</a>`
    : "";

  const html = `<!doctype html>
  <html lang="${locale}" dir="${dir}">
    <head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>${escapeHtml(title)}</title></head>
    <body style="margin:0;font-family:'Segoe UI','Helvetica Neue',Arial,sans-serif;background:#020617;color:#f8fafc;">
      <div style="max-width:720px;margin:40px auto;padding:0 20px;">
        <div style="border-radius:20px;background:#fff;color:#0f172a;box-shadow:0 20px 50px rgba(0,0,0,.28);padding:28px;">
          <div style="height:6px;border-radius:999px;background:linear-gradient(90deg,#1a8cff,#18cfc8);margin-bottom:18px;"></div>
          <h1 style="margin:0 0 10px;font-size:24px;font-weight:800;">${escapeHtml(title)}</h1>
          <p style="margin:0 0 16px;font-size:14px;color:#475569;line-height:1.6;">${escapeHtml(message)}</p>
          <div style="display:inline-block;padding:6px 12px;border-radius:999px;background:${statusColor};color:#071727;font-size:12px;font-weight:700;">${ok ? s.confirmed : s.notConfirmed}</div>
          ${profileCard}
          <div style="margin-top:18px;padding:14px;border-radius:14px;background:#f8fafc;border:1px solid #e2e8f0;">
            <div style="font-weight:700;margin-bottom:6px;">${s.nextSteps}</div>
            <ul style="margin:0;padding-inline-start:18px;font-size:13px;color:#475569;line-height:1.6;">${steps}</ul>
          </div>
          <div style="margin-top:18px;display:flex;flex-wrap:wrap;gap:10px;">
            ${actions}
            <a href="${baseUrl}/?lang=${locale}" style="background:#1a8cff;color:#fff;text-decoration:none;padding:10px 16px;border-radius:999px;font-weight:600;font-size:13px;">${s.home}</a>
            <a href="${withLang(VOG_SUPPORT_URL, locale)}" style="background:#18cfc8;color:#071727;text-decoration:none;padding:10px 16px;border-radius:999px;font-weight:600;font-size:13px;">${s.support}</a>
            <a href="${baseUrl}/kontakt?lang=${locale}" style="background:#e2e8f0;color:#0f172a;text-decoration:none;padding:10px 16px;border-radius:999px;font-weight:600;font-size:13px;">${s.questions}</a>
          </div>
        </div>
      </div>
    </body>
  </html>`;

  return new Response(html, { status: 200, headers: { "content-type": "text/html; charset=utf-8" } });
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  const requestedLocale = resolveMemberFlowLocale(url.searchParams.get("lang"));
  const base = process.env.PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const requestedStrings = getMemberFlowStrings(requestedLocale);

  if (!token) {
    return renderMemberConfirmationPage({ title: requestedStrings.missingTitle, message: requestedStrings.missingMessage, ok: false, baseUrl: base, locale: requestedLocale });
  }

  const col = await membersCol();
  const now = new Date();
  const member = await col.findOne({ doiToken: token });
  if (!member) {
    return renderMemberConfirmationPage({ title: requestedStrings.invalidTitle, message: requestedStrings.invalidMessage, ok: false, baseUrl: base, locale: requestedLocale });
  }

  const locale = resolveMemberFlowLocale(member.preferredLocale || requestedLocale);
  const s = getMemberFlowStrings(locale);
  if (member.doiExpiresAt && member.doiExpiresAt < now) {
    return renderMemberConfirmationPage({ title: s.expiredTitle, message: s.expiredMessage, ok: false, baseUrl: base, locale });
  }

  await col.updateOne(
    { _id: member._id },
    { $set: { status: "active", confirmedAt: now, preferredLocale: locale }, $unset: { doiToken: "", doiExpiresAt: "" } },
  );

  return renderMemberConfirmationPage({
    title: s.successTitle,
    message: s.successMessage,
    ok: true,
    baseUrl: base,
    locale,
    member: member as MemberPreview,
  });
}
