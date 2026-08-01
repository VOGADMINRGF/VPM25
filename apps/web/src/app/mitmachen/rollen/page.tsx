import Link from "next/link";
import { getRequestLocale } from "@/lib/locale";
import { VOG_JOIN_PATH, VOG_QUESTIONS_PATH } from "@/config/links";

type Language = "de" | "en";

const COPY = {
  de: {
    metaTitle: "Mitwirkungsrollen",
    description: "Konkrete Rollen für Mitglieder und Unterstützer von VoiceOpenGov.",
    eyebrow: "Mitmachen",
    title: "Du musst nicht alles können. Du musst nur irgendwo anfangen.",
    intro: "Eine Bewegung wird nicht dadurch groß, dass alle dasselbe tun. Sie wird stark, wenn Menschen ihre unterschiedlichen Fähigkeiten verantwortlich einbringen können.",
    roles: [
      { title: "Nachbar", body: "Du verfolgst Themen, stellst Fragen, widersprichst und hilfst dabei, Prioritäten sichtbar zu machen." },
      { title: "Quellenfinder", body: "Du suchst belastbare Quellen, Gegenquellen und fehlende Perspektiven – ohne daraus automatisch eine Meinung abzuleiten." },
      { title: "Erklärer", body: "Du machst komplexe Zusammenhänge verständlicher, ohne Unsicherheit oder Zielkonflikte glattzubügeln." },
      { title: "Übersetzer", body: "Du hilfst Menschen über Sprachen und kulturelle Kontexte hinweg, dieselbe Frage wirklich zu verstehen." },
      { title: "Moderator", body: "Du schützt das Verfahren, sorgst für respektvollen Widerspruch und trennst Moderation von politischer Bewertung." },
      { title: "Regionaler Organisator", body: "Du baust vor Ort Räume auf, verbindest lokale Fragen mit überregionalen Erkenntnissen und hältst Verantwortung sichtbar." },
      { title: "Prüfer", body: "Du hinterfragst Quellenlage, Rechtsbezug, Annahmen, Repräsentativität und mögliche Interessenkonflikte." },
      { title: "Fördermitglied", body: "Du ermöglichst Recherche, Technik und Community-Arbeit. Dein Beitrag kauft keine zusätzliche Stimme oder Sichtbarkeit." },
      { title: "Partnerorganisation", body: "Du bringst Wissen, Reichweite oder Infrastruktur ein – mit offengelegten Interessen und ohne bevorzugte politische Gewichtung." },
    ],
    nextEyebrow: "Dein erster Schritt",
    nextTitle: "Mitglied werden. Rolle später wählen.",
    nextBody: "Die Mitgliedschaft verpflichtet dich nicht zu einer fertigen Aufgabe. Nach der Bestätigung folgt der Einstieg: Region wählen, Themen auswählen und mit einer kleinen, konkreten Handlung beginnen.",
    join: "Kostenfrei Mitglied werden",
    question: "Eine Frage auswählen",
  },
  en: {
    metaTitle: "Ways to contribute",
    description: "Practical roles for members and supporters of VoiceOpenGov.",
    eyebrow: "Take part",
    title: "You do not need to do everything. You only need somewhere to begin.",
    intro: "A movement does not grow strong because everyone does the same thing. It grows strong when people can contribute their different abilities responsibly.",
    roles: [
      { title: "Neighbour", body: "You follow topics, ask questions, challenge assumptions and help make priorities visible." },
      { title: "Source finder", body: "You look for robust sources, counter-sources and missing perspectives without automatically turning them into an opinion." },
      { title: "Explainer", body: "You make complex relationships easier to understand without smoothing over uncertainty or trade-offs." },
      { title: "Translator", body: "You help people across languages and cultural contexts understand the same question fully." },
      { title: "Moderator", body: "You protect the process, enable respectful dissent and keep moderation separate from political judgement." },
      { title: "Regional organiser", body: "You build spaces locally, connect local questions with wider insight and keep responsibility visible." },
      { title: "Reviewer", body: "You challenge sources, legal context, assumptions, representativeness and potential conflicts of interest." },
      { title: "Supporting member", body: "You enable research, technology and community work. Your contribution buys no additional voice or visibility." },
      { title: "Partner organisation", body: "You contribute knowledge, reach or infrastructure with disclosed interests and without privileged political weight." },
    ],
    nextEyebrow: "Your first step",
    nextTitle: "Become a member. Choose your role later.",
    nextBody: "Membership does not commit you to a finished task. After confirmation, your entry path begins: choose a region, select topics and start with one small, concrete action.",
    join: "Become a member for free",
    question: "Choose a question",
  },
};

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const language: Language = locale === "de" ? "de" : "en";
  return { title: COPY[language].metaTitle, description: COPY[language].description };
}

export default async function RolesPage() {
  const locale = await getRequestLocale();
  const language: Language = locale === "de" ? "de" : "en";
  const copy = COPY[language];

  return (
    <main className="min-h-screen bg-[#07110f] text-[#f4f1e8]">
      <section className="border-b border-[#f4f1e8]/10 bg-[radial-gradient(circle_at_78%_20%,rgba(214,255,101,0.15),transparent_32%)]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#d6ff65]">{copy.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">{copy.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#f4f1e8]/62">{copy.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-22">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {copy.roles.map((role) => (
            <article key={role.title} className="rounded-3xl border border-[#f4f1e8]/10 bg-[#0b1714] p-6 transition hover:-translate-y-1 hover:border-[#d6ff65]/40">
              <h2 className="text-xl font-black">{role.title}</h2>
              <p className="mt-3 leading-7 text-[#f4f1e8]/58">{role.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-[#d6ff65]/25 bg-[#d6ff65]/8 p-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#d6ff65]">{copy.nextEyebrow}</p>
          <h2 className="mt-3 text-3xl font-black">{copy.nextTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#f4f1e8]/58">{copy.nextBody}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={VOG_JOIN_PATH} className="rounded-full bg-[#d6ff65] px-5 py-3 font-black text-[#07110f] transition hover:-translate-y-0.5">{copy.join}</Link>
            <Link href={VOG_QUESTIONS_PATH} className="rounded-full border border-[#f4f1e8]/18 px-5 py-3 font-bold transition hover:border-[#d6ff65]/55 hover:text-[#d6ff65]">{copy.question}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
