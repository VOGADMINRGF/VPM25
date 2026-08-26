import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/seo/StructuredData";
import TranslationStatusNotice from "@/components/i18n/TranslationStatusNotice";
import { REQUIRED_LAUNCH_LOCALES, getLocaleConfig } from "@/config/locales";
import { EDEBATTE_URL, VOICEOPENGOV_URL } from "@/config/links";
import {
  INITIATOR_THESES_COPY,
  initiatorThesesLocale,
} from "@/content/initiatorTheses";
import {
  localeAlternates,
  localizedCanonicalUrl,
} from "@/lib/i18n/localeContract";
import { getRequestLocale } from "@/lib/locale";

const PATH = "/thesen/ricky-gerd-fleischer";

function localHref(path: string, locale: string) {
  const url = new URL(path, VOICEOPENGOV_URL);
  if (locale !== "de") url.searchParams.set("lang", locale);
  return `${url.pathname}${url.search}`;
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = initiatorThesesLocale(await getRequestLocale());
  const copy = INITIATOR_THESES_COPY[locale];
  const baseCanonical = `${VOICEOPENGOV_URL}${PATH}`;
  const canonical = localizedCanonicalUrl(baseCanonical, locale);

  return {
    title: copy.title,
    description: copy.intro,
    alternates: {
      canonical,
      languages: localeAlternates(baseCanonical, REQUIRED_LAUNCH_LOCALES),
    },
    openGraph: {
      title: copy.title,
      description: copy.intro,
      url: canonical,
      type: "website",
    },
  };
}

export default async function RickyGerdFleischerThesesPage() {
  const locale = initiatorThesesLocale(await getRequestLocale());
  const copy = INITIATOR_THESES_COPY[locale];
  const baseCanonical = `${VOICEOPENGOV_URL}${PATH}`;
  const canonical = localizedCanonicalUrl(baseCanonical, locale);

  return (
    <main className="bg-[#020617] text-[#f8fafc]">
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "@id": `${canonical}#page`,
            url: canonical,
            name: copy.title,
            description: copy.intro,
            inLanguage: getLocaleConfig(locale).bcp47,
            mainEntity: {
              "@type": "Person",
              "@id": `${baseCanonical}#person`,
              name: "Ricky Gerd Fleischer",
              description: "Initiator of VoiceOpenGov",
            },
            isPartOf: {
              "@type": "WebSite",
              "@id": `${VOICEOPENGOV_URL}/#website`,
              name: "VoiceOpenGov",
              url: `${VOICEOPENGOV_URL}/`,
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "VoiceOpenGov", item: `${VOICEOPENGOV_URL}/` },
              { "@type": "ListItem", position: 2, name: "Thesen", item: baseCanonical },
              { "@type": "ListItem", position: 3, name: "Ricky Gerd Fleischer", item: canonical },
            ],
          },
        ]}
      />
      <TranslationStatusNotice
        locale={locale}
        status={getLocaleConfig(locale).defaultTranslationStatus}
      />

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#18cfc8]">{copy.eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">{copy.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{copy.intro}</p>

        <aside className="mt-8 rounded-3xl border border-[#1a8cff]/40 bg-[#0b1220] p-6 sm:p-7">
          <h2 className="text-2xl font-bold">{copy.separationTitle}</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">{copy.separationBody}</p>
        </aside>

        <div className="mt-12 space-y-5">
          {copy.theses.map((thesis, index) => {
            const handoff = `${EDEBATTE_URL}?destination=create&canonicalId=${encodeURIComponent(thesis.id)}&lang=${locale}`;
            return (
              <article
                id={thesis.id}
                key={thesis.id}
                className="rounded-3xl border border-slate-800 bg-[#0b1220] p-7"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#18cfc8]">
                  {String(index + 1).padStart(2, "0")} · {thesis.id}
                </p>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{thesis.title}</h2>
                <p className="mt-4 max-w-3xl leading-7 text-slate-300">{thesis.body}</p>
                <Link
                  href={handoff}
                  className="mt-6 inline-flex rounded-full border border-[#1a8cff] px-5 py-3 font-bold text-white"
                >
                  {copy.testLabel} ↗
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            href={localHref("/fragen", locale)}
            className="inline-flex rounded-full bg-[#18cfc8] px-6 py-3 font-bold text-[#071727]"
          >
            {copy.questionsLabel} →
          </Link>
        </div>
      </section>
    </main>
  );
}
