import Link from "next/link";
import { getRequestLocale } from "@/lib/locale";
import { VOG_JOIN_PATH, VOG_TRANSPARENCY_PATH } from "@/config/links";

type Language = "de" | "en";

const GROUPS: Record<Language, Array<{ title: string; questions: string[] }>> = {
  de: [
    {
      title: "Menschenbild, Freiheit und Verantwortung",
      questions: [
        "Wie schützen wir die Würde jedes Menschen, wenn Freiheit, Sicherheit und Gemeinwohl kollidieren?",
        "Welche Verantwortung trägt der Einzelne gegenüber der Gemeinschaft – und wo endet sie?",
        "Wie sichern wir persönliche Souveränität, ohne gesellschaftlichen Zusammenhalt zu schwächen?",
        "Welche Rechte dürfen niemals von Mehrheiten aufgehoben werden?",
        "Wie behandeln wir Menschen fair, wenn ihre Voraussetzungen höchst unterschiedlich sind?",
        "Welche Verantwortung tragen heutige Generationen gegenüber Menschen, die noch nicht geboren sind?",
      ],
    },
    {
      title: "Demokratie, Staat und Macht",
      questions: [
        "Wann ist eine politische Entscheidung wirklich legitim?",
        "Wie verbinden wir repräsentative Demokratie, direkte Beteiligung und fachliche Verantwortung?",
        "Wie verhindern wir, dass Geld, Reichweite oder institutionelle Nähe politische Gewichtung kaufen?",
        "Wie schützen wir Minderheiten, ohne demokratische Mehrheiten handlungsunfähig zu machen?",
        "Wie machen wir politische Verantwortung sichtbar, wenn Entscheidungen verteilt sind?",
        "Wann muss eine politische Entscheidung automatisch neu geprüft werden?",
        "Wie begrenzen wir Macht, ohne notwendige Handlungsfähigkeit zu verlieren?",
        "Wer kontrolliert diejenigen, die Kontrolle ausüben?",
        "Wie schaffen wir einen Staat, der wirksam handelt und nachvollziehbar bleibt?",
        "Wie verhindern wir, dass Krisen dauerhaft zu weniger Freiheit und Kontrolle führen?",
      ],
    },
    {
      title: "Wissen, Medien und Orientierung",
      questions: [
        "Wie unterscheiden wir belastbares Wissen, plausible Annahmen und bloße Behauptungen?",
        "Wie gehen wir öffentlich mit wissenschaftlicher Unsicherheit um?",
        "Wie verhindern wir Desinformation, ohne legitimen Widerspruch zu unterdrücken?",
        "Welche Verantwortung tragen Medien, Plattformen und Bürger für gemeinsame Orientierung?",
        "Wie machen wir Interessenkonflikte sichtbar, ohne Menschen pauschal zu diskreditieren?",
        "Wie können Menschen komplexe Entscheidungen ohne Expertenwissen verstehen?",
        "Wie bewerten wir Quellen transparent, ohne eine zentrale Wahrheitsbehörde zu schaffen?",
        "Wie schaffen wir Raum für Kursänderungen, ohne sie als Schwäche auszulegen?",
      ],
    },
    {
      title: "Technologie, KI und digitale Souveränität",
      questions: [
        "Wie nutzen wir KI so, dass sie Menschen stärkt und nicht beherrscht?",
        "Welche Entscheidungen dürfen niemals vollständig automatisiert werden?",
        "Wie schützen wir Privatsphäre, ohne gesellschaftlich nützliche Erkenntnisse unmöglich zu machen?",
        "Wie verhindern wir digitale Machtkonzentration bei Staaten und Unternehmen?",
        "Wem gehören öffentlich relevante Daten und Modelle?",
        "Wie machen wir algorithmische Entscheidungen verständlich, anfechtbar und korrigierbar?",
        "Wie sichern wir digitale Teilhabe, ohne permanente Vernetzung zu erzwingen?",
      ],
    },
    {
      title: "Soziales, Arbeit und Wohlstand",
      questions: [
        "Wie sichern wir Teilhabe, ohne Eigenverantwortung und Leistung zu entwerten?",
        "Wie verteilen wir Chancen fairer, ohne Ergebnisse künstlich gleichzumachen?",
        "Wie gestalten wir Arbeit in einer von Automatisierung und KI geprägten Welt?",
        "Wie finanzieren wir einen leistungsfähigen Sozialstaat dauerhaft und generationengerecht?",
        "Wie verhindern wir Armut, ohne Abhängigkeit von undurchsichtigen Systemen zu verstärken?",
        "Wie messen wir Wohlstand jenseits von Wachstum und Einkommen?",
        "Wie schaffen wir bezahlbaren Wohnraum, ohne Eigentum und Investitionen zu blockieren?",
      ],
    },
    {
      title: "Bildung und Befähigung",
      questions: [
        "Was muss Bildung leisten, damit Menschen souverän handeln können?",
        "Wie verbinden wir gleiche Chancen mit unterschiedlichen Talenten und Lebenswegen?",
        "Wie bereiten wir Kinder und Erwachsene auf eine sich ständig verändernde Welt vor?",
        "Welche Rolle spielen Medienkompetenz, Quellenprüfung und demokratische Entscheidungsfähigkeit?",
      ],
    },
    {
      title: "Gesundheit und Lebensqualität",
      questions: [
        "Wie sichern wir eine hochwertige, solidarische und finanzierbare Gesundheitsversorgung?",
        "Wie verteilen wir knappe medizinische Ressourcen gerecht und transparent?",
        "Wie stärken wir Prävention, ohne Menschen zu bevormunden?",
      ],
    },
    {
      title: "Klima, Ressourcen und Generationen",
      questions: [
        "Wie schützen wir Lebensgrundlagen, ohne Wohlstand und soziale Stabilität gegeneinander auszuspielen?",
        "Wie verteilen wir Kosten und Chancen des ökologischen Wandels fair?",
        "Wie entscheiden wir unter großer Unsicherheit über langfristige, irreversible Folgen?",
      ],
    },
    {
      title: "Europa, Welt und Frieden",
      questions: [
        "Wie verbinden wir nationale Souveränität, europäische Handlungsfähigkeit und globale Verantwortung?",
        "Wie schaffen wir Frieden und Zusammenarbeit bei ungleich verteilter Macht?",
      ],
    },
  ],
  en: [
    {
      title: "Human dignity, freedom and responsibility",
      questions: [
        "How do we protect every person’s dignity when freedom, security and the common good conflict?",
        "What responsibility does each person bear towards the community — and where does it end?",
        "How do we safeguard personal sovereignty without weakening social cohesion?",
        "Which rights must never be overturned by majorities?",
        "How do we treat people fairly when their starting conditions differ greatly?",
        "What responsibility do present generations bear towards people who have not yet been born?",
      ],
    },
    {
      title: "Democracy, government and power",
      questions: [
        "When is a political decision truly legitimate?",
        "How do we combine representative democracy, direct participation and professional responsibility?",
        "How do we prevent money, reach or institutional access from buying political weight?",
        "How do we protect minorities without making democratic majorities unable to act?",
        "How do we make political responsibility visible when decisions are distributed?",
        "When should a political decision be reviewed automatically?",
        "How do we limit power without losing the ability to act when necessary?",
        "Who holds those who exercise oversight accountable?",
        "How do we create a government that acts effectively and remains traceable?",
        "How do we prevent crises from permanently reducing freedom and oversight?",
      ],
    },
    {
      title: "Knowledge, media and orientation",
      questions: [
        "How do we distinguish robust knowledge, plausible assumptions and mere claims?",
        "How do we communicate scientific uncertainty in public?",
        "How do we counter disinformation without suppressing legitimate dissent?",
        "What responsibility do media, platforms and citizens bear for shared orientation?",
        "How do we expose conflicts of interest without discrediting people wholesale?",
        "How can people understand complex decisions without specialist knowledge?",
        "How do we assess sources transparently without creating a central authority on truth?",
        "How do we make room for changes of course without treating them as weakness?",
      ],
    },
    {
      title: "Technology, AI and digital sovereignty",
      questions: [
        "How do we use AI so that it strengthens people rather than controlling them?",
        "Which decisions must never be fully automated?",
        "How do we protect privacy without making socially valuable insight impossible?",
        "How do we prevent digital power from becoming concentrated in governments and companies?",
        "Who should own data and models that matter to the public?",
        "How do we make algorithmic decisions understandable, contestable and correctable?",
        "How do we secure digital participation without forcing permanent connectivity?",
      ],
    },
    {
      title: "Society, work and prosperity",
      questions: [
        "How do we secure participation without devaluing personal responsibility and achievement?",
        "How do we distribute opportunities more fairly without artificially equalising outcomes?",
        "How do we shape work in a world transformed by automation and AI?",
        "How do we fund a capable welfare state sustainably and fairly across generations?",
        "How do we prevent poverty without increasing dependence on opaque systems?",
        "How do we measure prosperity beyond growth and income?",
        "How do we create affordable housing without blocking ownership and investment?",
      ],
    },
    {
      title: "Education and agency",
      questions: [
        "What must education provide so that people can act with confidence and agency?",
        "How do we combine equal opportunity with different talents and life paths?",
        "How do we prepare children and adults for a constantly changing world?",
        "What role should media literacy, source checking and democratic decision-making skills play?",
      ],
    },
    {
      title: "Health and quality of life",
      questions: [
        "How do we secure high-quality, solidarity-based and affordable healthcare?",
        "How do we distribute scarce medical resources fairly and transparently?",
        "How do we strengthen prevention without patronising people?",
      ],
    },
    {
      title: "Climate, resources and generations",
      questions: [
        "How do we protect the foundations of life without setting prosperity against social stability?",
        "How do we distribute the costs and opportunities of ecological change fairly?",
        "How do we decide under great uncertainty about long-term, irreversible consequences?",
      ],
    },
    {
      title: "Europe, the world and peace",
      questions: [
        "How do we combine national sovereignty, European capacity to act and global responsibility?",
        "How do we build peace and cooperation when power is distributed unequally?",
      ],
    },
  ],
};

const COPY = {
  de: {
    title: "50 Fragen. Keine 50 fertigen Antworten.",
    description: "Die ersten 50 offenen Orientierungsfragen der VoiceOpenGov-Bewegung.",
    eyebrow: "Offener Kompass",
    intro: "Diese Räume sind kein Parteiprogramm. Sie sind der öffentliche Arbeitsbeginn: mit Quellen, Gegenargumenten, Zielkonflikten, Alternativen und einem sichtbaren Lernstand.",
    join: "Mitglied werden",
    transparency: "So machen wir den Stand sichtbar",
    status: "Status: Seed · Anlassraum in Vorbereitung",
  },
  en: {
    title: "50 questions. Not 50 finished answers.",
    description: "The first 50 open questions guiding the work of the VoiceOpenGov movement.",
    eyebrow: "An open compass",
    intro: "These spaces are not a party manifesto. They are where the public work begins: with sources, counterarguments, trade-offs, alternatives and a visible state of learning.",
    join: "Become a member",
    transparency: "See how we make progress visible",
    status: "Status: seed · workspace in preparation",
  },
};

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const language: Language = locale === "de" ? "de" : "en";
  return { title: COPY[language].title, description: COPY[language].description };
}

export default async function QuestionsPage() {
  const locale = await getRequestLocale();
  const language: Language = locale === "de" ? "de" : "en";
  const copy = COPY[language];
  let number = 0;

  return (
    <main className="min-h-screen bg-[#07110f] text-[#f4f1e8]">
      <section className="border-b border-[#f4f1e8]/10 bg-[radial-gradient(circle_at_82%_18%,rgba(214,255,101,0.16),transparent_30%)]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#d6ff65]">{copy.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">{copy.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#f4f1e8]/62">{copy.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={VOG_JOIN_PATH} className="rounded-full bg-[#d6ff65] px-5 py-3 font-black text-[#07110f] transition hover:-translate-y-0.5">{copy.join}</Link>
            <Link href={VOG_TRANSPARENCY_PATH} className="rounded-full border border-[#f4f1e8]/18 px-5 py-3 font-bold transition hover:border-[#d6ff65]/55 hover:text-[#d6ff65]">{copy.transparency}</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-22">
        <div className="grid gap-5 md:grid-cols-2">
          {GROUPS[language].map((group) => (
            <article key={group.title} className="rounded-3xl border border-[#f4f1e8]/10 bg-[#0b1714] p-6 md:p-7">
              <h2 className="text-xl font-black text-[#f4f1e8]">{group.title}</h2>
              <ol className="mt-5 space-y-4">
                {group.questions.map((question) => {
                  number += 1;
                  const current = number;
                  return (
                    <li key={question} className="flex gap-4 border-t border-[#f4f1e8]/10 pt-4 first:border-0 first:pt-0">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d6ff65]/10 text-sm font-black text-[#d6ff65]">{current}</span>
                      <div>
                        <p className="font-semibold leading-6 text-[#f4f1e8]">{question}</p>
                        <p className="mt-1 text-xs uppercase tracking-wide text-[#f4f1e8]/32">{copy.status}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
