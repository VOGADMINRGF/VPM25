import Link from "next/link";
import { getRequestLocale } from "@/lib/locale";
import { getOrderStrings } from "./strings";
import { getPrintPriceLabel } from "@/config/print";
import { getGrundlagenSourceEntry } from "../source";
import { getTranslatedBundle } from "@/lib/i18n/getTranslatedBundle";
import { getPublicRouteMetadata } from "@/lib/i18n/publicRouteMetadata";

async function getPageBundle() {
  const locale = await getRequestLocale();
  const bundle = await getTranslatedBundle({
    locale,
    original: getOrderStrings("de"),
    reviewedEnglish: getOrderStrings("en"),
  });
  return { locale, bundle };
}

export async function generateMetadata() {
  const { bundle } = await getPageBundle();
  return getPublicRouteMetadata("/grundlagen/bestellen", {
    title: bundle.value.title,
    description: bundle.value.body,
  });
}

const BAND_LABELS: Record<string, string> = {
  weissbuch: "I – Weißbuch",
  "legitimation-2-0": "II – Legitimation 2.0",
  repro: "III – RePro",
};

export default async function GrundlagenOrderPage({
  searchParams,
}: {
  searchParams?: { band?: string };
}) {
  const { locale, bundle } = await getPageBundle();
  const strings = bundle.value;
  const price = getPrintPriceLabel(locale);
  const bandParam = searchParams?.band || "";
  const entry = bandParam ? getGrundlagenSourceEntry(bandParam) : null;
  const bandLabel = entry ? `${entry.title}` : "";
  const bandDisplay = bandParam && BAND_LABELS[bandParam] ? BAND_LABELS[bandParam] : bandLabel;

  const orderEmail = "members@voiceopengov.org";
  const subject = `${strings.title} – ${bandDisplay || "Grundlagen"} (${price})`;
  const body = `${strings.fields.band}: ${bandDisplay || "-"}\n${strings.fields.price}: ${price}\n${strings.fields.address}:`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pb-16 text-slate-100">
      <section className="mx-auto max-w-4xl px-4 py-16 space-y-10">
        <header className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            {strings.label}
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight headline-gradient">
            {strings.title}
          </h1>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            {strings.body}
          </p>
        </header>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {strings.priceLabel}
          </p>
          <p className="text-3xl font-semibold text-slate-100">{price}</p>
          {bandDisplay ? (
            <p className="text-sm text-slate-300">
              {strings.fields.band}: {bandDisplay}
            </p>
          ) : null}
          <p className="text-sm text-slate-300">{strings.note}</p>
          <a
            href={`mailto:${orderEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
            className="btn btn-primary mt-2"
          >
            {strings.cta}
          </a>
        </section>

        <div className="text-center">
          <Link href="/grundlagen" className="text-sm font-semibold text-sky-300 hover:underline">
            {strings.back}
          </Link>
        </div>
      </section>
    </main>
  );
}
