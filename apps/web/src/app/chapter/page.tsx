import Link from "next/link";
import { getRequestLocale } from "@/lib/locale";
import ChapterIntakeForm from "./ChapterIntakeForm";
import { getChapterStrings } from "./strings";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const strings = getChapterStrings(locale);
  return {
    title: strings.meta.title,
    description: strings.meta.description,
  };
}

export default async function ChapterPage() {
  const locale = await getRequestLocale();
  const strings = getChapterStrings(locale);

  return (
    <main className="mx-auto max-w-6xl px-6 py-10 text-slate-100">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <section>
          <h1 className="text-4xl font-semibold tracking-tight headline-gradient">
            {strings.page.title}
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            {strings.page.intro}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {strings.page.steps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-100">{step.title}</div>
                <div className="mt-1 text-sm text-slate-300">{step.body}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href="#vormerken"
              className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500"
            >
              {strings.page.ctas.primary}
            </a>
            <Link
              href="/"
              className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 shadow-sm hover:bg-slate-800"
            >
              {strings.page.ctas.secondary}
            </Link>
          </div>

          <div className="mt-2 text-xs text-slate-400">
            {strings.page.note}
          </div>
        </section>

        <ChapterIntakeForm id="vormerken" />
      </div>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="text-sm font-semibold text-slate-100">
            {strings.page.sections.whatTitle}
          </div>
          <p className="mt-2 text-sm text-slate-300">
            {strings.page.sections.whatBody}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="text-sm font-semibold text-slate-100">
            {strings.page.sections.notTitle}
          </div>
          <p className="mt-2 text-sm text-slate-300">
            {strings.page.sections.notBody}
          </p>
        </div>
      </section>
    </main>
  );
}
