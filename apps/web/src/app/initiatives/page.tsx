import Link from "next/link";
import { getRequestLocale } from "@/lib/locale";
import { getInitiativesStrings } from "./strings";
import { getTranslatedBundle } from "@/lib/i18n/getTranslatedBundle";
import { getPublicRouteMetadata } from "@/lib/i18n/publicRouteMetadata";
import { EDEBATTE_URL } from "@/config/links";

async function getPageBundle() {
  const locale = await getRequestLocale();
  const bundle = await getTranslatedBundle({
    locale,
    original: getInitiativesStrings("de"),
    reviewedEnglish: getInitiativesStrings("en"),
  });
  return { locale, bundle };
}

export async function generateMetadata() {
  const { bundle } = await getPageBundle();
  return getPublicRouteMetadata("/initiatives", {
    title: bundle.value.meta.title,
    description: bundle.value.meta.description,
  });
}

export default async function InitiativesPage() {
  const { bundle } = await getPageBundle();
  const strings = bundle.value;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pb-16 text-slate-100">
      <section className="mx-auto max-w-5xl px-4 py-16 space-y-10">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            {strings.header.label}
          </p>
          <h1
            className="text-3xl md:text-4xl font-extrabold leading-tight headline-gradient"
          >
            {strings.header.title}
          </h1>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            {strings.header.body}
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {strings.steps.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300">
              {item}
            </div>
          ))}
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-100">{strings.tool.title}</h2>
          <p className="mt-2 text-sm text-slate-300">
            {strings.tool.body}
          </p>
          <a
            href={EDEBATTE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-300"
          >
            {strings.tool.link}
            <span aria-hidden="true">→</span>
          </a>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-100">
                {strings.cta.title}
              </h2>
              <p className="text-sm text-slate-300">
                {strings.cta.body}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/kontakt" className="btn btn-primary bg-brand-grad text-white">
                {strings.cta.primary}
              </Link>
              <Link href="/#mitmachen" className="btn border border-slate-700 bg-slate-900/80 hover:bg-slate-800">
                {strings.cta.secondary}
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
