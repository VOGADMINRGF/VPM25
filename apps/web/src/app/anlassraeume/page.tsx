import Link from "next/link";
import { getRequestLocale } from "@/lib/locale";
import { EDEBATTE_SIGNUP_URL } from "@/config/links";

export const metadata = {
  title: "Anlassräume | Öffentliche Themen strukturiert starten",
  description:
    "Was ein Anlassraum ist, wie er entsteht und wie man Themen so einreicht, dass sie prüfbar, nachvollziehbar und statusgeführt weiterbearbeitet werden können.",
};

const CONTENT = {
  de: {
    badge: "Anlassräume",
    title: "Ein Anlassraum ist der Einstieg in einen prüfbaren Fall.",
    lead:
      "Er ist kein Kommentarstrang und keine Petition. Er ist die klare Startfläche für eine Frage, die später strukturiert bearbeitet wird.",
    intro:
      "VoiceOpenGov erklärt den öffentlichen Anspruch. eDebatte ist das Werkzeug, in dem Anlassräume praktisch entstehen und weitergeführt werden.",
    definitionLabel: "Definition",
    definitionTitle: "Vom Thema zur prüfbaren Kernfrage.",
    definitionBody:
      "Ein Anlassraum bündelt das, was am Anfang zählt: eine klare Frage, eine Quelle, ein Ort und ein Zeitraum. So kann aus einem Thema ein bearbeitbarer Prozess werden.",
    definitionPoints: [
      "Klarer Anlass: Worum geht es?",
      "Konkreter Ort/Zeitraum: Wo und wann ist es relevant?",
      "Quelle oder Beobachtung: Wodurch ist das Thema begründet?",
      "Offene Fragen: Was ist ungeklärt?",
    ],
    guideLabel: "Einreich-Guide",
    guideTitle: "So reichst du einen Anlassraum ein.",
    guideSteps: [
      {
        title: "1. Kernfrage formulieren",
        body: "Eine kurze, prüfbare Frage statt eines Meinungsstatements.",
      },
      {
        title: "2. Quelle hinzufügen",
        body: "Link, Dokument oder Beobachtung, die den Anlass nachvollziehbar macht.",
      },
      {
        title: "3. Ort und Zeit nennen",
        body: "Wo spielt es? Seit wann? Betrifft es einen konkreten Rahmen?",
      },
      {
        title: "4. Offene Punkte markieren",
        body: "Was ist unklar oder strittig? Welche Informationen fehlen noch?",
      },
    ],
    goodLabel: "Was hilft",
    goodTitle: "Gute Anlassräume sind lesbar, nicht laut.",
    goodBody:
      "Je klarer die Ausgangsfrage, desto einfacher kann später ein Dossier entstehen – mit Optionen, Folgen und Verantwortung.",
    goodPoints: [
      {
        title: "Knapp statt komplex",
        body: "Ein klarer Satz ist besser als ein langer Appell.",
      },
      {
        title: "Prüfbar statt absolut",
        body: "Behauptungen brauchen Kontext und Quellen, keine Gewissheit.",
      },
      {
        title: "Offen statt fertig",
        body: "Anlassräume starten eine Klärung – sie sind kein fertiges Urteil.",
      },
      {
        title: "Anschlussfähig statt isoliert",
        body: "Themen sollten so beschrieben sein, dass andere anknüpfen können.",
      },
    ],
    examplesLabel: "Beispiele",
    examplesTitle: "So kann ein Anlassraum aussehen",
    examples: [
      {
        title: "Schulweg-Sicherheit",
        body:
          "Welche Maßnahmen erhöhen die Sicherheit an drei bekannten Kreuzungen im Stadtteil?",
      },
      {
        title: "ÖPNV-Zuverlässigkeit",
        body:
          "Warum fallen bestimmte Buslinien regelmäßig aus, und welche Optionen gibt es kurzfristig?",
      },
      {
        title: "Pflege vor Ort",
        body:
          "Wie kann die Versorgung in ländlichen Regionen konkret verbessert werden?",
      },
    ],
    ctaTitle: "Anlassräume entstehen auf eDebatte",
    ctaBody:
      "VoiceOpenGov projiziert keine Demo-Anlassräume auf die eigene Seite. Die Einreichung findet dort statt, wo Themen später auch wirklich weitergeführt werden.",
    ctaPrimary: "Anlassraum auf eDebatte starten",
    ctaSecondary: "So funktioniert’s",
    ctaTertiary: "Mitglied werden",
  },
  en: {
    badge: "Issue spaces",
    title: "An issue space is the entry point to a verifiable case.",
    lead:
      "It is not a comment thread and not a petition. It is the clear start surface for a question that will be structured later.",
    intro:
      "VoiceOpenGov explains the public claim. eDebatte is the tool where issue spaces are created and carried forward.",
    definitionLabel: "Definition",
    definitionTitle: "From topic to verifiable core question.",
    definitionBody:
      "An issue space bundles what matters at the start: a clear question, a source, a location and a timeframe. This turns a topic into a workable process.",
    definitionPoints: [
      "Clear trigger: what is the issue?",
      "Concrete place/time: where and when is it relevant?",
      "Source or observation: why is the topic grounded?",
      "Open questions: what is still unclear?",
    ],
    guideLabel: "Submission guide",
    guideTitle: "How to submit an issue space.",
    guideSteps: [
      {
        title: "1. Formulate the core question",
        body: "A short, verifiable question instead of a statement.",
      },
      {
        title: "2. Add a source",
        body: "Link, document, or observation that makes the trigger traceable.",
      },
      {
        title: "3. Name place and time",
        body: "Where does it happen? Since when? What context is affected?",
      },
      {
        title: "4. Mark open points",
        body: "What is unclear or disputed? What information is missing?",
      },
    ],
    goodLabel: "What helps",
    goodTitle: "Good issue spaces are readable, not loud.",
    goodBody:
      "The clearer the starting question, the easier it is to build a dossier later — with options, impacts and responsibility.",
    goodPoints: [
      {
        title: "Concise over complex",
        body: "One clear sentence beats a long appeal.",
      },
      {
        title: "Verifiable over absolute",
        body: "Claims need context and sources, not certainty.",
      },
      {
        title: "Open over final",
        body: "Issue spaces start clarification — they are not a finished verdict.",
      },
      {
        title: "Connectable over isolated",
        body: "Describe topics so others can contribute.",
      },
    ],
    examplesLabel: "Examples",
    examplesTitle: "What an issue space can look like",
    examples: [
      {
        title: "School route safety",
        body:
          "Which measures improve safety at three known intersections in the district?",
      },
      {
        title: "Public transport reliability",
        body:
          "Why do specific bus lines fail regularly, and what short-term options exist?",
      },
      {
        title: "Rural care",
        body:
          "How can local healthcare supply be improved in rural regions?",
      },
    ],
    ctaTitle: "Issue spaces live on eDebatte",
    ctaBody:
      "VoiceOpenGov does not project demo issue spaces on its own site. Submission happens where topics are actually carried forward.",
    ctaPrimary: "Start an issue space on eDebatte",
    ctaSecondary: "How it works",
    ctaTertiary: "Become a member",
  },
};

export default async function AnlassraeumePage() {
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
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {copy.definitionLabel}
          </p>
          <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
            {copy.definitionTitle}
          </h2>
          <p className="text-sm leading-7 text-slate-300">{copy.definitionBody}</p>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {copy.definitionPoints.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800/70 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {copy.guideLabel}
            </p>
            <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
              {copy.guideTitle}
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {copy.guideSteps.map((item) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {copy.goodLabel}
          </p>
          <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
            {copy.goodTitle}
          </h2>
          <p className="text-sm leading-7 text-slate-300">{copy.goodBody}</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {copy.goodPoints.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-slate-100">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800/70 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {copy.examplesLabel}
            </p>
            <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
              {copy.examplesTitle}
            </h2>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {copy.examples.map((item) => (
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

      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="rounded-3xl border border-sky-500/30 bg-sky-500/10 p-6">
          <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
            {copy.ctaTitle}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-200">{copy.ctaBody}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={EDEBATTE_SIGNUP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              {copy.ctaPrimary}
            </a>
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
