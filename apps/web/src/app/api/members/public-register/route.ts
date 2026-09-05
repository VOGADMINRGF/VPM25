import crypto from "crypto";
import { NextResponse } from "next/server";
import { membersCol } from "@/lib/vogMongo";
import { sendMail } from "@/lib/mail/sendMail";
import { VOG_SUPPORT_URL } from "@/config/links";
import {
  getMemberFlowStrings,
  localizedRegionName,
  memberFlowDirection,
  resolveMemberFlowLocale,
  type MemberFlowLocale,
} from "@/lib/i18n/memberFlowI18n";

export const runtime = "nodejs";

const MIN_DONATION_CENTS = 500;
const MAX_IMAGE_DATA_URL_LENGTH = 4_000_000;
const DATA_URL_PREFIX = "data:image/";
const MIN_AGE = 16;

type Body = {
  type?: "person" | "organisation";
  email?: string;
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  orgName?: string;
  city?: string;
  country?: string;
  lat?: number;
  lng?: number;
  preferredLocale?: string;
  isPublic?: boolean;
  visibility?: "public" | "private";
  publicSupporter?: boolean;
  avatarUrl?: string;
  supporterImageUrl?: string;
  supporterNote?: string;
  wantsNewsletter?: boolean;
  wantsNewsletterEdDebatte?: boolean;
  donationCents?: number;
};

type MemberDoc = {
  type: "person" | "organisation";
  email: string;
  preferredLocale: MemberFlowLocale;
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  orgName?: string;
  city?: string;
  country?: string;
  lat?: number;
  lng?: number;
  isPublic: boolean;
  avatarUrl?: string;
  publicSupporter: boolean;
  supporterImageUrl?: string;
  supporterNote?: string;
  wantsNewsletter: boolean;
  wantsNewsletterEdDebatte: boolean;
  status: "pending" | "active";
  doiToken: string;
  doiExpiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
};

function normEmail(email: string) {
  return email.trim().toLowerCase();
}

function normalizeHttpUrl(value?: string) {
  const trimmed = value?.trim();
  if (!trimmed) return undefined;
  try {
    const url = new URL(trimmed);
    if (url.protocol !== "http:" && url.protocol !== "https:") return undefined;
    return trimmed;
  } catch {
    return undefined;
  }
}

function normalizeImageDataUrl(value?: string) {
  const trimmed = value?.trim();
  if (!trimmed || !trimmed.startsWith(DATA_URL_PREFIX)) return undefined;
  if (trimmed.length > MAX_IMAGE_DATA_URL_LENGTH) return undefined;
  return trimmed;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function containsContactInfo(value: string) {
  const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
  const urlRegex = /\bhttps?:\/\/|\bwww\./i;
  return emailRegex.test(value) || urlRegex.test(value);
}

function parseDateOnly(value: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim());
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (!Number.isFinite(year) || !Number.isFinite(month) || !Number.isFinite(day)) return null;
  const date = new Date(Date.UTC(year, month - 1, day));
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) return null;
  return date;
}

function isAtLeastAge(date: Date, minAge: number) {
  const now = new Date();
  const cutoff = new Date(Date.UTC(now.getUTCFullYear() - minAge, now.getUTCMonth(), now.getUTCDate()));
  return date <= cutoff;
}

function requestLocale(req: Request, body: Body): MemberFlowLocale {
  if (body.preferredLocale) return resolveMemberFlowLocale(body.preferredLocale);
  const headerLocale = req.headers.get("x-vog-locale");
  if (headerLocale) return resolveMemberFlowLocale(headerLocale);
  const cookie = req.headers.get("cookie") || "";
  const match = /(?:^|;\s*)lang=([^;]+)/.exec(cookie);
  return resolveMemberFlowLocale(match ? decodeURIComponent(match[1]) : undefined);
}

export async function POST(req: Request) {
  const requestId = crypto.randomUUID();
  try {
    const body = (await req.json().catch(() => null)) as Body | null;
    if (!body?.email) {
      return NextResponse.json({ ok: false, requestId, error: { message: "missing_email" } }, { status: 400 });
    }

    const donationCents = typeof body.donationCents === "number" ? body.donationCents : 0;
    if (donationCents > 0 && donationCents < MIN_DONATION_CENTS) {
      return NextResponse.json({ ok: false, requestId, error: { message: "donation_min_5_eur" } }, { status: 400 });
    }

    const locale = requestLocale(req, body);
    const strings = getMemberFlowStrings(locale);
    const email = normEmail(body.email);
    const type: "person" | "organisation" = body.type === "organisation" ? "organisation" : "person";
    const isPublic = typeof body.isPublic === "boolean" ? body.isPublic : body.visibility === "public";
    const publicSupporter = Boolean(body.publicSupporter);
    const wantsNewsletter = Boolean(body.wantsNewsletter);
    const wantsNewsletterEdDebatte = Boolean(body.wantsNewsletterEdDebatte);
    const supporterNoteRaw = typeof body.supporterNote === "string" ? body.supporterNote : "";
    const supporterNote = supporterNoteRaw.replace(/\s+/g, " ").trim().slice(0, 160) || undefined;
    if (supporterNote && containsContactInfo(supporterNote)) {
      return NextResponse.json({ ok: false, requestId, error: { message: "supporter_note_contact" } }, { status: 400 });
    }

    let birthDateValue: string | undefined;
    if (type === "person") {
      const parsedBirth = parseDateOnly(typeof body.birthDate === "string" ? body.birthDate : "");
      if (!parsedBirth) {
        return NextResponse.json({ ok: false, requestId, error: { message: "invalid_birthdate" } }, { status: 400 });
      }
      if (!isAtLeastAge(parsedBirth, MIN_AGE)) {
        return NextResponse.json({ ok: false, requestId, error: { message: "underage" } }, { status: 400 });
      }
      birthDateValue = parsedBirth.toISOString().slice(0, 10);
    }

    const token = crypto.randomBytes(24).toString("hex");
    const expires = new Date(Date.now() + 48 * 60 * 60 * 1000);
    const now = new Date();
    const avatarUrl = isPublic
      ? type === "organisation" ? normalizeHttpUrl(body.avatarUrl) : normalizeImageDataUrl(body.avatarUrl)
      : undefined;
    const supporterImageUrl = publicSupporter
      ? type === "organisation" ? normalizeHttpUrl(body.supporterImageUrl) : normalizeImageDataUrl(body.supporterImageUrl)
      : undefined;

    const doc: MemberDoc = {
      type,
      email,
      preferredLocale: locale,
      firstName: body.firstName?.trim() || undefined,
      lastName: body.lastName?.trim() || undefined,
      birthDate: birthDateValue,
      orgName: body.orgName?.trim() || undefined,
      city: body.city?.trim() || undefined,
      country: body.country?.trim() || undefined,
      lat: typeof body.lat === "number" ? body.lat : undefined,
      lng: typeof body.lng === "number" ? body.lng : undefined,
      isPublic,
      avatarUrl,
      publicSupporter,
      supporterImageUrl,
      supporterNote,
      wantsNewsletter,
      wantsNewsletterEdDebatte,
      status: "pending",
      doiToken: token,
      doiExpiresAt: expires,
      createdAt: now,
      updatedAt: now,
    };

    const col = await membersCol();
    const { createdAt, ...docWithoutCreatedAt } = doc;
    const upsertResult = await col.updateOne(
      { email },
      { $set: { ...docWithoutCreatedAt, updatedAt: new Date() }, $setOnInsert: { createdAt } },
      { upsert: true },
    );

    const base = process.env.PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const confirmUrl = `${base}/api/members/confirm?token=${encodeURIComponent(token)}&lang=${locale}`;
    const displayName = type === "organisation"
      ? body.orgName?.trim()
      : [body.firstName?.trim(), body.lastName?.trim()].filter(Boolean).join(" ");
    const locationParts = [body.city?.trim(), localizedRegionName(body.country, locale)].filter(Boolean).join(", ");
    const visibilityText = isPublic ? strings.publicVisibility : strings.privateVisibility;
    const supporterText = publicSupporter ? strings.yes : strings.no;
    const newsletterText = wantsNewsletter ? strings.yes : strings.no;
    const newsletterEdText = wantsNewsletterEdDebatte ? strings.yes : strings.no;
    const birthDateText = birthDateValue ? new Intl.DateTimeFormat(locale).format(new Date(`${birthDateValue}T00:00:00Z`)) : undefined;
    const contactUrl = `${base}/kontakt?lang=${locale}`;
    const supportUrl = `${VOG_SUPPORT_URL}${VOG_SUPPORT_URL.includes("?") ? "&" : "?"}lang=${locale}`;
    const notifyEmail = process.env.VOG_MEMBERSHIP_CONTACT_EMAIL || "members@voiceopengov.org";

    // Internal operations notification deliberately remains German.
    if (upsertResult.upsertedId) {
      const summaryLines = [
        `Mitgliedschaft: ${type === "organisation" ? "Organisation" : "Person"}`,
        `Name: ${displayName ? escapeHtml(displayName) : "—"}`,
        `Ort: ${body.city?.trim() || "—"}, ${body.country?.trim() || "—"}`,
        `Sprache: ${locale}`,
        `Sichtbarkeit: ${isPublic ? "öffentlich aggregiert" : "privat"}`,
        `Unterstützer-Banner: ${publicSupporter ? "Ja" : "Nein"}`,
        `Newsletter VoiceOpenGov: ${wantsNewsletter ? "Ja" : "Nein"}`,
        `Updates eDebatte: ${wantsNewsletterEdDebatte ? "Ja" : "Nein"}`,
      ];
      if (supporterNote) summaryLines.push(`Motivation: ${escapeHtml(supporterNote)}`);
      if (birthDateText) summaryLines.push(`Geburtsdatum: ${escapeHtml(birthDateText)}`);
      try {
        await sendMail({
          to: notifyEmail,
          subject: `Neuer Eintrag: ${displayName || email}`,
          html: ["<h2>Neuer Mitgliedseintrag</h2>", "<ul>", ...summaryLines.map((line) => `<li>${line}</li>`), "</ul>"].join(""),
        });
      } catch (err) {
        console.warn("[public-register] notify email failed", err);
      }
    }

    const dir = memberFlowDirection(locale);
    await sendMail({
      to: email,
      subject: strings.verifySubject,
      html: [
        `<div lang="${locale}" dir="${dir}" style="font-family:'Segoe UI','Helvetica Neue',Arial,sans-serif;color:#0f172a;">`,
        `<h2 style="margin:0 0 12px;font-size:20px;font-weight:700;">${strings.verifyTitle}</h2>`,
        `<p style="margin:0 0 16px;font-size:14px;line-height:1.5;">${strings.verifyBody}</p>`,
        `<p><a href="${confirmUrl}" style="display:inline-block;padding:10px 18px;border-radius:999px;background:linear-gradient(90deg,#1a8cff,#18cfc8);color:#071727;text-decoration:none;font-weight:700;">${strings.verifyButton}</a></p>`,
        `<div style="margin:18px 0;padding:14px;border:1px solid #e2e8f0;border-radius:12px;background:#f8fafc;">`,
        `<div style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#64748b;font-weight:700;margin-bottom:8px;">${strings.yourData}</div>`,
        `<table style="width:100%;font-size:13px;color:#0f172a;border-collapse:collapse;">`,
        `<tr><td style="padding:4px 0;color:#475569;">${strings.membership}</td><td style="padding:4px 0;font-weight:600;">${type === "organisation" ? strings.organisation : strings.person}</td></tr>`,
        displayName ? `<tr><td style="padding:4px 0;color:#475569;">${strings.name}</td><td style="padding:4px 0;font-weight:600;">${escapeHtml(displayName)}</td></tr>` : "",
        birthDateText ? `<tr><td style="padding:4px 0;color:#475569;">${strings.birthDate}</td><td style="padding:4px 0;font-weight:600;">${escapeHtml(birthDateText)}</td></tr>` : "",
        locationParts ? `<tr><td style="padding:4px 0;color:#475569;">${strings.city}</td><td style="padding:4px 0;font-weight:600;">${escapeHtml(locationParts)}</td></tr>` : "",
        `<tr><td style="padding:4px 0;color:#475569;">${strings.visibility}</td><td style="padding:4px 0;font-weight:600;">${visibilityText}</td></tr>`,
        `<tr><td style="padding:4px 0;color:#475569;">${strings.supporter}</td><td style="padding:4px 0;font-weight:600;">${supporterText}</td></tr>`,
        supporterNote ? `<tr><td style="padding:4px 0;color:#475569;">${strings.motivation}</td><td style="padding:4px 0;font-weight:600;">${escapeHtml(supporterNote)}</td></tr>` : "",
        `<tr><td style="padding:4px 0;color:#475569;">${strings.newsletterVog}</td><td style="padding:4px 0;font-weight:600;">${newsletterText}</td></tr>`,
        `<tr><td style="padding:4px 0;color:#475569;">${strings.newsletterEdeb}</td><td style="padding:4px 0;font-weight:600;">${newsletterEdText}</td></tr>`,
        `</table></div>`,
        `<p style="font-size:13px;color:#334155;">${strings.verifySupportBody} <a href="${supportUrl}">${strings.support}</a></p>`,
        `<p style="font-size:13px;color:#334155;">${strings.verifyJoinBody}</p>`,
        `<p><a href="${contactUrl}" style="color:#1a8cff;font-weight:600;">${strings.questions}</a></p>`,
        `<p style="margin:16px 0 0;font-size:12px;color:#64748b;">${strings.ignore}</p>`,
        `</div>`,
      ].join(""),
    });

    const isDev = process.env.NODE_ENV !== "production";
    return NextResponse.json({ ok: true, requestId, devToken: isDev ? token : undefined });
  } catch (err: any) {
    console.error("[public-register]", requestId, err);
    const msg = process.env.NODE_ENV === "development" ? (err?.message ?? String(err)) : "registration_failed";
    return NextResponse.json({ ok: false, requestId, error: { message: msg } }, { status: 500 });
  }
}
