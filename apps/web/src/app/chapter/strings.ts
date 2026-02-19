import { DEFAULT_LOCALE, type SupportedLocale } from "@/config/locales";
import type { HumanCheckStrings } from "@/components/security/HumanCheck";

type ChapterStrings = {
  meta: { title: string; description: string };
  page: {
    title: string;
    intro: string;
    steps: Array<{ title: string; body: string }>;
    ctas: { primary: string; secondary: string };
    note: string;
    sections: {
      whatTitle: string;
      whatBody: string;
      notTitle: string;
      notBody: string;
    };
  };
  form: {
    title: string;
    subtitle: string;
    notices: {
      interestRequired: string;
      privacyRequired: string;
      humanRequired: string;
      submitOk: string;
      submitFail: string;
    };
    labels: {
      name: string;
      email: string;
      organisation: string;
      location: string;
      interest: string;
      spaceAvailable: string;
      spaceNotes: string;
      notes: string;
      privacy: { before: string; link: string; after: string };
      honeypot: string;
    };
    placeholders: {
      organisation: string;
      location: string;
      spaceNotes: string;
      notes: string;
    };
    interestOptions: Array<{ value: string; label: string; hint: string }>;
    spaceOptions: Array<{ value: string; label: string }>;
    submit: string;
    submitting: string;
    emailCta: string;
  };
  humanCheck: HumanCheckStrings;
};

const STRINGS: Record<SupportedLocale, ChapterStrings> = {
  de: {
    meta: {
      title: "Chapter starten – VoiceOpenGov",
      description: "Unverbindliche Anfrage für lokale VoiceOpenGov Chapter.",
    },
    page: {
      title: "Chapter starten - lokal verankert, weltweit vergleichbar.",
      intro:
        "Chapter sind regionale Ankerpunkte: Themen sammeln, Optionen prüfen, Entscheidungen nachvollziehbar machen. Überparteilich. Transparent. Skalierbar.",
      steps: [
        { title: "1) Vormerken", body: "30 Sekunden - wir melden uns mit den Schritten." },
        { title: "2) Region wählen", body: "Ort/Bezirk und Sichtbarkeit festlegen." },
        { title: "3) Launch-Kit", body: "Vorlagen, Regeln, QR-Material und Support." },
      ],
      ctas: {
        primary: "Sich vormerken lassen",
        secondary: "Zurück",
      },
      note: "Öffentlich nur Orts-Summen - keine Einzelprofile",
      sections: {
        whatTitle: "Was ein Chapter ist",
        whatBody:
          "Ein Chapter bringt lokale Themen in eine saubere Struktur: Fakten, Optionen, Konsequenzen, Entscheidungen.",
        notTitle: "Was wir nicht sind",
        notBody:
          "Keine Partei, kein Lobby-Instrument. Inhalte sind offen dokumentiert - nachvollziehbar statt taktisch.",
      },
    },
    form: {
      title: "Sich vormerken lassen",
      subtitle: "Wir melden uns mit dem Chapter-Launch-Kit und den nächsten Schritten.",
      notices: {
        interestRequired: "Bitte mindestens eine Interessen-Option auswählen.",
        privacyRequired: "Bitte Datenschutzhinweis akzeptieren.",
        humanRequired: "Bitte den kurzen Human-Check abschliessen.",
        submitOk: "Danke! Wir melden uns mit den nächsten Schritten. Die Anfrage ist unverbindlich.",
        submitFail: "Das hat nicht geklappt. Bitte später erneut versuchen.",
      },
      labels: {
        name: "Name",
        email: "E-Mail",
        organisation: "Organisation (optional)",
        location: "Ort / Region",
        interest: "Interesse",
        spaceAvailable: "Räumlichkeiten vorhanden?",
        spaceNotes: "Raum-Details (optional)",
        notes: "Weitere Hinweise (optional)",
        privacy: {
          before: "Ich akzeptiere die",
          link: "Datenschutzhinweise",
          after: ".",
        },
        honeypot: "Bitte dieses Feld frei lassen",
      },
      placeholders: {
        organisation: "Name der Organisation/Initiative",
        location: "z. B. Berlin, Leipzig, Rhein-Main",
        spaceNotes: "z. B. Kapazität, Verfügbarkeit",
        notes: "Mitstreiter, lokale Besonderheiten, Zeithorizont ...",
      },
      interestOptions: [
        { value: "start", label: "Chapter starten", hint: "Ich möchte vor Ort vertreten." },
        { value: "join", label: "Mithelfen", hint: "Ich möchte mich anschließen." },
        { value: "space", label: "Räumlichkeiten anbieten", hint: "Ich habe Zugang zu einem Ort." },
        { value: "info", label: "Erstmal Infos", hint: "Ich bin interessiert, aber offen." },
      ],
      spaceOptions: [
        { value: "", label: "Bitte auswählen ..." },
        { value: "yes", label: "Ja, Raum vorhanden" },
        { value: "maybe", label: "Vielleicht / später" },
        { value: "no", label: "Kein Raum" },
      ],
      submit: "Vormerken lassen",
      submitting: "Sende...",
      emailCta: "Oder per E-Mail",
    },
    humanCheck: {
      compact: {
        title: "Kurze Bestätigung",
        description:
          "Kurzer Anti-Spam-Check. Öffne die Aufgabe nur, wenn du das Formular absenden willst.",
        open: "Bestätigung öffnen",
      },
      loading: "Lade kurze Bestätigung …",
      promptTitle: "Kurze Bestätigung: Bist du ein Mensch?",
      verified: "✓ geprüft",
      intro:
        "Wir schützen Formulare vor Spam. Kein Tracking, nur ein kleiner Check: Bitte rechne die Aufgabe und lass das versteckte Feld leer.",
      honeypotLabel: "Bitte leer lassen",
      answerLabel: "Ergebnis eintragen",
      buttonChecking: "Prüfen …",
      buttonSolved: "Bestätigt",
      buttonIdle: "Kurz prüfen",
      messages: {
        alreadySolved: "Sicherheitscheck bereits erledigt.",
        numberRequired: "Bitte trage das Ergebnis als Zahl ein.",
        verifyFailed: "Die Bestätigung hat nicht geklappt. Bitte kurz erneut versuchen.",
        techError: "Es gab ein technisches Problem. Bitte später erneut versuchen.",
        verified: "Danke – kurz bestätigt.",
      },
    },
  },
  en: {
    meta: {
      title: "Start a chapter – VoiceOpenGov",
      description: "Non-binding request for local VoiceOpenGov chapters.",
    },
    page: {
      title: "Start a chapter - rooted locally, comparable globally.",
      intro:
        "Chapters are regional anchors: collect topics, review options, make decisions traceable. Non-partisan. Transparent. Scalable.",
      steps: [
        { title: "1) Pre-register", body: "30 seconds - we will respond with next steps." },
        { title: "2) Choose region", body: "Define area and visibility." },
        { title: "3) Launch kit", body: "Templates, rules, QR material and support." },
      ],
      ctas: {
        primary: "Pre-register",
        secondary: "Back",
      },
      note: "Public only shows city totals - no individual profiles",
      sections: {
        whatTitle: "What a chapter is",
        whatBody:
          "A chapter brings local topics into a clean structure: facts, options, consequences, decisions.",
        notTitle: "What we are not",
        notBody:
          "No party, no lobbying instrument. Content is openly documented - traceable instead of tactical.",
      },
    },
    form: {
      title: "Pre-register",
      subtitle: "We will get back with the chapter launch kit and next steps.",
      notices: {
        interestRequired: "Please select at least one interest option.",
        privacyRequired: "Please accept the privacy notice.",
        humanRequired: "Please complete the short human check.",
        submitOk: "Thanks! We will follow up with next steps. This request is non-binding.",
        submitFail: "That did not work. Please try again later.",
      },
      labels: {
        name: "Name",
        email: "Email",
        organisation: "Organization (optional)",
        location: "City / Region",
        interest: "Interest",
        spaceAvailable: "Space available?",
        spaceNotes: "Space details (optional)",
        notes: "Additional notes (optional)",
        privacy: {
          before: "I accept the",
          link: "privacy notice",
          after: ".",
        },
        honeypot: "Please leave this field empty",
      },
      placeholders: {
        organisation: "Name of organization/initiative",
        location: "e.g., Berlin, Leipzig, Rhine-Main",
        spaceNotes: "e.g., capacity, availability",
        notes: "Co-organizers, local specifics, timeline ...",
      },
      interestOptions: [
        { value: "start", label: "Start a chapter", hint: "I want to represent locally." },
        { value: "join", label: "Join and help", hint: "I want to get involved." },
        { value: "space", label: "Offer space", hint: "I have access to a location." },
        { value: "info", label: "Get info first", hint: "I am interested but open." },
      ],
      spaceOptions: [
        { value: "", label: "Please choose ..." },
        { value: "yes", label: "Yes, space available" },
        { value: "maybe", label: "Maybe / later" },
        { value: "no", label: "No space" },
      ],
      submit: "Submit",
      submitting: "Sending...",
      emailCta: "Or via email",
    },
    humanCheck: {
      compact: {
        title: "Short confirmation",
        description:
          "Quick anti-spam check. Open the task only if you want to submit the form.",
        open: "Open confirmation",
      },
      loading: "Loading short confirmation …",
      promptTitle: "Short confirmation: are you human?",
      verified: "✓ verified",
      intro:
        "We protect forms from spam. No tracking, just a small check: solve the task and leave the hidden field empty.",
      honeypotLabel: "Leave empty",
      answerLabel: "Enter result",
      buttonChecking: "Checking …",
      buttonSolved: "Confirmed",
      buttonIdle: "Check",
      messages: {
        alreadySolved: "Security check already completed.",
        numberRequired: "Please enter the result as a number.",
        verifyFailed: "Confirmation failed. Please try again briefly.",
        techError: "There was a technical problem. Please try again later.",
        verified: "Thanks – confirmed.",
      },
    },
  },
  fr: {
    meta: {
      title: "Démarrer un chapter – VoiceOpenGov",
      description: "Demande sans engagement pour des chapters locaux VoiceOpenGov.",
    },
    page: {
      title: "Démarrer un chapter - ancré localement, comparable au niveau mondial.",
      intro:
        "Les chapters sont des points d'ancrage régionaux : collecter des sujets, examiner les options, rendre les décisions traçables. Non partisan. Transparent. Évolutif.",
      steps: [
        { title: "1) Pré-inscription", body: "30 secondes - nous revenons avec les étapes." },
        { title: "2) Choisir la région", body: "Définir zone et visibilité." },
        { title: "3) Kit de lancement", body: "Modèles, règles, QR et support." },
      ],
      ctas: {
        primary: "Se pré-inscrire",
        secondary: "Retour",
      },
      note: "Public : totaux par ville uniquement - aucun profil individuel",
      sections: {
        whatTitle: "Ce qu'est un chapter",
        whatBody:
          "Un chapter structure des sujets locaux : faits, options, conséquences, décisions.",
        notTitle: "Ce que nous ne sommes pas",
        notBody:
          "Ni parti ni outil de lobbying. Contenu documenté ouvertement - traçable plutôt que tactique.",
      },
    },
    form: {
      title: "Se pré-inscrire",
      subtitle: "Nous reviendrons avec le kit de lancement et les prochaines étapes.",
      notices: {
        interestRequired: "Veuillez choisir au moins une option d'intérêt.",
        privacyRequired: "Veuillez accepter la note de confidentialité.",
        humanRequired: "Veuillez terminer la courte vérification humaine.",
        submitOk: "Merci ! Nous reviendrons avec les prochaines étapes. Demande sans engagement.",
        submitFail: "Échec. Veuillez réessayer plus tard.",
      },
      labels: {
        name: "Nom",
        email: "E-mail",
        organisation: "Organisation (optionnel)",
        location: "Ville / Région",
        interest: "Intérêt",
        spaceAvailable: "Local disponible ?",
        spaceNotes: "Détails du lieu (optionnel)",
        notes: "Remarques supplémentaires (optionnel)",
        privacy: {
          before: "J'accepte la",
          link: "note de confidentialité",
          after: ".",
        },
        honeypot: "Veuillez laisser ce champ vide",
      },
      placeholders: {
        organisation: "Nom de l'organisation/initiative",
        location: "ex. Berlin, Leipzig, Rhin-Main",
        spaceNotes: "ex. capacité, disponibilité",
        notes: "Coéquipiers, spécificités locales, calendrier ...",
      },
      interestOptions: [
        { value: "start", label: "Démarrer un chapter", hint: "Je veux représenter localement." },
        { value: "join", label: "Aider", hint: "Je veux m'impliquer." },
        { value: "space", label: "Proposer un lieu", hint: "J'ai accès à un espace." },
        { value: "info", label: "D'abord des infos", hint: "Je suis intéressé, mais ouvert." },
      ],
      spaceOptions: [
        { value: "", label: "Veuillez choisir ..." },
        { value: "yes", label: "Oui, espace disponible" },
        { value: "maybe", label: "Peut-être / plus tard" },
        { value: "no", label: "Pas d'espace" },
      ],
      submit: "Envoyer",
      submitting: "Envoi...",
      emailCta: "Ou par e-mail",
    },
    humanCheck: {
      compact: {
        title: "Courte confirmation",
        description:
          "Petit anti-spam. Ouvre l'exercice seulement si tu veux envoyer le formulaire.",
        open: "Ouvrir la confirmation",
      },
      loading: "Chargement de la confirmation …",
      promptTitle: "Courte confirmation : êtes-vous humain ?",
      verified: "✓ vérifié",
      intro:
        "Nous protégeons les formulaires contre le spam. Pas de tracking, juste un petit check : calcule l'opération et laisse le champ caché vide.",
      honeypotLabel: "Laisser vide",
      answerLabel: "Saisir le résultat",
      buttonChecking: "Vérification …",
      buttonSolved: "Confirmé",
      buttonIdle: "Vérifier",
      messages: {
        alreadySolved: "Vérification déjà effectuée.",
        numberRequired: "Veuillez saisir un nombre.",
        verifyFailed: "La confirmation a échoué. Réessaie brièvement.",
        techError: "Problème technique. Réessaye plus tard.",
        verified: "Merci – confirmé.",
      },
    },
  },
  pl: {
    meta: {
      title: "Start chaptera – VoiceOpenGov",
      description: "Niewiążące zgłoszenie lokalnego chaptera VoiceOpenGov.",
    },
    page: {
      title: "Start chaptera – lokalnie zakorzeniony, globalnie porównywalny.",
      intro:
        "Chapter to regionalne punkty oparcia: zbierają tematy, sprawdzają opcje, czynią decyzje przejrzystymi. Ponadpartyjne. Transparentne. Skalowalne.",
      steps: [
        { title: "1) Zgłoszenie", body: "30 sekund - wrócimy z kolejnymi krokami." },
        { title: "2) Wybór regionu", body: "Ustal lokalizację i widoczność." },
        { title: "3) Pakiet startowy", body: "Szablony, zasady, materiały QR i wsparcie." },
      ],
      ctas: {
        primary: "Zgłoś się",
        secondary: "Powrót",
      },
      note: "Publicznie tylko sumy miast - bez profili indywidualnych",
      sections: {
        whatTitle: "Czym jest chapter",
        whatBody:
          "Chapter porządkuje lokalne tematy: fakty, opcje, konsekwencje, decyzje.",
        notTitle: "Czym nie jesteśmy",
        notBody:
          "Żadna partia, żadne narzędzie lobbingu. Treści są otwarcie dokumentowane - przejrzyście, bez taktyki.",
      },
    },
    form: {
      title: "Zgłoś się",
      subtitle: "Odezwiemy się z pakietem startowym i kolejnymi krokami.",
      notices: {
        interestRequired: "Wybierz co najmniej jedną opcję zainteresowania.",
        privacyRequired: "Zaakceptuj informację o prywatności.",
        humanRequired: "Ukończ krótką weryfikację człowieka.",
        submitOk: "Dziękujemy! Wrócimy z kolejnymi krokami. Zgłoszenie jest niewiążące.",
        submitFail: "Nie udało się. Spróbuj ponownie później.",
      },
      labels: {
        name: "Imię i nazwisko",
        email: "E-mail",
        organisation: "Organizacja (opcjonalnie)",
        location: "Miasto / region",
        interest: "Zainteresowanie",
        spaceAvailable: "Czy jest dostępna przestrzeń?",
        spaceNotes: "Szczegóły miejsca (opcjonalnie)",
        notes: "Dodatkowe uwagi (opcjonalnie)",
        privacy: {
          before: "Akceptuję",
          link: "informację o prywatności",
          after: ".",
        },
        honeypot: "Pozostaw to pole puste",
      },
      placeholders: {
        organisation: "Nazwa organizacji/inicjatywy",
        location: "np. Berlin, Lipsk, Ren-Men",
        spaceNotes: "np. pojemność, dostępność",
        notes: "Współorganizatorzy, lokalne specyfiki, harmonogram ...",
      },
      interestOptions: [
        { value: "start", label: "Start chaptera", hint: "Chcę reprezentować lokalnie." },
        { value: "join", label: "Pomóc", hint: "Chcę się zaangażować." },
        { value: "space", label: "Udostępnić przestrzeń", hint: "Mam dostęp do miejsca." },
        { value: "info", label: "Najpierw informacje", hint: "Jestem zainteresowany, ale otwarty." },
      ],
      spaceOptions: [
        { value: "", label: "Wybierz ..." },
        { value: "yes", label: "Tak, jest miejsce" },
        { value: "maybe", label: "Być może / później" },
        { value: "no", label: "Brak miejsca" },
      ],
      submit: "Wyślij",
      submitting: "Wysyłanie...",
      emailCta: "Lub e-mail",
    },
    humanCheck: {
      compact: {
        title: "Krótka weryfikacja",
        description:
          "Krótki anty-spam. Otwórz zadanie tylko jeśli chcesz wysłać formularz.",
        open: "Otwórz weryfikację",
      },
      loading: "Ładowanie weryfikacji …",
      promptTitle: "Krótka weryfikacja: czy jesteś człowiekiem?",
      verified: "✓ zweryfikowano",
      intro:
        "Chronimy formularze przed spamem. Bez trackingu, tylko mały check: oblicz zadanie i zostaw ukryte pole puste.",
      honeypotLabel: "Zostaw puste",
      answerLabel: "Wpisz wynik",
      buttonChecking: "Sprawdzanie …",
      buttonSolved: "Potwierdzono",
      buttonIdle: "Sprawdź",
      messages: {
        alreadySolved: "Weryfikacja już wykonana.",
        numberRequired: "Wpisz wynik jako liczbę.",
        verifyFailed: "Weryfikacja nie powiodła się. Spróbuj ponownie.",
        techError: "Problem techniczny. Spróbuj później.",
        verified: "Dzięki – potwierdzono.",
      },
    },
  },
  es: {
    meta: {
      title: "Iniciar chapter – VoiceOpenGov",
      description: "Solicitud no vinculante para chapters locales de VoiceOpenGov.",
    },
    page: {
      title: "Iniciar chapter - arraigado localmente, comparable globalmente.",
      intro:
        "Los chapters son anclajes regionales: recogen temas, revisan opciones y hacen trazables las decisiones. No partidista. Transparente. Escalable.",
      steps: [
        { title: "1) Preinscripción", body: "30 segundos - volveremos con los pasos." },
        { title: "2) Elegir región", body: "Define lugar y visibilidad." },
        { title: "3) Kit de lanzamiento", body: "Plantillas, reglas, material QR y apoyo." },
      ],
      ctas: {
        primary: "Preinscribirse",
        secondary: "Volver",
      },
      note: "Público solo muestra totales por ciudad - sin perfiles individuales",
      sections: {
        whatTitle: "Qué es un chapter",
        whatBody:
          "Un chapter estructura temas locales: hechos, opciones, consecuencias, decisiones.",
        notTitle: "Qué no somos",
        notBody:
          "No somos partido ni instrumento de lobby. Contenido documentado abiertamente - trazable, no táctico.",
      },
    },
    form: {
      title: "Preinscribirse",
      subtitle: "Volveremos con el kit de lanzamiento y los próximos pasos.",
      notices: {
        interestRequired: "Selecciona al menos una opción de interés.",
        privacyRequired: "Acepta el aviso de privacidad.",
        humanRequired: "Completa la breve verificación humana.",
        submitOk: "¡Gracias! Volveremos con los próximos pasos. La solicitud no es vinculante.",
        submitFail: "No funcionó. Inténtalo más tarde.",
      },
      labels: {
        name: "Nombre",
        email: "E-mail",
        organisation: "Organización (opcional)",
        location: "Ciudad / región",
        interest: "Interés",
        spaceAvailable: "¿Espacio disponible?",
        spaceNotes: "Detalles del espacio (opcional)",
        notes: "Notas adicionales (opcional)",
        privacy: {
          before: "Acepto el",
          link: "aviso de privacidad",
          after: ".",
        },
        honeypot: "Deja este campo vacío",
      },
      placeholders: {
        organisation: "Nombre de la organización/iniciativa",
        location: "p. ej. Berlín, Leipzig, Rin-Meno",
        spaceNotes: "p. ej. capacidad, disponibilidad",
        notes: "Colaboradores, particularidades locales, horizonte ...",
      },
      interestOptions: [
        { value: "start", label: "Iniciar chapter", hint: "Quiero representar localmente." },
        { value: "join", label: "Ayudar", hint: "Quiero unirme." },
        { value: "space", label: "Ofrecer espacio", hint: "Tengo acceso a un lugar." },
        { value: "info", label: "Primero info", hint: "Estoy interesado, pero abierto." },
      ],
      spaceOptions: [
        { value: "", label: "Selecciona ..." },
        { value: "yes", label: "Sí, hay espacio" },
        { value: "maybe", label: "Quizá / más tarde" },
        { value: "no", label: "No hay espacio" },
      ],
      submit: "Enviar",
      submitting: "Enviando...",
      emailCta: "O por e-mail",
    },
    humanCheck: {
      compact: {
        title: "Confirmación breve",
        description:
          "Anti-spam breve. Abre la tarea solo si deseas enviar el formulario.",
        open: "Abrir confirmación",
      },
      loading: "Cargando confirmación …",
      promptTitle: "Confirmación breve: ¿eres humano?",
      verified: "✓ verificado",
      intro:
        "Protegemos los formularios del spam. Sin tracking, solo un check: resuelve la tarea y deja el campo oculto vacío.",
      honeypotLabel: "Dejar vacío",
      answerLabel: "Introduce el resultado",
      buttonChecking: "Verificando …",
      buttonSolved: "Confirmado",
      buttonIdle: "Comprobar",
      messages: {
        alreadySolved: "Verificación ya completada.",
        numberRequired: "Introduce el resultado como número.",
        verifyFailed: "La confirmación falló. Inténtalo de nuevo.",
        techError: "Problema técnico. Inténtalo más tarde.",
        verified: "Gracias – confirmado.",
      },
    },
  },
  it: {
    meta: {
      title: "Avviare un chapter – VoiceOpenGov",
      description: "Richiesta non vincolante per chapter locali VoiceOpenGov.",
    },
    page: {
      title: "Avviare un chapter - radicato localmente, comparabile globalmente.",
      intro:
        "I chapter sono ancoraggi regionali: raccolgono temi, verificano opzioni e rendono tracciabili le decisioni. Non partigiani. Trasparenti. Scalabili.",
      steps: [
        { title: "1) Pre-iscrizione", body: "30 secondi - risponderemo con i passi." },
        { title: "2) Scegli regione", body: "Definisci area e visibilità." },
        { title: "3) Kit di lancio", body: "Modelli, regole, materiale QR e supporto." },
      ],
      ctas: {
        primary: "Pre-registrati",
        secondary: "Indietro",
      },
      note: "Pubblico solo totali per città - nessun profilo individuale",
      sections: {
        whatTitle: "Cos'è un chapter",
        whatBody:
          "Un chapter struttura temi locali: fatti, opzioni, conseguenze, decisioni.",
        notTitle: "Cosa non siamo",
        notBody:
          "Nessun partito, nessuno strumento di lobby. Contenuti documentati apertamente - tracciabili, non tattici.",
      },
    },
    form: {
      title: "Pre-registrati",
      subtitle: "Ti contatteremo con il kit di lancio e i prossimi passi.",
      notices: {
        interestRequired: "Seleziona almeno un'opzione di interesse.",
        privacyRequired: "Accetta l'informativa privacy.",
        humanRequired: "Completa la breve verifica umana.",
        submitOk: "Grazie! Ti contatteremo con i prossimi passi. La richiesta non è vincolante.",
        submitFail: "Non ha funzionato. Riprova più tardi.",
      },
      labels: {
        name: "Nome",
        email: "E-mail",
        organisation: "Organizzazione (opzionale)",
        location: "Città / regione",
        interest: "Interesse",
        spaceAvailable: "Spazio disponibile?",
        spaceNotes: "Dettagli spazio (opzionale)",
        notes: "Note aggiuntive (opzionale)",
        privacy: {
          before: "Accetto l'",
          link: "informativa privacy",
          after: ".",
        },
        honeypot: "Lascia questo campo vuoto",
      },
      placeholders: {
        organisation: "Nome dell'organizzazione/iniziativa",
        location: "es. Berlino, Lipsia, Reno-Meno",
        spaceNotes: "es. capacità, disponibilità",
        notes: "Collaboratori, specificità locali, orizzonte ...",
      },
      interestOptions: [
        { value: "start", label: "Avviare un chapter", hint: "Voglio rappresentare localmente." },
        { value: "join", label: "Aiutare", hint: "Voglio partecipare." },
        { value: "space", label: "Offrire spazio", hint: "Ho accesso a un luogo." },
        { value: "info", label: "Prima informazioni", hint: "Sono interessato, ma aperto." },
      ],
      spaceOptions: [
        { value: "", label: "Seleziona ..." },
        { value: "yes", label: "Sì, c'è spazio" },
        { value: "maybe", label: "Forse / più tardi" },
        { value: "no", label: "Nessuno spazio" },
      ],
      submit: "Invia",
      submitting: "Invio...",
      emailCta: "Oppure via e-mail",
    },
    humanCheck: {
      compact: {
        title: "Conferma breve",
        description:
          "Breve anti-spam. Apri l'attività solo se vuoi inviare il modulo.",
        open: "Apri conferma",
      },
      loading: "Caricamento conferma …",
      promptTitle: "Conferma breve: sei un umano?",
      verified: "✓ verificato",
      intro:
        "Proteggiamo i moduli dallo spam. Nessun tracking, solo un check: risolvi il compito e lascia il campo nascosto vuoto.",
      honeypotLabel: "Lascia vuoto",
      answerLabel: "Inserisci risultato",
      buttonChecking: "Verifica …",
      buttonSolved: "Confermato",
      buttonIdle: "Verifica",
      messages: {
        alreadySolved: "Verifica già completata.",
        numberRequired: "Inserisci il risultato come numero.",
        verifyFailed: "La conferma non è riuscita. Riprova.",
        techError: "Problema tecnico. Riprova più tardi.",
        verified: "Grazie – confermato.",
      },
    },
  },
  tr: {
    meta: {
      title: "Chapter başlat – VoiceOpenGov",
      description: "Yerel VoiceOpenGov chapter'ları için bağlayıcı olmayan başvuru.",
    },
    page: {
      title: "Chapter başlat - yerel kök, küresel karşılaştırılabilir.",
      intro:
        "Chapter'lar bölgesel odak noktalarıdır: konuları toplar, seçenekleri inceler ve kararları izlenebilir kılar. Tarafsız. Şeffaf. Ölçeklenebilir.",
      steps: [
        { title: "1) Ön kayıt", body: "30 saniye - adımlarla geri döneceğiz." },
        { title: "2) Bölge seç", body: "Bölge ve görünürlüğü belirle." },
        { title: "3) Launch kiti", body: "Şablonlar, kurallar, QR materyali ve destek." },
      ],
      ctas: {
        primary: "Ön kayıt",
        secondary: "Geri",
      },
      note: "Kamuya sadece şehir toplamları - bireysel profil yok",
      sections: {
        whatTitle: "Chapter nedir",
        whatBody:
          "Chapter yerel konuları yapılandırır: olgular, seçenekler, sonuçlar, kararlar.",
        notTitle: "Ne değiliz",
        notBody:
          "Bir parti değiliz, bir lobi aracı değiliz. İçerik açıkça belgelenir - taktik değil izlenebilirlik.",
      },
    },
    form: {
      title: "Ön kayıt",
      subtitle: "Launch kiti ve sonraki adımlarla geri döneceğiz.",
      notices: {
        interestRequired: "En az bir ilgi seçeneği seçin.",
        privacyRequired: "Gizlilik bildirimini kabul edin.",
        humanRequired: "Kısa insan kontrolünü tamamlayın.",
        submitOk: "Teşekkürler! Sonraki adımlarla döneceğiz. Başvuru bağlayıcı değildir.",
        submitFail: "Olmadı. Lütfen daha sonra tekrar deneyin.",
      },
      labels: {
        name: "Ad",
        email: "E-posta",
        organisation: "Kuruluş (isteğe bağlı)",
        location: "Şehir / bölge",
        interest: "İlgi",
        spaceAvailable: "Mekan var mı?",
        spaceNotes: "Mekan detayları (isteğe bağlı)",
        notes: "Ek notlar (isteğe bağlı)",
        privacy: {
          before: "Gizlilik",
          link: "bildirimini",
          after: "kabul ediyorum.",
        },
        honeypot: "Lütfen bu alanı boş bırakın",
      },
      placeholders: {
        organisation: "Kuruluş/ girişim adı",
        location: "örn. Berlin, Leipzig, Rhein-Main",
        spaceNotes: "örn. kapasite, uygunluk",
        notes: "Ekip arkadaşları, yerel özellikler, zaman planı ...",
      },
      interestOptions: [
        { value: "start", label: "Chapter başlat", hint: "Yerelde temsil etmek istiyorum." },
        { value: "join", label: "Yardım etmek", hint: "Katılmak istiyorum." },
        { value: "space", label: "Mekan sunmak", hint: "Bir mekana erişimim var." },
        { value: "info", label: "Önce bilgi", hint: "İlgileniyorum ama açık fikirliyim." },
      ],
      spaceOptions: [
        { value: "", label: "Seçiniz ..." },
        { value: "yes", label: "Evet, mekan var" },
        { value: "maybe", label: "Belki / sonra" },
        { value: "no", label: "Mekan yok" },
      ],
      submit: "Gönder",
      submitting: "Gönderiliyor...",
      emailCta: "Veya e-posta",
    },
    humanCheck: {
      compact: {
        title: "Kısa doğrulama",
        description:
          "Kısa anti-spam kontrolü. Formu göndermek istiyorsanız görevi açın.",
        open: "Doğrulamayı aç",
      },
      loading: "Doğrulama yükleniyor …",
      promptTitle: "Kısa doğrulama: insan mısın?",
      verified: "✓ doğrulandı",
      intro:
        "Formları spama karşı koruruz. Takip yok, sadece küçük bir kontrol: işlemi çöz ve gizli alanı boş bırak.",
      honeypotLabel: "Boş bırak",
      answerLabel: "Sonucu gir",
      buttonChecking: "Kontrol …",
      buttonSolved: "Onaylandı",
      buttonIdle: "Kontrol et",
      messages: {
        alreadySolved: "Güvenlik kontrolü zaten tamamlandı.",
        numberRequired: "Lütfen sonucu sayı olarak girin.",
        verifyFailed: "Doğrulama başarısız oldu. Tekrar deneyin.",
        techError: "Teknik sorun. Lütfen daha sonra tekrar deneyin.",
        verified: "Teşekkürler – doğrulandı.",
      },
    },
  },
  ar: {
    meta: {
      title: "بدء Chapter – VoiceOpenGov",
      description: "طلب غير ملزم لبدء Chapter محلي.",
    },
    page: {
      title: "بدء Chapter - متجذر محلياً وقابل للمقارنة عالمياً.",
      intro:
        "الـ Chapters نقاط ارتكاز إقليمية: تجمع المواضيع، تراجع الخيارات، وتجعل القرارات قابلة للتتبع. غير حزبي. شفاف. قابل للتوسع.",
      steps: [
        { title: "1) تسجيل مبدئي", body: "30 ثانية - سنعود بالخطوات." },
        { title: "2) اختيار المنطقة", body: "حدد الموقع والرؤية." },
        { title: "3) حزمة الإطلاق", body: "قوالب، قواعد، مواد QR ودعم." },
      ],
      ctas: {
        primary: "سجل اهتمامك",
        secondary: "عودة",
      },
      note: "عام: فقط مجاميع المدن - دون ملفات فردية",
      sections: {
        whatTitle: "ما هو Chapter",
        whatBody:
          "الـ Chapter يضع المواضيع المحلية في بنية واضحة: حقائق، خيارات، نتائج، قرارات.",
        notTitle: "ما لسنا عليه",
        notBody:
          "لسنا حزباً ولا أداة ضغط. المحتوى موثق علناً - قابل للتتبع لا تكتيكي.",
      },
    },
    form: {
      title: "سجل اهتمامك",
      subtitle: "سنعود بحزمة الإطلاق والخطوات التالية.",
      notices: {
        interestRequired: "يرجى اختيار خيار اهتمام واحد على الأقل.",
        privacyRequired: "يرجى قبول إشعار الخصوصية.",
        humanRequired: "يرجى إكمال التحقق البشري القصير.",
        submitOk: "شكراً! سنعود بالخطوات التالية. الطلب غير ملزم.",
        submitFail: "لم ينجح. يرجى المحاولة لاحقاً.",
      },
      labels: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        organisation: "المنظمة (اختياري)",
        location: "المدينة / المنطقة",
        interest: "الاهتمام",
        spaceAvailable: "هل يوجد مكان؟",
        spaceNotes: "تفاصيل المكان (اختياري)",
        notes: "ملاحظات إضافية (اختياري)",
        privacy: {
          before: "أوافق على",
          link: "إشعار الخصوصية",
          after: ".",
        },
        honeypot: "يرجى ترك هذا الحقل فارغاً",
      },
      placeholders: {
        organisation: "اسم المنظمة/المبادرة",
        location: "مثلاً برلين، لايبزيغ، راين-ماين",
        spaceNotes: "مثلاً السعة، التوفر",
        notes: "شركاء، خصوصيات محلية، جدول زمني ...",
      },
      interestOptions: [
        { value: "start", label: "بدء Chapter", hint: "أريد التمثيل محلياً." },
        { value: "join", label: "المساعدة", hint: "أريد الانضمام." },
        { value: "space", label: "توفير مكان", hint: "لدي إمكانية لمكان." },
        { value: "info", label: "معلومات أولاً", hint: "أنا مهتم ولكن مفتوح." },
      ],
      spaceOptions: [
        { value: "", label: "يرجى الاختيار ..." },
        { value: "yes", label: "نعم، يوجد مكان" },
        { value: "maybe", label: "ربما / لاحقاً" },
        { value: "no", label: "لا يوجد مكان" },
      ],
      submit: "إرسال",
      submitting: "جارٍ الإرسال...",
      emailCta: "أو عبر البريد الإلكتروني",
    },
    humanCheck: {
      compact: {
        title: "تأكيد قصير",
        description:
          "فحص بسيط لمكافحة السبام. افتح المهمة فقط إذا كنت تريد إرسال النموذج.",
        open: "فتح التأكيد",
      },
      loading: "جارٍ تحميل التأكيد …",
      promptTitle: "تأكيد قصير: هل أنت إنسان؟",
      verified: "✓ تم التحقق",
      intro:
        "نحمي النماذج من السبام. بدون تتبع، فقط فحص صغير: احسب العملية واترك الحقل المخفي فارغاً.",
      honeypotLabel: "اتركه فارغاً",
      answerLabel: "أدخل النتيجة",
      buttonChecking: "جارٍ الفحص …",
      buttonSolved: "تم التأكيد",
      buttonIdle: "تحقق",
      messages: {
        alreadySolved: "تم إكمال التحقق مسبقاً.",
        numberRequired: "يرجى إدخال النتيجة كرقم.",
        verifyFailed: "فشل التأكيد. حاول مرة أخرى.",
        techError: "مشكلة تقنية. حاول لاحقاً.",
        verified: "شكراً – تم التأكيد.",
      },
    },
  },
  ru: {
    meta: {
      title: "Запустить chapter – VoiceOpenGov",
      description: "Невязывающее обращение для локального chapter VoiceOpenGov.",
    },
    page: {
      title: "Запустить chapter - локально укорененный, глобально сопоставимый.",
      intro:
        "Chapters — региональные опорные точки: собирают темы, проверяют варианты, делают решения прозрачными. Непартийно. Прозрачно. Масштабируемо.",
      steps: [
        { title: "1) Предзаявка", body: "30 секунд — вернемся с шагами." },
        { title: "2) Выбор региона", body: "Определите место и видимость." },
        { title: "3) Launch‑kit", body: "Шаблоны, правила, QR‑материалы и поддержка." },
      ],
      ctas: {
        primary: "Оставить заявку",
        secondary: "Назад",
      },
      note: "Публично только суммы по городам — без профилей",
      sections: {
        whatTitle: "Что такое chapter",
        whatBody:
          "Chapter структурирует локальные темы: факты, варианты, последствия, решения.",
        notTitle: "Чем мы не являемся",
        notBody:
          "Не партия и не лоббистский инструмент. Контент открыт и документирован — прозрачно, не тактически.",
      },
    },
    form: {
      title: "Оставить заявку",
      subtitle: "Мы вернемся с launch‑kit и дальнейшими шагами.",
      notices: {
        interestRequired: "Выберите хотя бы один вариант интереса.",
        privacyRequired: "Примите уведомление о конфиденциальности.",
        humanRequired: "Пожалуйста, завершите короткую проверку.",
        submitOk: "Спасибо! Мы свяжемся с дальнейшими шагами. Запрос не является обязательным.",
        submitFail: "Не удалось. Попробуйте позже.",
      },
      labels: {
        name: "Имя",
        email: "E-mail",
        organisation: "Организация (необязательно)",
        location: "Город / регион",
        interest: "Интерес",
        spaceAvailable: "Есть помещение?",
        spaceNotes: "Детали помещения (необязательно)",
        notes: "Дополнительные заметки (необязательно)",
        privacy: {
          before: "Я принимаю",
          link: "уведомление о конфиденциальности",
          after: ".",
        },
        honeypot: "Пожалуйста, оставьте поле пустым",
      },
      placeholders: {
        organisation: "Название организации/инициативы",
        location: "например, Берлин, Лейпциг, Рейн‑Майн",
        spaceNotes: "например, вместимость, доступность",
        notes: "Соорганизаторы, местные особенности, сроки ...",
      },
      interestOptions: [
        { value: "start", label: "Запустить chapter", hint: "Хочу представлять локально." },
        { value: "join", label: "Помочь", hint: "Хочу присоединиться." },
        { value: "space", label: "Предложить помещение", hint: "Есть доступ к месту." },
        { value: "info", label: "Сначала информация", hint: "Интересно, но открыт." },
      ],
      spaceOptions: [
        { value: "", label: "Выберите ..." },
        { value: "yes", label: "Да, помещение есть" },
        { value: "maybe", label: "Возможно / позже" },
        { value: "no", label: "Помещения нет" },
      ],
      submit: "Отправить",
      submitting: "Отправка...",
      emailCta: "Или по e-mail",
    },
    humanCheck: {
      compact: {
        title: "Короткое подтверждение",
        description:
          "Короткий анти‑спам. Откройте задачу только если хотите отправить форму.",
        open: "Открыть подтверждение",
      },
      loading: "Загрузка подтверждения …",
      promptTitle: "Короткое подтверждение: вы человек?",
      verified: "✓ подтверждено",
      intro:
        "Мы защищаем формы от спама. Без трекинга, только маленькая проверка: решите задачу и оставьте скрытое поле пустым.",
      honeypotLabel: "Оставьте пустым",
      answerLabel: "Введите результат",
      buttonChecking: "Проверка …",
      buttonSolved: "Подтверждено",
      buttonIdle: "Проверить",
      messages: {
        alreadySolved: "Проверка уже выполнена.",
        numberRequired: "Введите результат числом.",
        verifyFailed: "Подтверждение не удалось. Попробуйте еще раз.",
        techError: "Техническая проблема. Попробуйте позже.",
        verified: "Спасибо — подтверждено.",
      },
    },
  },
  zh: {
    meta: {
      title: "发起 Chapter – VoiceOpenGov",
      description: "面向本地 VoiceOpenGov chapter 的非绑定申请。",
    },
    page: {
      title: "发起 Chapter - 本地扎根，全球可比较。",
      intro:
        "Chapter 是区域锚点：收集议题、审核选项、让决策可追溯。非党派。透明。可扩展。",
      steps: [
        { title: "1) 预登记", body: "30 秒 - 我们会回复步骤。" },
        { title: "2) 选择地区", body: "确定地点与可见性。" },
        { title: "3) 启动包", body: "模板、规则、二维码材料与支持。" },
      ],
      ctas: {
        primary: "预登记",
        secondary: "返回",
      },
      note: "公开仅显示城市汇总 - 无个人档案",
      sections: {
        whatTitle: "什么是 Chapter",
        whatBody: "Chapter 将本地议题结构化：事实、选项、后果、决策。",
        notTitle: "我们不是什么",
        notBody: "不是政党，也不是游说工具。内容公开记录——可追溯而非策略。",
      },
    },
    form: {
      title: "预登记",
      subtitle: "我们会发送启动包并告知下一步。",
      notices: {
        interestRequired: "请至少选择一个兴趣选项。",
        privacyRequired: "请接受隐私说明。",
        humanRequired: "请完成简短的人机验证。",
        submitOk: "谢谢！我们会跟进下一步。此申请不具约束性。",
        submitFail: "未成功，请稍后再试。",
      },
      labels: {
        name: "姓名",
        email: "邮箱",
        organisation: "组织（可选）",
        location: "城市 / 地区",
        interest: "兴趣",
        spaceAvailable: "是否有场地？",
        spaceNotes: "场地详情（可选）",
        notes: "补充说明（可选）",
        privacy: {
          before: "我接受",
          link: "隐私说明",
          after: "。",
        },
        honeypot: "请将此字段留空",
      },
      placeholders: {
        organisation: "组织/倡议名称",
        location: "例如：柏林、莱比锡、莱茵-美因",
        spaceNotes: "例如：容量、可用性",
        notes: "合作者、本地特点、时间计划 ...",
      },
      interestOptions: [
        { value: "start", label: "发起 Chapter", hint: "希望在本地代表。" },
        { value: "join", label: "协助参与", hint: "希望加入。" },
        { value: "space", label: "提供场地", hint: "我有场地资源。" },
        { value: "info", label: "先了解信息", hint: "有兴趣但保持开放。" },
      ],
      spaceOptions: [
        { value: "", label: "请选择 ..." },
        { value: "yes", label: "是的，有场地" },
        { value: "maybe", label: "可能 / 稍后" },
        { value: "no", label: "没有场地" },
      ],
      submit: "提交",
      submitting: "提交中...",
      emailCta: "或通过邮箱",
    },
    humanCheck: {
      compact: {
        title: "简短确认",
        description: "简短反垃圾检查。仅在要提交表单时打开。",
        open: "打开确认",
      },
      loading: "正在加载确认 …",
      promptTitle: "简短确认：你是人类吗？",
      verified: "✓ 已验证",
      intro: "我们防止垃圾提交。不追踪，只需完成小检查：计算并将隐藏字段留空。",
      honeypotLabel: "留空",
      answerLabel: "输入结果",
      buttonChecking: "验证中 …",
      buttonSolved: "已确认",
      buttonIdle: "验证",
      messages: {
        alreadySolved: "安全检查已完成。",
        numberRequired: "请以数字形式输入结果。",
        verifyFailed: "确认失败，请重试。",
        techError: "技术问题，请稍后再试。",
        verified: "谢谢 – 已确认。",
      },
    },
  },
};

export function getChapterStrings(locale: SupportedLocale | string): ChapterStrings {
  const normalized = (locale || DEFAULT_LOCALE) as SupportedLocale;
  return STRINGS[normalized] ?? STRINGS[DEFAULT_LOCALE];
}
