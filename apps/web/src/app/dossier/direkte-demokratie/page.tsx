import Link from "next/link";
import { getRequestLocale } from "@/lib/locale";
import { getTranslatedBundle } from "@/lib/i18n/getTranslatedBundle";
import { getPublicRouteMetadata } from "@/lib/i18n/publicRouteMetadata";
import { getDossierStrings } from "./strings";
import { EDEBATTE_URL } from "@/config/links";

async function getPageBundle() {
  const locale = await getRequestLocale();
  const bundle = await getTranslatedBundle({
    locale,
    original: getDossierStrings("de"),
    reviewedEnglish: getDossierStrings("en"),
  });
  return { locale, bundle };
}

export async function generateMetadata() {
  const { bundle } = await getPageBundle();
  return getPublicRouteMetadata("/dossier/direkte-demokratie", {
    title: bundle.value.meta.title,
    description: bundle.value.meta.description,
  });
}

export default async function DirekteDemokratieDossierPage() {
  const { bundle } = await getPageBundle();
  const strings = bundle.value;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pb-16 text-slate-100">
      <section className="mx-auto max-w-4xl px-4 pb-10 pt-12">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          {strings.label}
        </p>
        <h1 className="mt-2 text-4xl font-extrabold leading-tight headline-gradient md:text-5xl">
          {strings.title}
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          {strings.intro}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {strings.cards.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>

        <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {strings.discussion.label}
              </p>
              <h2 className="text-xl font-semibold text-slate-100">
                {strings.discussion.title}
              </h2>
              <p className="text-sm text-slate-300">
                {strings.discussion.body}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={EDEBATTE_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                {strings.discussion.ctaPrimary}
              </a>
              <Link
                href="/#mitmachen"
                className="btn border border-slate-700 text-slate-100 hover:bg-slate-800"
              >
                {strings.discussion.ctaSecondary}
              </Link>
            </div>
          </div>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/#mitmachen" className="btn btn-primary">
            {strings.actions.primary}
          </Link>
          <Link href="/initiatives" className="btn border border-slate-700 text-slate-100 hover:bg-slate-800">
            {strings.actions.secondary}
          </Link>
        </div>
      </section>
    </main>
  );
}
