import Link from "next/link";
import { getRequestLocale } from "@/lib/locale";
import { getAutoTranslatedStrings } from "@/lib/i18n/autoTranslateStrings";
import { getGrundlagenStrings } from "./strings";
import { GRUNDLAGEN_BANDS, getBand } from "./bands";
import { getLatestRelease } from "./versioning";
import CoverLightbox from "@/components/media/CoverLightbox";
import { getCovers } from "./covers";
import { getLinks, KDP_SELECT_ENABLED, PRICES } from "./editions";
import { VOG_SUPPORT_PATH, VOICEOPENGOV_URL } from "@/config/links";

function formatDate(locale: string, value?: string) {
  if (!value) return "";
  try {
    const date = new Date(`${value}T00:00:00Z`);
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(date);
  } catch {
    return value;
  }
}

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const strings = await getAutoTranslatedStrings(
    locale,
    getGrundlagenStrings("de"),
    getGrundlagenStrings(locale),
  );
  const base = VOICEOPENGOV_URL;
  const canonical = `${base}/grundlagen`;
  const ogImage = `${base}/api/og?type=grundlagen&locale=${encodeURIComponent(locale)}`;
  return {
    title: strings.overview.meta.title,
    description: strings.overview.meta.description,
    alternates: { canonical },
    openGraph: {
      title: strings.overview.meta.title,
      description: strings.overview.meta.description,
      url: canonical,
      siteName: "VoiceOpenGov",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: strings.overview.meta.title,
      description: strings.overview.meta.description,
      images: [ogImage],
    },
  };
}

export default async function GrundlagenOverviewPage() {
  const locale = await getRequestLocale();
  const strings = await getAutoTranslatedStrings(
    locale,
    getGrundlagenStrings("de"),
    getGrundlagenStrings(locale),
  );

  const slugs = Object.keys(GRUNDLAGEN_BANDS);
  const entriesBySlug = new Map(strings.entries.map((entry) => [entry.slug, entry]));
  const siteUrl = VOICEOPENGOV_URL;
  const preorderEmail = process.env.VOG_PREORDER_EMAIL || "members@voiceopengov.org";
  const bundleCovers = getCovers("bundle");
  const bundleLinks = getLinks("bundle");

  const mailto = (subject: string, body: string) => {
    const s = encodeURIComponent(subject);
    const b = encodeURIComponent(body);
    return `mailto:${preorderEmail}?subject=${s}&body=${b}`;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pb-16 text-slate-100">
      <section className="mx-auto max-w-6xl px-4 pt-14">
        <header className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {strings.label}
          </p>
          <h1 className="text-3xl font-extrabold leading-tight headline-gradient md:text-4xl">
            {strings.overview.header.title}
          </h1>
          <p className="mx-auto max-w-3xl text-sm text-slate-300 md:text-base">
            {strings.overview.header.subtitle}
          </p>
          <p className="text-xs text-slate-400">{strings.overview.header.note}</p>
        </header>

        <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              {bundleCovers?.front ? (
                <CoverLightbox
                  frontSrc={bundleCovers.front}
                  backSrc={bundleCovers.back}
                  title="Bundle (Band I–III)"
                  priority
                />
              ) : null}
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {strings.overview.bundle.label}
              </p>
              <h2 className="text-2xl font-bold text-slate-100">
                {strings.overview.bundle.title}
              </h2>
              <p className="text-sm text-slate-300">{strings.overview.bundle.body}</p>

              <div className="flex flex-wrap gap-3 pt-2">
                {bundleLinks.kindleUrl ? (
                  <a className="btn btn-primary" href={bundleLinks.kindleUrl} target="_blank" rel="noreferrer">
                    {strings.overview.bundle.ctas.ebook} · {PRICES.ebookBundlePrice}
                  </a>
                ) : (
                  <a
                    className="btn btn-primary"
                    href={mailto(
                      "Vorbestellung – eBook-Bundle (Band I–III)",
                      `Bitte eBook-Bundle vorbestellen.\nPreis: ${PRICES.ebookBundlePrice}\n\nName:\nE-Mail:\nHinweis (optional):`,
                    )}
                  >
                    {strings.overview.bundle.ctas.ebook} · {PRICES.ebookBundlePrice}
                  </a>
                )}

                {bundleLinks.printUrl ? (
                  <a className="btn btn-ghost" href={bundleLinks.printUrl} target="_blank" rel="noreferrer">
                    {strings.overview.bundle.ctas.print} · {PRICES.printBundlePrice}
                  </a>
                ) : (
                  <a
                    className="btn btn-ghost"
                    href={mailto(
                      "Vorbestellung – Print-Bundle (Band I–III)",
                      `Bitte Print-Bundle vorbestellen.\nPreis: ${PRICES.printBundlePrice}\n\nName:\nE-Mail:\nLieferadresse:\nHinweis (optional):`,
                    )}
                  >
                    {strings.overview.bundle.ctas.print} · {PRICES.printBundlePrice}
                  </a>
                )}

                <Link href={VOG_SUPPORT_PATH} className="btn btn-ghost">
                  {strings.overview.bundle.ctas.support}
                </Link>
              </div>

              {KDP_SELECT_ENABLED ? (
                <p className="text-xs text-slate-400">{strings.overview.bundle.note}</p>
              ) : null}
            </div>
          </div>
        </section>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {slugs.map((slug) => {
            const band = getBand(slug);
            const entry = entriesBySlug.get(slug);
            const release = getLatestRelease(slug);
            const href = `/grundlagen/${slug}`;
            const covers = getCovers(slug);
            const statusLabel =
              release?.status === "stabil"
                ? strings.release.statusStable
                : strings.release.statusDraft;

            return (
              <div
                key={slug}
                className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm"
              >
                {covers?.front ? (
                  <div className="mb-4">
                    <CoverLightbox
                      frontSrc={covers.front}
                      backSrc={covers.back}
                      title={`${band?.title ?? entry?.title ?? slug}`}
                    />
                  </div>
                ) : null}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {strings.volumeLabel} {band?.roman ?? ""}
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
                    {release?.version ? (
                      <span className="rounded-full border border-slate-800 bg-slate-950/60 px-3 py-1">
                        {strings.release.versionLabel} {release.version}
                      </span>
                    ) : null}
                    {release ? (
                      <span className="rounded-full border border-slate-800 bg-slate-950/60 px-3 py-1">
                        {statusLabel}
                      </span>
                    ) : null}
                  </div>
                </div>

                <h2 className="mt-2 text-lg font-semibold text-slate-100">
                  {band?.title ?? entry?.title ?? slug}
                </h2>
                {(entry?.subtitle ?? (locale === "de" ? band?.subtitle : undefined)) ? (
                  <p className="mt-1 text-sm text-slate-400">
                    {entry?.subtitle ?? (locale === "de" ? band?.subtitle : "")}
                  </p>
                ) : null}

                <p className="mt-4 text-sm text-slate-300">
                  {entry?.intro ?? entry?.subtitle ?? ""}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Link href={href} className="btn btn-primary">
                    {strings.overview.bandCtas.read}
                  </Link>
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  {`voiceopengov-${slug}${release?.version ? `-v${release.version}` : ""}`} ·{" "}
                  <span className="text-slate-400">
                    {siteUrl.replace(/\/$/, "") + href}
                  </span>
                </p>
              </div>
            );
          })}
        </div>

        <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-slate-100">
            {strings.overview.contribute.title}
          </h2>
          <p className="mx-auto mt-2 max-w-3xl text-sm text-slate-300">
            {strings.overview.contribute.body}
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link href="/#mitmachen" className="btn btn-primary">
              {strings.overview.contribute.ctas.join}
            </Link>
            <Link href="/statements" className="btn btn-ghost">
              {strings.overview.contribute.ctas.statements}
            </Link>
            <Link href="/swipes" className="btn btn-ghost">
              {strings.overview.contribute.ctas.vote}
            </Link>
            <Link href={VOG_SUPPORT_PATH} className="btn btn-ghost">
              {strings.overview.contribute.ctas.support}
            </Link>
          </div>

          <p className="mt-4 text-xs text-slate-400">{strings.overview.contribute.hint}</p>
          <p className="mt-2 text-xs text-slate-400">{strings.supportNote}</p>
        </section>
      </section>
    </main>
  );
}
