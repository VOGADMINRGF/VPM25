"use client";

import { useLocale } from "@/context/LocaleContext";
import { getImpressumStrings } from "./strings";

export default function ImpressumPage() {
  const { locale } = useLocale();
  const strings = getImpressumStrings(locale);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pb-16 text-slate-100">
      <section className="mx-auto max-w-5xl px-4 pt-14">
        <div className="rounded-3xl bg-slate-900/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.4)] ring-1 ring-slate-800 md:p-10">
          <header className="space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Rechtliches
            </p>
            <h1 className="text-3xl font-extrabold leading-tight headline-gradient md:text-4xl">
              {strings.title}
            </h1>
            <p className="text-sm leading-relaxed text-slate-300 md:text-base">
              {strings.intro}
            </p>
          </header>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {strings.responsibleTitle}
              </p>
              <p className="whitespace-pre-line">{strings.responsibleBody}</p>
              <p className="pt-2">
                <span className="font-semibold">E-Mail:</span>{" "}
                <a
                  href={`mailto:${strings.emailLabel}`}
                  className="font-semibold text-sky-300 underline underline-offset-4"
                >
                  {strings.emailLabel}
                </a>
              </p>
            </div>

            <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {strings.legalTitle}
              </p>
              <p className="whitespace-pre-line">{strings.legalBody}</p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-sm text-slate-200 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {strings.disclaimerTitle}
            </p>
            <p className="mt-2 whitespace-pre-line">{strings.disclaimerBody}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
