export type QuestionText = {
  id: `vog-question-${string}`;
  de: string;
  en: string;
};

export type QuestionGroup = {
  id: `vog-group-${string}`;
  title: { de: string; en: string };
  questions: QuestionText[];
};

export const VOG_QUESTION_GROUPS: QuestionGroup[] = [
  {
    id: "vog-group-human-dignity",
    title: {
      de: "Menschenbild, Freiheit und Verantwortung",
      en: "Human dignity, freedom and responsibility",
    },
    questions: [
      {
        id: "vog-question-01",
        de: "Wie schützen wir die Würde jedes Menschen, wenn Freiheit, Sicherheit und Gemeinwohl kollidieren?",
        en: "How do we protect every person’s dignity when freedom, security and the common good conflict?",
      },
      {
        id: "vog-question-02",
        de: "Welche Verantwortung trägt der Einzelne gegenüber der Gemeinschaft – und wo endet sie?",
        en: "What responsibility does each person bear towards the community — and where does it end?",
      },
      {
        id: "vog-question-03",
        de: "Wie sichern wir persönliche Souveränität, ohne gesellschaftlichen Zusammenhalt zu schwächen?",
        en: "How do we safeguard personal sovereignty without weakening social cohesion?",
      },
      {
        id: "vog-question-04",
        de: "Welche Rechte dürfen niemals von Mehrheiten aufgehoben werden?",
        en: "Which rights must never be overturned by majorities?",
      },
      {
        id: "vog-question-05",
        de: "Wie behandeln wir Menschen fair, wenn ihre Voraussetzungen höchst unterschiedlich sind?",
        en: "How do we treat people fairly when their starting conditions differ greatly?",
      },
      {
        id: "vog-question-06",
        de: "Welche Verantwortung tragen heutige Generationen gegenüber Menschen, die noch nicht geboren sind?",
        en: "What responsibility do present generations bear towards people who have not yet been born?",
      },
    ],
  },
  {
    id: "vog-group-democracy-power",
    title: {
      de: "Demokratie, Staat und Macht",
      en: "Democracy, government and power",
    },
    questions: [
      {
        id: "vog-question-07",
        de: "Wann ist eine politische Entscheidung wirklich legitim?",
        en: "When is a political decision truly legitimate?",
      },
      {
        id: "vog-question-08",
        de: "Wie verbinden wir repräsentative Demokratie, direkte Beteiligung und fachliche Verantwortung?",
        en: "How do we combine representative democracy, direct participation and professional responsibility?",
      },
      {
        id: "vog-question-09",
        de: "Wie verhindern wir, dass Geld, Reichweite oder institutionelle Nähe politische Gewichtung kaufen?",
        en: "How do we prevent money, reach or institutional access from buying political weight?",
      },
      {
        id: "vog-question-10",
        de: "Wie schützen wir Minderheiten, ohne demokratische Mehrheiten handlungsunfähig zu machen?",
        en: "How do we protect minorities without making democratic majorities unable to act?",
      },
      {
        id: "vog-question-11",
        de: "Wie machen wir politische Verantwortung sichtbar, wenn Entscheidungen verteilt sind?",
        en: "How do we make political responsibility visible when decisions are distributed?",
      },
      {
        id: "vog-question-12",
        de: "Wann muss eine politische Entscheidung automatisch neu geprüft werden?",
        en: "When should a political decision be reviewed automatically?",
      },
      {
        id: "vog-question-13",
        de: "Wie begrenzen wir Macht, ohne notwendige Handlungsfähigkeit zu verlieren?",
        en: "How do we limit power without losing the ability to act when necessary?",
      },
      {
        id: "vog-question-14",
        de: "Wer kontrolliert diejenigen, die Kontrolle ausüben?",
        en: "Who holds those who exercise oversight accountable?",
      },
      {
        id: "vog-question-15",
        de: "Wie schaffen wir einen Staat, der wirksam handelt und nachvollziehbar bleibt?",
        en: "How do we create a government that acts effectively and remains traceable?",
      },
      {
        id: "vog-question-16",
        de: "Wie verhindern wir, dass Krisen dauerhaft zu weniger Freiheit und Kontrolle führen?",
        en: "How do we prevent crises from permanently reducing freedom and oversight?",
      },
    ],
  },
  {
    id: "vog-group-knowledge-media",
    title: {
      de: "Wissen, Medien und Orientierung",
      en: "Knowledge, media and orientation",
    },
    questions: [
      {
        id: "vog-question-17",
        de: "Wie unterscheiden wir belastbares Wissen, plausible Annahmen und bloße Behauptungen?",
        en: "How do we distinguish robust knowledge, plausible assumptions and mere claims?",
      },
      {
        id: "vog-question-18",
        de: "Wie gehen wir öffentlich mit wissenschaftlicher Unsicherheit um?",
        en: "How do we communicate scientific uncertainty in public?",
      },
      {
        id: "vog-question-19",
        de: "Wie verhindern wir Desinformation, ohne legitimen Widerspruch zu unterdrücken?",
        en: "How do we counter disinformation without suppressing legitimate dissent?",
      },
      {
        id: "vog-question-20",
        de: "Welche Verantwortung tragen Medien, Plattformen und Bürger für gemeinsame Orientierung?",
        en: "What responsibility do media, platforms and citizens bear for shared orientation?",
      },
      {
        id: "vog-question-21",
        de: "Wie machen wir Interessenkonflikte sichtbar, ohne Menschen pauschal zu diskreditieren?",
        en: "How do we expose conflicts of interest without discrediting people wholesale?",
      },
      {
        id: "vog-question-22",
        de: "Wie können Menschen komplexe Entscheidungen ohne Expertenwissen verstehen?",
        en: "How can people understand complex decisions without specialist knowledge?",
      },
      {
        id: "vog-question-23",
        de: "Wie bewerten wir Quellen transparent, ohne eine zentrale Wahrheitsbehörde zu schaffen?",
        en: "How do we assess sources transparently without creating a central authority on truth?",
      },
      {
        id: "vog-question-24",
        de: "Wie schaffen wir Raum für Kursänderungen, ohne sie als Schwäche auszulegen?",
        en: "How do we make room for changes of course without treating them as weakness?",
      },
    ],
  },
  {
    id: "vog-group-technology-ai",
    title: {
      de: "Technologie, KI und digitale Souveränität",
      en: "Technology, AI and digital sovereignty",
    },
    questions: [
      {
        id: "vog-question-25",
        de: "Wie nutzen wir KI so, dass sie Menschen stärkt und nicht beherrscht?",
        en: "How do we use AI so that it strengthens people rather than controlling them?",
      },
      {
        id: "vog-question-26",
        de: "Welche Entscheidungen dürfen niemals vollständig automatisiert werden?",
        en: "Which decisions must never be fully automated?",
      },
      {
        id: "vog-question-27",
        de: "Wie schützen wir Privatsphäre, ohne gesellschaftlich nützliche Erkenntnisse unmöglich zu machen?",
        en: "How do we protect privacy without making socially valuable insight impossible?",
      },
      {
        id: "vog-question-28",
        de: "Wie verhindern wir digitale Machtkonzentration bei Staaten und Unternehmen?",
        en: "How do we prevent digital power from becoming concentrated in governments and companies?",
      },
      {
        id: "vog-question-29",
        de: "Wem gehören öffentlich relevante Daten und Modelle?",
        en: "Who should own data and models that matter to the public?",
      },
      {
        id: "vog-question-30",
        de: "Wie machen wir algorithmische Entscheidungen verständlich, anfechtbar und korrigierbar?",
        en: "How do we make algorithmic decisions understandable, contestable and correctable?",
      },
      {
        id: "vog-question-31",
        de: "Wie sichern wir digitale Teilhabe, ohne permanente Vernetzung zu erzwingen?",
        en: "How do we secure digital participation without forcing permanent connectivity?",
      },
    ],
  },
  {
    id: "vog-group-society-work",
    title: {
      de: "Soziales, Arbeit und Wohlstand",
      en: "Society, work and prosperity",
    },
    questions: [
      {
        id: "vog-question-32",
        de: "Wie sichern wir Teilhabe, ohne Eigenverantwortung und Leistung zu entwerten?",
        en: "How do we secure participation without devaluing personal responsibility and achievement?",
      },
      {
        id: "vog-question-33",
        de: "Wie verteilen wir Chancen fairer, ohne Ergebnisse künstlich gleichzumachen?",
        en: "How do we distribute opportunities more fairly without artificially equalising outcomes?",
      },
      {
        id: "vog-question-34",
        de: "Wie gestalten wir Arbeit in einer von Automatisierung und KI geprägten Welt?",
        en: "How do we shape work in a world transformed by automation and AI?",
      },
      {
        id: "vog-question-35",
        de: "Wie finanzieren wir einen leistungsfähigen Sozialstaat dauerhaft und generationengerecht?",
        en: "How do we fund a capable welfare state sustainably and fairly across generations?",
      },
      {
        id: "vog-question-36",
        de: "Wie verhindern wir Armut, ohne Abhängigkeit von undurchsichtigen Systemen zu verstärken?",
        en: "How do we prevent poverty without increasing dependence on opaque systems?",
      },
      {
        id: "vog-question-37",
        de: "Wie messen wir Wohlstand jenseits von Wachstum und Einkommen?",
        en: "How do we measure prosperity beyond growth and income?",
      },
      {
        id: "vog-question-38",
        de: "Wie schaffen wir bezahlbaren Wohnraum, ohne Eigentum und Investitionen zu blockieren?",
        en: "How do we create affordable housing without blocking ownership and investment?",
      },
    ],
  },
  {
    id: "vog-group-education",
    title: {
      de: "Bildung und Befähigung",
      en: "Education and agency",
    },
    questions: [
      {
        id: "vog-question-39",
        de: "Was muss Bildung leisten, damit Menschen souverän handeln können?",
        en: "What must education provide so that people can act with confidence and agency?",
      },
      {
        id: "vog-question-40",
        de: "Wie verbinden wir gleiche Chancen mit unterschiedlichen Talenten und Lebenswegen?",
        en: "How do we combine equal opportunity with different talents and life paths?",
      },
      {
        id: "vog-question-41",
        de: "Wie bereiten wir Kinder und Erwachsene auf eine sich ständig verändernde Welt vor?",
        en: "How do we prepare children and adults for a constantly changing world?",
      },
      {
        id: "vog-question-42",
        de: "Welche Rolle spielen Medienkompetenz, Quellenprüfung und demokratische Entscheidungsfähigkeit?",
        en: "What role should media literacy, source checking and democratic decision-making skills play?",
      },
    ],
  },
  {
    id: "vog-group-health",
    title: {
      de: "Gesundheit und Lebensqualität",
      en: "Health and quality of life",
    },
    questions: [
      {
        id: "vog-question-43",
        de: "Wie sichern wir eine hochwertige, solidarische und finanzierbare Gesundheitsversorgung?",
        en: "How do we secure high-quality, solidarity-based and affordable healthcare?",
      },
      {
        id: "vog-question-44",
        de: "Wie verteilen wir knappe medizinische Ressourcen gerecht und transparent?",
        en: "How do we distribute scarce medical resources fairly and transparently?",
      },
      {
        id: "vog-question-45",
        de: "Wie stärken wir Prävention, ohne Menschen zu bevormunden?",
        en: "How do we strengthen prevention without patronising people?",
      },
    ],
  },
  {
    id: "vog-group-climate-resources",
    title: {
      de: "Klima, Ressourcen und Generationen",
      en: "Climate, resources and generations",
    },
    questions: [
      {
        id: "vog-question-46",
        de: "Wie schützen wir Lebensgrundlagen, ohne Wohlstand und soziale Stabilität gegeneinander auszuspielen?",
        en: "How do we protect the foundations of life without setting prosperity against social stability?",
      },
      {
        id: "vog-question-47",
        de: "Wie verteilen wir Kosten und Chancen des ökologischen Wandels fair?",
        en: "How do we distribute the costs and opportunities of ecological change fairly?",
      },
      {
        id: "vog-question-48",
        de: "Wie entscheiden wir unter großer Unsicherheit über langfristige, irreversible Folgen?",
        en: "How do we decide under great uncertainty about long-term, irreversible consequences?",
      },
    ],
  },
  {
    id: "vog-group-europe-world-peace",
    title: {
      de: "Europa, Welt und Frieden",
      en: "Europe, the world and peace",
    },
    questions: [
      {
        id: "vog-question-49",
        de: "Wie verbinden wir nationale Souveränität, europäische Handlungsfähigkeit und globale Verantwortung?",
        en: "How do we combine national sovereignty, European capacity to act and global responsibility?",
      },
      {
        id: "vog-question-50",
        de: "Wie schaffen wir Frieden und Zusammenarbeit bei ungleich verteilter Macht?",
        en: "How do we build peace and cooperation when power is distributed unequally?",
      },
    ],
  },
];

export const VOG_QUESTION_COUNT = VOG_QUESTION_GROUPS.reduce(
  (total, group) => total + group.questions.length,
  0,
);
