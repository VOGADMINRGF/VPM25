import Link from "next/link";
import { EDEBATTE_SIGNUP_URL } from "@/config/links";
import { getRequestLocale } from "@/lib/locale";

export const metadata = {
  title: "So funktioniert’s | RePro-Nutzerreise von Check bis Status",
  description:
    "Wie aus einem Thema ein nachvollziehbarer, prüfbarer und statusgeführter Prozess wird: Check, Dossier, Beteiligung, Status.",
};

const CONTENT = {
  de: {
    badge: "So funktioniert’s",
    title: "Aus einem Thema wird ein nachvollziehbarer Prozess.",
    lead:
      "VoiceOpenGov erklärt den öffentlichen Anspruch. eDebatte ist das Werkzeug, in dem dieser Anspruch praktisch geführt wird.",
    intro:
      "Statt Meinungsnebel entsteht ein lesbarer Weg: von der Eingangsfrage über eine strukturierte Klärung bis zu einem Ergebnis mit sichtbarem Anschluss. Genau dafür steht die RePro-Logik.",
    journeyLabel: "Die RePro-Nutzerreise",
    journeyIntro:
      "Vier Phasen, die aus einem Thema einen bearbeitbaren Prozess machen. Keine Abkürzungen, keine leeren Abstimmungen.",
    steps: [
      {
        title: "Check",
        body:
          "Der Einstieg klärt Begriffe, Behauptungen und Zuständigkeiten. Aus einem Thema wird eine prüfbare Kernfrage.",
      },
      {
        title: "Dossier",
        body:
          "Quellen, Konflikte, Optionen, Folgen und Verantwortung werden in eine lesbare Struktur übersetzt.",
      },
      {
        title: "Beteiligung",
        body:
          "Mehrheiten werden nicht behauptet, sondern in klaren Ergebnisarten sichtbar: Stimmung, Priorisierung, Empfehlung oder Entscheidung.",
      },
      {
        title: "Status",
        body:
          "Nach dem Ergebnis bleibt sichtbar, was folgt, wer verantwortlich ist und wie der Stand der Umsetzung ist.",
      },
    ],
    resultsLabel: "Ergebnisarten statt Erwartungsfallen",
    resultsTitle: "Beteiligung endet nicht im Gefühl, sondern im Ergebnis.",
    resultsBody:
      "Nicht jede Beteiligung ist eine Entscheidung. Wir markieren Ergebnisarten sauber, damit klar ist, was ein Ergebnis bedeutet – und was nicht.",
    results: [
      {
        title: "Stimmungsbild",
        body: "Ein klares Bild darüber, wie Menschen eine Lage wahrnehmen.",
      },
      {
        title: "Priorisierung",
        body: "Welche Optionen nach vorne gehören und welche warten müssen.",
      },
      {
        title: "Empfehlung",
        body: "Eine verdichtete Richtung, die Verantwortung und Abwägung sichtbar macht.",
      },
      {
        title: "Entscheidung",
        body: "Nur wenn Rahmen und Zuständigkeiten klar sind, wird entschieden.",
      },
    ],
    caseLabel: "Mini-Case",
    caseTitle: "Beispiel: Schulweg-Sicherheit in einer Stadt",
    caseLead:
      "Ein lokales Thema, das viele betrifft – und dennoch oft im Lärm stecken bleibt. So würde der Prozess aussehen:",
    caseSteps: [
      {
        title: "Check",
        body: "Welche Orte sind betroffen? Welche Daten liegen vor? Wer ist zuständig?",
      },
      {
        title: "Dossier",
        body: "Unfallzahlen, bauliche Optionen, Kosten, Zuständigkeiten und offene Fragen werden sichtbar.",
      },
      {
        title: "Beteiligung",
        body:
          "Eltern, Schüler und Anwohner priorisieren Optionen – transparent, nicht als Kommentarflut.",
      },
      {
        title: "Status",
        body:
          "Es bleibt sichtbar, welche Maßnahmen beschlossen sind und was in der Umsetzung stockt.",
      },
    ],
    ctaTitle: "Mitmachen und den Prozess tragen",
    ctaBody:
      "Mitgliedschaft ist kostenfrei. Wer den Aufbau unterstützen möchte, kann das freiwillig tun – aber der erste Schritt ist immer: mitmachen.",
    ctaPrimary: "Mitglied werden",
    ctaSecondary: "Die Bewegung verstehen",
    ctaTertiary: "eDebatte ansehen",
  },
  en: {
    badge: "How it works",
    title: "A topic becomes a traceable process.",
    lead:
      "VoiceOpenGov explains the public claim. eDebatte is the tool where that claim is carried out in practice.",
    intro:
      "Instead of opinion fog, a readable path emerges: from the initial issue to structured clarification and a result with visible follow-through. That is the RePro logic.",
    journeyLabel: "The RePro journey",
    journeyIntro:
      "Four phases that turn a topic into a workable process. No shortcuts, no empty votes.",
    steps: [
      {
        title: "Check",
        body:
          "The entry clarifies terms, claims and responsibilities. A topic becomes a verifiable core question.",
      },
      {
        title: "Dossier",
        body:
          "Sources, conflicts, options, consequences and responsibility are translated into a readable structure.",
      },
      {
        title: "Participation",
        body:
          "Majorities are not claimed but made visible through result types: mood, prioritization, recommendation or decision.",
      },
      {
        title: "Status",
        body:
          "After the outcome it remains visible what follows, who is responsible and where implementation stands.",
      },
    ],
    resultsLabel: "Result types instead of false expectations",
    resultsTitle: "Participation ends in an outcome, not just a feeling.",
    resultsBody:
      "Not every participation is a decision. We label result types clearly so it is obvious what a result means — and what it does not.",
    results: [
      {
        title: "Mood",
        body: "A clear picture of how people perceive a situation.",
      },
      {
        title: "Prioritization",
        body: "Which options should move forward and which should wait.",
      },
      {
        title: "Recommendation",
        body: "A condensed direction that makes responsibility and trade-offs visible.",
      },
      {
        title: "Decision",
        body: "Only when frame and responsibilities are clear does a decision follow.",
      },
    ],
    caseLabel: "Mini case",
    caseTitle: "Example: safer school routes in a city",
    caseLead:
      "A local issue many people care about — often stuck in noise. This is how the process would look:",
    caseSteps: [
      {
        title: "Check",
        body: "Which locations are affected? What data exists? Who is responsible?",
      },
      {
        title: "Dossier",
        body: "Accident data, options, costs, responsibilities and open questions become visible.",
      },
      {
        title: "Participation",
        body: "Parents, students and neighbors prioritize options — transparently, not as comment floods.",
      },
      {
        title: "Status",
        body:
          "It remains visible which measures were decided and where implementation is stuck.",
      },
    ],
    ctaTitle: "Join and carry the process",
    ctaBody:
      "Membership is free. Anyone can support voluntarily — but the first step is always to join.",
    ctaPrimary: "Become a member",
    ctaSecondary: "Understand the movement",
    ctaTertiary: "See eDebatte",
  },
};

export default async function HowToWorksPage() {
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
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {copy.journeyLabel}
          </p>
          <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
            {copy.journeyIntro}
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {copy.steps.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800/70 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {copy.resultsLabel}
            </p>
            <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
              {copy.resultsTitle}
            </h2>
            <p className="text-sm leading-7 text-slate-300">{copy.resultsBody}</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {copy.results.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <p className="text-sm font-semibold text-slate-100">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
              </article>
            ))}
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
          <p className="mt-3 text-sm leading-7 text-slate-300">{copy.caseLead}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {copy.caseSteps.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="rounded-3xl border border-sky-500/30 bg-sky-500/10 p-6">
          <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
            {copy.ctaTitle}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-200">{copy.ctaBody}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/#join" className="btn btn-primary">
              {copy.ctaPrimary}
            </Link>
            <Link href="/howtoworks/bewegung" className="btn btn-ghost">
              {copy.ctaSecondary}
            </Link>
            <a
              href={EDEBATTE_SIGNUP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              {copy.ctaTertiary}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
