import Link from "next/link";
import { getRequestLocale } from "@/lib/locale";

export const metadata = {
  title: "Mini‑Case | Ein Thema von Anlassraum bis Status",
  description:
    "Ein konkretes Beispiel, wie aus einem Thema ein prüfbarer Prozess wird: Check, Dossier, Beteiligung und Status mit nachvollziehbarem Anschluss.",
};

const CONTENT = {
  de: {
    badge: "Mini‑Case",
    title: "So sieht ein vollständiger Prozess aus.",
    lead:
      "Ein lokales Thema, das viele betrifft, wird strukturiert bearbeitet – statt in Kommentarfluten zu versickern.",
    intro:
      "Dieses Beispiel zeigt, wie ein Anlassraum in einen nachvollziehbaren Prozess übergeht: von der Kernfrage bis zum Status.",
    caseLabel: "Beispiel‑Thema",
    caseTitle: "Schulweg‑Sicherheit im Stadtteil",
    caseBody:
      "Eltern, Schüler und Anwohner berichten von gefährlichen Kreuzungen. Die Frage: Welche Maßnahmen erhöhen Sicherheit kurzfristig und langfristig?",
    stepsLabel: "RePro‑Ablauf",
    steps: [
      {
        title: "Check",
        body: "Kernfrage, betroffene Orte, Zuständigkeiten und erste Quellen werden geklärt.",
      },
      {
        title: "Dossier",
        body: "Unfallzahlen, bauliche Optionen, Kosten und offene Fragen werden strukturiert sichtbar.",
      },
      {
        title: "Beteiligung",
        body: "Betroffene priorisieren Optionen – transparent und nachvollziehbar.",
      },
      {
        title: "Status",
        body: "Es bleibt sichtbar, was beschlossen wurde, was läuft und wo es hakt.",
      },
    ],
    outcomeLabel: "Beispiel‑Ergebnis",
    outcomeTitle: "Priorisierung statt Nebel",
    outcomeBody:
      "Die Beteiligung endet mit einer klaren Prioritätenliste, nicht mit einem Stimmungsrausch. Zuständigkeiten sind sichtbar, nächste Schritte verbindlich.",
    ctaTitle: "Mehr Beispiele?",
    ctaBody:
      "Anlassräume entstehen auf eDebatte. VoiceOpenGov liefert den öffentlichen Rahmen und die Regeln.",
    ctaPrimary: "Anlassräume verstehen",
    ctaSecondary: "So funktioniert’s",
    ctaTertiary: "Mitglied werden",
  },
  en: {
    badge: "Mini case",
    title: "What a full process looks like.",
    lead:
      "A local issue many people care about is handled structurally — instead of dissolving into comment noise.",
    intro:
      "This example shows how an issue space becomes a traceable process: from the core question to status.",
    caseLabel: "Example topic",
    caseTitle: "School route safety in a district",
    caseBody:
      "Parents, students and neighbors report dangerous intersections. The question: Which measures improve safety short‑term and long‑term?",
    stepsLabel: "RePro flow",
    steps: [
      {
        title: "Check",
        body: "Core question, affected places, responsibilities and initial sources are clarified.",
      },
      {
        title: "Dossier",
        body: "Accident data, options, costs and open questions become structured and visible.",
      },
      {
        title: "Participation",
        body: "Affected people prioritize options — transparently and traceably.",
      },
      {
        title: "Status",
        body: "It remains visible what was decided, what is running and where it stalls.",
      },
    ],
    outcomeLabel: "Example outcome",
    outcomeTitle: "Prioritization instead of fog",
    outcomeBody:
      "Participation ends with a clear priority list, not a mood spike. Responsibilities are visible, next steps are binding.",
    ctaTitle: "More examples?",
    ctaBody:
      "Issue spaces live on eDebatte. VoiceOpenGov provides the public frame and rules.",
    ctaPrimary: "Understand issue spaces",
    ctaSecondary: "How it works",
    ctaTertiary: "Become a member",
  },
};

export default async function MiniCasePage() {
  const locale = await getRequestLocale();
  const copy = locale === "de" ? CONTENT.de : CONTENT.en;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <section className="border-b border-slate-800/70">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-semibold text-sky-300">
              {copy.badge}
            </div>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl headline-gradient">
              {copy.title}
            </h1>
            <p className="text-lg font-semibold text-slate-100">{copy.lead}</p>
            <p className="text-sm leading-7 text-slate-300">{copy.intro}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {copy.caseLabel}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-100 headline-gradient">
            {copy.caseTitle}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">{copy.caseBody}</p>
        </div>
      </section>

      <section className="border-y border-slate-800/70 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {copy.stepsLabel}
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {copy.steps.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {copy.outcomeLabel}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-100 headline-gradient">
            {copy.outcomeTitle}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">{copy.outcomeBody}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="rounded-3xl border border-sky-500/30 bg-sky-500/10 p-6">
          <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
            {copy.ctaTitle}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-200">{copy.ctaBody}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/anlassraeume" className="btn btn-primary">
              {copy.ctaPrimary}
            </Link>
            <Link href="/howtoworks" className="btn btn-ghost">
              {copy.ctaSecondary}
            </Link>
            <Link href="/#join" className="btn btn-ghost">
              {copy.ctaTertiary}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
