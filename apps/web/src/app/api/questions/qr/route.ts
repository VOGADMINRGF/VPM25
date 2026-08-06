import { NextRequest, NextResponse } from "next/server";
import QRCode from "qrcode";
import { VOICEOPENGOV_URL } from "@/config/links";
import { normalizeLocale } from "@/lib/i18n/localeContract";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const QUESTION_ID_PATTERN = /^vog-question-(0[1-9]|[1-4][0-9]|50)$/;

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id")?.trim() || "";
  if (!QUESTION_ID_PATTERN.test(id)) {
    return NextResponse.json({ ok: false, error: "invalid_question_id" }, { status: 400 });
  }

  const locale = normalizeLocale(request.nextUrl.searchParams.get("lang"));
  const handoff = new URL("/go/edebatte", VOICEOPENGOV_URL);
  handoff.searchParams.set("canonicalId", id);
  handoff.searchParams.set("lang", locale);

  const svg = await QRCode.toString(handoff.toString(), {
    type: "svg",
    width: 192,
    margin: 1,
    errorCorrectionLevel: "M",
  });

  return new NextResponse(svg, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
