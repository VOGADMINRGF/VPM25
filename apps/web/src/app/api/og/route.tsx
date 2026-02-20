import { ImageResponse } from "next/og";
import { getBand } from "@/app/grundlagen/bands";
import { getLatestRelease } from "@/app/grundlagen/versioning";
import { getGrundlagenEntry } from "@/app/grundlagen/strings";
import { DEFAULT_LOCALE, isSupportedLocale } from "@/config/locales";

export const runtime = "edge";

function clamp(text: string, max = 90) {
  const t = String(text || "");
  if (t.length <= max) return t;
  return t.slice(0, max - 1).trimEnd() + "…";
}

function statusLabel(status?: string) {
  if (status === "stabil") return "Stabil";
  return "Entwurf";
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const type = url.searchParams.get("type") || "grundlagen";
  const slug = url.searchParams.get("slug") || "";
  const localeParam = url.searchParams.get("locale");
  const locale = isSupportedLocale(localeParam) ? localeParam : DEFAULT_LOCALE;

  const isBand = type === "band" && slug;
  const band = isBand ? getBand(slug) : null;
  const entry = isBand ? getGrundlagenEntry(locale, slug) : null;
  const release = isBand ? getLatestRelease(slug) : null;

  const title =
    isBand && band
      ? `Band ${band.roman} – ${band.title}`
      : "Grundlagen – Band I–III";
  const subtitle =
    isBand && (entry?.subtitle || (locale === "de" ? band?.subtitle : undefined))
      ? entry?.subtitle || band?.subtitle
      : "Die offene Referenzreihe: Weißbuch · Legitimation 2.0 · RePro";

  const metaLine =
    isBand && release
      ? `v${release.version} · ${statusLabel(release.status)} · Stand ${release.date}`
      : "Kostenfrei · Versioniert · Zitierfähig";

  const kicker = "VoiceOpenGov";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "linear-gradient(180deg, rgb(2,6,23) 0%, rgb(2,6,23) 40%, rgb(15,23,42) 100%)",
          color: "white",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "inline-flex",
              padding: "10px 14px",
              borderRadius: "999px",
              border: "1px solid rgba(148,163,184,0.35)",
              background: "rgba(15,23,42,0.65)",
              fontSize: 18,
              letterSpacing: 1,
              textTransform: "uppercase",
              color: "rgba(186,230,253,0.95)",
              fontWeight: 700,
            }}
          >
            {kicker}
          </div>

          <div
            style={{
              display: "inline-flex",
              padding: "10px 14px",
              borderRadius: "999px",
              border: "1px solid rgba(148,163,184,0.35)",
              background: "rgba(2,6,23,0.65)",
              fontSize: 16,
              color: "rgba(226,232,240,0.85)",
              fontWeight: 600,
            }}
          >
            {metaLine}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 56, lineHeight: 1.08, fontWeight: 900 }}>
            {clamp(title, 60)}
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.25,
              color: "rgba(226,232,240,0.88)",
              fontWeight: 600,
            }}
          >
            {clamp(subtitle, 110)}
          </div>

          <div
            style={{
              marginTop: 8,
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            {["Prüfbar", "Nachvollziehbar", "Statusgeführt", "Mobil"].map((chip) => (
              <div
                key={chip}
                style={{
                  padding: "8px 12px",
                  borderRadius: 999,
                  border: "1px solid rgba(148,163,184,0.25)",
                  background: "rgba(15,23,42,0.55)",
                  fontSize: 18,
                  color: "rgba(125,211,252,0.92)",
                  fontWeight: 700,
                }}
              >
                {chip}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "rgba(148,163,184,0.9)",
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          <div>voiceopengov.org/grundlagen</div>
          <div>Check → Dossier → Beteiligung → Status</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=86400, immutable",
      },
    },
  );
}
