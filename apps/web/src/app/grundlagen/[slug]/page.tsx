import Link from "next/link";
import { notFound } from "next/navigation";
import { getRequestLocale } from "@/lib/locale";
import { getGrundlagenEntry, getGrundlagenStrings } from "../strings";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const locale = await getRequestLocale();
  const entry = getGrundlagenEntry(locale, params.slug);
  if (!entry) return {};
  return {
    title: entry.meta.title,
    description: entry.meta.description,
  };
}

export default async function GrundlagenDetailPage({ params }: { params: { slug: string } }) {
  const locale = await getRequestLocale();
  const strings = getGrundlagenStrings(locale);
  const entry = getGrundlagenEntry(locale, params.slug);

  if (!entry) notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pb-16 text-slate-100">
      <section className="mx-auto max-w-5xl px-4 pt-12">
        <header className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {strings.label}
          </p>
          <h1 className="text-3xl font-extrabold leading-tight headline-gradient md:text-4xl">
            {entry.title}
          </h1>
          <p className="text-sm text-slate-300 md:text-base">{entry.subtitle}</p>
          <p className="text-sm text-slate-400">{entry.intro}</p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-[220px_1fr]">
          <nav className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {strings.tocLabel}
            </p>
            <ul className="mt-3 space-y-2">
              {entry.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="hover:text-slate-100 hover:underline hover:underline-offset-4"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <article className="space-y-8">
            {entry.sections.map((section) => (
              <section key={section.id} id={section.id} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                <h2 className="text-lg font-semibold text-slate-100">{section.title}</h2>
                {section.body.map((paragraph, idx) => (
                  <p key={idx} className="mt-2 text-sm text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </article>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/#mitmachen" className="btn btn-primary">
            {strings.ctas.join}
          </Link>
          <Link href="/unterstuetzen" className="btn btn-ghost">
            {strings.ctas.support}
          </Link>
        </div>
        <p className="mt-4 text-center text-xs text-slate-400">
          {strings.supportNote}
        </p>
      </section>
    </main>
  );
}
