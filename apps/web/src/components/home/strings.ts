import { DEFAULT_LOCALE, type SupportedLocale } from "@/config/locales";

export type MotivationPreset = { label: string; template: string };

type HomeStrings = {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    lead: {
      pre: string;
      highlight1: string;
      mid1: string;
      highlight2: string;
      mid2: string;
      highlight3: string;
      post: string;
    };
    focus: string;
    scalable: string;
    ctas: {
      join: string;
      how: string;
      support: string;
    };
    micro: {
      line1: string;
      line2: string;
    };
    steps: Array<{ title: string; body: string; href: string }>;
    learnMore: string;
    cards: Array<{ title: string; body: string }>;
  };
  foundations: {
    label: string;
    title: string;
    subtitle: string;
    bandLine: string;
    bandHint: string;
    bandLabel: string;
    items: Array<{ title: string; body: string; href: string; cta: string }>;
    footerNote: string;
    architectureLabel: string;
    architectureFlow: string[];
    architectureStrong: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  };
  decisionCard: {
    label: string;
    tag: string;
    title: string;
    steps: string[];
    note: string;
  };
  membership: {
    label: string;
    title: string;
    subtitle: string;
    type: {
      person: string;
      organisation: string;
    };
  };
  form: {
    firstName: string;
    lastName: string;
    birthDate: string;
    birthHint: string;
    organisation: string;
    email: string;
    city: string;
    cityTemplate: string;
    cityFallback: string;
    country: string;
    countryPlaceholder: string;
    locationVisibility: string;
    public: string;
    private: string;
    visibilityHint: string;
    logoUrl: string;
    avatarUpload: string;
    previewLabel: string;
    selectedLabel: string;
    imageHint: string;
    motivation: string;
    motivationPlaceholder: string;
    motivationHint: string;
    supporterImage: string;
    clear: string;
    newsletter: string;
    newsletterTool: string;
    supportCardTitle: string;
    supportCardBody: string;
    supportCardCta: string;
    privacyBefore: string;
    privacyLink: string;
    privacyAfter: string;
    submit: string;
    submitting: string;
    optional: string;
    cityPlaceholderPublic: string;
    cityPlaceholderPrivate: string;
  };
  supporterSection: {
    title: string;
    description: string;
    reuse: string;
    separate: string;
  };
  motivationPresets: MotivationPreset[];
  notices: {
    privacyRequired: string;
    birthMissing: string;
    ageTooYoung: string;
    cityRequired: string;
    imageType: string;
    imageTooLarge: string;
    imageReadFail: string;
    supporterImageMissing: string;
    submitOk: string;
    submitFail: string;
  };
  footer: {
    membershipFree: string;
    supportNoteBefore: string;
    supportNoteLink: string;
    supportNoteAfter: string;
    publicPrivateNote: string;
  };
  supportSection: {
    label: string;
    title: string;
    body: string;
    ctaSupport: string;
    ctaQuestions: string;
  };
};

const STRINGS: Record<SupportedLocale, HomeStrings> = {
  de: {
    hero: {
      badge: "Strukturierte Beteiligung",
      title: "Entscheidungen, die man prüfen kann.",
      subtitle: "Neutral, nachvollziehbar, verantwortbar.",
      lead: {
        pre: "VoiceOpenGov ist eine",
        highlight1: "Informationsarchitektur",
        mid1: "für Beteiligung: klare Optionen, dokumentierte Begründungen und Status-Tracking – damit Entscheidungen",
        highlight2: "prüfbar",
        mid2: "und Verantwortlichkeiten",
        highlight3: "zuordenbar",
        post: "werden.",
      },
      focus: "Fokus: Struktur statt Kommentarflut. Sachlich, respektvoll, lösungsorientiert.",
      scalable:
        "Skalierbar statt Ausnahmeformat: Beteiligung wird dokumentiert, vergleichbar und wiederverwendbar.",
      ctas: {
        join: "Jetzt kostenfrei mitmachen",
        how: "So funktioniert’s",
        support: "Initiative unterstützen",
      },
      micro: {
        line1:
          "Zwischen Wahlterminen entstehen Prioritäten, Zielkonflikte und Umsetzung. VoiceOpenGov macht Beteiligung dafür als Prozess und Status sichtbar – prüfbar statt laut.",
        line2: "3 Minuten • Double-Opt-In • Öffentlich: nur Orts-Summen • Keine Einzelprofile",
      },
      steps: [
        {
          title: "Check",
          body: "Begriffe, Behauptungen, Zuständigkeit klären.",
          href: "/howtoworks/edebatte#check",
        },
        {
          title: "Dossier",
          body: "Optionen, Quellen, offene Fragen bündeln.",
          href: "/howtoworks/edebatte#dossier",
        },
        {
          title: "Beteiligung",
          body: "Abstimmen mit klaren Optionen – nachvollziehbar.",
          href: "/howtoworks/edebatte#beteiligung",
        },
        {
          title: "Status",
          body: "Beschluss, Verantwortung, Fortschritt transparent verfolgen.",
          href: "/transparenzbericht",
        },
      ],
      learnMore: "Mehr erfahren →",
      cards: [
        {
          title: "Entscheidung als Datenmodell",
          body: "Optionen, Begründungen, Evidenz, Status – formal dokumentiert.",
        },
        {
          title: "Governance-Modell sichtbar",
          body: "Zuständigkeiten, Verantwortung, Prüfpfade – nachvollziehbar abgebildet.",
        },
        {
          title: "Abwägungen werden sichtbar",
          body: "Warum, wofür, mit welchen Folgen – transparent dokumentiert.",
        },
      ],
    },
    foundations: {
      label: "Grundlagen",
      title: "Die veröffentlichten Grundlagen",
      subtitle:
        "VoiceOpenGov basiert auf drei offenen Textbänden. Alle Inhalte sind frei zugänglich.",
      bandLine: "Weißbuch · Legitimation 2.0 · RePro",
      bandHint: "Theorie, Modell und Methode – offen dokumentiert und frei zugänglich.",
      bandLabel: "Band",
      items: [
        {
          title: "Weißbuch",
          body:
            "Analyse struktureller Herausforderungen moderner Beteiligung – institutionelle Überlastung, Informationsfragmentierung und fehlende Status-Transparenz.",
          href: "/grundlagen/weissbuch",
          cta: "Online lesen →",
        },
        {
          title: "Legitimation 2.0",
          body:
            "Ein Governance-Modell für prüfbare Entscheidungen, dokumentierte Entscheidungsdimensionen und nachvollziehbare Verantwortung.",
          href: "/grundlagen/legitimation-2-0",
          cta: "Online lesen →",
        },
        {
          title: "RePro",
          body:
            "Methodische Operationalisierung: Check → Dossier → Beteiligung → Status – als formalisierte Entscheidungslogik.",
          href: "/grundlagen/repro",
          cta: "Online lesen →",
        },
      ],
      footerNote:
        "Frei zugänglich · Keine Paywall · Wenn es hilft, freuen wir uns über Unterstützung/Spenden. Unabhängig, ohne Investor.",
      architectureLabel: "Architektur",
      architectureFlow: ["Weißbuch", "Legitimation 2.0", "RePro"],
      architectureStrong: "VoiceOpenGov",
      ctaTitle: "Vom Modell zur Mitwirkung",
      ctaBody:
        "Die veröffentlichte Architektur wird in VoiceOpenGov operationalisiert – mobil, nachvollziehbar und statusgeführt.",
      ctaButton: "Jetzt am Smartphone mitwirken",
    },
    decisionCard: {
      label: "Entscheidungslogik",
      tag: "Civic-Level",
      title: "Beteiligung in 5 klaren Stufen",
      steps: [
        "1. Informieren",
        "2. Feedback einholen",
        "3. Mitgestalten",
        "4. Entscheiden",
        "5. Umsetzung begleiten",
      ],
      note: "Transparenz: Beiträge, Reichweite und Status werden im Bericht ausgewiesen.",
    },
    membership: {
      label: "Mitgliedschaft",
      title: "Kostenfrei beitreten",
      subtitle: "Double-Opt-In: Bitte E-Mail bestätigen. Mitgliedschaft ist kostenfrei.",
      type: {
        person: "Person",
        organisation: "Organisation",
      },
    },
    form: {
      firstName: "Vorname",
      lastName: "Nachname",
      birthDate: "Geburtsdatum",
      birthHint: "Teilnahme ab 16 Jahren.",
      organisation: "Organisation",
      email: "E-Mail",
      city: "Ort",
      cityTemplate: "in {city}",
      cityFallback: "in meinem Ort",
      country: "Land (optional)",
      countryPlaceholder: "Bitte wählen",
      locationVisibility: "Orts-Sichtbarkeit",
      public: "Öffentlich",
      private: "Privat",
      visibilityHint:
        "Öffentlich: zählt in Orts-Summen (keine Einzelprofile, keine Rohdaten). Privat: wird nicht öffentlich aggregiert.",
      logoUrl: "Logo-Link (optional)",
      avatarUpload: "Profilfoto hochladen (optional)",
      previewLabel: "Vorschau",
      selectedLabel: "Ausgewählt: {name}",
      imageHint: "Max. 2 MB, JPG/PNG.",
      motivation: "Motivation (optional)",
      motivationPlaceholder: "Warum bist du Teil der Community?",
      motivationHint:
        "Öffentlich sichtbar nur, wenn du als Unterstützer aktiviert bist. Bitte keine Kontaktdaten.",
      supporterImage: "Unterstützer-Bild (optional)",
      clear: "Leeren",
      newsletter: "Newsletter-Updates zu VoiceOpenGov (optional)",
      newsletterTool: "Updates zu eDebatte (Werkzeug) (optional)",
      supportCardTitle: "Initiative unterstützen",
      supportCardBody:
        "Freiwillige Unterstützung hält Infrastruktur, Recherche und Moderation am Laufen. Keine Stimmvorteile.",
      supportCardCta: "Unterstützungswege ansehen",
      privacyBefore: "Ich akzeptiere die",
      privacyLink: "Datenschutzhinweise",
      privacyAfter: "und den Double-Opt-In Hinweis.",
      submit: "Jetzt eintragen",
      submitting: "Senden ...",
      optional: "(optional)",
      cityPlaceholderPublic: "z.B. Berlin",
      cityPlaceholderPrivate: "z.B. Berlin (privat, optional)",
    },
    supporterSection: {
      title: "Als Unterstützer genannt werden (optional)",
      description:
        "Öffentlich zeigen wir nur gekürzten Namen und optional ein Bild/Logo - keine Rohdaten.",
      reuse: "Profilbild/Logo verwenden",
      separate: "Anderes Bild hochladen",
    },
    motivationPresets: [
      {
        label: "Strukturiert einbringen",
        template: "Ich möchte meine Perspektive strukturiert und nachvollziehbar einbringen.",
      },
      {
        label: "Klare Entscheidungswege",
        template: "Ich unterstütze VoiceOpenGov, weil klare Entscheidungswege wichtig sind.",
      },
      {
        label: "Begründung nachvollziehen",
        template: "Ich möchte Entscheidungen verstehen und ihre Begründung nachvollziehen.",
      },
      {
        label: "Sachlich beteiligen",
        template: "Ich will mich {ort} sachlich beteiligen – mit klaren Optionen.",
      },
      {
        label: "Status dokumentieren",
        template: "Ich unterstütze eine formale Dokumentation von Entscheidung und Status.",
      },
    ],
    notices: {
      privacyRequired: "Bitte Datenschutzhinweis akzeptieren.",
      birthMissing: "Bitte gib dein Geburtsdatum an.",
      ageTooYoung: "Teilnahme ist erst ab 16 Jahren möglich.",
      cityRequired: "Bitte gib deinen Ort an (für die Orts-Summen).",
      imageType: "Bitte eine Bilddatei auswählen.",
      imageTooLarge: "Bitte ein Bild unter 2 MB hochladen.",
      imageReadFail: "Bild konnte nicht gelesen werden.",
      supporterImageMissing: "Bitte Profilfoto/Logo hochladen oder 'Anderes Bild' wählen.",
      submitOk: "Bitte E-Mail bestätigen – wir haben dir einen Link geschickt.",
      submitFail: "Das hat nicht geklappt. Bitte später erneut versuchen.",
    },
    footer: {
      membershipFree: "Mitgliedschaft ist kostenfrei.",
      supportNoteBefore:
        "Unterstützung ist freiwillig und hilft beim Aufbau von Moderation, Dossiers und Infrastruktur. Details findest du unter",
      supportNoteLink: "Unterstützen",
      supportNoteAfter: "oder per Mail an",
      publicPrivateNote:
        "Öffentlich/Privat: Öffentlich zeigt nur Orts-Summen (keine Einzelprofile, keine Rohdaten).",
    },
    supportSection: {
      label: "Unterstützen",
      title: "Unterstütze die Initiative – transparent und ohne Stimmvorteile.",
      body:
        "Unterstützung ermöglicht Infrastruktur, Recherche und Übersetzungen. Wir halten alles nachvollziehbar und offen dokumentiert.",
      ctaSupport: "Unterstützungswege",
      ctaQuestions: "Fragen stellen",
    },
  },
  en: {
    hero: {
      badge: "Structured participation",
      title: "Decisions you can verify.",
      subtitle: "Neutral, traceable, accountable.",
      lead: {
        pre: "VoiceOpenGov is an",
        highlight1: "information architecture",
        mid1:
          "for participation: clear options, documented reasoning, and status tracking — so decisions are",
        highlight2: "verifiable",
        mid2: "and responsibilities",
        highlight3: "assignable",
        post: ".",
      },
      focus: "Focus: structure over comment noise. Factual, respectful, solution-oriented.",
      scalable:
        "Scalable instead of exceptional: participation is documented, comparable, and reusable.",
      ctas: {
        join: "Join for free",
        how: "How it works",
        support: "Support the initiative",
      },
      micro: {
        line1:
          "Between elections, priorities, trade-offs, and implementation emerge. VoiceOpenGov makes participation visible as process and status — verifiable instead of loud.",
        line2: "3 minutes • Double opt-in • Public: only city totals • No individual profiles",
      },
      steps: [
        {
          title: "Check",
          body: "Clarify terms, claims, responsibility.",
          href: "/howtoworks/edebatte#check",
        },
        {
          title: "Dossier",
          body: "Bundle options, sources, open questions.",
          href: "/howtoworks/edebatte#dossier",
        },
        {
          title: "Participation",
          body: "Vote with clear options — traceable.",
          href: "/howtoworks/edebatte#beteiligung",
        },
        {
          title: "Status",
          body: "Track decision, responsibility, progress transparently.",
          href: "/transparenzbericht",
        },
      ],
      learnMore: "Learn more →",
      cards: [
        {
          title: "Decision as data model",
          body: "Options, reasoning, evidence, status — formally documented.",
        },
        {
          title: "Governance model visible",
          body: "Responsibilities, accountability, review paths — clearly mapped.",
        },
        {
          title: "Trade-offs become visible",
          body: "Why, for what, with which consequences — transparently documented.",
        },
      ],
    },
    foundations: {
      label: "Foundations",
      title: "The published foundations",
      subtitle: "VoiceOpenGov is based on three open volumes. All content is freely accessible.",
      bandLine: "Weißbuch · Legitimation 2.0 · RePro",
      bandHint: "Theory, model and method — openly documented and freely accessible.",
      bandLabel: "Volume",
      items: [
        {
          title: "Weißbuch",
          body:
            "Analysis of structural challenges of modern participation — institutional overload, fragmented information, and missing status transparency.",
          href: "/grundlagen/weissbuch",
          cta: "Read online →",
        },
        {
          title: "Legitimation 2.0",
          body:
            "A governance model for verifiable decisions, documented decision dimensions, and accountable responsibility.",
          href: "/grundlagen/legitimation-2-0",
          cta: "Read online →",
        },
        {
          title: "RePro",
          body:
            "Methodical operationalization: Check → Dossier → Participation → Status — as a formal decision logic.",
          href: "/grundlagen/repro",
          cta: "Read online →",
        },
      ],
      footerNote:
        "Free access · No paywall · If it helps, we appreciate support/donations. Independent, no investors.",
      architectureLabel: "Architecture",
      architectureFlow: ["Weißbuch", "Legitimation 2.0", "RePro"],
      architectureStrong: "VoiceOpenGov",
      ctaTitle: "From model to participation",
      ctaBody:
        "The published architecture is operationalized in VoiceOpenGov — mobile, traceable, and status-guided.",
      ctaButton: "Participate on mobile now",
    },
    decisionCard: {
      label: "Decision logic",
      tag: "Civic level",
      title: "Participation in 5 clear stages",
      steps: [
        "1. Inform",
        "2. Gather feedback",
        "3. Co-design",
        "4. Decide",
        "5. Follow implementation",
      ],
      note: "Transparency: contributions, reach, and status are shown in the report.",
    },
    membership: {
      label: "Membership",
      title: "Join for free",
      subtitle: "Double opt-in: please confirm your email. Membership is free.",
      type: {
        person: "Person",
        organisation: "Organization",
      },
    },
    form: {
      firstName: "First name",
      lastName: "Last name",
      birthDate: "Date of birth",
      birthHint: "Participation from age 16.",
      organisation: "Organization",
      email: "Email",
      city: "City",
      cityTemplate: "in {city}",
      cityFallback: "in my city",
      country: "Country (optional)",
      countryPlaceholder: "Please choose",
      locationVisibility: "City visibility",
      public: "Public",
      private: "Private",
      visibilityHint:
        "Public: counts in city totals (no individual profiles, no raw data). Private: not publicly aggregated.",
      logoUrl: "Logo link (optional)",
      avatarUpload: "Upload profile photo (optional)",
      previewLabel: "Preview",
      selectedLabel: "Selected: {name}",
      imageHint: "Max. 2 MB, JPG/PNG.",
      motivation: "Motivation (optional)",
      motivationPlaceholder: "Why are you part of the community?",
      motivationHint:
        "Public only if you are listed as supporter. Please no contact details.",
      supporterImage: "Supporter image (optional)",
      clear: "Clear",
      newsletter: "Newsletter updates about VoiceOpenGov (optional)",
      newsletterTool: "Updates about eDebatte (tool) (optional)",
      supportCardTitle: "Support the initiative",
      supportCardBody:
        "Voluntary support keeps infrastructure, research, and moderation running. No voting advantages.",
      supportCardCta: "See support options",
      privacyBefore: "I accept the",
      privacyLink: "privacy notice",
      privacyAfter: "and the double opt-in notice.",
      submit: "Submit",
      submitting: "Sending ...",
      optional: "(optional)",
      cityPlaceholderPublic: "e.g. Berlin",
      cityPlaceholderPrivate: "e.g. Berlin (private, optional)",
    },
    supporterSection: {
      title: "Be listed as supporter (optional)",
      description:
        "We publish only shortened names and optionally an image/logo - no raw data.",
      reuse: "Use profile photo/logo",
      separate: "Upload another image",
    },
    motivationPresets: [
      {
        label: "Structured input",
        template: "I want to contribute my perspective in a structured and traceable way.",
      },
      {
        label: "Clear decision paths",
        template: "I support VoiceOpenGov because clear decision paths matter.",
      },
      {
        label: "Understand reasoning",
        template: "I want to understand decisions and their reasoning.",
      },
      {
        label: "Participate factually",
        template: "I want to participate {ort} in a factual way - with clear options.",
      },
      {
        label: "Document status",
        template: "I support formal documentation of decisions and status.",
      },
    ],
    notices: {
      privacyRequired: "Please accept the privacy notice.",
      birthMissing: "Please enter your date of birth.",
      ageTooYoung: "Participation is only possible from age 16.",
      cityRequired: "Please enter your city (for city totals).",
      imageType: "Please choose an image file.",
      imageTooLarge: "Please upload an image under 2 MB.",
      imageReadFail: "Image could not be read.",
      supporterImageMissing: "Please upload a profile photo/logo or choose 'Another image'.",
      submitOk: "Please confirm your email - we sent you a link.",
      submitFail: "That did not work. Please try again later.",
    },
    footer: {
      membershipFree: "Membership is free.",
      supportNoteBefore:
        "Support is voluntary and helps build moderation, dossiers, and infrastructure. Details at",
      supportNoteLink: "Support",
      supportNoteAfter: "or by email at",
      publicPrivateNote:
        "Public/Private: Public shows only city totals (no individual profiles, no raw data).",
    },
    supportSection: {
      label: "Support",
      title: "Support the initiative - transparent and without voting advantages.",
      body:
        "Support enables infrastructure, research, and translations. Everything is documented transparently.",
      ctaSupport: "Support options",
      ctaQuestions: "Ask a question",
    },
  },
  fr: {
    hero: {
      badge: "Participation structurée",
      title: "Des décisions vérifiables.",
      subtitle: "Neutre, traçable, responsable.",
      lead: {
        pre: "VoiceOpenGov est une",
        highlight1: "architecture d'information",
        mid1:
          "pour la participation : options claires, justifications documentées et suivi d'état - afin que les décisions soient",
        highlight2: "vérifiables",
        mid2: "et les responsabilités",
        highlight3: "attribuables",
        post: ".",
      },
      focus: "Priorité : la structure plutôt que le bruit. Factuel, respectueux, orienté solutions.",
      scalable:
        "Évolutif plutôt qu'exceptionnel : la participation est documentée, comparable et réutilisable.",
      ctas: {
        join: "Rejoindre gratuitement",
        how: "Comment ça marche",
        support: "Soutenir l'initiative",
      },
      micro: {
        line1:
          "Entre les élections, naissent priorités, arbitrages et mise en œuvre. VoiceOpenGov rend la participation visible comme processus et statut - vérifiable plutôt que bruyante.",
        line2:
          "3 minutes • Double opt-in • Public : seulement des totaux par ville • Aucun profil individuel",
      },
      steps: [
        {
          title: "Check",
          body: "Clarifier les termes, les affirmations, la responsabilité.",
          href: "/howtoworks/edebatte#check",
        },
        {
          title: "Dossier",
          body: "Regrouper options, sources, questions ouvertes.",
          href: "/howtoworks/edebatte#dossier",
        },
        {
          title: "Participation",
          body: "Voter avec des options claires - traçable.",
          href: "/howtoworks/edebatte#beteiligung",
        },
        {
          title: "Statut",
          body: "Suivre décision, responsabilité, progrès en transparence.",
          href: "/transparenzbericht",
        },
      ],
      learnMore: "En savoir plus →",
      cards: [
        {
          title: "Décision comme modèle de données",
          body: "Options, justifications, preuves, statut - documentés formellement.",
        },
        {
          title: "Gouvernance visible",
          body: "Responsabilités, redevabilité, parcours de vérification - clairement cartographiés.",
        },
        {
          title: "Les arbitrages deviennent visibles",
          body: "Pourquoi, pour quoi, avec quelles conséquences - documenté en transparence.",
        },
      ],
    },
    foundations: {
      label: "Fondations",
      title: "Les fondements publiés",
      subtitle:
        "VoiceOpenGov s'appuie sur trois volumes ouverts. Tous les contenus sont librement accessibles.",
      bandLine: "Weißbuch · Legitimation 2.0 · RePro",
      bandHint: "Théorie, modèle et méthode — documentés ouvertement et librement accessibles.",
      bandLabel: "Volume",
      items: [
        {
          title: "Weißbuch",
          body:
            "Analyse des défis structurels de la participation moderne — surcharge institutionnelle, fragmentation de l'information et manque de transparence du statut.",
          href: "/grundlagen/weissbuch",
          cta: "Lire en ligne →",
        },
        {
          title: "Legitimation 2.0",
          body:
            "Un modèle de gouvernance pour des décisions vérifiables, des dimensions de décision documentées et une responsabilité traçable.",
          href: "/grundlagen/legitimation-2-0",
          cta: "Lire en ligne →",
        },
        {
          title: "RePro",
          body:
            "Opérationnalisation méthodique : Check → Dossier → Participation → Statut — comme logique décisionnelle formalisée.",
          href: "/grundlagen/repro",
          cta: "Lire en ligne →",
        },
      ],
      footerNote:
        "Accès libre · Pas de paywall · Si cela aide, nous apprécions les soutiens/dons. Indépendant, sans investisseurs.",
      architectureLabel: "Architecture",
      architectureFlow: ["Weißbuch", "Legitimation 2.0", "RePro"],
      architectureStrong: "VoiceOpenGov",
      ctaTitle: "Du modèle à la participation",
      ctaBody:
        "L'architecture publiée est opérationnalisée dans VoiceOpenGov — mobile, traçable et orientée statut.",
      ctaButton: "Participer depuis le mobile",
    },
    decisionCard: {
      label: "Logique de décision",
      tag: "Niveau civique",
      title: "Participation en 5 étapes claires",
      steps: [
        "1. Informer",
        "2. Recueillir des retours",
        "3. Co-construire",
        "4. Décider",
        "5. Suivre la mise en œuvre",
      ],
      note: "Transparence : contributions, portée et statut sont indiqués dans le rapport.",
    },
    membership: {
      label: "Adhésion",
      title: "Rejoindre gratuitement",
      subtitle: "Double opt-in : veuillez confirmer l'e-mail. L'adhésion est gratuite.",
      type: {
        person: "Personne",
        organisation: "Organisation",
      },
    },
    form: {
      firstName: "Prénom",
      lastName: "Nom",
      birthDate: "Date de naissance",
      birthHint: "Participation dès 16 ans.",
      organisation: "Organisation",
      email: "E-mail",
      city: "Ville",
      cityTemplate: "à {city}",
      cityFallback: "dans ma ville",
      country: "Pays (optionnel)",
      countryPlaceholder: "Veuillez choisir",
      locationVisibility: "Visibilité de la ville",
      public: "Public",
      private: "Privé",
      visibilityHint:
        "Public : compte dans les totaux par ville (pas de profils individuels, pas de données brutes). Privé : non agrégé publiquement.",
      logoUrl: "Lien du logo (optionnel)",
      avatarUpload: "Téléverser une photo de profil (optionnel)",
      previewLabel: "Aperçu",
      selectedLabel: "Sélectionné : {name}",
      imageHint: "Max. 2 Mo, JPG/PNG.",
      motivation: "Motivation (optionnelle)",
      motivationPlaceholder: "Pourquoi faites-vous partie de la communauté ?",
      motivationHint:
        "Public uniquement si vous êtes listé comme soutien. Merci de ne pas inclure de coordonnées.",
      supporterImage: "Image de soutien (optionnelle)",
      clear: "Effacer",
      newsletter: "Actualités VoiceOpenGov (optionnel)",
      newsletterTool: "Actualités eDebatte (outil) (optionnel)",
      supportCardTitle: "Soutenir l'initiative",
      supportCardBody:
        "Le soutien volontaire maintient l'infrastructure, la recherche et la modération. Aucun avantage de vote.",
      supportCardCta: "Voir les options de soutien",
      privacyBefore: "J'accepte la",
      privacyLink: "note de confidentialité",
      privacyAfter: "et l'avis de double opt-in.",
      submit: "Soumettre",
      submitting: "Envoi ...",
      optional: "(optionnel)",
      cityPlaceholderPublic: "ex. Berlin",
      cityPlaceholderPrivate: "ex. Berlin (privé, optionnel)",
    },
    supporterSection: {
      title: "Être mentionné comme soutien (optionnel)",
      description:
        "Nous publions uniquement des noms abrégés et, si souhaité, une image/logo - pas de données brutes.",
      reuse: "Utiliser la photo/logo",
      separate: "Téléverser une autre image",
    },
    motivationPresets: [
      {
        label: "Contribution structurée",
        template: "Je souhaite apporter mon point de vue de manière structurée et traçable.",
      },
      {
        label: "Parcours clairs",
        template: "Je soutiens VoiceOpenGov parce que des parcours clairs sont importants.",
      },
      {
        label: "Comprendre les raisons",
        template: "Je veux comprendre les décisions et leurs raisons.",
      },
      {
        label: "Participer factuellement",
        template: "Je veux participer {ort} de manière factuelle - avec des options claires.",
      },
      {
        label: "Documenter le statut",
        template: "Je soutiens une documentation formelle des décisions et du statut.",
      },
    ],
    notices: {
      privacyRequired: "Veuillez accepter la note de confidentialité.",
      birthMissing: "Veuillez indiquer votre date de naissance.",
      ageTooYoung: "La participation est possible à partir de 16 ans.",
      cityRequired: "Veuillez indiquer votre ville (pour les totaux par ville).",
      imageType: "Veuillez choisir un fichier image.",
      imageTooLarge: "Veuillez téléverser une image de moins de 2 Mo.",
      imageReadFail: "L'image n'a pas pu être lue.",
      supporterImageMissing:
        "Veuillez téléverser une photo/logo ou choisir 'Autre image'.",
      submitOk: "Veuillez confirmer votre e-mail - nous avons envoyé un lien.",
      submitFail: "Échec. Veuillez réessayer plus tard.",
    },
    footer: {
      membershipFree: "L'adhésion est gratuite.",
      supportNoteBefore:
        "Le soutien est volontaire et aide à construire la modération, les dossiers et l'infrastructure. Détails sur",
      supportNoteLink: "Soutenir",
      supportNoteAfter: "ou par e-mail à",
      publicPrivateNote:
        "Public/Privé : Public montre seulement les totaux par ville (pas de profils individuels, pas de données brutes).",
    },
    supportSection: {
      label: "Soutenir",
      title: "Soutenez l'initiative - transparent et sans avantages de vote.",
      body:
        "Le soutien permet l'infrastructure, la recherche et les traductions. Tout est documenté de manière transparente.",
      ctaSupport: "Options de soutien",
      ctaQuestions: "Poser une question",
    },
  },
  pl: {
    hero: {
      badge: "Ustrukturyzowany udział",
      title: "Decyzje, które można zweryfikować.",
      subtitle: "Neutralne, przejrzyste, odpowiedzialne.",
      lead: {
        pre: "VoiceOpenGov to",
        highlight1: "architektura informacji",
        mid1:
          "dla udziału: jasne opcje, udokumentowane uzasadnienia i śledzenie statusu - aby decyzje były",
        highlight2: "weryfikowalne",
        mid2: "a odpowiedzialności",
        highlight3: "przypisywalne",
        post: ".",
      },
      focus: "Fokus: struktura zamiast szumu komentarzy. Rzeczowo, z szacunkiem, rozwiązaniowo.",
      scalable:
        "Skalowalne zamiast wyjątkowe: udział jest dokumentowany, porównywalny i wielokrotnego użytku.",
      ctas: {
        join: "Dołącz bezpłatnie",
        how: "Jak to działa",
        support: "Wesprzyj inicjatywę",
      },
      micro: {
        line1:
          "Między wyborami powstają priorytety, konflikty i wdrożenia. VoiceOpenGov pokazuje udział jako proces i status - weryfikowalny zamiast głośny.",
        line2:
          "3 minuty • Double opt-in • Publicznie: tylko sumy miast • Brak profili indywidualnych",
      },
      steps: [
        {
          title: "Check",
          body: "Wyjaśnij pojęcia, twierdzenia, odpowiedzialność.",
          href: "/howtoworks/edebatte#check",
        },
        {
          title: "Dossier",
          body: "Zbierz opcje, źródła, otwarte pytania.",
          href: "/howtoworks/edebatte#dossier",
        },
        {
          title: "Udział",
          body: "Głosuj na jasne opcje - przejrzyście.",
          href: "/howtoworks/edebatte#beteiligung",
        },
        {
          title: "Status",
          body: "Śledź decyzję, odpowiedzialność, postęp.",
          href: "/transparenzbericht",
        },
      ],
      learnMore: "Dowiedz się więcej →",
      cards: [
        {
          title: "Decyzja jako model danych",
          body: "Opcje, uzasadnienia, dowody, status - formalnie udokumentowane.",
        },
        {
          title: "Widoczny model zarządzania",
          body: "Odpowiedzialność, rozliczalność, ścieżki weryfikacji - jasno opisane.",
        },
        {
          title: "Widoczne kompromisy",
          body: "Dlaczego, po co, z jakimi konsekwencjami - przejrzyście udokumentowane.",
        },
      ],
    },
    foundations: {
      label: "Podstawy",
      title: "Opublikowane podstawy",
      subtitle:
        "VoiceOpenGov opiera się na trzech otwartych tomach. Wszystkie treści są ogólnie dostępne.",
      bandLine: "Weißbuch · Legitimation 2.0 · RePro",
      bandHint: "Teoria, model i metoda — otwarcie udokumentowane i ogólnodostępne.",
      bandLabel: "Tom",
      items: [
        {
          title: "Weißbuch",
          body:
            "Analiza strukturalnych wyzwań nowoczesnego uczestnictwa — przeciążenie instytucji, fragmentacja informacji i brak przejrzystości statusu.",
          href: "/grundlagen/weissbuch",
          cta: "Czytaj online →",
        },
        {
          title: "Legitimation 2.0",
          body:
            "Model zarządzania dla weryfikowalnych decyzji, udokumentowanych wymiarów decyzji i odpowiedzialności.",
          href: "/grundlagen/legitimation-2-0",
          cta: "Czytaj online →",
        },
        {
          title: "RePro",
          body:
            "Metodyczna operacjonalizacja: Check → Dossier → Uczestnictwo → Status — jako sformalizowana logika decyzji.",
          href: "/grundlagen/repro",
          cta: "Czytaj online →",
        },
      ],
      footerNote:
        "Dostępne bezpłatnie · Bez paywalla · Jeśli to pomaga, będziemy wdzięczni za wsparcie/darowizny. Niezależnie, bez inwestorów.",
      architectureLabel: "Architektura",
      architectureFlow: ["Weißbuch", "Legitimation 2.0", "RePro"],
      architectureStrong: "VoiceOpenGov",
      ctaTitle: "Od modelu do udziału",
      ctaBody:
        "Opublikowana architektura jest operacjonalizowana w VoiceOpenGov — mobilnie, weryfikowalnie i z prowadzeniem statusu.",
      ctaButton: "Dołącz przez telefon",
    },
    decisionCard: {
      label: "Logika decyzji",
      tag: "Poziom obywatelski",
      title: "Udział w 5 jasnych etapach",
      steps: [
        "1. Informuj",
        "2. Zbieraj opinie",
        "3. Współtwórz",
        "4. Decyduj",
        "5. Śledź wdrożenie",
      ],
      note: "Transparentność: wkład, zasięg i status są pokazane w raporcie.",
    },
    membership: {
      label: "Członkostwo",
      title: "Dołącz bezpłatnie",
      subtitle: "Double opt-in: potwierdź e-mail. Członkostwo jest bezpłatne.",
      type: {
        person: "Osoba",
        organisation: "Organizacja",
      },
    },
    form: {
      firstName: "Imię",
      lastName: "Nazwisko",
      birthDate: "Data urodzenia",
      birthHint: "Udział od 16 roku życia.",
      organisation: "Organizacja",
      email: "E-mail",
      city: "Miasto",
      cityTemplate: "w {city}",
      cityFallback: "w mojej miejscowości",
      country: "Kraj (opcjonalnie)",
      countryPlaceholder: "Wybierz",
      locationVisibility: "Widoczność miasta",
      public: "Publiczne",
      private: "Prywatne",
      visibilityHint:
        "Publiczne: liczy się w sumach miast (brak profili indywidualnych, brak danych surowych). Prywatne: nie jest publicznie agregowane.",
      logoUrl: "Link do logo (opcjonalnie)",
      avatarUpload: "Prześlij zdjęcie profilowe (opcjonalnie)",
      previewLabel: "Podgląd",
      selectedLabel: "Wybrano: {name}",
      imageHint: "Maks. 2 MB, JPG/PNG.",
      motivation: "Motywacja (opcjonalnie)",
      motivationPlaceholder: "Dlaczego jesteś częścią społeczności?",
      motivationHint:
        "Widoczne publicznie tylko jeśli jesteś wymieniony jako wspierający. Prosimy bez danych kontaktowych.",
      supporterImage: "Obraz wspierającego (opcjonalnie)",
      clear: "Wyczyść",
      newsletter: "Aktualności VoiceOpenGov (opcjonalnie)",
      newsletterTool: "Aktualności eDebatte (narzędzie) (opcjonalnie)",
      supportCardTitle: "Wesprzyj inicjatywę",
      supportCardBody:
        "Dobrowolne wsparcie utrzymuje infrastrukturę, badania i moderację. Bez korzyści wyborczych.",
      supportCardCta: "Zobacz opcje wsparcia",
      privacyBefore: "Akceptuję",
      privacyLink: "informację o prywatności",
      privacyAfter: "oraz informację o double opt-in.",
      submit: "Wyślij",
      submitting: "Wysyłanie ...",
      optional: "(opcjonalnie)",
      cityPlaceholderPublic: "np. Berlin",
      cityPlaceholderPrivate: "np. Berlin (prywatnie, opcjonalnie)",
    },
    supporterSection: {
      title: "Być wymienionym jako wspierający (opcjonalnie)",
      description:
        "Publicznie pokazujemy tylko skróconą nazwę i opcjonalnie obraz/logo - bez danych surowych.",
      reuse: "Użyj zdjęcia/logo",
      separate: "Prześlij inny obraz",
    },
    motivationPresets: [
      {
        label: "Ustrukturyzowany wkład",
        template: "Chcę wnosić swoją perspektywę w sposób uporządkowany i weryfikowalny.",
      },
      {
        label: "Jasne ścieżki decyzji",
        template: "Wspieram VoiceOpenGov, bo ważne są jasne ścieżki decyzji.",
      },
      {
        label: "Zrozumieć uzasadnienie",
        template: "Chcę rozumieć decyzje i ich uzasadnienie.",
      },
      {
        label: "Udział rzeczowy",
        template: "Chcę uczestniczyć {ort} rzeczowo - z jasnymi opcjami.",
      },
      {
        label: "Dokumentować status",
        template: "Wspieram formalną dokumentację decyzji i statusu.",
      },
    ],
    notices: {
      privacyRequired: "Proszę zaakceptować informację o prywatności.",
      birthMissing: "Podaj datę urodzenia.",
      ageTooYoung: "Udział możliwy od 16 roku życia.",
      cityRequired: "Podaj miasto (dla sum miejskich).",
      imageType: "Wybierz plik obrazu.",
      imageTooLarge: "Prześlij obraz poniżej 2 MB.",
      imageReadFail: "Nie można odczytać obrazu.",
      supporterImageMissing: "Prześlij zdjęcie/logo lub wybierz 'Inny obraz'.",
      submitOk: "Potwierdź e-mail - wysłaliśmy link.",
      submitFail: "Nie udało się. Spróbuj ponownie później.",
    },
    footer: {
      membershipFree: "Członkostwo jest bezpłatne.",
      supportNoteBefore:
        "Wsparcie jest dobrowolne i pomaga w budowie moderacji, dossier i infrastruktury. Szczegóły w",
      supportNoteLink: "Wesprzyj",
      supportNoteAfter: "lub e-mailem na",
      publicPrivateNote:
        "Publiczne/Prywatne: Publiczne pokazuje tylko sumy miast (brak profili, brak danych surowych).",
    },
    supportSection: {
      label: "Wesprzyj",
      title: "Wesprzyj inicjatywę - transparentnie i bez korzyści wyborczych.",
      body:
        "Wsparcie umożliwia infrastrukturę, badania i tłumaczenia. Wszystko jest transparentnie dokumentowane.",
      ctaSupport: "Opcje wsparcia",
      ctaQuestions: "Zadaj pytanie",
    },
  },
  es: {
    hero: {
      badge: "Participación estructurada",
      title: "Decisiones que se pueden verificar.",
      subtitle: "Neutras, trazables, responsables.",
      lead: {
        pre: "VoiceOpenGov es una",
        highlight1: "arquitectura de información",
        mid1:
          "para la participación: opciones claras, fundamentos documentados y seguimiento de estado - para que las decisiones sean",
        highlight2: "verificables",
        mid2: "y las responsabilidades",
        highlight3: "asignables",
        post: ".",
      },
      focus: "Enfoque: estructura en lugar de ruido. Factual, respetuoso, orientado a soluciones.",
      scalable:
        "Escalable en lugar de excepcional: la participación se documenta, compara y reutiliza.",
      ctas: {
        join: "Unirse gratis",
        how: "Cómo funciona",
        support: "Apoyar la iniciativa",
      },
      micro: {
        line1:
          "Entre elecciones surgen prioridades, conflictos y ejecución. VoiceOpenGov hace visible la participación como proceso y estado - verificable en lugar de ruidosa.",
        line2:
          "3 minutos • Double opt-in • Público: solo totales por ciudad • Sin perfiles individuales",
      },
      steps: [
        {
          title: "Check",
          body: "Aclarar términos, afirmaciones, responsabilidad.",
          href: "/howtoworks/edebatte#check",
        },
        {
          title: "Dossier",
          body: "Agrupar opciones, fuentes, preguntas abiertas.",
          href: "/howtoworks/edebatte#dossier",
        },
        {
          title: "Participación",
          body: "Votar con opciones claras - trazable.",
          href: "/howtoworks/edebatte#beteiligung",
        },
        {
          title: "Estado",
          body: "Seguir decisión, responsabilidad, progreso.",
          href: "/transparenzbericht",
        },
      ],
      learnMore: "Más información →",
      cards: [
        {
          title: "Decisión como modelo de datos",
          body: "Opciones, fundamentos, evidencia, estado - documentado formalmente.",
        },
        {
          title: "Modelo de gobernanza visible",
          body: "Responsabilidades, rendición de cuentas, rutas de revisión - claramente mapeadas.",
        },
        {
          title: "Los compromisos se vuelven visibles",
          body: "Por qué, para qué, con qué consecuencias - documentado con transparencia.",
        },
      ],
    },
    foundations: {
      label: "Fundamentos",
      title: "Los fundamentos publicados",
      subtitle:
        "VoiceOpenGov se basa en tres volúmenes abiertos. Todo el contenido es de libre acceso.",
      bandLine: "Weißbuch · Legitimation 2.0 · RePro",
      bandHint: "Teoría, modelo y método — documentados de forma abierta y accesibles.",
      bandLabel: "Volumen",
      items: [
        {
          title: "Weißbuch",
          body:
            "Análisis de los desafíos estructurales de la participación moderna: sobrecarga institucional, fragmentación de la información y falta de transparencia de estado.",
          href: "/grundlagen/weissbuch",
          cta: "Leer en línea →",
        },
        {
          title: "Legitimation 2.0",
          body:
            "Un modelo de gobernanza para decisiones verificables, dimensiones de decisión documentadas y responsabilidad trazable.",
          href: "/grundlagen/legitimation-2-0",
          cta: "Leer en línea →",
        },
        {
          title: "RePro",
          body:
            "Operacionalización metodológica: Check → Dossier → Participación → Estado — como lógica de decisión formalizada.",
          href: "/grundlagen/repro",
          cta: "Leer en línea →",
        },
      ],
      footerNote:
        "Acceso libre · Sin paywall · Si ayuda, agradecemos el apoyo/donaciones. Independientes, sin inversores.",
      architectureLabel: "Arquitectura",
      architectureFlow: ["Weißbuch", "Legitimation 2.0", "RePro"],
      architectureStrong: "VoiceOpenGov",
      ctaTitle: "Del modelo a la participación",
      ctaBody:
        "La arquitectura publicada se operacionaliza en VoiceOpenGov — móvil, trazable y guiada por el estado.",
      ctaButton: "Participa desde el móvil",
    },
    decisionCard: {
      label: "Lógica de decisión",
      tag: "Nivel cívico",
      title: "Participación en 5 etapas claras",
      steps: [
        "1. Informar",
        "2. Recoger feedback",
        "3. Co-diseñar",
        "4. Decidir",
        "5. Seguir implementación",
      ],
      note: "Transparencia: aportes, alcance y estado se muestran en el informe.",
    },
    membership: {
      label: "Membresía",
      title: "Unirse gratis",
      subtitle: "Double opt-in: confirma tu e-mail. La membresía es gratuita.",
      type: {
        person: "Persona",
        organisation: "Organización",
      },
    },
    form: {
      firstName: "Nombre",
      lastName: "Apellido",
      birthDate: "Fecha de nacimiento",
      birthHint: "Participación a partir de 16 años.",
      organisation: "Organización",
      email: "E-mail",
      city: "Ciudad",
      cityTemplate: "en {city}",
      cityFallback: "en mi ciudad",
      country: "País (opcional)",
      countryPlaceholder: "Selecciona",
      locationVisibility: "Visibilidad de la ciudad",
      public: "Público",
      private: "Privado",
      visibilityHint:
        "Público: cuenta en totales por ciudad (sin perfiles individuales, sin datos crudos). Privado: no se agrega públicamente.",
      logoUrl: "Enlace del logo (opcional)",
      avatarUpload: "Subir foto de perfil (opcional)",
      previewLabel: "Vista previa",
      selectedLabel: "Seleccionado: {name}",
      imageHint: "Máx. 2 MB, JPG/PNG.",
      motivation: "Motivación (opcional)",
      motivationPlaceholder: "¿Por qué eres parte de la comunidad?",
      motivationHint:
        "Visible públicamente solo si estás listado como apoyo. Por favor, sin datos de contacto.",
      supporterImage: "Imagen de apoyo (opcional)",
      clear: "Borrar",
      newsletter: "Actualizaciones de VoiceOpenGov (opcional)",
      newsletterTool: "Actualizaciones de eDebatte (herramienta) (opcional)",
      supportCardTitle: "Apoyar la iniciativa",
      supportCardBody:
        "El apoyo voluntario mantiene infraestructura, investigación y moderación. Sin ventajas de voto.",
      supportCardCta: "Ver opciones de apoyo",
      privacyBefore: "Acepto el",
      privacyLink: "aviso de privacidad",
      privacyAfter: "y el aviso de double opt-in.",
      submit: "Enviar",
      submitting: "Enviando ...",
      optional: "(opcional)",
      cityPlaceholderPublic: "p. ej. Berlín",
      cityPlaceholderPrivate: "p. ej. Berlín (privado, opcional)",
    },
    supporterSection: {
      title: "Ser mencionado como apoyo (opcional)",
      description:
        "Publicamos solo nombres abreviados y opcionalmente una imagen/logo - sin datos crudos.",
      reuse: "Usar foto/logo",
      separate: "Subir otra imagen",
    },
    motivationPresets: [
      {
        label: "Aporte estructurado",
        template: "Quiero aportar mi perspectiva de forma estructurada y verificable.",
      },
      {
        label: "Rutas claras",
        template: "Apoyo VoiceOpenGov porque son importantes las rutas claras de decisión.",
      },
      {
        label: "Entender razones",
        template: "Quiero entender las decisiones y sus razones.",
      },
      {
        label: "Participar con rigor",
        template: "Quiero participar {ort} de forma rigurosa - con opciones claras.",
      },
      {
        label: "Documentar estado",
        template: "Apoyo una documentación formal de decisiones y estado.",
      },
    ],
    notices: {
      privacyRequired: "Por favor acepta el aviso de privacidad.",
      birthMissing: "Por favor indica tu fecha de nacimiento.",
      ageTooYoung: "La participación es posible a partir de 16 años.",
      cityRequired: "Por favor indica tu ciudad (para totales por ciudad).",
      imageType: "Por favor elige un archivo de imagen.",
      imageTooLarge: "Por favor sube una imagen menor de 2 MB.",
      imageReadFail: "No se pudo leer la imagen.",
      supporterImageMissing: "Sube una foto/logo o elige 'Otra imagen'.",
      submitOk: "Confirma tu e-mail: te enviamos un enlace.",
      submitFail: "No funcionó. Inténtalo más tarde.",
    },
    footer: {
      membershipFree: "La membresía es gratuita.",
      supportNoteBefore:
        "El apoyo es voluntario y ayuda a construir moderación, dossiers e infraestructura. Detalles en",
      supportNoteLink: "Apoyar",
      supportNoteAfter: "o por e-mail a",
      publicPrivateNote:
        "Público/Privado: Público muestra solo totales por ciudad (sin perfiles individuales, sin datos crudos).",
    },
    supportSection: {
      label: "Apoyar",
      title: "Apoya la iniciativa - transparente y sin ventajas de voto.",
      body:
        "El apoyo permite infraestructura, investigación y traducciones. Todo está documentado con transparencia.",
      ctaSupport: "Opciones de apoyo",
      ctaQuestions: "Hacer una pregunta",
    },
  },
  it: {
    hero: {
      badge: "Partecipazione strutturata",
      title: "Decisioni verificabili.",
      subtitle: "Neutrali, tracciabili, responsabili.",
      lead: {
        pre: "VoiceOpenGov è un'",
        highlight1: "architettura dell'informazione",
        mid1:
          "per la partecipazione: opzioni chiare, motivazioni documentate e tracciamento dello stato - così le decisioni sono",
        highlight2: "verificabili",
        mid2: "e le responsabilità",
        highlight3: "attribuibili",
        post: ".",
      },
      focus: "Focus: struttura invece del rumore. Fattuale, rispettoso, orientato alle soluzioni.",
      scalable:
        "Scalabile invece che eccezionale: la partecipazione è documentata, comparabile e riutilizzabile.",
      ctas: {
        join: "Unisciti gratis",
        how: "Come funziona",
        support: "Sostieni l'iniziativa",
      },
      micro: {
        line1:
          "Tra le elezioni emergono priorità, conflitti e attuazione. VoiceOpenGov rende la partecipazione visibile come processo e stato - verificabile invece che rumorosa.",
        line2:
          "3 minuti • Double opt-in • Pubblico: solo totali per città • Nessun profilo individuale",
      },
      steps: [
        {
          title: "Check",
          body: "Chiarire termini, affermazioni, responsabilità.",
          href: "/howtoworks/edebatte#check",
        },
        {
          title: "Dossier",
          body: "Raccogliere opzioni, fonti, domande aperte.",
          href: "/howtoworks/edebatte#dossier",
        },
        {
          title: "Partecipazione",
          body: "Votare con opzioni chiare - tracciabile.",
          href: "/howtoworks/edebatte#beteiligung",
        },
        {
          title: "Stato",
          body: "Seguire decisione, responsabilità, avanzamento.",
          href: "/transparenzbericht",
        },
      ],
      learnMore: "Scopri di più →",
      cards: [
        {
          title: "Decisione come modello dati",
          body: "Opzioni, motivazioni, evidenze, stato - documentati formalmente.",
        },
        {
          title: "Modello di governance visibile",
          body: "Responsabilità, accountability, percorsi di verifica - mappati chiaramente.",
        },
        {
          title: "I compromessi diventano visibili",
          body: "Perché, per cosa, con quali conseguenze - documentato in modo trasparente.",
        },
      ],
    },
    foundations: {
      label: "Fondamenti",
      title: "I fondamenti pubblicati",
      subtitle:
        "VoiceOpenGov si basa su tre volumi aperti. Tutti i contenuti sono liberamente accessibili.",
      bandLine: "Weißbuch · Legitimation 2.0 · RePro",
      bandHint: "Teoria, modello e metodo — documentati apertamente e accessibili.",
      bandLabel: "Volume",
      items: [
        {
          title: "Weißbuch",
          body:
            "Analisi delle sfide strutturali della partecipazione moderna — sovraccarico istituzionale, frammentazione dell'informazione e mancanza di trasparenza sullo stato.",
          href: "/grundlagen/weissbuch",
          cta: "Leggi online →",
        },
        {
          title: "Legitimation 2.0",
          body:
            "Un modello di governance per decisioni verificabili, dimensioni decisionali documentate e responsabilità tracciabile.",
          href: "/grundlagen/legitimation-2-0",
          cta: "Leggi online →",
        },
        {
          title: "RePro",
          body:
            "Operazionalizzazione metodica: Check → Dossier → Partecipazione → Stato — come logica decisionale formalizzata.",
          href: "/grundlagen/repro",
          cta: "Leggi online →",
        },
      ],
      footerNote:
        "Accesso libero · Nessun paywall · Se è utile, apprezziamo supporto/donazioni. Indipendenti, senza investitori.",
      architectureLabel: "Architettura",
      architectureFlow: ["Weißbuch", "Legitimation 2.0", "RePro"],
      architectureStrong: "VoiceOpenGov",
      ctaTitle: "Dal modello alla partecipazione",
      ctaBody:
        "L'architettura pubblicata è operazionalizzata in VoiceOpenGov — mobile, tracciabile e guidata dallo stato.",
      ctaButton: "Partecipa da smartphone",
    },
    decisionCard: {
      label: "Logica decisionale",
      tag: "Livello civico",
      title: "Partecipazione in 5 fasi chiare",
      steps: [
        "1. Informare",
        "2. Raccogliere feedback",
        "3. Co-progettare",
        "4. Decidere",
        "5. Seguire l'attuazione",
      ],
      note: "Trasparenza: contributi, portata e stato sono mostrati nel rapporto.",
    },
    membership: {
      label: "Iscrizione",
      title: "Unisciti gratis",
      subtitle: "Double opt-in: conferma l'e-mail. L'iscrizione è gratuita.",
      type: {
        person: "Persona",
        organisation: "Organizzazione",
      },
    },
    form: {
      firstName: "Nome",
      lastName: "Cognome",
      birthDate: "Data di nascita",
      birthHint: "Partecipazione dai 16 anni.",
      organisation: "Organizzazione",
      email: "E-mail",
      city: "Città",
      cityTemplate: "a {city}",
      cityFallback: "nella mia città",
      country: "Paese (opzionale)",
      countryPlaceholder: "Seleziona",
      locationVisibility: "Visibilità della città",
      public: "Pubblico",
      private: "Privato",
      visibilityHint:
        "Pubblico: conteggia nei totali per città (nessun profilo individuale, nessun dato grezzo). Privato: non aggregato pubblicamente.",
      logoUrl: "Link logo (opzionale)",
      avatarUpload: "Carica foto profilo (opzionale)",
      previewLabel: "Anteprima",
      selectedLabel: "Selezionato: {name}",
      imageHint: "Max 2 MB, JPG/PNG.",
      motivation: "Motivazione (opzionale)",
      motivationPlaceholder: "Perché fai parte della community?",
      motivationHint:
        "Visibile pubblicamente solo se sei elencato come sostenitore. Per favore niente contatti.",
      supporterImage: "Immagine sostenitore (opzionale)",
      clear: "Pulisci",
      newsletter: "Aggiornamenti VoiceOpenGov (opzionale)",
      newsletterTool: "Aggiornamenti eDebatte (strumento) (opzionale)",
      supportCardTitle: "Sostieni l'iniziativa",
      supportCardBody:
        "Il supporto volontario mantiene infrastruttura, ricerca e moderazione. Nessun vantaggio di voto.",
      supportCardCta: "Vedi opzioni di supporto",
      privacyBefore: "Accetto la",
      privacyLink: "nota sulla privacy",
      privacyAfter: "e l'avviso di double opt-in.",
      submit: "Invia",
      submitting: "Invio ...",
      optional: "(opzionale)",
      cityPlaceholderPublic: "es. Berlino",
      cityPlaceholderPrivate: "es. Berlino (privato, opzionale)",
    },
    supporterSection: {
      title: "Essere indicato come sostenitore (opzionale)",
      description:
        "Mostriamo pubblicamente solo nomi abbreviati e, se vuoi, un'immagine/logo - niente dati grezzi.",
      reuse: "Usa foto/logo",
      separate: "Carica un'altra immagine",
    },
    motivationPresets: [
      {
        label: "Contributo strutturato",
        template: "Voglio contribuire in modo strutturato e tracciabile.",
      },
      {
        label: "Percorsi chiari",
        template: "Sostengo VoiceOpenGov perché i percorsi decisionali chiari sono importanti.",
      },
      {
        label: "Capire le ragioni",
        template: "Voglio capire le decisioni e le loro motivazioni.",
      },
      {
        label: "Partecipare in modo sobrio",
        template: "Voglio partecipare {ort} in modo sobrio - con opzioni chiare.",
      },
      {
        label: "Documentare lo stato",
        template: "Sostengo una documentazione formale di decisioni e stato.",
      },
    ],
    notices: {
      privacyRequired: "Accetta la nota sulla privacy.",
      birthMissing: "Inserisci la data di nascita.",
      ageTooYoung: "La partecipazione è possibile dai 16 anni.",
      cityRequired: "Inserisci la città (per i totali per città).",
      imageType: "Seleziona un file immagine.",
      imageTooLarge: "Carica un'immagine sotto i 2 MB.",
      imageReadFail: "Impossibile leggere l'immagine.",
      supporterImageMissing: "Carica una foto/logo o scegli 'Un'altra immagine'.",
      submitOk: "Conferma l'e-mail - ti abbiamo inviato un link.",
      submitFail: "Non ha funzionato. Riprova più tardi.",
    },
    footer: {
      membershipFree: "L'iscrizione è gratuita.",
      supportNoteBefore:
        "Il supporto è volontario e aiuta a costruire moderazione, dossier e infrastruttura. Dettagli su",
      supportNoteLink: "Sostieni",
      supportNoteAfter: "o via e-mail a",
      publicPrivateNote:
        "Pubblico/Privato: Pubblico mostra solo totali per città (nessun profilo, nessun dato grezzo).",
    },
    supportSection: {
      label: "Sostieni",
      title: "Sostieni l'iniziativa - trasparente e senza vantaggi di voto.",
      body:
        "Il supporto abilita infrastruttura, ricerca e traduzioni. Tutto è documentato in modo trasparente.",
      ctaSupport: "Opzioni di supporto",
      ctaQuestions: "Fai una domanda",
    },
  },
  tr: {
    hero: {
      badge: "Yapılandırılmış katılım",
      title: "Denetlenebilir kararlar.",
      subtitle: "Tarafsız, izlenebilir, sorumlu.",
      lead: {
        pre: "VoiceOpenGov,",
        highlight1: "bilgi mimarisi",
        mid1:
          "ile katılımı düzenler: net seçenekler, belgelenmiş gerekçeler ve durum takibi - böylece kararlar",
        highlight2: "denetlenebilir",
        mid2: "ve sorumluluklar",
        highlight3: "atanabilir",
        post: "olur.",
      },
      focus: "Odak: yorum gürültüsü yerine yapı. Olgusal, saygılı, çözüm odaklı.",
      scalable:
        "İstisna değil ölçeklenebilir: katılım belgelenir, karşılaştırılır ve yeniden kullanılabilir.",
      ctas: {
        join: "Ücretsiz katıl",
        how: "Nasıl çalışır",
        support: "Girişimi destekle",
      },
      micro: {
        line1:
          "Seçimler arasında öncelikler, çatışmalar ve uygulama ortaya çıkar. VoiceOpenGov katılımı süreç ve statü olarak görünür kılar - gürültü değil doğrulanabilirlik.",
        line2:
          "3 dakika • Double opt-in • Kamu: yalnızca şehir toplamları • Bireysel profil yok",
      },
      steps: [
        {
          title: "Check",
          body: "Terimleri, iddiaları, sorumluluğu netleştir.",
          href: "/howtoworks/edebatte#check",
        },
        {
          title: "Dossier",
          body: "Seçenekleri, kaynakları, açık soruları birleştir.",
          href: "/howtoworks/edebatte#dossier",
        },
        {
          title: "Katılım",
          body: "Net seçeneklerle oyla - izlenebilir.",
          href: "/howtoworks/edebatte#beteiligung",
        },
        {
          title: "Durum",
          body: "Karar, sorumluluk, ilerlemeyi şeffaf takip et.",
          href: "/transparenzbericht",
        },
      ],
      learnMore: "Daha fazla bilgi →",
      cards: [
        {
          title: "Veri modeli olarak karar",
          body: "Seçenekler, gerekçeler, kanıt, durum - resmi olarak belgelenir.",
        },
        {
          title: "Görünür yönetişim modeli",
          body: "Sorumluluklar, hesap verebilirlik, inceleme yolları - açıkça haritalanır.",
        },
        {
          title: "Dengeler görünür olur",
          body: "Neden, ne için, hangi sonuçlarla - şeffaf belgelenir.",
        },
      ],
    },
    foundations: {
      label: "Temeller",
      title: "Yayınlanan temeller",
      subtitle: "VoiceOpenGov üç açık cilt üzerine kurulur. Tüm içerikler serbestçe erişilebilir.",
      bandLine: "Weißbuch · Legitimation 2.0 · RePro",
      bandHint: "Teori, model ve yöntem — açıkça belgelenmiş ve erişilebilir.",
      bandLabel: "Cilt",
      items: [
        {
          title: "Weißbuch",
          body:
            "Modern katılımın yapısal zorluklarının analizi — kurumsal aşırı yük, bilgi parçalanması ve statü şeffaflığının eksikliği.",
          href: "/grundlagen/weissbuch",
          cta: "Çevrimiçi oku →",
        },
        {
          title: "Legitimation 2.0",
          body:
            "Doğrulanabilir kararlar, belgelenmiş karar boyutları ve izlenebilir sorumluluk için bir yönetişim modeli.",
          href: "/grundlagen/legitimation-2-0",
          cta: "Çevrimiçi oku →",
        },
        {
          title: "RePro",
          body:
            "Yöntemsel operasyonelleştirme: Check → Dossier → Katılım → Statü — biçimsel karar mantığı olarak.",
          href: "/grundlagen/repro",
          cta: "Çevrimiçi oku →",
        },
      ],
      footerNote:
        "Ücretsiz erişim · Paywall yok · Faydalıysa destek/bağış memnuniyetle. Bağımsız, yatırımcı yok.",
      architectureLabel: "Mimari",
      architectureFlow: ["Weißbuch", "Legitimation 2.0", "RePro"],
      architectureStrong: "VoiceOpenGov",
      ctaTitle: "Modelden katılıma",
      ctaBody:
        "Yayınlanan mimari VoiceOpenGov içinde operasyonelleştirilir — mobil, izlenebilir ve statü odaklı.",
      ctaButton: "Telefondan katıl",
    },
    decisionCard: {
      label: "Karar mantığı",
      tag: "Sivil seviye",
      title: "5 net aşamada katılım",
      steps: [
        "1. Bilgilendir",
        "2. Geri bildirim al",
        "3. Birlikte tasarla",
        "4. Karar ver",
        "5. Uygulamayı izle",
      ],
      note: "Şeffaflık: katkılar, erişim ve durum raporda gösterilir.",
    },
    membership: {
      label: "Üyelik",
      title: "Ücretsiz katıl",
      subtitle: "Double opt-in: e-postanı onayla. Üyelik ücretsizdir.",
      type: {
        person: "Kişi",
        organisation: "Kuruluş",
      },
    },
    form: {
      firstName: "Ad",
      lastName: "Soyad",
      birthDate: "Doğum tarihi",
      birthHint: "16 yaşından itibaren katılım.",
      organisation: "Kuruluş",
      email: "E-posta",
      city: "Şehir",
      cityTemplate: "{city} içinde",
      cityFallback: "bulunduğum yerde",
      country: "Ülke (isteğe bağlı)",
      countryPlaceholder: "Seçiniz",
      locationVisibility: "Şehir görünürlüğü",
      public: "Kamu",
      private: "Özel",
      visibilityHint:
        "Kamu: şehir toplamlarına dahil edilir (bireysel profil yok, ham veri yok). Özel: kamuya açık olarak birleştirilmez.",
      logoUrl: "Logo bağlantısı (isteğe bağlı)",
      avatarUpload: "Profil fotoğrafı yükle (isteğe bağlı)",
      previewLabel: "Önizleme",
      selectedLabel: "Seçildi: {name}",
      imageHint: "Maks. 2 MB, JPG/PNG.",
      motivation: "Motivasyon (isteğe bağlı)",
      motivationPlaceholder: "Topluluğun parçası olma nedenin?",
      motivationHint:
        "Kamuya yalnızca destekçi olarak listelendiysen görünür. Lütfen iletişim bilgisi ekleme.",
      supporterImage: "Destekçi görseli (isteğe bağlı)",
      clear: "Temizle",
      newsletter: "VoiceOpenGov güncellemeleri (isteğe bağlı)",
      newsletterTool: "eDebatte güncellemeleri (araç) (isteğe bağlı)",
      supportCardTitle: "Girişimi destekle",
      supportCardBody:
        "Gönüllü destek altyapı, araştırma ve moderasyonu sürdürür. Oy avantajı yok.",
      supportCardCta: "Destek seçeneklerini gör",
      privacyBefore: "Şu",
      privacyLink: "gizlilik bildirimini",
      privacyAfter: "ve double opt-in bilgisini kabul ediyorum.",
      submit: "Gönder",
      submitting: "Gönderiliyor ...",
      optional: "(isteğe bağlı)",
      cityPlaceholderPublic: "örn. Berlin",
      cityPlaceholderPrivate: "örn. Berlin (özel, isteğe bağlı)",
    },
    supporterSection: {
      title: "Destekçi olarak listelenmek (isteğe bağlı)",
      description:
        "Kamuya yalnızca kısaltılmış isim ve isteğe bağlı görsel/logo gösteririz - ham veri yok.",
      reuse: "Profil fotoğrafı/logo kullan",
      separate: "Başka görsel yükle",
    },
    motivationPresets: [
      {
        label: "Yapılandırılmış katkı",
        template: "Görüşümü yapılandırılmış ve izlenebilir şekilde sunmak istiyorum.",
      },
      {
        label: "Net karar yolları",
        template: "VoiceOpenGov'u destekliyorum çünkü net karar yolları önemli.",
      },
      {
        label: "Gerekçeyi anlamak",
        template: "Kararları ve gerekçelerini anlamak istiyorum.",
      },
      {
        label: "Sakin katılım",
        template: "{ort} sakin ve net seçeneklerle katılmak istiyorum.",
      },
      {
        label: "Durumu belgelemek",
        template: "Karar ve durumun resmi belgelenmesini destekliyorum.",
      },
    ],
    notices: {
      privacyRequired: "Lütfen gizlilik bildirimini kabul edin.",
      birthMissing: "Lütfen doğum tarihinizi girin.",
      ageTooYoung: "Katılım 16 yaşından itibaren mümkündür.",
      cityRequired: "Lütfen şehrinizi girin (şehir toplamları için).",
      imageType: "Lütfen bir görsel dosyası seçin.",
      imageTooLarge: "Lütfen 2 MB'den küçük bir görsel yükleyin.",
      imageReadFail: "Görsel okunamadı.",
      supporterImageMissing: "Profil fotoğrafı/logo yükleyin veya 'Başka görsel' seçin.",
      submitOk: "E-postanızı onaylayın - size bir bağlantı gönderdik.",
      submitFail: "Olmadı. Lütfen daha sonra tekrar deneyin.",
    },
    footer: {
      membershipFree: "Üyelik ücretsizdir.",
      supportNoteBefore:
        "Destek gönüllüdür ve moderasyon, dossier ve altyapının kurulmasına yardımcı olur. Ayrıntılar",
      supportNoteLink: "Destekle",
      supportNoteAfter: "veya e-posta ile",
      publicPrivateNote:
        "Kamu/Özel: Kamu yalnızca şehir toplamlarını gösterir (bireysel profil yok, ham veri yok).",
    },
    supportSection: {
      label: "Destekle",
      title: "Girişimi destekle - şeffaf ve oy avantajı olmadan.",
      body:
        "Destek altyapı, araştırma ve çevirileri mümkün kılar. Her şey şeffaf biçimde belgelenir.",
      ctaSupport: "Destek seçenekleri",
      ctaQuestions: "Soru sor",
    },
  },
  ar: {
    hero: {
      badge: "مشاركة منظمة",
      title: "قرارات يمكن التحقق منها.",
      subtitle: "محايدة، قابلة للتتبع، مسؤولة.",
      lead: {
        pre: "VoiceOpenGov هي",
        highlight1: "بنية معلومات",
        mid1:
          "للمشاركة: خيارات واضحة، مبررات موثقة، وتتبع للحالة - بحيث تكون القرارات",
        highlight2: "قابلة للتحقق",
        mid2: "وتكون المسؤوليات",
        highlight3: "قابلة للإسناد",
        post: ".",
      },
      focus: "التركيز: بنية بدل ضجيج التعليقات. موضوعية، محترمة، موجهة للحلول.",
      scalable:
        "قابلة للتوسع بدل الاستثناء: المشاركة موثقة وقابلة للمقارنة وإعادة الاستخدام.",
      ctas: {
        join: "انضم مجانا",
        how: "كيف يعمل",
        support: "ادعم المبادرة",
      },
      micro: {
        line1:
          "بين الانتخابات تظهر الأولويات والتعارضات والتنفيذ. تجعل VoiceOpenGov المشاركة مرئية كعملية وحالة - قابلة للتحقق بدل الضجيج.",
        line2: "3 دقائق • Double opt-in • عام: مجاميع المدن فقط • دون ملفات فردية",
      },
      steps: [
        {
          title: "Check",
          body: "توضيح المصطلحات والادعاءات والمسؤولية.",
          href: "/howtoworks/edebatte#check",
        },
        {
          title: "Dossier",
          body: "جمع الخيارات والمصادر والأسئلة المفتوحة.",
          href: "/howtoworks/edebatte#dossier",
        },
        {
          title: "المشاركة",
          body: "التصويت بخيارات واضحة - قابل للتتبع.",
          href: "/howtoworks/edebatte#beteiligung",
        },
        {
          title: "الحالة",
          body: "متابعة القرار والمسؤولية والتقدم بشفافية.",
          href: "/transparenzbericht",
        },
      ],
      learnMore: "اعرف المزيد →",
      cards: [
        {
          title: "القرار كنموذج بيانات",
          body: "الخيارات والمبررات والأدلة والحالة - موثقة رسميا.",
        },
        {
          title: "نموذج الحوكمة مرئي",
          body: "المسؤوليات والمساءلة ومسارات المراجعة - موضحة بوضوح.",
        },
        {
          title: "تظهر المفاضلات",
          body: "لماذا، لأي غرض، وبأي نتائج - موثق بشفافية.",
        },
      ],
    },
    foundations: {
      label: "الأسس",
      title: "الأسس المنشورة",
      subtitle: "يعتمد VoiceOpenGov على ثلاثة مجلدات مفتوحة. كل المحتوى متاح بحرية.",
      bandLine: "Weißbuch · Legitimation 2.0 · RePro",
      bandHint: "نظرية، نموذج ومنهج — موثقة بشكل مفتوح ومتاحة للجميع.",
      bandLabel: "مجلد",
      items: [
        {
          title: "Weißbuch",
          body:
            "تحليل التحديات البنيوية للمشاركة الحديثة — ضغط المؤسسات، تجزؤ المعلومات، وغياب شفافية الحالة.",
          href: "/grundlagen/weissbuch",
          cta: "اقرأ عبر الإنترنت →",
        },
        {
          title: "Legitimation 2.0",
          body:
            "نموذج حوكمة لقرارات قابلة للتحقق، وأبعاد قرار موثقة، ومسؤولية قابلة للتتبع.",
          href: "/grundlagen/legitimation-2-0",
          cta: "اقرأ عبر الإنترنت →",
        },
        {
          title: "RePro",
          body:
            "تشغيل منهجي: Check → Dossier → مشاركة → حالة — كمنطق قرار مُقنن.",
          href: "/grundlagen/repro",
          cta: "اقرأ عبر الإنترنت →",
        },
      ],
      footerNote:
        "متاح للجميع · بدون جدار دفع · إذا كان مفيدًا فنحن نقدر الدعم/التبرعات. مستقلون بلا مستثمرين.",
      architectureLabel: "الهندسة",
      architectureFlow: ["Weißbuch", "Legitimation 2.0", "RePro"],
      architectureStrong: "VoiceOpenGov",
      ctaTitle: "من النموذج إلى المشاركة",
      ctaBody:
        "تُشغَّل البنية المنشورة داخل VoiceOpenGov — عبر المحمول، قابلة للتتبع وموجهة بالحالة.",
      ctaButton: "شارك من الهاتف",
    },
    decisionCard: {
      label: "منطق القرار",
      tag: "المستوى المدني",
      title: "المشاركة في 5 مراحل واضحة",
      steps: [
        "1. الاطلاع",
        "2. جمع الملاحظات",
        "3. التصميم المشترك",
        "4. اتخاذ القرار",
        "5. متابعة التنفيذ",
      ],
      note: "الشفافية: تُعرض المساهمات والمدى والحالة في التقرير.",
    },
    membership: {
      label: "العضوية",
      title: "انضم مجانا",
      subtitle: "Double opt-in: يرجى تأكيد البريد الإلكتروني. العضوية مجانية.",
      type: {
        person: "شخص",
        organisation: "منظمة",
      },
    },
    form: {
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      birthDate: "تاريخ الميلاد",
      birthHint: "المشاركة من سن 16 سنة.",
      organisation: "المنظمة",
      email: "البريد الإلكتروني",
      city: "المدينة",
      cityTemplate: "في {city}",
      cityFallback: "في مدينتي",
      country: "الدولة (اختياري)",
      countryPlaceholder: "اختر",
      locationVisibility: "رؤية المدينة",
      public: "عام",
      private: "خاص",
      visibilityHint:
        "عام: يدخل في مجاميع المدن (بدون ملفات فردية، بدون بيانات خام). خاص: غير مجمع علنا.",
      logoUrl: "رابط الشعار (اختياري)",
      avatarUpload: "رفع صورة الملف (اختياري)",
      previewLabel: "معاينة",
      selectedLabel: "تم الاختيار: {name}",
      imageHint: "الحد الأقصى 2 ميغابايت، JPG/PNG.",
      motivation: "الدافع (اختياري)",
      motivationPlaceholder: "لماذا أنت جزء من المجتمع؟",
      motivationHint:
        "يظهر علنا فقط إذا كنت مدرجا كداعِم. يرجى عدم إضافة بيانات اتصال.",
      supporterImage: "صورة الداعم (اختياري)",
      clear: "مسح",
      newsletter: "تحديثات VoiceOpenGov (اختياري)",
      newsletterTool: "تحديثات eDebatte (أداة) (اختياري)",
      supportCardTitle: "ادعم المبادرة",
      supportCardBody:
        "الدعم التطوعي يحافظ على البنية التحتية والبحث والإشراف. بدون مزايا تصويت.",
      supportCardCta: "عرض طرق الدعم",
      privacyBefore: "أوافق على",
      privacyLink: "إشعار الخصوصية",
      privacyAfter: "وإشعار double opt-in.",
      submit: "إرسال",
      submitting: "جارٍ الإرسال ...",
      optional: "(اختياري)",
      cityPlaceholderPublic: "مثال: برلين",
      cityPlaceholderPrivate: "مثال: برلين (خاص، اختياري)",
    },
    supporterSection: {
      title: "الإدراج كداعِم (اختياري)",
      description:
        "نعرض علنا أسماء مختصرة وصورة/شعار اختياري - بدون بيانات خام.",
      reuse: "استخدام الصورة/الشعار",
      separate: "رفع صورة أخرى",
    },
    motivationPresets: [
      {
        label: "مشاركة منظمة",
        template: "أريد تقديم وجهة نظري بشكل منظم وقابل للتتبع.",
      },
      {
        label: "مسارات واضحة",
        template: "أدعم VoiceOpenGov لأن مسارات القرار الواضحة مهمة.",
      },
      {
        label: "فهم المبررات",
        template: "أريد فهم القرارات ومبرراتها.",
      },
      {
        label: "مشاركة موضوعية",
        template: "أريد المشاركة {ort} بشكل موضوعي - بخيارات واضحة.",
      },
      {
        label: "توثيق الحالة",
        template: "أدعم التوثيق الرسمي للقرارات والحالة.",
      },
    ],
    notices: {
      privacyRequired: "يرجى قبول إشعار الخصوصية.",
      birthMissing: "يرجى إدخال تاريخ الميلاد.",
      ageTooYoung: "المشاركة ممكنة من عمر 16 سنة.",
      cityRequired: "يرجى إدخال المدينة (لمجاميع المدن).",
      imageType: "يرجى اختيار ملف صورة.",
      imageTooLarge: "يرجى رفع صورة أقل من 2 ميغابايت.",
      imageReadFail: "تعذر قراءة الصورة.",
      supporterImageMissing: "يرجى رفع صورة/شعار أو اختيار 'صورة أخرى'.",
      submitOk: "يرجى تأكيد البريد الإلكتروني - أرسلنا لك رابطا.",
      submitFail: "لم ينجح. يرجى المحاولة لاحقا.",
    },
    footer: {
      membershipFree: "العضوية مجانية.",
      supportNoteBefore:
        "الدعم طوعي ويساعد في بناء الإشراف والملفات والبنية التحتية. التفاصيل في",
      supportNoteLink: "الدعم",
      supportNoteAfter: "أو عبر البريد إلى",
      publicPrivateNote:
        "عام/خاص: العام يعرض مجاميع المدن فقط (بدون ملفات فردية، بدون بيانات خام).",
    },
    supportSection: {
      label: "الدعم",
      title: "ادعم المبادرة - بشفافية وبدون مزايا تصويت.",
      body:
        "الدعم يتيح البنية التحتية والبحث والترجمات. يتم توثيق كل شيء بشفافية.",
      ctaSupport: "طرق الدعم",
      ctaQuestions: "اطرح سؤالا",
    },
  },
  ru: {
    hero: {
      badge: "Структурированное участие",
      title: "Решения, которые можно проверить.",
      subtitle: "Нейтрально, прозрачно, ответственно.",
      lead: {
        pre: "VoiceOpenGov - это",
        highlight1: "информационная архитектура",
        mid1:
          "для участия: четкие варианты, документированные обоснования и отслеживание статуса - чтобы решения были",
        highlight2: "проверяемыми",
        mid2: "а ответственность",
        highlight3: "распределяемой",
        post: ".",
      },
      focus: "Фокус: структура вместо шума. Фактологично, уважительно, с ориентацией на решения.",
      scalable:
        "Масштабируемо вместо исключения: участие документируется, сопоставимо и переиспользуемо.",
      ctas: {
        join: "Присоединиться бесплатно",
        how: "Как это работает",
        support: "Поддержать инициативу",
      },
      micro: {
        line1:
          "Между выборами возникают приоритеты, конфликты и реализация. VoiceOpenGov делает участие видимым как процесс и статус - проверяемым, а не шумным.",
        line2:
          "3 минуты • Double opt-in • Публично: только суммы по городам • Без индивидуальных профилей",
      },
      steps: [
        {
          title: "Check",
          body: "Прояснить термины, утверждения, ответственность.",
          href: "/howtoworks/edebatte#check",
        },
        {
          title: "Dossier",
          body: "Собрать варианты, источники, открытые вопросы.",
          href: "/howtoworks/edebatte#dossier",
        },
        {
          title: "Участие",
          body: "Голосовать с четкими вариантами - прозрачно.",
          href: "/howtoworks/edebatte#beteiligung",
        },
        {
          title: "Статус",
          body: "Отслеживать решение, ответственность, прогресс.",
          href: "/transparenzbericht",
        },
      ],
      learnMore: "Узнать больше →",
      cards: [
        {
          title: "Решение как модель данных",
          body: "Варианты, обоснования, доказательства, статус - формально документировано.",
        },
        {
          title: "Видимая модель управления",
          body: "Ответственности, подотчетность, пути проверки - четко обозначены.",
        },
        {
          title: "Компромиссы становятся видимыми",
          body: "Почему, для чего, с какими последствиями - прозрачно документировано.",
        },
      ],
    },
    foundations: {
      label: "Основы",
      title: "Опубликованные основы",
      subtitle: "VoiceOpenGov основан на трех открытых томах. Весь контент доступен свободно.",
      bandLine: "Weißbuch · Legitimation 2.0 · RePro",
      bandHint: "Теория, модель и метод — открыто документированы и свободно доступны.",
      bandLabel: "Том",
      items: [
        {
          title: "Weißbuch",
          body:
            "Анализ структурных вызовов современной вовлеченности — институциональная перегрузка, фрагментация информации и отсутствие прозрачности статуса.",
          href: "/grundlagen/weissbuch",
          cta: "Читать онлайн →",
        },
        {
          title: "Legitimation 2.0",
          body:
            "Модель управления для проверяемых решений, документированных измерений решения и подотчетной ответственности.",
          href: "/grundlagen/legitimation-2-0",
          cta: "Читать онлайн →",
        },
        {
          title: "RePro",
          body:
            "Методическая операционализация: Check → Dossier → Участие → Статус — как формализованная логика решений.",
          href: "/grundlagen/repro",
          cta: "Читать онлайн →",
        },
      ],
      footerNote:
        "Свободный доступ · Без paywall · Если это полезно, будем рады поддержке/пожертвованиям. Независимы, без инвесторов.",
      architectureLabel: "Архитектура",
      architectureFlow: ["Weißbuch", "Legitimation 2.0", "RePro"],
      architectureStrong: "VoiceOpenGov",
      ctaTitle: "От модели к участию",
      ctaBody:
        "Опубликованная архитектура реализуется в VoiceOpenGov — мобильная, проверяемая и ориентированная на статус.",
      ctaButton: "Участвовать с телефона",
    },
    decisionCard: {
      label: "Логика решения",
      tag: "Гражданский уровень",
      title: "Участие в 5 понятных этапах",
      steps: [
        "1. Информировать",
        "2. Собирать обратную связь",
        "3. Совместное проектирование",
        "4. Принимать решение",
        "5. Отслеживать реализацию",
      ],
      note: "Прозрачность: вклад, охват и статус отражаются в отчете.",
    },
    membership: {
      label: "Участие",
      title: "Присоединиться бесплатно",
      subtitle: "Double opt-in: подтвердите e-mail. Участие бесплатное.",
      type: {
        person: "Человек",
        organisation: "Организация",
      },
    },
    form: {
      firstName: "Имя",
      lastName: "Фамилия",
      birthDate: "Дата рождения",
      birthHint: "Участие с 16 лет.",
      organisation: "Организация",
      email: "E-mail",
      city: "Город",
      cityTemplate: "в {city}",
      cityFallback: "в моем городе",
      country: "Страна (необязательно)",
      countryPlaceholder: "Выберите",
      locationVisibility: "Видимость города",
      public: "Публично",
      private: "Приватно",
      visibilityHint:
        "Публично: учитывается в суммах по городам (без индивидуальных профилей, без сырых данных). Приватно: не агрегируется публично.",
      logoUrl: "Ссылка на логотип (необязательно)",
      avatarUpload: "Загрузить фото профиля (необязательно)",
      previewLabel: "Предпросмотр",
      selectedLabel: "Выбрано: {name}",
      imageHint: "Макс. 2 МБ, JPG/PNG.",
      motivation: "Мотивация (необязательно)",
      motivationPlaceholder: "Почему вы часть сообщества?",
      motivationHint:
        "Публично видно только если вы указаны как поддерживающий. Пожалуйста, без контактов.",
      supporterImage: "Изображение поддержки (необязательно)",
      clear: "Очистить",
      newsletter: "Обновления VoiceOpenGov (необязательно)",
      newsletterTool: "Обновления eDebatte (инструмент) (необязательно)",
      supportCardTitle: "Поддержать инициативу",
      supportCardBody:
        "Добровольная поддержка обеспечивает инфраструктуру, исследования и модерацию. Без преимуществ в голосовании.",
      supportCardCta: "Посмотреть варианты поддержки",
      privacyBefore: "Я принимаю",
      privacyLink: "уведомление о конфиденциальности",
      privacyAfter: "и уведомление double opt-in.",
      submit: "Отправить",
      submitting: "Отправка ...",
      optional: "(необязательно)",
      cityPlaceholderPublic: "напр. Берлин",
      cityPlaceholderPrivate: "напр. Берлин (приватно, необязательно)",
    },
    supporterSection: {
      title: "Указаться как поддерживающий (необязательно)",
      description:
        "Публично показываем только сокращенное имя и, при желании, изображение/логотип - без сырых данных.",
      reuse: "Использовать фото/логотип",
      separate: "Загрузить другое изображение",
    },
    motivationPresets: [
      {
        label: "Структурированный вклад",
        template: "Я хочу вносить свою точку зрения структурировано и прозрачно.",
      },
      {
        label: "Четкие пути решения",
        template: "Я поддерживаю VoiceOpenGov, потому что важны четкие пути решения.",
      },
      {
        label: "Понимать причины",
        template: "Я хочу понимать решения и их обоснования.",
      },
      {
        label: "Участвовать по делу",
        template: "Я хочу участвовать {ort} по делу - с ясными вариантами.",
      },
      {
        label: "Документировать статус",
        template: "Я поддерживаю формальное документирование решений и статуса.",
      },
    ],
    notices: {
      privacyRequired: "Пожалуйста, примите уведомление о конфиденциальности.",
      birthMissing: "Пожалуйста, укажите дату рождения.",
      ageTooYoung: "Участие возможно с 16 лет.",
      cityRequired: "Пожалуйста, укажите город (для сумм по городам).",
      imageType: "Пожалуйста, выберите файл изображения.",
      imageTooLarge: "Пожалуйста, загрузите изображение меньше 2 МБ.",
      imageReadFail: "Не удалось прочитать изображение.",
      supporterImageMissing: "Загрузите фото/логотип или выберите 'Другое изображение'.",
      submitOk: "Подтвердите e-mail - мы отправили ссылку.",
      submitFail: "Не получилось. Попробуйте позже.",
    },
    footer: {
      membershipFree: "Участие бесплатное.",
      supportNoteBefore:
        "Поддержка добровольная и помогает строить модерацию, досье и инфраструктуру. Подробнее на",
      supportNoteLink: "Поддержать",
      supportNoteAfter: "или по e-mail",
      publicPrivateNote:
        "Публично/Приватно: Публично показываются только суммы по городам (без профилей, без сырых данных).",
    },
    supportSection: {
      label: "Поддержать",
      title: "Поддержите инициативу - прозрачно и без преимуществ в голосовании.",
      body:
        "Поддержка обеспечивает инфраструктуру, исследования и переводы. Все документируется прозрачно.",
      ctaSupport: "Варианты поддержки",
      ctaQuestions: "Задать вопрос",
    },
  },
  zh: {
    hero: {
      badge: "结构化参与",
      title: "可核查的决策。",
      subtitle: "中立、可追溯、可负责。",
      lead: {
        pre: "VoiceOpenGov 是一套",
        highlight1: "信息架构",
        mid1:
          "用于参与：清晰选项、记录在案的理由与状态追踪——使决策",
        highlight2: "可核查",
        mid2: "且责任",
        highlight3: "可归属",
        post: "。",
      },
      focus: "重点：结构胜过噪音。客观、尊重、面向解决方案。",
      scalable: "可扩展而非例外：参与被记录、可比较、可复用。",
      ctas: {
        join: "免费加入",
        how: "如何运作",
        support: "支持该倡议",
      },
      micro: {
        line1:
          "在选举之间，优先级、冲突与执行不断出现。VoiceOpenGov 让参与以过程与状态可见——可核查而非喧闹。",
        line2: "3 分钟 • Double opt-in • 公开：仅城市汇总 • 无个人档案",
      },
      steps: [
        {
          title: "Check",
          body: "澄清术语、主张与责任。",
          href: "/howtoworks/edebatte#check",
        },
        {
          title: "Dossier",
          body: "汇总选项、来源与未决问题。",
          href: "/howtoworks/edebatte#dossier",
        },
        {
          title: "参与",
          body: "以清晰选项投票——可追溯。",
          href: "/howtoworks/edebatte#beteiligung",
        },
        {
          title: "状态",
          body: "透明追踪决策、责任与进展。",
          href: "/transparenzbericht",
        },
      ],
      learnMore: "了解更多 →",
      cards: [
        {
          title: "决策作为数据模型",
          body: "选项、理由、证据、状态——正式记录。",
        },
        {
          title: "治理模型可见",
          body: "责任、问责、审查路径——清晰呈现。",
        },
        {
          title: "权衡可见",
          body: "为什么、为了什么、带来哪些后果——透明记录。",
        },
      ],
    },
    foundations: {
      label: "基础",
      title: "公开的基础",
      subtitle: "VoiceOpenGov 基于三部开放文本。所有内容均可自由访问。",
      bandLine: "Weißbuch · Legitimation 2.0 · RePro",
      bandHint: "理论、模型与方法——开放记录并自由访问。",
      bandLabel: "卷",
      items: [
        {
          title: "Weißbuch",
          body: "分析现代参与的结构性挑战——制度负荷、信息碎片化与状态透明度不足。",
          href: "/grundlagen/weissbuch",
          cta: "在线阅读 →",
        },
        {
          title: "Legitimation 2.0",
          body: "用于可验证决策、记录决策维度与可追责责任的治理模型。",
          href: "/grundlagen/legitimation-2-0",
          cta: "在线阅读 →",
        },
        {
          title: "RePro",
          body:
            "方法化落地：Check → Dossier → 参与 → 状态——作为规范化的决策逻辑。",
          href: "/grundlagen/repro",
          cta: "在线阅读 →",
        },
      ],
      footerNote:
        "自由访问 · 无付费墙 · 如果有帮助，感谢支持/捐助。独立运营，无投资方。",
      architectureLabel: "架构",
      architectureFlow: ["Weißbuch", "Legitimation 2.0", "RePro"],
      architectureStrong: "VoiceOpenGov",
      ctaTitle: "从模型到参与",
      ctaBody: "公开的架构在 VoiceOpenGov 中被操作化——移动端、可追踪、状态驱动。",
      ctaButton: "手机端参与",
    },
    decisionCard: {
      label: "决策逻辑",
      tag: "公民层级",
      title: "五个清晰阶段的参与",
      steps: [
        "1. 了解",
        "2. 收集反馈",
        "3. 共同设计",
        "4. 决策",
        "5. 跟踪落实",
      ],
      note: "透明度：贡献、覆盖范围与状态在报告中呈现。",
    },
    membership: {
      label: "成员",
      title: "免费加入",
      subtitle: "Double opt-in：请确认邮箱。成员免费。",
      type: {
        person: "个人",
        organisation: "组织",
      },
    },
    form: {
      firstName: "名",
      lastName: "姓",
      birthDate: "出生日期",
      birthHint: "16 岁起可参与。",
      organisation: "组织",
      email: "邮箱",
      city: "城市",
      cityTemplate: "在{city}",
      cityFallback: "在我的城市",
      country: "国家（可选）",
      countryPlaceholder: "请选择",
      locationVisibility: "城市可见性",
      public: "公开",
      private: "私密",
      visibilityHint:
        "公开：计入城市汇总（无个人档案、无原始数据）。私密：不公开汇总。",
      logoUrl: "Logo 链接（可选）",
      avatarUpload: "上传头像（可选）",
      previewLabel: "预览",
      selectedLabel: "已选择：{name}",
      imageHint: "最大 2MB，JPG/PNG。",
      motivation: "动机（可选）",
      motivationPlaceholder: "为什么加入社区？",
      motivationHint: "仅在作为支持者展示时公开。请勿填写联系方式。",
      supporterImage: "支持者图片（可选）",
      clear: "清空",
      newsletter: "VoiceOpenGov 更新（可选）",
      newsletterTool: "eDebatte 更新（工具）（可选）",
      supportCardTitle: "支持该倡议",
      supportCardBody: "自愿支持维持基础设施、研究与审核。无投票优势。",
      supportCardCta: "查看支持方式",
      privacyBefore: "我接受",
      privacyLink: "隐私说明",
      privacyAfter: "以及 double opt-in 说明。",
      submit: "提交",
      submitting: "提交中 ...",
      optional: "（可选）",
      cityPlaceholderPublic: "例如：柏林",
      cityPlaceholderPrivate: "例如：柏林（私密，可选）",
    },
    supporterSection: {
      title: "作为支持者显示（可选）",
      description: "公开仅显示缩写名称及可选图片/Logo——无原始数据。",
      reuse: "使用头像/Logo",
      separate: "上传另一张图片",
    },
    motivationPresets: [
      {
        label: "结构化贡献",
        template: "我希望以结构化、可追溯的方式表达观点。",
      },
      {
        label: "清晰决策路径",
        template: "我支持 VoiceOpenGov，因为清晰的决策路径很重要。",
      },
      {
        label: "理解理由",
        template: "我希望理解决策及其理由。",
      },
      {
        label: "理性参与",
        template: "我希望在 {ort} 以理性方式参与——有清晰选项。",
      },
      {
        label: "记录状态",
        template: "我支持对决策与状态进行正式记录。",
      },
    ],
    notices: {
      privacyRequired: "请接受隐私说明。",
      birthMissing: "请填写出生日期。",
      ageTooYoung: "16 岁起可参与。",
      cityRequired: "请填写城市（用于城市汇总）。",
      imageType: "请选择图片文件。",
      imageTooLarge: "请上传小于 2MB 的图片。",
      imageReadFail: "无法读取图片。",
      supporterImageMissing: "请上传头像/Logo 或选择“另一张图片”。",
      submitOk: "请确认邮箱 - 我们已发送链接。",
      submitFail: "未成功，请稍后再试。",
    },
    footer: {
      membershipFree: "成员免费。",
      supportNoteBefore:
        "支持是自愿的，有助于建立审核、档案与基础设施。详情见",
      supportNoteLink: "支持",
      supportNoteAfter: "或邮件联系",
      publicPrivateNote: "公开/私密：公开仅显示城市汇总（无个人档案、无原始数据）。",
    },
    supportSection: {
      label: "支持",
      title: "支持该倡议——透明且无投票优势。",
      body: "支持促进基础设施、研究与翻译。所有内容透明记录。",
      ctaSupport: "支持方式",
      ctaQuestions: "提问",
    },
  },
};

export function getHomeStrings(locale: SupportedLocale | string): HomeStrings {
  const normalized = (locale || DEFAULT_LOCALE) as SupportedLocale;
  return STRINGS[normalized] ?? STRINGS[DEFAULT_LOCALE];
}
