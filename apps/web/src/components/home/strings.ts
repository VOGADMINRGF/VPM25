import { DEFAULT_LOCALE, type SupportedLocale } from "@/config/locales";

export type MotivationPreset = { label: string; template: string };

type HomeStrings = {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    oneLiner: string;
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
    badges: string[];
    ctas: {
      join: string;
      how: string;
      support: string;
    };
    more: {
      label: string;
      edebatte: string;
      preorder: string;
    };
    micro: {
      line1: string;
      line2: string;
    };
    steps: Array<{ title: string; body: string; href: string }>;
    learnMore: string;
    cards: Array<{ title: string; body: string }>;
    highlightLabels: {
      focus: string;
      scalable: string;
      mobility: string;
    };
  };
  foundations: {
    label: string;
    title: string;
    subtitle: string;
    bandLine: string;
    bandHint: string;
    bandLabel: string;
    items: Array<{ title: string; subtitle?: string; body: string; href: string; cta: string }>;
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
    step1Cta: string;
    step1Hint: string;
    step2Label: string;
    step2Hint: string;
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
  supportAfterCta: {
    title: string;
    body: string;
    cta: string;
  };
  supportCalculator: {
    label: string;
    title: string;
    body: string;
    lockedTitle: string;
    lockedBody: string;
    lockedCta: string;
    net: string;
    rent: string;
    household: string;
    interval: string;
    monthly: string;
    once: string;
    presets: string;
    suggestion: string;
    perPerson: string;
    total: string;
    note: string;
    peopleTitle: string;
    peopleHint: string;
    personLabel: string;
    personName: string;
    personEmail: string;
    mailListLabel: string;
    mailListHint: string;
  };
  supportBank: {
    title: string;
    body: string;
    labels: {
      recipient: string;
      bank: string;
      iban: string;
      bic: string;
      reference: string;
    };
    contact: {
      title: string;
      body: string;
      firstName: string;
      lastName: string;
      subject: string;
      subjectPlaceholder: string;
      humanCheck: string;
      submit: string;
      errorRequired: string;
      errorHuman: string;
      mailIntro: string;
      mailName: string;
      mailSubject: string;
      mailEmail: string;
      mailOutro: string;
    };
    referenceHint: string;
    noDetails: string;
    afterNote: string;
  };
};

const STRINGS: Record<SupportedLocale, HomeStrings> = {
  de: {
    hero: {
      badge: "Strukturierte Beteiligung",
      title: "VoiceOpenGov — Beteiligung mit nachvollziehbaren Entscheidungen.",
      subtitle: "Neue Struktur für Verständigung und Verantwortung.",
      oneLiner:
        "VoiceOpenGov ist die Initiative & Mitgliedschaft. eDebatte ist das Tool: Check → Dossier → Beteiligung → Status.",
      lead: {
        pre: "VoiceOpenGov ist eine private, unabhängige",
        highlight1: "Initiative",
        mid1: "für eine neue",
        highlight2: "Struktur",
        mid2: "des",
        highlight3: "Wandels",
        post: "– offen, nachvollziehbar, anschlussfähig.",
      },
      focus:
        "Mitgliedschaft für Reichweite – eDebatte für nachvollziehbare Entscheidungen.",
      scalable:
        "Dafür suchen wir Fürsprecher, Unterstützer und Empfehlende – damit wir grenzübergreifend voneinander lernen und Entscheidungen besser verstehen.",
      badges: ["Community-finanziert", "Keine Werbung", "Keine Datenverkäufe"],
      ctas: {
        join: "Kostenfrei mitwirken",
        how: "So funktioniert’s",
        support: "Unterstützen",
      },
      more: {
        label: "Weiter interessiert?",
        edebatte: "eDebatte eintragen",
        preorder: "Trilogie vorbestellen",
      },
      micro: {
        line1: "Mobil in 3 Minuten • Double-Opt-In • Anonym nach außen",
        line2: "Keine Einzelprofile • Keine Rohdaten • Keine Stimmvorteile durch Unterstützung",
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
          title: "Strukturierte Entscheidungsdimensionen",
          body: "Ziel, Wirkung, Kosten, Zeit, Risiken, Zuständigkeit.",
        },
        {
          title: "Klare Verantwortungszuordnung",
          body: "Verantwortliche Stellen werden benannt und dokumentiert.",
        },
        {
          title: "Formaler Berichtsteil",
          body: "Beschluss, Begründung, Status – nachvollziehbar im Bericht.",
        },
      ],
      highlightLabels: {
        focus: "Fokus",
        scalable: "Skalierung",
        mobility: "Mobil",
      },
    },
    foundations: {
      label: "Grundlagen",
      title: "Band I–III (in Arbeit)",
      subtitle: "Vorabkapitel + Updates per Newsletter",
      bandLine: "Band I · Band II · Band III",
      bandHint: "Theorie, Modell und Methode – Veröffentlichung in Arbeit.",
      bandLabel: "Band",
      items: [
        {
          title: "Weißbuch",
          subtitle: "Problemraum & Anforderungen",
          body:
            "Analyse struktureller Herausforderungen moderner Beteiligung – institutionelle Überlastung, Informationsfragmentierung und fehlende Status-Transparenz.",
          href: "/grundlagen/weissbuch",
          cta: "Mehr erfahren →",
        },
        {
          title: "Legitimation 2.0",
          subtitle: "Governance-Modell & Legitimationslogik",
          body:
            "Ein Governance-Modell für prüfbare Entscheidungen, dokumentierte Entscheidungsdimensionen und nachvollziehbare Verantwortung.",
          href: "/grundlagen/legitimation-2-0",
          cta: "Mehr erfahren →",
        },
        {
          title: "RePro",
          subtitle: "Referenzprozess & Operationalisierung",
          body:
            "RePro übersetzt das Modell in einen klaren Prozess, der bei VoiceOpenGov mit eDebatte konsequent umgesetzt wird.",
          href: "/grundlagen/repro",
          cta: "Mehr erfahren →",
        },
      ],
      footerNote: "Vorbestellung möglich · Infos per Newsletter · Unterstützung willkommen.",
      architectureLabel: "Architektur",
      architectureFlow: ["Weißbuch", "Legitimation 2.0", "RePro"],
      architectureStrong: "VoiceOpenGov",
      ctaTitle: "Vom Modell zur Mitwirkung",
      ctaBody:
        "Die veröffentlichte Architektur wird in VoiceOpenGov operationalisiert – mobil, nachvollziehbar und statusgeführt.",
      ctaButton: "Zum Formular",
    },
    decisionCard: {
      label: "Entscheidungslogik",
      tag: "Civic-Level",
      title: "Civic-Level: 5 Optionen",
      steps: [
        "1. Informieren",
        "2. Feedback einholen",
        "3. Mitgestalten",
        "4. Entscheiden",
        "5. Umsetzung begleiten",
      ],
      note: "Realistische Zahlen: Beiträge, Reichweite und Status werden im Bericht ausgewiesen.",
    },
    membership: {
      label: "Mitgliedschaft",
      title: "Kostenfrei beitreten",
      subtitle:
        "Mitgliedschaft beantragen (kostenfrei, Double-Opt-In). Optional Beitrag wählen – so wachsen wir schneller.",
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
      locationVisibility: "Anonymität nach außen",
      public: "Öffentlich",
      private: "Privat",
      visibilityHint:
        "Wir zeigen nur Orts-Summen, keine Einzelprofile oder Rohdaten.",
      logoUrl: "Logo-Link (optional)",
      avatarUpload: "Profilfoto hochladen (optional)",
      previewLabel: "Vorschau",
      selectedLabel: "Ausgewählt: {name}",
      imageHint: "Max. 2 MB, JPG/PNG. Hinweis: Base64 vergrößert den Upload.",
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
        "Geschlossener Kreislauf: Mitgliedschaft beantragen (kostenfrei) → Beitrag wählen (optional) → schneller wachsen. Keine Stimmvorteile.",
      supportCardCta: "Beitragsrechner öffnen",
      step1Cta: "Mitwirken",
      step1Hint: "Schritt 1: E-Mail eintragen. Schritt 2 erscheint danach.",
      step2Label: "Schritt 2",
      step2Hint: "Bitte ergänze die restlichen Angaben.",
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
      membershipFree: "Mitgliedschaft ist kostenfrei und stärkt unsere Reichweite.",
      supportNoteBefore:
        "Unterstützung ist freiwillig. Jeder Beitrag zählt, damit wir schneller wachsen – Details findest du unter",
      supportNoteLink: "Unterstützen",
      supportNoteAfter: "oder per Mail an",
      publicPrivateNote:
        "Anonym nach außen: öffentlich sind nur Orts-Summen (keine Einzelprofile, keine Rohdaten).",
    },
    supportSection: {
      label: "Unterstützen",
      title: "Freiwillig unterstützen – Beitrag wählen, Reichweite ausbauen.",
      body:
        "Mitgliedschaft ist kostenfrei; jeder Beitrag hilft beim Wachstum. Als private Initiative stellen wir keine Spendenquittungen aus.",
      ctaSupport: "Beitragsrechner",
      ctaQuestions: "Fragen stellen",
    },
    supportAfterCta: {
      title: "Jetzt kostenfrei beitreten",
      body: "Mit oder ohne Beitrag: Die Mitgliedschaft ist kostenfrei und zählt für die Reichweite.",
      cta: "Zur Anmeldung",
    },
    supportCalculator: {
      label: "Freiwillige Unterstützung",
      title: "Beitragsrechner",
      body:
        "Ein Richtwert auf Basis deines Haushalts. Mitgliedschaft bleibt kostenfrei; jeder Beitrag ist freiwillig und zählt.",
      lockedTitle: "Beitragsrechner",
      lockedBody: "Bitte zuerst deine E-Mail bei der Mitgliedschaft eintragen, dann öffnet sich der Rechner.",
      lockedCta: "E-Mail eintragen",
      net: "Haushaltsnetto (monatlich)",
      rent: "Warmmiete (monatlich)",
      household: "Haushaltsgröße (ab 16 J.)",
      interval: "Intervall",
      monthly: "Monatlich",
      once: "Einmalig",
      presets: "Schnellwahl",
      suggestion: "Vorschlag pro Person",
      perPerson: "Betrag pro Person",
      total: "Gesamtbeitrag",
      note: "Richtwert, jederzeit anpassbar. Keine Stimmvorteile.",
      peopleTitle: "Personen (E-Mail-Liste)",
      peopleHint: "Pro Person bitte Name und E-Mail eintragen.",
      personLabel: "Person {n}",
      personName: "Name",
      personEmail: "E-Mail",
      mailListLabel: "Mail-Liste pro Person",
      mailListHint: "Wird automatisch aus den Angaben erzeugt.",
    },
    supportBank: {
      title: "Bankverbindung",
      body: "Für deinen Beitrag. Bitte im Verwendungszweck nur das Nötigste angeben.",
      labels: {
        recipient: "Kontoinhaber",
        bank: "Bank",
        iban: "IBAN",
        bic: "BIC",
        reference: "Verwendungszweck",
      },
      contact: {
        title: "Kontakt aufnehmen",
        body: "Kurze Anfrage für die Bankdaten. Name und Betreff genügen.",
        firstName: "Vorname",
        lastName: "Nachname",
        subject: "Betreff",
        subjectPlaceholder: "Bitte Bankdaten zusenden",
        humanCheck: "Ich bin ein Mensch.",
        submit: "E-Mail vorbereiten",
        errorRequired: "Bitte Vorname, Nachname und Betreff ausfüllen.",
        errorHuman: "Bitte den Human-Check bestätigen.",
        mailIntro: "Hallo,",
        mailName: "Name:",
        mailSubject: "Betreff:",
        mailEmail: "Mitglieds-E-Mail:",
        mailOutro: "Bitte sendet mir die Bankdaten. Vielen Dank!",
      },
      referenceHint: "{bankRefPrefix} optionaler Hinweis (z. B. Stadt oder Projekt)",
      noDetails: "Bankdaten senden wir dir gern auf Anfrage.",
      afterNote:
        "Unterstützung ist freiwillig, nicht zweckgebunden für Stimmrechte und wird transparent dokumentiert. Keine Spendenquittungen (private Initiative).",
    },
  },
  en: {
    hero: {
      badge: "Structured participation",
      title: "VoiceOpenGov — participation with traceable decisions.",
      subtitle: "A new structure for understanding and responsibility.",
      oneLiner:
        "VoiceOpenGov is the initiative & membership. eDebatte is the tool: Check → Dossier → Participation → Status.",
      lead: {
        pre: "VoiceOpenGov is a private, independent",
        highlight1: "initiative",
        mid1: "for a new",
        highlight2: "structure",
        mid2: "of",
        highlight3: "change",
        post: "— open, traceable, and connective.",
      },
      focus: "Membership for reach — eDebatte for traceable decisions.",
      scalable:
        "We are looking for advocates, supporters, and recommenders so we can learn across borders and better understand decisions.",
      badges: ["Community-funded", "No ads", "No data sales"],
      ctas: {
        join: "Join for free",
        how: "How it works",
        support: "Support",
      },
      more: {
        label: "Further interested?",
        edebatte: "Sign up for eDebatte",
        preorder: "Preorder the trilogy",
      },
      micro: {
        line1: "Mobile in 3 minutes • Double opt-in • Anonymous externally",
        line2: "No individual profiles • No raw data • No voting advantage through support",
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
          title: "Structured decision dimensions",
          body: "Goal, impact, cost, time, risks, responsibility.",
        },
        {
          title: "Clear responsibility assignment",
          body: "Responsible entities are named and documented.",
        },
        {
          title: "Formal report section",
          body: "Decision, reasoning, status — traceable in the report.",
        },
      ],
      highlightLabels: {
        focus: "Focus",
        scalable: "Scale",
        mobility: "Mobility",
      },
    },
    foundations: {
      label: "Foundations",
      title: "Volumes I–III (in progress)",
      subtitle: "Early chapters + updates via newsletter",
      bandLine: "Volume I · Volume II · Volume III",
      bandHint: "Theory, model and method — release in progress.",
      bandLabel: "Volume",
      items: [
        {
          title: "Weißbuch",
          subtitle: "Problem space & requirements",
          body:
            "Analysis of structural challenges of modern participation — institutional overload, fragmented information, and missing status transparency.",
          href: "/grundlagen/weissbuch",
          cta: "Learn more →",
        },
        {
          title: "Legitimation 2.0",
          subtitle: "Governance model & legitimacy logic",
          body:
            "A governance model for verifiable decisions, documented decision dimensions, and accountable responsibility.",
          href: "/grundlagen/legitimation-2-0",
          cta: "Learn more →",
        },
        {
          title: "RePro",
          subtitle: "Reference process & operationalization",
          body:
            "RePro translates the model into a clear process that is consistently implemented at VoiceOpenGov with eDebatte.",
          href: "/grundlagen/repro",
          cta: "Learn more →",
        },
      ],
      footerNote: "Preorders possible · Updates via newsletter · Support appreciated.",
      architectureLabel: "Architecture",
      architectureFlow: ["Weißbuch", "Legitimation 2.0", "RePro"],
      architectureStrong: "VoiceOpenGov",
      ctaTitle: "From model to participation",
      ctaBody:
        "The published architecture is operationalized in VoiceOpenGov — mobile, traceable, and status-guided.",
      ctaButton: "Go to the form",
    },
    decisionCard: {
      label: "Decision logic",
      tag: "Civic level",
      title: "Civic level: 5 options",
      steps: [
        "1. Inform",
        "2. Gather feedback",
        "3. Co-design",
        "4. Decide",
        "5. Follow implementation",
      ],
      note: "Realistic figures: contributions, reach, and status are reported.",
    },
    membership: {
      label: "Membership",
      title: "Join for free",
      subtitle:
        "Apply for membership (free, double opt-in). Optionally choose a contribution — it helps us grow faster.",
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
      locationVisibility: "External anonymity",
      public: "Public",
      private: "Private",
      visibilityHint:
        "We show city totals only — no individual profiles or raw data.",
      logoUrl: "Logo link (optional)",
      avatarUpload: "Upload profile photo (optional)",
      previewLabel: "Preview",
      selectedLabel: "Selected: {name}",
      imageHint: "Max. 2 MB, JPG/PNG. Note: Base64 increases payload size.",
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
        "Closed loop: apply for membership (free) → choose a contribution (optional) → grow faster. No voting advantage.",
      supportCardCta: "Open contribution calculator",
      step1Cta: "Join",
      step1Hint: "Step 1: enter your email. Step 2 appears next.",
      step2Label: "Step 2",
      step2Hint: "Please add the remaining details.",
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
      membershipFree: "Membership is free and expands our reach.",
      supportNoteBefore:
        "Support is voluntary. Every contribution helps us grow faster — details at",
      supportNoteLink: "Support",
      supportNoteAfter: "or by email at",
      publicPrivateNote:
        "Anonymous externally: public visibility is limited to city totals (no individual profiles, no raw data).",
    },
    supportSection: {
      label: "Support",
      title: "Support voluntarily — choose a contribution, build reach.",
      body:
        "Membership is free; every contribution helps us grow. As a private initiative, we cannot issue donation receipts.",
      ctaSupport: "Contribution calculator",
      ctaQuestions: "Ask a question",
    },
    supportAfterCta: {
      title: "Join for free now",
      body: "With or without a contribution: membership is free and counts toward reach.",
      cta: "Go to join",
    },
    supportCalculator: {
      label: "Voluntary support",
      title: "Contribution calculator",
      body:
        "A guideline based on your household. Membership stays free; every contribution is voluntary and counts.",
      lockedTitle: "Contribution calculator",
      lockedBody: "Please enter your membership email first to open the calculator.",
      lockedCta: "Enter email",
      net: "Household net income (monthly)",
      rent: "Warm rent (monthly)",
      household: "Household size (16+)",
      interval: "Interval",
      monthly: "Monthly",
      once: "One-time",
      presets: "Quick picks",
      suggestion: "Suggested per person",
      perPerson: "Amount per person",
      total: "Total contribution",
      note: "Guideline, adjustable anytime. No voting advantages.",
      peopleTitle: "People (email list)",
      peopleHint: "Please add name and email for each person.",
      personLabel: "Person {n}",
      personName: "Name",
      personEmail: "Email",
      mailListLabel: "Mail list per person",
      mailListHint: "Generated automatically from the inputs.",
    },
    supportBank: {
      title: "Bank details",
      body: "For your contribution. Please keep the payment reference to the essentials.",
      labels: {
        recipient: "Account holder",
        bank: "Bank",
        iban: "IBAN",
        bic: "BIC",
        reference: "Reference",
      },
      contact: {
        title: "Contact us",
        body: "Short request for bank details. Name and subject are enough.",
        firstName: "First name",
        lastName: "Last name",
        subject: "Subject",
        subjectPlaceholder: "Please send bank details",
        humanCheck: "I am human.",
        submit: "Prepare email",
        errorRequired: "Please fill first name, last name, and subject.",
        errorHuman: "Please confirm the human check.",
        mailIntro: "Hello,",
        mailName: "Name:",
        mailSubject: "Subject:",
        mailEmail: "Membership email:",
        mailOutro: "Please send me the bank details. Thank you!",
      },
      referenceHint: "{bankRefPrefix} optional note (e.g. city or project)",
      noDetails: "We are happy to share bank details on request.",
      afterNote:
        "Support is voluntary, not tied to voting rights, and documented transparently. No donation receipts (private initiative).",
    },
  },
  fr: {
    hero: {
      badge: "Participation structurée",
      title: "VoiceOpenGov — participation avec des décisions traçables.",
      subtitle: "Neutre, structurée, pilotée par le statut.",
      oneLiner:
        "VoiceOpenGov est l’initiative et l’adhésion. eDebatte est l’outil : Check → Dossier → Participation → Statut.",
      lead: {
        pre: "VoiceOpenGov est une",
        highlight1: "architecture de l'information",
        mid1: "pour la participation : options,",
        highlight2: "justification",
        mid2: "et",
        highlight3: "statut",
        post: "sont rendus visibles.",
      },
      focus: "Participation entre les élections — comme architecture d'information : options, justification, statut.",
      scalable: "Documentée, comparable, réutilisable.",
      badges: ["Financé par la communauté", "Sans publicité", "Pas de vente de données"],
      ctas: {
        join: "Participer gratuitement sur mobile",
        how: "Comment ça marche",
        support: "Soutenir librement",
      },
      more: {
        label: "Plus intéressé ?",
        edebatte: "S'inscrire à eDebatte",
        preorder: "Précommander la trilogie",
      },
      micro: {
        line1: "Mobile en 3 minutes • Double opt-in • Anonyme vers l'extérieur",
        line2: "Aucun profil individuel • Aucune donnée brute",
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
          title: "Dimensions de décision structurées",
          body: "Objectif, impact, coût, temps, risques, responsabilité.",
        },
        {
          title: "Responsabilités clairement attribuées",
          body: "Les entités responsables sont nommées et documentées.",
        },
        {
          title: "Section de rapport formel",
          body: "Décision, justification, statut — traçables dans le rapport.",
        },
      ],
      highlightLabels: {
        focus: "Focus",
        scalable: "Échelle",
        mobility: "Mobilité",
      },
    },
    foundations: {
      label: "Fondations",
      title: "Les fondations (en préparation)",
      subtitle:
        "Les trois volumes paraîtront bientôt. Précommande possible — infos via la newsletter.",
      bandLine: "Volume I · Volume II · Volume III",
      bandHint: "Théorie, modèle et méthode — publication en cours.",
      bandLabel: "Volume",
      items: [
        {
          title: "Weißbuch",
          subtitle: "Espace-problème & exigences",
          body:
            "Analyse des défis structurels de la participation moderne — surcharge institutionnelle, fragmentation de l'information et manque de transparence du statut.",
          href: "/grundlagen/weissbuch",
          cta: "En savoir plus →",
        },
        {
          title: "Legitimation 2.0",
          subtitle: "Modèle de gouvernance & logique de légitimation",
          body:
            "Un modèle de gouvernance pour des décisions vérifiables, des dimensions de décision documentées et une responsabilité traçable.",
          href: "/grundlagen/legitimation-2-0",
          cta: "En savoir plus →",
        },
        {
          title: "RePro",
          subtitle: "Processus de référence & opérationnalisation",
          body:
            "Opérationnalisation méthodique : Check → Dossier → Participation → Statut — comme logique décisionnelle formalisée.",
          href: "/grundlagen/repro",
          cta: "En savoir plus →",
        },
      ],
      footerNote: "Précommande possible · Infos via la newsletter · Soutien bienvenu.",
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
      title: "Niveau civique : 5 options",
      steps: [
        "1. Informer",
        "2. Recueillir des retours",
        "3. Co-construire",
        "4. Décider",
        "5. Suivre la mise en œuvre",
      ],
      note: "Chiffres réalistes : contributions, portée et statut sont indiqués dans le rapport.",
    },
    membership: {
      label: "Adhésion",
      title: "Rejoindre gratuitement",
      subtitle:
        "Adhésion gratuite (double opt-in). Contribution optionnelle — elle nous aide à grandir plus vite.",
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
      locationVisibility: "Anonymat externe",
      public: "Public",
      private: "Privé",
      visibilityHint:
        "Nous affichons uniquement des totaux par ville, sans profils individuels ni données brutes.",
      logoUrl: "Lien du logo (optionnel)",
      avatarUpload: "Téléverser une photo de profil (optionnel)",
      previewLabel: "Aperçu",
      selectedLabel: "Sélectionné : {name}",
      imageHint: "Max. 2 Mo, JPG/PNG. Note : le Base64 augmente la taille de l'envoi.",
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
        "Boucle fermée : adhérer (gratuit) → choisir une contribution (optionnelle) → grandir plus vite. Aucun avantage de vote.",
      supportCardCta: "Ouvrir le calculateur",
      step1Cta: "Participer",
      step1Hint: "Étape 1 : e-mail. L’étape 2 apparaît ensuite.",
      step2Label: "Étape 2",
      step2Hint: "Merci d’ajouter les informations restantes.",
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
      membershipFree: "L'adhésion est gratuite et renforce notre portée.",
      supportNoteBefore:
        "Le soutien est volontaire. Chaque contribution nous aide à grandir plus vite — détails sur",
      supportNoteLink: "Soutenir",
      supportNoteAfter: "ou par e-mail à",
      publicPrivateNote:
        "Anonyme vers l'extérieur : seuls des totaux par ville sont publics (aucun profil individuel, aucune donnée brute).",
    },
    supportSection: {
      label: "Soutenir",
      title: "Soutenir volontairement — choisir une contribution, élargir la portée.",
      body:
        "L'adhésion est gratuite ; chaque contribution nous aide à grandir. En tant qu'initiative privée, nous ne délivrons pas de reçus fiscaux.",
      ctaSupport: "Calculateur de contribution",
      ctaQuestions: "Poser une question",
    },
    supportAfterCta: {
      title: "Rejoindre gratuitement maintenant",
      body: "Avec ou sans contribution : l’adhésion est gratuite et compte pour la portée.",
      cta: "Aller à l’inscription",
    },
    supportCalculator: {
      label: "Calculateur de contribution",
      title: "Estimer une contribution",
      body:
        "Une indication basée sur votre foyer. L'adhésion reste gratuite ; chaque contribution est volontaire et compte.",
      lockedTitle: "Estimer une contribution",
      lockedBody: "Veuillez d’abord saisir votre e-mail d’adhésion pour ouvrir le calculateur.",
      lockedCta: "Saisir l’e-mail",
      net: "Revenu net du foyer (mensuel)",
      rent: "Loyer charges comprises (mensuel)",
      household: "Taille du foyer (16+)",
      interval: "Périodicité",
      monthly: "Mensuel",
      once: "Unique",
      presets: "Choix rapides",
      suggestion: "Suggestion par personne",
      perPerson: "Montant par personne",
      total: "Contribution totale",
      note: "Repère ajustable à tout moment. Aucun avantage de vote.",
      peopleTitle: "Personnes (liste e-mail)",
      peopleHint: "Veuillez saisir nom et e-mail pour chaque personne.",
      personLabel: "Personne {n}",
      personName: "Nom",
      personEmail: "E-mail",
      mailListLabel: "Liste e-mail par personne",
      mailListHint: "Générée automatiquement à partir des saisies.",
    },
    supportBank: {
      title: "Coordonnées bancaires",
      body: "Pour votre contribution. Merci de limiter le libellé au strict nécessaire.",
      labels: {
        recipient: "Titulaire",
        bank: "Banque",
        iban: "IBAN",
        bic: "BIC",
        reference: "Libellé",
      },
      contact: {
        title: "Nous contacter",
        body: "Courte demande pour les coordonnées bancaires. Nom et objet suffisent.",
        firstName: "Prénom",
        lastName: "Nom",
        subject: "Objet",
        subjectPlaceholder: "Merci d’envoyer les coordonnées bancaires",
        humanCheck: "Je suis humain.",
        submit: "Préparer l’e-mail",
        errorRequired: "Merci de renseigner prénom, nom et objet.",
        errorHuman: "Merci de confirmer le contrôle humain.",
        mailIntro: "Bonjour,",
        mailName: "Nom :",
        mailSubject: "Objet :",
        mailEmail: "E-mail d’adhésion :",
        mailOutro: "Merci de m’envoyer les coordonnées bancaires. Merci !",
      },
      referenceHint: "{bankRefPrefix} note optionnelle (ex. ville ou projet)",
      noDetails: "Nous partageons les coordonnées sur demande.",
      afterNote:
        "Le soutien est volontaire, sans avantage de vote et documenté de façon transparente. Pas de reçus fiscaux (initiative privée).",
    },
  },
  pl: {
    hero: {
      badge: "Ustrukturyzowany udział",
      title: "VoiceOpenGov — udział z przejrzystymi decyzjami.",
      subtitle: "Neutralny, uporządkowany, z widocznym statusem.",
      oneLiner:
        "VoiceOpenGov to inicjatywa i członkostwo. eDebatte to narzędzie: Check → Dossier → Uczestnictwo → Status.",
      lead: {
        pre: "VoiceOpenGov to",
        highlight1: "architektura informacji",
        mid1: "dla udziału: opcje,",
        highlight2: "uzasadnienie",
        mid2: "i",
        highlight3: "status",
        post: "stają się widoczne.",
      },
      focus: "Udział między wyborami — jako architektura informacji: opcje, uzasadnienie, status.",
      scalable: "Udokumentowane, porównywalne, wielokrotnego użytku.",
      badges: ["Finansowane przez społeczność", "Bez reklam", "Bez sprzedaży danych"],
      ctas: {
        join: "Dołącz bezpłatnie na smartfonie",
        how: "Jak to działa",
        support: "Wesprzyj dobrowolnie",
      },
      more: {
        label: "Chcesz więcej?",
        edebatte: "Zapisz się do eDebatte",
        preorder: "Zamów trylogię",
      },
      micro: {
        line1: "Mobilnie w 3 minuty • Double opt-in • Anonimowo na zewnątrz",
        line2: "Bez profili indywidualnych • Bez surowych danych",
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
          title: "Strukturalne wymiary decyzji",
          body: "Cel, wpływ, koszt, czas, ryzyka, odpowiedzialność.",
        },
        {
          title: "Jasne przypisanie odpowiedzialności",
          body: "Odpowiedzialne podmioty są wskazane i udokumentowane.",
        },
        {
          title: "Formalna część raportu",
          body: "Decyzja, uzasadnienie, status — w raporcie.",
        },
      ],
      highlightLabels: {
        focus: "Skupienie",
        scalable: "Skalowanie",
        mobility: "Mobilność",
      },
    },
    foundations: {
      label: "Podstawy",
      title: "Podstawy (w przygotowaniu)",
      subtitle:
        "Trzy tomy zostaną opublikowane wkrótce. Możliwa przedsprzedaż — informacje w newsletterze.",
      bandLine: "Tom I · Tom II · Tom III",
      bandHint: "Teoria, model i metoda — publikacja w przygotowaniu.",
      bandLabel: "Tom",
      items: [
        {
          title: "Weißbuch",
          subtitle: "Przestrzeń problemu i wymagania",
          body:
            "Analiza strukturalnych wyzwań nowoczesnego uczestnictwa — przeciążenie instytucji, fragmentacja informacji i brak przejrzystości statusu.",
          href: "/grundlagen/weissbuch",
          cta: "Dowiedz się więcej →",
        },
        {
          title: "Legitimation 2.0",
          subtitle: "Model zarządzania i logika legitymizacji",
          body:
            "Model zarządzania dla weryfikowalnych decyzji, udokumentowanych wymiarów decyzji i odpowiedzialności.",
          href: "/grundlagen/legitimation-2-0",
          cta: "Dowiedz się więcej →",
        },
        {
          title: "RePro",
          subtitle: "Proces referencyjny i operacjonalizacja",
          body:
            "Metodyczna operacjonalizacja: Check → Dossier → Uczestnictwo → Status — jako sformalizowana logika decyzji.",
          href: "/grundlagen/repro",
          cta: "Dowiedz się więcej →",
        },
      ],
      footerNote: "Przedsprzedaż możliwa · Informacje w newsletterze · Wsparcie mile widziane.",
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
      title: "Poziom obywatelski: 5 opcji",
      steps: [
        "1. Informuj",
        "2. Zbieraj opinie",
        "3. Współtwórz",
        "4. Decyduj",
        "5. Śledź wdrożenie",
      ],
      note: "Realistyczne liczby: wkłady, zasięg i status są wykazywane w raporcie.",
    },
    membership: {
      label: "Członkostwo",
      title: "Dołącz bezpłatnie",
      subtitle:
        "Członkostwo bezpłatne (double opt-in). Opcjonalnie wybierz składkę — pomaga nam rosnąć szybciej.",
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
      locationVisibility: "Anonimowo na zewnątrz",
      public: "Publiczne",
      private: "Prywatne",
      visibilityHint:
        "Pokazujemy tylko sumy dla miast, bez profili indywidualnych i surowych danych.",
      logoUrl: "Link do logo (opcjonalnie)",
      avatarUpload: "Prześlij zdjęcie profilowe (opcjonalnie)",
      previewLabel: "Podgląd",
      selectedLabel: "Wybrano: {name}",
      imageHint: "Maks. 2 MB, JPG/PNG. Uwaga: Base64 zwiększa rozmiar.",
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
        "Zamknięty obieg: dołącz (bezpłatnie) → wybierz składkę (opcjonalnie) → rośniemy szybciej. Bez korzyści wyborczych.",
      supportCardCta: "Otwórz kalkulator składki",
      step1Cta: "Dołącz",
      step1Hint: "Krok 1: e-mail. Krok 2 pojawi się dalej.",
      step2Label: "Krok 2",
      step2Hint: "Uzupełnij pozostałe dane.",
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
      membershipFree: "Członkostwo jest bezpłatne i zwiększa nasz zasięg.",
      supportNoteBefore:
        "Wsparcie jest dobrowolne. Każdy wkład pomaga nam rosnąć szybciej — szczegóły na",
      supportNoteLink: "Wesprzyj",
      supportNoteAfter: "lub e-mailem na",
      publicPrivateNote:
        "Anonimowo na zewnątrz: publiczne są tylko sumy miejskie (bez profili indywidualnych, bez surowych danych).",
    },
    supportSection: {
      label: "Wesprzyj",
      title: "Wesprzyj dobrowolnie — wybierz składkę, buduj zasięg.",
      body:
        "Członkostwo jest bezpłatne; każdy wkład pomaga nam rosnąć. Jako inicjatywa prywatna nie wystawiamy potwierdzeń darowizn.",
      ctaSupport: "Kalkulator składki",
      ctaQuestions: "Zadaj pytanie",
    },
    supportAfterCta: {
      title: "Dołącz bezpłatnie teraz",
      body: "Z wkładem lub bez: członkostwo jest bezpłatne i liczy się dla zasięgu.",
      cta: "Do formularza",
    },
    supportCalculator: {
      label: "Kalkulator składki",
      title: "Oszacuj składkę",
      body:
        "Wskaźnik na podstawie gospodarstwa domowego. Członkostwo jest bezpłatne; każda składka jest dobrowolna i się liczy.",
      lockedTitle: "Oszacuj składkę",
      lockedBody: "Najpierw wpisz e-mail członkowski, aby otworzyć kalkulator.",
      lockedCta: "Wpisz e-mail",
      net: "Dochód netto gospodarstwa (miesięcznie)",
      rent: "Czynsz z opłatami (miesięcznie)",
      household: "Wielkość gospodarstwa (16+)",
      interval: "Interwał",
      monthly: "Miesięcznie",
      once: "Jednorazowo",
      presets: "Szybki wybór",
      suggestion: "Propozycja na osobę",
      perPerson: "Kwota na osobę",
      total: "Łączna składka",
      note: "Wskaźnik, do zmiany w każdej chwili. Bez przewagi w głosowaniu.",
      peopleTitle: "Osoby (lista e-mail)",
      peopleHint: "Wpisz imię, nazwisko i e-mail dla każdej osoby.",
      personLabel: "Osoba {n}",
      personName: "Imię i nazwisko",
      personEmail: "E-mail",
      mailListLabel: "Lista e-mail na osobę",
      mailListHint: "Tworzona automatycznie z danych.",
    },
    supportBank: {
      title: "Dane bankowe",
      body: "Na Twój wkład. W tytule przelewu podaj tylko to, co konieczne.",
      labels: {
        recipient: "Właściciel konta",
        bank: "Bank",
        iban: "IBAN",
        bic: "BIC",
        reference: "Tytuł przelewu",
      },
      contact: {
        title: "Skontaktuj się",
        body: "Krótka prośba o dane bankowe. Wystarczy imię, nazwisko i temat.",
        firstName: "Imię",
        lastName: "Nazwisko",
        subject: "Temat",
        subjectPlaceholder: "Proszę o dane bankowe",
        humanCheck: "Jestem człowiekiem.",
        submit: "Przygotuj e-mail",
        errorRequired: "Wpisz imię, nazwisko i temat.",
        errorHuman: "Potwierdź human check.",
        mailIntro: "Dzień dobry,",
        mailName: "Imię i nazwisko:",
        mailSubject: "Temat:",
        mailEmail: "E-mail członkowski:",
        mailOutro: "Proszę o przesłanie danych bankowych. Dziękuję!",
      },
      referenceHint: "{bankRefPrefix} opcjonalna notatka (np. miasto lub projekt)",
      noDetails: "Dane bankowe prześlemy na prośbę.",
      afterNote:
        "Wsparcie jest dobrowolne, niezwiązane z prawami wyborczymi i dokumentowane transparentnie. Brak potwierdzeń darowizn (inicjatywa prywatna).",
    },
  },
  es: {
    hero: {
      badge: "Participación estructurada",
      title: "VoiceOpenGov — participación con decisiones trazables.",
      subtitle: "Neutral, estructurada, guiada por el estado.",
      oneLiner:
        "VoiceOpenGov es la iniciativa y la membresía. eDebatte es la herramienta: Check → Dossier → Participación → Estado.",
      lead: {
        pre: "VoiceOpenGov es una",
        highlight1: "arquitectura de información",
        mid1: "para la participación: opciones,",
        highlight2: "justificación",
        mid2: "y",
        highlight3: "estado",
        post: "quedan visibles.",
      },
      focus: "Participación entre elecciones — como arquitectura de información: opciones, justificación, estado.",
      scalable: "Documentada, comparable, reutilizable.",
      badges: ["Financiado por la comunidad", "Sin publicidad", "Sin venta de datos"],
      ctas: {
        join: "Participar gratis en móvil",
        how: "Cómo funciona",
        support: "Apoyar voluntariamente",
      },
      more: {
        label: "¿Quieres más?",
        edebatte: "Inscribirse en eDebatte",
        preorder: "Preordenar la trilogía",
      },
      micro: {
        line1: "Móvil en 3 minutos • Double opt-in • Anónimo hacia fuera",
        line2: "Sin perfiles individuales • Sin datos brutos",
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
          title: "Dimensiones de decisión estructuradas",
          body: "Objetivo, impacto, costo, tiempo, riesgos, responsabilidad.",
        },
        {
          title: "Asignación clara de responsabilidades",
          body: "Las entidades responsables se nombran y documentan.",
        },
        {
          title: "Sección formal de informe",
          body: "Decisión, justificación, estado — trazables en el informe.",
        },
      ],
      highlightLabels: {
        focus: "Enfoque",
        scalable: "Escala",
        mobility: "Movilidad",
      },
    },
    foundations: {
      label: "Fundamentos",
      title: "Las bases (en preparación)",
      subtitle:
        "Los tres volúmenes se publicarán pronto. Prepedido posible — información vía newsletter.",
      bandLine: "Volumen I · Volumen II · Volumen III",
      bandHint: "Teoría, modelo y método — publicación en curso.",
      bandLabel: "Volumen",
      items: [
        {
          title: "Weißbuch",
          subtitle: "Espacio del problema y requisitos",
          body:
            "Análisis de los desafíos estructurales de la participación moderna: sobrecarga institucional, fragmentación de la información y falta de transparencia de estado.",
          href: "/grundlagen/weissbuch",
          cta: "Más información →",
        },
        {
          title: "Legitimation 2.0",
          subtitle: "Modelo de gobernanza y lógica de legitimación",
          body:
            "Un modelo de gobernanza para decisiones verificables, dimensiones de decisión documentadas y responsabilidad trazable.",
          href: "/grundlagen/legitimation-2-0",
          cta: "Más información →",
        },
        {
          title: "RePro",
          subtitle: "Proceso de referencia y operacionalización",
          body:
            "Operacionalización metodológica: Check → Dossier → Participación → Estado — como lógica de decisión formalizada.",
          href: "/grundlagen/repro",
          cta: "Más información →",
        },
      ],
      footerNote: "Prepedido posible · Información vía newsletter · Apoyo bienvenido.",
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
      title: "Nivel cívico: 5 opciones",
      steps: [
        "1. Informar",
        "2. Recoger feedback",
        "3. Co-diseñar",
        "4. Decidir",
        "5. Seguir implementación",
      ],
      note: "Cifras realistas: aportes, alcance y estado se informan en el reporte.",
    },
    membership: {
      label: "Membresía",
      title: "Unirse gratis",
      subtitle:
        "Afiliación gratuita (doble opt-in). Contribución opcional: nos ayuda a crecer más rápido.",
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
      locationVisibility: "Anonimato hacia fuera",
      public: "Público",
      private: "Privado",
      visibilityHint:
        "Mostramos solo totales por ciudad, sin perfiles individuales ni datos brutos.",
      logoUrl: "Enlace del logo (opcional)",
      avatarUpload: "Subir foto de perfil (opcional)",
      previewLabel: "Vista previa",
      selectedLabel: "Seleccionado: {name}",
      imageHint: "Máx. 2 MB, JPG/PNG. Nota: Base64 aumenta el tamaño.",
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
        "Ciclo cerrado: unirte (gratis) → elegir contribución (opcional) → crecer más rápido. Sin ventajas de voto.",
      supportCardCta: "Abrir calculadora",
      step1Cta: "Participar",
      step1Hint: "Paso 1: e-mail. El paso 2 aparece después.",
      step2Label: "Paso 2",
      step2Hint: "Añade el resto de datos.",
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
      membershipFree: "La membresía es gratuita y amplía nuestro alcance.",
      supportNoteBefore:
        "El apoyo es voluntario. Cada contribución nos ayuda a crecer más rápido — detalles en",
      supportNoteLink: "Apoyar",
      supportNoteAfter: "o por e-mail a",
      publicPrivateNote:
        "Anónimo hacia fuera: solo totales por ciudad (sin perfiles individuales, sin datos brutos).",
    },
    supportSection: {
      label: "Apoyar",
      title: "Apoya voluntariamente — elige contribución, amplía el alcance.",
      body:
        "La membresía es gratuita; cada contribución ayuda a crecer. Como iniciativa privada no emitimos recibos de donación.",
      ctaSupport: "Calculadora de aportes",
      ctaQuestions: "Hacer una pregunta",
    },
    supportAfterCta: {
      title: "Únete gratis ahora",
      body: "Con o sin contribución: la membresía es gratuita y cuenta para el alcance.",
      cta: "Ir al registro",
    },
    supportCalculator: {
      label: "Calculadora de aportes",
      title: "Estimar un aporte",
      body:
        "Una referencia basada en tu hogar. La membresía sigue siendo gratuita; cada aporte es voluntario y cuenta.",
      lockedTitle: "Estimar un aporte",
      lockedBody: "Primero ingresa tu e-mail de membresía para abrir la calculadora.",
      lockedCta: "Ingresar e-mail",
      net: "Ingreso neto del hogar (mensual)",
      rent: "Alquiler con gastos (mensual)",
      household: "Tamaño del hogar (16+)",
      interval: "Intervalo",
      monthly: "Mensual",
      once: "Único",
      presets: "Selección rápida",
      suggestion: "Sugerencia por persona",
      perPerson: "Monto por persona",
      total: "Aporte total",
      note: "Guía ajustable en cualquier momento. Sin ventajas de voto.",
      peopleTitle: "Personas (lista de e-mail)",
      peopleHint: "Ingresa nombre y e-mail por persona.",
      personLabel: "Persona {n}",
      personName: "Nombre",
      personEmail: "E-mail",
      mailListLabel: "Lista de e-mail por persona",
      mailListHint: "Se genera automáticamente.",
    },
    supportBank: {
      title: "Datos bancarios",
      body: "Para tu aporte. Mantén la referencia al mínimo necesario.",
      labels: {
        recipient: "Titular de la cuenta",
        bank: "Banco",
        iban: "IBAN",
        bic: "BIC",
        reference: "Concepto",
      },
      contact: {
        title: "Contactar",
        body: "Solicitud breve para los datos bancarios. Nombre y asunto son suficientes.",
        firstName: "Nombre",
        lastName: "Apellido",
        subject: "Asunto",
        subjectPlaceholder: "Por favor envíen los datos bancarios",
        humanCheck: "Soy humano.",
        submit: "Preparar e-mail",
        errorRequired: "Completa nombre, apellido y asunto.",
        errorHuman: "Confirma el control humano.",
        mailIntro: "Hola,",
        mailName: "Nombre:",
        mailSubject: "Asunto:",
        mailEmail: "E-mail de membresía:",
        mailOutro: "Por favor envíen los datos bancarios. Gracias.",
      },
      referenceHint: "{bankRefPrefix} nota opcional (p. ej. ciudad o proyecto)",
      noDetails: "Enviaremos los datos bancarios a solicitud.",
      afterNote:
        "El apoyo es voluntario, no está ligado a derechos de voto y se documenta con transparencia. No hay recibos de donación (iniciativa privada).",
    },
  },
  it: {
    hero: {
      badge: "Partecipazione strutturata",
      title: "VoiceOpenGov — partecipazione con decisioni tracciabili.",
      subtitle: "Neutrale, strutturata, guidata dallo stato.",
      oneLiner:
        "VoiceOpenGov è l'iniziativa e la membership. eDebatte è lo strumento: Check → Dossier → Partecipazione → Stato.",
      lead: {
        pre: "VoiceOpenGov è un'",
        highlight1: "architettura dell'informazione",
        mid1: "per la partecipazione: opzioni,",
        highlight2: "motivazione",
        mid2: "e",
        highlight3: "stato",
        post: "diventano visibili.",
      },
      focus: "Partecipazione tra elezioni — come architettura dell'informazione: opzioni, motivazione, stato.",
      scalable: "Documentata, comparabile, riutilizzabile.",
      badges: ["Finanziato dalla community", "Niente pubblicità", "Nessuna vendita di dati"],
      ctas: {
        join: "Partecipa gratis da mobile",
        how: "Come funziona",
        support: "Sostieni volontariamente",
      },
      more: {
        label: "Vuoi saperne di più?",
        edebatte: "Iscriviti a eDebatte",
        preorder: "Preordina la trilogia",
      },
      micro: {
        line1: "Mobile in 3 minuti • Double opt-in • Anonimo verso l’esterno",
        line2: "Nessun profilo individuale • Nessun dato grezzo",
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
          title: "Dimensioni decisionali strutturate",
          body: "Obiettivo, impatto, costo, tempo, rischi, responsabilità.",
        },
        {
          title: "Assegnazione chiara delle responsabilità",
          body: "Le entità responsabili sono nominate e documentate.",
        },
        {
          title: "Sezione di report formale",
          body: "Decisione, motivazione, stato — tracciabili nel report.",
        },
      ],
      highlightLabels: {
        focus: "Focus",
        scalable: "Scala",
        mobility: "Mobilità",
      },
    },
    foundations: {
      label: "Fondamenti",
      title: "Le basi (in preparazione)",
      subtitle:
        "I tre volumi saranno pubblicati a breve. Preordine possibile — informazioni via newsletter.",
      bandLine: "Volume I · Volume II · Volume III",
      bandHint: "Teoria, modello e metodo — pubblicazione in corso.",
      bandLabel: "Volume",
      items: [
        {
          title: "Weißbuch",
          subtitle: "Spazio del problema e requisiti",
          body:
            "Analisi delle sfide strutturali della partecipazione moderna — sovraccarico istituzionale, frammentazione dell'informazione e mancanza di trasparenza sullo stato.",
          href: "/grundlagen/weissbuch",
          cta: "Scopri di più →",
        },
        {
          title: "Legitimation 2.0",
          subtitle: "Modello di governance e logica di legittimazione",
          body:
            "Un modello di governance per decisioni verificabili, dimensioni decisionali documentate e responsabilità tracciabile.",
          href: "/grundlagen/legitimation-2-0",
          cta: "Scopri di più →",
        },
        {
          title: "RePro",
          subtitle: "Processo di riferimento e operazionalizzazione",
          body:
            "Operazionalizzazione metodica: Check → Dossier → Partecipazione → Stato — come logica decisionale formalizzata.",
          href: "/grundlagen/repro",
          cta: "Scopri di più →",
        },
      ],
      footerNote: "Preordine possibile · Informazioni via newsletter · Supporto gradito.",
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
      title: "Livello civico: 5 opzioni",
      steps: [
        "1. Informare",
        "2. Raccogliere feedback",
        "3. Co-progettare",
        "4. Decidere",
        "5. Seguire l'attuazione",
      ],
      note: "Numeri realistici: contributi, portata e stato sono riportati nel report.",
    },
    membership: {
      label: "Iscrizione",
      title: "Unisciti gratis",
      subtitle:
        "Iscrizione gratuita (double opt-in). Contributo opzionale — ci aiuta a crescere più in fretta.",
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
      locationVisibility: "Anonimato verso l’esterno",
      public: "Pubblico",
      private: "Privato",
      visibilityHint:
        "Mostriamo solo totali per città, senza profili individuali né dati grezzi.",
      logoUrl: "Link logo (opzionale)",
      avatarUpload: "Carica foto profilo (opzionale)",
      previewLabel: "Anteprima",
      selectedLabel: "Selezionato: {name}",
      imageHint: "Max 2 MB, JPG/PNG. Nota: Base64 aumenta la dimensione.",
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
        "Ciclo chiuso: iscrizione (gratuita) → contributo (opzionale) → crescere più in fretta. Nessun vantaggio di voto.",
      supportCardCta: "Apri il calcolatore",
      step1Cta: "Partecipa",
      step1Hint: "Passo 1: e-mail. Il passo 2 appare dopo.",
      step2Label: "Passo 2",
      step2Hint: "Aggiungi le informazioni rimanenti.",
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
      membershipFree: "L'iscrizione è gratuita e aumenta la nostra portata.",
      supportNoteBefore:
        "Il supporto è volontario. Ogni contributo ci aiuta a crescere più in fretta — dettagli su",
      supportNoteLink: "Sostieni",
      supportNoteAfter: "o via e-mail a",
      publicPrivateNote:
        "Anonimo verso l’esterno: pubblici solo i totali per città (nessun profilo individuale, nessun dato grezzo).",
    },
    supportSection: {
      label: "Sostieni",
      title: "Sostieni volontariamente — scegli il contributo, aumenta la portata.",
      body:
        "L'iscrizione è gratuita; ogni contributo aiuta a crescere. Come iniziativa privata non rilasciamo ricevute di donazione.",
      ctaSupport: "Calcolatore del contributo",
      ctaQuestions: "Fai una domanda",
    },
    supportAfterCta: {
      title: "Iscriviti gratis ora",
      body: "Con o senza contributo: l'iscrizione è gratuita e conta per la portata.",
      cta: "Vai all'iscrizione",
    },
    supportCalculator: {
      label: "Calcolatore del contributo",
      title: "Stima un contributo",
      body:
        "Un riferimento basato sul tuo nucleo. L’adesione resta gratuita; ogni contributo è volontario e conta.",
      lockedTitle: "Stima un contributo",
      lockedBody: "Inserisci prima l'e-mail di iscrizione per aprire il calcolatore.",
      lockedCta: "Inserisci e-mail",
      net: "Reddito netto familiare (mensile)",
      rent: "Affitto tutto incluso (mensile)",
      household: "Dimensione del nucleo (16+)",
      interval: "Intervallo",
      monthly: "Mensile",
      once: "Una tantum",
      presets: "Scelta rapida",
      suggestion: "Suggerimento per persona",
      perPerson: "Importo per persona",
      total: "Contributo totale",
      note: "Riferimento modificabile in qualsiasi momento. Nessun vantaggio di voto.",
      peopleTitle: "Persone (lista e-mail)",
      peopleHint: "Inserisci nome ed e-mail per ogni persona.",
      personLabel: "Persona {n}",
      personName: "Nome",
      personEmail: "E-mail",
      mailListLabel: "Lista e-mail per persona",
      mailListHint: "Generata automaticamente.",
    },
    supportBank: {
      title: "Coordinate bancarie",
      body: "Per il tuo contributo. Nella causale indica solo l’essenziale.",
      labels: {
        recipient: "Intestatario",
        bank: "Banca",
        iban: "IBAN",
        bic: "BIC",
        reference: "Causale",
      },
      contact: {
        title: "Contattaci",
        body: "Richiesta breve per i dati bancari. Nome e oggetto bastano.",
        firstName: "Nome",
        lastName: "Cognome",
        subject: "Oggetto",
        subjectPlaceholder: "Per favore inviate i dati bancari",
        humanCheck: "Sono umano.",
        submit: "Prepara e-mail",
        errorRequired: "Inserisci nome, cognome e oggetto.",
        errorHuman: "Conferma il controllo umano.",
        mailIntro: "Ciao,",
        mailName: "Nome:",
        mailSubject: "Oggetto:",
        mailEmail: "E-mail iscrizione:",
        mailOutro: "Per favore inviate i dati bancari. Grazie!",
      },
      referenceHint: "{bankRefPrefix} nota opzionale (es. città o progetto)",
      noDetails: "Invieremo le coordinate bancarie su richiesta.",
      afterNote:
        "Il sostegno è volontario, non legato ai diritti di voto e documentato in modo trasparente. Niente ricevute di donazione (iniziativa privata).",
    },
  },
  tr: {
    hero: {
      badge: "Yapılandırılmış katılım",
      title: "VoiceOpenGov — izlenebilir kararlarla katılım.",
      subtitle: "Tarafsız, yapılandırılmış, durum odaklı.",
      oneLiner:
        "VoiceOpenGov girişim ve üyelik. eDebatte araçtır: Check → Dossier → Katılım → Statü.",
      lead: {
        pre: "VoiceOpenGov bir",
        highlight1: "bilgi mimarisidir",
        mid1: "katılım için: seçenekler,",
        highlight2: "gerekçe",
        mid2: "ve",
        highlight3: "durum",
        post: "görünür olur.",
      },
      focus: "Seçimler arasında katılım — bilgi mimarisi olarak: seçenekler, gerekçe, durum.",
      scalable: "Belgelenmiş, karşılaştırılabilir, yeniden kullanılabilir.",
      badges: ["Topluluk finansmanlı", "Reklam yok", "Veri satışı yok"],
      ctas: {
        join: "Mobilde ücretsiz katıl",
        how: "Nasıl çalışır",
        support: "Gönüllü destekle",
      },
      more: {
        label: "Daha fazlası?",
        edebatte: "eDebatte’ye kaydol",
        preorder: "Trilojiyi ön sipariş ver",
      },
      micro: {
        line1: "Mobilde 3 dakikada • Double opt-in • Dışa karşı anonim",
        line2: "Bireysel profil yok • Ham veri yok",
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
          title: "Yapılandırılmış karar boyutları",
          body: "Hedef, etki, maliyet, süre, riskler, sorumluluk.",
        },
        {
          title: "Net sorumluluk ataması",
          body: "Sorumlu birimler belirtilir ve belgelenir.",
        },
        {
          title: "Resmi rapor bölümü",
          body: "Karar, gerekçe, durum — raporda izlenebilir.",
        },
      ],
      highlightLabels: {
        focus: "Odak",
        scalable: "Ölçek",
        mobility: "Mobilite",
      },
    },
    foundations: {
      label: "Temeller",
      title: "Temeller (hazırlanıyor)",
      subtitle: "Üç cilt yakında yayımlanacak. Ön sipariş mümkün — bilgiler bülten üzerinden.",
      bandLine: "Cilt I · Cilt II · Cilt III",
      bandHint: "Teori, model ve yöntem — yayın sürecinde.",
      bandLabel: "Cilt",
      items: [
        {
          title: "Weißbuch",
          subtitle: "Sorun alanı ve gereksinimler",
          body:
            "Modern katılımın yapısal zorluklarının analizi — kurumsal aşırı yük, bilgi parçalanması ve statü şeffaflığının eksikliği.",
          href: "/grundlagen/weissbuch",
          cta: "Daha fazla bilgi →",
        },
        {
          title: "Legitimation 2.0",
          subtitle: "Yönetişim modeli ve meşruiyet mantığı",
          body:
            "Doğrulanabilir kararlar, belgelenmiş karar boyutları ve izlenebilir sorumluluk için bir yönetişim modeli.",
          href: "/grundlagen/legitimation-2-0",
          cta: "Daha fazla bilgi →",
        },
        {
          title: "RePro",
          subtitle: "Referans süreç ve operasyonelleştirme",
          body:
            "Yöntemsel operasyonelleştirme: Check → Dossier → Katılım → Statü — biçimsel karar mantığı olarak.",
          href: "/grundlagen/repro",
          cta: "Daha fazla bilgi →",
        },
      ],
      footerNote: "Ön sipariş mümkün · Bülten üzerinden bilgi · Destek memnuniyetle.",
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
      title: "Sivil seviye: 5 seçenek",
      steps: [
        "1. Bilgilendir",
        "2. Geri bildirim al",
        "3. Birlikte tasarla",
        "4. Karar ver",
        "5. Uygulamayı izle",
      ],
      note: "Gerçekçi sayılar: katkılar, erişim ve durum raporda gösterilir.",
    },
    membership: {
      label: "Üyelik",
      title: "Ücretsiz katıl",
      subtitle:
        "Üyelik ücretsiz (double opt-in). İsteğe bağlı katkı seç — daha hızlı büyümemize yardım eder.",
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
      locationVisibility: "Dışa karşı anonimlik",
      public: "Kamu",
      private: "Özel",
      visibilityHint:
        "Yalnızca şehir toplamlarını gösteriyoruz, bireysel profil ve ham veri yok.",
      logoUrl: "Logo bağlantısı (isteğe bağlı)",
      avatarUpload: "Profil fotoğrafı yükle (isteğe bağlı)",
      previewLabel: "Önizleme",
      selectedLabel: "Seçildi: {name}",
      imageHint: "Maks. 2 MB, JPG/PNG. Not: Base64 boyutu artırır.",
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
        "Kapalı döngü: üye ol (ücretsiz) → katkı seç (isteğe bağlı) → daha hızlı büyü. Oy avantajı yok.",
      supportCardCta: "Katkı hesaplayıcısını aç",
      step1Cta: "Katıl",
      step1Hint: "1. adım: e-posta. 2. adım sonra görünür.",
      step2Label: "2. adım",
      step2Hint: "Kalan bilgileri tamamlayın.",
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
      membershipFree: "Üyelik ücretsizdir ve erişimimizi büyütür.",
      supportNoteBefore:
        "Destek gönüllüdür. Her katkı daha hızlı büyümemize yardım eder — ayrıntılar",
      supportNoteLink: "Destekle",
      supportNoteAfter: "veya e-posta ile",
      publicPrivateNote:
        "Dışa karşı anonim: kamuya açık olan yalnızca şehir toplamlarıdır (bireysel profil yok, ham veri yok).",
    },
    supportSection: {
      label: "Destekle",
      title: "Gönüllü destekle — katkı seç, erişimi büyüt.",
      body:
        "Üyelik ücretsizdir; her katkı büyümeye yardım eder. Özel bir girişim olduğumuz için bağış makbuzu veremiyoruz.",
      ctaSupport: "Katkı hesaplayıcı",
      ctaQuestions: "Soru sor",
    },
    supportAfterCta: {
      title: "Şimdi ücretsiz katıl",
      body: "Katkı olsun ya da olmasın: üyelik ücretsizdir ve erişim için sayılır.",
      cta: "Kayıta git",
    },
    supportCalculator: {
      label: "Katkı hesaplayıcı",
      title: "Bir katkı tahmini",
      body:
        "Hanenize göre bir rehber. Üyelik ücretsizdir; her katkı gönüllüdür ve önemlidir.",
      lockedTitle: "Bir katkı tahmini",
      lockedBody: "Hesaplayıcıyı açmak için önce üyelik e-postanı gir.",
      lockedCta: "E-posta gir",
      net: "Hane net geliri (aylık)",
      rent: "Isınma dahil kira (aylık)",
      household: "Hane büyüklüğü (16+)",
      interval: "Aralık",
      monthly: "Aylık",
      once: "Tek sefer",
      presets: "Hızlı seçim",
      suggestion: "Kişi başı öneri",
      perPerson: "Kişi başı tutar",
      total: "Toplam katkı",
      note: "Rehber, istediğin zaman ayarlanır. Oy avantajı yok.",
      peopleTitle: "Kişiler (e-posta listesi)",
      peopleHint: "Her kişi için ad ve e-posta girin.",
      personLabel: "Kişi {n}",
      personName: "Ad Soyad",
      personEmail: "E-posta",
      mailListLabel: "Kişi başı e-posta listesi",
      mailListHint: "Girdilerden otomatik oluşturulur.",
    },
    supportBank: {
      title: "Banka bilgileri",
      body: "Katkın için. Açıklama kısmında sadece gerekli bilgileri yazın.",
      labels: {
        recipient: "Hesap sahibi",
        bank: "Banka",
        iban: "IBAN",
        bic: "BIC",
        reference: "Açıklama",
      },
      contact: {
        title: "İletişime geç",
        body: "Banka bilgileri için kısa bir talep. İsim ve konu yeterlidir.",
        firstName: "Ad",
        lastName: "Soyad",
        subject: "Konu",
        subjectPlaceholder: "Lütfen banka bilgilerini gönderin",
        humanCheck: "İnsanım.",
        submit: "E-posta hazırla",
        errorRequired: "Ad, soyad ve konu girin.",
        errorHuman: "Lütfen human check'i onaylayın.",
        mailIntro: "Merhaba,",
        mailName: "Ad soyad:",
        mailSubject: "Konu:",
        mailEmail: "Üyelik e-postası:",
        mailOutro: "Lütfen banka bilgilerini paylaşın. Teşekkürler!",
      },
      referenceHint: "{bankRefPrefix} isteğe bağlı not (örn. şehir veya proje)",
      noDetails: "Banka bilgilerini talep üzerine paylaşırız.",
      afterNote:
        "Destek gönüllüdür, oy haklarına bağlı değildir ve şeffaf biçimde belgelenir. Bağış makbuzu yoktur (özel girişim).",
    },
  },
  ar: {
    hero: {
      badge: "مشاركة منظمة",
      title: "VoiceOpenGov — مشاركة بقرارات قابلة للتتبع.",
      subtitle: "محايدة، منظمة، ومبنية على الحالة.",
      oneLiner:
        "VoiceOpenGov هي المبادرة والعضوية. eDebatte هي الأداة: Check → Dossier → مشاركة → حالة.",
      lead: {
        pre: "VoiceOpenGov هي",
        highlight1: "معمارية معلومات",
        mid1: "للمشاركة: خيارات،",
        highlight2: "تبرير",
        mid2: "و",
        highlight3: "حالة",
        post: "تظهر بوضوح.",
      },
      focus: "مشاركة بين الانتخابات — كمعمارية معلومات: خيارات، تبرير، حالة.",
      scalable: "موثقة، قابلة للمقارنة، وقابلة لإعادة الاستخدام.",
      badges: ["ممولة مجتمعياً", "بدون إعلانات", "بدون بيع للبيانات"],
      ctas: {
        join: "شارك مجاناً عبر الهاتف",
        how: "كيف يعمل",
        support: "ادعم طوعًا",
      },
      more: {
        label: "مهتم أكثر؟",
        edebatte: "التسجيل في eDebatte",
        preorder: "حجز ثلاثية الكتب مسبقًا",
      },
      micro: {
        line1: "الهاتف خلال 3 دقائق • Double opt-in • مجهول خارجيًا",
        line2: "لا ملفات فردية • لا بيانات خام",
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
          title: "أبعاد قرار منظمة",
          body: "الهدف، الأثر، التكلفة، الوقت، المخاطر، المسؤولية.",
        },
        {
          title: "تحديد واضح للمسؤوليات",
          body: "يتم تسمية الجهات المسؤولة وتوثيقها.",
        },
        {
          title: "قسم تقرير رسمي",
          body: "القرار، التبرير، الحالة — قابلة للتتبع في التقرير.",
        },
      ],
      highlightLabels: {
        focus: "تركيز",
        scalable: "قابلية التوسع",
        mobility: "تنقل",
      },
    },
    foundations: {
      label: "الأسس",
      title: "الأسس (قيد التحضير)",
      subtitle: "ستُنشر المجلدات الثلاثة قريبًا. الحجز المسبق ممكن — المعلومات عبر النشرة.",
      bandLine: "مجلد I · مجلد II · مجلد III",
      bandHint: "نظرية ونموذج ومنهج — النشر قيد التنفيذ.",
      bandLabel: "مجلد",
      items: [
        {
          title: "Weißbuch",
          subtitle: "حيّز المشكلة والمتطلبات",
          body:
            "تحليل التحديات البنيوية للمشاركة الحديثة — ضغط المؤسسات، تجزؤ المعلومات، وغياب شفافية الحالة.",
          href: "/grundlagen/weissbuch",
          cta: "معرفة المزيد →",
        },
        {
          title: "Legitimation 2.0",
          subtitle: "نموذج الحوكمة ومنطق الشرعية",
          body:
            "نموذج حوكمة لقرارات قابلة للتحقق، وأبعاد قرار موثقة، ومسؤولية قابلة للتتبع.",
          href: "/grundlagen/legitimation-2-0",
          cta: "معرفة المزيد →",
        },
        {
          title: "RePro",
          subtitle: "العملية المرجعية والتشغيل",
          body:
            "تشغيل منهجي: Check → Dossier → مشاركة → حالة — كمنطق قرار مُقنن.",
          href: "/grundlagen/repro",
          cta: "معرفة المزيد →",
        },
      ],
      footerNote: "الحجز المسبق ممكن · المعلومات عبر النشرة · الدعم مُرحّب به.",
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
      title: "المستوى المدني: 5 خيارات",
      steps: [
        "1. الاطلاع",
        "2. جمع الملاحظات",
        "3. التصميم المشترك",
        "4. اتخاذ القرار",
        "5. متابعة التنفيذ",
      ],
      note: "أرقام واقعية: المساهمات والنطاق والحالة مذكورة في التقرير.",
    },
    membership: {
      label: "العضوية",
      title: "انضم مجانا",
      subtitle:
        "العضوية مجانية (تأكيد مزدوج). يمكن اختيار مساهمة اختيارية — تساعدنا على النمو أسرع.",
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
      locationVisibility: "الهوية مجهولة خارجيًا",
      public: "عام",
      private: "خاص",
      visibilityHint:
        "نُظهر فقط إجماليات المدن دون ملفات فردية أو بيانات خام.",
      logoUrl: "رابط الشعار (اختياري)",
      avatarUpload: "رفع صورة الملف (اختياري)",
      previewLabel: "معاينة",
      selectedLabel: "تم الاختيار: {name}",
      imageHint: "حد أقصى 2 ميغابايت، JPG/PNG. ملاحظة: Base64 يزيد الحجم.",
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
        "حلقة مغلقة: انضم مجاناً → اختر مساهمة (اختيارية) → نَنمو أسرع. لا امتيازات تصويت.",
      supportCardCta: "فتح حاسبة المساهمة",
      step1Cta: "شارك",
      step1Hint: "الخطوة 1: البريد الإلكتروني. الخطوة 2 تظهر بعدها.",
      step2Label: "الخطوة 2",
      step2Hint: "يرجى إضافة بقية البيانات.",
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
      membershipFree: "العضوية مجانية وتوسّع وصولنا.",
      supportNoteBefore:
        "الدعم اختياري. كل مساهمة تساعدنا على النمو أسرع — التفاصيل على",
      supportNoteLink: "الدعم",
      supportNoteAfter: "أو عبر البريد إلى",
      publicPrivateNote:
        "مجهول خارجيًا: المعروض علنًا هو إجماليات المدن فقط (لا ملفات فردية ولا بيانات خام).",
    },
    supportSection: {
      label: "الدعم",
      title: "ادعم طوعاً — اختر مساهمة وزِد الوصول.",
      body:
        "العضوية مجانية؛ كل مساهمة تساعدنا على النمو. كمبادرة خاصة لا نصدر إيصالات تبرع.",
      ctaSupport: "حاسبة المساهمة",
      ctaQuestions: "اطرح سؤالا",
    },
    supportAfterCta: {
      title: "انضم مجاناً الآن",
      body: "مع أو بدون مساهمة: العضوية مجانية وتُحتسب للوصول.",
      cta: "الانتقال للتسجيل",
    },
    supportCalculator: {
      label: "حاسبة المساهمة",
      title: "تقدير المساهمة",
      body:
        "تقدير قائم على أسرتك. العضوية تبقى مجانية؛ كل مساهمة اختيارية ومهمة.",
      lockedTitle: "تقدير المساهمة",
      lockedBody: "يرجى أولاً إدخال بريد العضوية لفتح الحاسبة.",
      lockedCta: "إدخال البريد",
      net: "صافي دخل الأسرة (شهريًا)",
      rent: "الإيجار شامل الخدمات (شهريًا)",
      household: "حجم الأسرة (16+)",
      interval: "الدورية",
      monthly: "شهري",
      once: "مرة واحدة",
      presets: "اختيارات سريعة",
      suggestion: "اقتراح للفرد",
      perPerson: "المبلغ للفرد",
      total: "إجمالي المساهمة",
      note: "مؤشر قابل للتعديل في أي وقت. دون مزايا تصويت.",
      peopleTitle: "الأشخاص (قائمة البريد)",
      peopleHint: "يرجى إدخال الاسم والبريد لكل شخص.",
      personLabel: "شخص {n}",
      personName: "الاسم",
      personEmail: "البريد الإلكتروني",
      mailListLabel: "قائمة البريد لكل شخص",
      mailListHint: "يتم إنشاؤها تلقائياً من الإدخالات.",
    },
    supportBank: {
      title: "بيانات الحساب",
      body: "لمساهمتك. يرجى إبقاء المرجع في الحد الأدنى.",
      labels: {
        recipient: "صاحب الحساب",
        bank: "البنك",
        iban: "IBAN",
        bic: "BIC",
        reference: "المرجع",
      },
      contact: {
        title: "تواصل معنا",
        body: "طلب قصير للحصول على بيانات الحساب. الاسم والموضوع يكفيان.",
        firstName: "الاسم الأول",
        lastName: "اسم العائلة",
        subject: "الموضوع",
        subjectPlaceholder: "يرجى إرسال بيانات الحساب",
        humanCheck: "أنا إنسان.",
        submit: "تحضير البريد",
        errorRequired: "يرجى إدخال الاسم واللقب والموضوع.",
        errorHuman: "يرجى تأكيد فحص الإنسان.",
        mailIntro: "مرحبًا،",
        mailName: "الاسم:",
        mailSubject: "الموضوع:",
        mailEmail: "بريد العضوية:",
        mailOutro: "يرجى إرسال بيانات الحساب. شكرًا!",
      },
      referenceHint: "{bankRefPrefix} ملاحظة اختيارية (مثلاً مدينة أو مشروع)",
      noDetails: "سنرسل بيانات الحساب عند الطلب.",
      afterNote:
        "الدعم اختياري وليس مرتبطاً بحقوق التصويت ويُوثَّق بشفافية. لا توجد إيصالات تبرع (مبادرة خاصة).",
    },
  },
  ru: {
    hero: {
      badge: "Структурированное участие",
      title: "VoiceOpenGov — участие с отслеживаемыми решениями.",
      subtitle: "Нейтрально, структурированно, со статусом.",
      oneLiner:
        "VoiceOpenGov — инициатива и участие. eDebatte — инструмент: Check → Dossier → Участие → Статус.",
      lead: {
        pre: "VoiceOpenGov — это",
        highlight1: "информационная архитектура",
        mid1: "для участия: варианты,",
        highlight2: "обоснование",
        mid2: "и",
        highlight3: "статус",
        post: "становятся видимыми.",
      },
      focus: "Участие между выборами — как информационная архитектура: варианты, обоснование, статус.",
      scalable: "Документировано, сопоставимо, повторно используемо.",
      badges: ["Финансируется сообществом", "Без рекламы", "Без продажи данных"],
      ctas: {
        join: "Участвовать бесплатно с телефона",
        how: "Как это работает",
        support: "Поддержать добровольно",
      },
      more: {
        label: "Хотите больше?",
        edebatte: "Записаться в eDebatte",
        preorder: "Предзаказать трилогию",
      },
      micro: {
        line1: "Мобильно за 3 минуты • Double opt-in • Анонимно наружу",
        line2: "Без индивидуальных профилей • Без исходных данных",
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
          title: "Структурированные измерения решения",
          body: "Цель, влияние, стоимость, время, риски, ответственность.",
        },
        {
          title: "Четкое распределение ответственности",
          body: "Ответственные стороны названы и задокументированы.",
        },
        {
          title: "Формальный раздел отчета",
          body: "Решение, обоснование, статус — отслеживаемо в отчете.",
        },
      ],
      highlightLabels: {
        focus: "Фокус",
        scalable: "Масштаб",
        mobility: "Мобильность",
      },
    },
    foundations: {
      label: "Основы",
      title: "Основы (в подготовке)",
      subtitle: "Три тома скоро будут опубликованы. Возможна предзаказ — информация в рассылке.",
      bandLine: "Том I · Том II · Том III",
      bandHint: "Теория, модель и метод — публикация в процессе.",
      bandLabel: "Том",
      items: [
        {
          title: "Weißbuch",
          subtitle: "Проблемное поле и требования",
          body:
            "Анализ структурных вызовов современной вовлеченности — институциональная перегрузка, фрагментация информации и отсутствие прозрачности статуса.",
          href: "/grundlagen/weissbuch",
          cta: "Подробнее →",
        },
        {
          title: "Legitimation 2.0",
          subtitle: "Модель управления и логика легитимности",
          body:
            "Модель управления для проверяемых решений, документированных измерений решения и подотчетной ответственности.",
          href: "/grundlagen/legitimation-2-0",
          cta: "Подробнее →",
        },
        {
          title: "RePro",
          subtitle: "Эталонный процесс и операционализация",
          body:
            "Методическая операционализация: Check → Dossier → Участие → Статус — как формализованная логика решений.",
          href: "/grundlagen/repro",
          cta: "Подробнее →",
        },
      ],
      footerNote: "Предзаказ возможен · Информация в рассылке · Поддержка приветствуется.",
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
      title: "Гражданский уровень: 5 вариантов",
      steps: [
        "1. Информировать",
        "2. Собирать обратную связь",
        "3. Совместное проектирование",
        "4. Принимать решение",
        "5. Отслеживать реализацию",
      ],
      note: "Реалистичные цифры: вклад, охват и статус указаны в отчете.",
    },
    membership: {
      label: "Участие",
      title: "Присоединиться бесплатно",
      subtitle:
        "Участие бесплатное (double opt-in). Взнос по желанию — помогает нам расти быстрее.",
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
      locationVisibility: "Внешняя анонимность",
      public: "Публично",
      private: "Приватно",
      visibilityHint:
        "Показываем только городские итоги, без индивидуальных профилей и сырых данных.",
      logoUrl: "Ссылка на логотип (необязательно)",
      avatarUpload: "Загрузить фото профиля (необязательно)",
      previewLabel: "Предпросмотр",
      selectedLabel: "Выбрано: {name}",
      imageHint: "Макс. 2 МБ, JPG/PNG. Примечание: Base64 увеличивает размер.",
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
        "Замкнутый цикл: вступить (бесплатно) → выбрать взнос (по желанию) → расти быстрее. Без преимуществ в голосовании.",
      supportCardCta: "Открыть калькулятор",
      step1Cta: "Участвовать",
      step1Hint: "Шаг 1: e-mail. Шаг 2 появится дальше.",
      step2Label: "Шаг 2",
      step2Hint: "Пожалуйста, добавьте остальные данные.",
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
      membershipFree: "Участие бесплатное и расширяет наш охват.",
      supportNoteBefore:
        "Поддержка добровольная. Каждый взнос помогает нам расти быстрее — подробности на",
      supportNoteLink: "Поддержать",
      supportNoteAfter: "или по e-mail",
      publicPrivateNote:
        "Анонимно наружу: публичны только городские итоги (без индивидуальных профилей, без сырых данных).",
    },
    supportSection: {
      label: "Поддержать",
      title: "Поддержите добровольно — выберите взнос, расширьте охват.",
      body:
        "Участие бесплатное; каждый взнос помогает росту. Как частная инициатива мы не выдаём квитанции о пожертвовании.",
      ctaSupport: "Калькулятор взноса",
      ctaQuestions: "Задать вопрос",
    },
    supportAfterCta: {
      title: "Присоединиться бесплатно сейчас",
      body: "С взносом или без: участие бесплатное и учитывается для охвата.",
      cta: "К регистрации",
    },
    supportCalculator: {
      label: "Калькулятор взноса",
      title: "Оценить взнос",
      body:
        "Ориентир на основе вашего домохозяйства. Участие остаётся бесплатным; каждый взнос добровольный и важен.",
      lockedTitle: "Оценить взнос",
      lockedBody: "Сначала введите e-mail участника, чтобы открыть калькулятор.",
      lockedCta: "Ввести e-mail",
      net: "Чистый доход домохозяйства (в месяц)",
      rent: "Аренда с коммунальными (в месяц)",
      household: "Размер домохозяйства (16+)",
      interval: "Период",
      monthly: "Ежемесячно",
      once: "Разово",
      presets: "Быстрый выбор",
      suggestion: "Рекомендация на человека",
      perPerson: "Сумма на человека",
      total: "Общий взнос",
      note: "Ориентир, можно менять в любое время. Без преимуществ в голосовании.",
      peopleTitle: "Люди (список e-mail)",
      peopleHint: "Введите имя и e-mail для каждого человека.",
      personLabel: "Человек {n}",
      personName: "Имя",
      personEmail: "E-mail",
      mailListLabel: "Список e-mail по людям",
      mailListHint: "Формируется автоматически.",
    },
    supportBank: {
      title: "Банковские реквизиты",
      body: "Для вашего взноса. В назначении указывайте только необходимое.",
      labels: {
        recipient: "Получатель",
        bank: "Банк",
        iban: "IBAN",
        bic: "BIC",
        reference: "Назначение",
      },
      contact: {
        title: "Связаться",
        body: "Короткий запрос реквизитов. Достаточно имени и темы.",
        firstName: "Имя",
        lastName: "Фамилия",
        subject: "Тема",
        subjectPlaceholder: "Пожалуйста, отправьте реквизиты",
        humanCheck: "Я человек.",
        submit: "Подготовить письмо",
        errorRequired: "Введите имя, фамилию и тему.",
        errorHuman: "Подтвердите проверку.",
        mailIntro: "Здравствуйте,",
        mailName: "Имя:",
        mailSubject: "Тема:",
        mailEmail: "E-mail участника:",
        mailOutro: "Пожалуйста, отправьте банковские реквизиты. Спасибо!",
      },
      referenceHint: "{bankRefPrefix} дополнительная пометка (например, город или проект)",
      noDetails: "Мы отправим реквизиты по запросу.",
      afterNote:
        "Поддержка добровольна, не связана с правами голоса и документируется прозрачно. Без квитанций о пожертвованиях (частная инициатива).",
    },
  },
  zh: {
    hero: {
      badge: "结构化参与",
      title: "VoiceOpenGov — 具有可追踪决策的参与。",
      subtitle: "中立、有结构、以状态为导向。",
      oneLiner:
        "VoiceOpenGov 是倡议与成员体系，eDebatte 是工具：Check → Dossier → 参与 → 状态。",
      lead: {
        pre: "VoiceOpenGov 是一种",
        highlight1: "信息架构",
        mid1: "用于参与：选项、",
        highlight2: "理由",
        mid2: "与",
        highlight3: "状态",
        post: "清晰可见。",
      },
      focus: "选举之间的参与——作为信息架构：选项、理由、状态。",
      scalable: "可记录、可比较、可复用。",
      badges: ["社区资助", "无广告", "不出售数据"],
      ctas: {
        join: "免费手机参与",
        how: "如何运作",
        support: "自愿支持",
      },
      more: {
        label: "想了解更多？",
        edebatte: "登记 eDebatte",
        preorder: "预订三部曲",
      },
      micro: {
        line1: "3 分钟手机完成 • Double opt-in • 对外匿名",
        line2: "无个人档案 • 无原始数据",
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
          title: "结构化决策维度",
          body: "目标、影响、成本、时间、风险、责任。",
        },
        {
          title: "明确责任归属",
          body: "明确责任主体并形成记录。",
        },
        {
          title: "正式报告部分",
          body: "决定、理由、状态——在报告中可追踪。",
        },
      ],
      highlightLabels: {
        focus: "聚焦",
        scalable: "可扩展性",
        mobility: "移动性",
      },
    },
    foundations: {
      label: "基础",
      title: "基础（筹备中）",
      subtitle: "三册将于近期发布。可预订——信息将通过通讯发布。",
      bandLine: "卷 I · 卷 II · 卷 III",
      bandHint: "理论、模型与方法——发布进行中。",
      bandLabel: "卷",
      items: [
        {
          title: "Weißbuch",
          subtitle: "问题空间与要求",
          body: "分析现代参与的结构性挑战——制度负荷、信息碎片化与状态透明度不足。",
          href: "/grundlagen/weissbuch",
          cta: "了解更多 →",
        },
        {
          title: "Legitimation 2.0",
          subtitle: "治理模型与合法性逻辑",
          body: "用于可验证决策、记录决策维度与可追责责任的治理模型。",
          href: "/grundlagen/legitimation-2-0",
          cta: "了解更多 →",
        },
        {
          title: "RePro",
          subtitle: "参考流程与操作化",
          body:
            "方法化落地：Check → Dossier → 参与 → 状态——作为规范化的决策逻辑。",
          href: "/grundlagen/repro",
          cta: "了解更多 →",
        },
      ],
      footerNote: "可预订 · 资讯通过通讯 · 欢迎支持。",
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
      title: "公民级别：5 个选项",
      steps: [
        "1. 了解",
        "2. 收集反馈",
        "3. 共同设计",
        "4. 决策",
        "5. 跟踪落实",
      ],
      note: "现实数据：贡献、触达与状态在报告中呈现。",
    },
    membership: {
      label: "成员",
      title: "免费加入",
      subtitle: "会员免费（双重确认）。可选择自愿贡献，帮助我们更快成长。",
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
      locationVisibility: "对外匿名",
      public: "公开",
      private: "私密",
      visibilityHint:
        "仅展示城市汇总，不展示个人资料或原始数据。",
      logoUrl: "Logo 链接（可选）",
      avatarUpload: "上传头像（可选）",
      previewLabel: "预览",
      selectedLabel: "已选择：{name}",
      imageHint: "最大 2MB，JPG/PNG。提示：Base64 会增大体积。",
      motivation: "动机（可选）",
      motivationPlaceholder: "为什么加入社区？",
      motivationHint: "仅在作为支持者展示时公开。请勿填写联系方式。",
      supporterImage: "支持者图片（可选）",
      clear: "清空",
      newsletter: "VoiceOpenGov 更新（可选）",
      newsletterTool: "eDebatte 更新（工具）（可选）",
      supportCardTitle: "支持该倡议",
      supportCardBody: "闭环：加入（免费）→ 选择贡献（可选）→ 更快成长。无投票优势。",
      supportCardCta: "打开计算器",
      step1Cta: "参与",
      step1Hint: "第 1 步：填写邮箱。第 2 步随后出现。",
      step2Label: "第 2 步",
      step2Hint: "请补充其余信息。",
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
      membershipFree: "成员免费，并扩大我们的影响力。",
      supportNoteBefore:
        "支持为自愿。每一份贡献都能帮助我们更快成长——详情请见",
      supportNoteLink: "支持",
      supportNoteAfter: "或邮件联系",
      publicPrivateNote: "对外匿名：仅公开城市汇总（无个人资料、无原始数据）。",
    },
    supportSection: {
      label: "支持",
      title: "自愿支持——选择贡献，扩大影响力。",
      body: "会员免费；每一份贡献都能帮助成长。作为私人倡议，我们无法开具捐赠收据。",
      ctaSupport: "贡献计算器",
      ctaQuestions: "提问",
    },
    supportAfterCta: {
      title: "现在免费加入",
      body: "有无贡献皆可：成员免费，并计入影响力。",
      cta: "前往报名",
    },
    supportCalculator: {
      label: "贡献计算器",
      title: "估算贡献",
      body: "基于家庭情况的参考值。会员保持免费；每一份贡献都是自愿且重要的。",
      lockedTitle: "估算贡献",
      lockedBody: "请先填写成员邮箱后再打开计算器。",
      lockedCta: "填写邮箱",
      net: "家庭净收入（每月）",
      rent: "含费用租金（每月）",
      household: "家庭人数（16+）",
      interval: "周期",
      monthly: "每月",
      once: "一次性",
      presets: "快捷选择",
      suggestion: "每人建议",
      perPerson: "每人金额",
      total: "总贡献",
      note: "参考值，可随时调整。无投票优势。",
      peopleTitle: "成员（邮箱列表）",
      peopleHint: "请为每位成员填写姓名和邮箱。",
      personLabel: "成员 {n}",
      personName: "姓名",
      personEmail: "邮箱",
      mailListLabel: "成员邮箱列表",
      mailListHint: "根据输入自动生成。",
    },
    supportBank: {
      title: "银行信息",
      body: "用于你的贡献。附言请尽量简短。",
      labels: {
        recipient: "收款方",
        bank: "银行",
        iban: "IBAN",
        bic: "BIC",
        reference: "附言",
      },
      contact: {
        title: "联系我们",
        body: "简短申请获取银行信息。姓名与主题即可。",
        firstName: "名",
        lastName: "姓",
        subject: "主题",
        subjectPlaceholder: "请发送银行信息",
        humanCheck: "我是人类。",
        submit: "准备邮件",
        errorRequired: "请填写姓名和主题。",
        errorHuman: "请确认人类验证。",
        mailIntro: "你好，",
        mailName: "姓名：",
        mailSubject: "主题：",
        mailEmail: "成员邮箱：",
        mailOutro: "请发送银行信息，谢谢！",
      },
      referenceHint: "{bankRefPrefix} 可选备注（如城市或项目）",
      noDetails: "可按需提供银行信息。",
      afterNote: "支持为自愿，与投票权无关，透明记录。无法提供捐赠收据（私人倡议）。",
    },
  },
};

export function getHomeStrings(locale: SupportedLocale | string): HomeStrings {
  const normalized = (locale || DEFAULT_LOCALE) as SupportedLocale;
  return STRINGS[normalized] ?? STRINGS[DEFAULT_LOCALE];
}
