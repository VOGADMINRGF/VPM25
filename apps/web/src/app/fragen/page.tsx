import Link from "next/link";

const groups = [
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
];

export const metadata = {
  title: "50 öffentliche Fragen | VoiceOpenGov",
  description: "Die ersten 50 offenen Orientierungsfragen der VoiceOpenGov-Bewegung.",
};

export default function QuestionsPage() {
  let number = 0;
  return (
    <div className="bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Offener Kompass</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">50 Fragen. Keine 50 fertigen Antworten.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Diese Räume sind kein Parteiprogramm. Sie sind der öffentliche Arbeitsbeginn: mit Quellen, Gegenargumenten, Zielkonflikten, Alternativen und einem sichtbaren Lernstand.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#mitmachen" className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-300">Mitglied werden</Link>
            <Link href="/transparenz" className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-100 hover:border-cyan-300">So machen wir den Stand sichtbar</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <article key={group.title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-extrabold text-white">{group.title}</h2>
              <ol className="mt-5 space-y-4">
                {group.questions.map((question) => {
                  number += 1;
                  const current = number;
                  return (
                    <li key={question} className="flex gap-4 border-t border-slate-800 pt-4 first:border-0 first:pt-0">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-black text-cyan-300">{current}</span>
                      <div>
                        <p className="font-semibold leading-6 text-slate-100">{question}</p>
                        <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">Status: Seed · Anlassraum in Vorbereitung</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
