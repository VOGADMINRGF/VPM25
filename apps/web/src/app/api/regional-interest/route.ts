import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { regionalInterestCol, type RegionalInterestIntent } from "@/lib/vogMongo";
import { verifyHumanTokenDetailed } from "@/lib/security/human-token";
import { sendMail } from "@/lib/mail/sendMail";
import { rateLimitFromRequest, rateLimitHeaders } from "@/utils/rateLimitHelpers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RATE_LIMIT = { limit: 4, windowMs: 30 * 60 * 1000 };
const INTENT_VALUES = [
  "stay_informed",
  "join_meetup",
  "start_meetup",
  "help_organize",
  "offer_space",
  "offer_contacts",
  "offer_expertise",
  "regional_long_term",
] as const satisfies readonly RegionalInterestIntent[];

const IntakeSchema = z.object({
  contactName: z.string().trim().min(2).max(120),
  contactEmail: z.string().trim().email().max(320),
  location: z.string().trim().min(2).max(160),
  topic: z.string().trim().max(240).optional(),
  intents: z.array(z.enum(INTENT_VALUES)).min(1).max(INTENT_VALUES.length),
  notes: z.string().trim().max(1500).optional(),
  contactConsent: z.literal(true),
  matchingConsent: z.boolean(),
  privacyAccepted: z.literal(true),
  humanToken: z.string().min(10),
  hp_regional: z.string().optional(),
});

const INTENT_LABELS: Record<RegionalInterestIntent, string> = {
  stay_informed: "Informiert bleiben",
  join_meetup: "Bei einem Stammtisch dabei sein",
  start_meetup: "Einen Stammtisch anstossen",
  help_organize: "Bei Termin oder Organisation helfen",
  offer_space: "Einen Raum anbieten",
  offer_contacts: "Kontakte einbringen",
  offer_expertise: "Wissen oder Erfahrung einbringen",
  regional_long_term: "Laengerfristig regional mitarbeiten",
};

function normalizeOptional(value: string | undefined) {
  const normalized = value?.replace(/\s+/g, " ").trim();
  return normalized || undefined;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  const ipRate = await rateLimitFromRequest(req, RATE_LIMIT.limit, RATE_LIMIT.windowMs, {
    scope: "regional-interest",
  });
  if (!ipRate.ok) {
    return NextResponse.json(
      { ok: false, error: "rate_limited", retryIn: ipRate.retryIn },
      { status: 429, headers: rateLimitHeaders(ipRate) },
    );
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = IntakeSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  if (parsed.data.hp_regional?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const human = await verifyHumanTokenDetailed(parsed.data.humanToken);
  if (!human.ok || human.payload.formId !== "regional-interest") {
    return NextResponse.json({ ok: false, error: "invalid_human_token" }, { status: 400 });
  }

  const collection = await regionalInterestCol();
  const now = new Date();
  const topic = normalizeOptional(parsed.data.topic);
  const notes = normalizeOptional(parsed.data.notes);

  await collection.insertOne({
    contactName: parsed.data.contactName,
    contactEmail: parsed.data.contactEmail.toLowerCase(),
    location: parsed.data.location,
    topic,
    intents: parsed.data.intents,
    notes,
    contactConsent: true,
    matchingConsent: parsed.data.matchingConsent,
    privacyAccepted: true,
    status: "new",
    sourcePath: "/vor-ort",
    createdAt: now,
  });

  const adminEmail = process.env.ADMIN_EMAIL;
  if (adminEmail) {
    const intentLabels = parsed.data.intents.map((value) => INTENT_LABELS[value]);
    const summary = [
      `Name: ${parsed.data.contactName}`,
      `E-Mail: ${parsed.data.contactEmail}`,
      `Ort / Region: ${parsed.data.location}`,
      `Interesse: ${intentLabels.join(", ")}`,
      `Kontaktvermittlung erlaubt: ${parsed.data.matchingConsent ? "Ja" : "Nein"}`,
    ];
    if (topic) summary.push(`Thema: ${topic}`);
    if (notes) summary.push(`Hinweise: ${notes}`);

    await sendMail({
      to: adminEmail,
      subject: `Regionales Interesse: ${parsed.data.location}`,
      html: [
        "<h2>Neues regionales Interesse</h2>",
        "<p>Noch keine Veranstaltung und keine automatische Kontaktvermittlung.</p>",
        "<ul>",
        ...summary.map((line) => `<li>${escapeHtml(line)}</li>`),
        "</ul>",
      ].join(""),
    });
  }

  return NextResponse.json({
    ok: true,
    next: parsed.data.matchingConsent ? "review_for_matching" : "keep_informed",
  });
}
