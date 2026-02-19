import { DEFAULT_LOCALE, type SupportedLocale } from "@/config/locales";

type KontaktStrings = {
  page: {
    label: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    emailNote: string;
    responseTime: string;
    providerTitle: string;
    providerIntro: string;
    addressLines: string[];
    responsibleNote: string;
    impressumBefore: string;
    impressumLink: string;
    impressumAfter: string;
    fallbackNote: string;
  };
  form: {
    title: string;
    subtitle: string;
    success: string;
    errors: Record<string, string>;
    turnstileError: string;
    honeypot: string;
    categoryLabel: string;
    categoryPlaceholder: string;
    categories: Array<{ value: string; label: string }>;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    phonePlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    humanCheck: {
      title: string;
      description: string;
      clickCheckLabel: string;
      reshuffle: string;
      shapeSelected: string;
      shapeNot: string;
      writingLabel: string;
      writingHelp: string;
      writingPlaceholder: string;
    };
    shapes: Array<{
      value: string;
      label: string;
      hint: string;
      shape: "circle" | "rect" | "triangle";
      gradient: string;
    }>;
    turnstileLabel: string;
    newsletterLabel: string;
    privacyNote: string;
    submit: string;
    emailCta: string;
  };
};

const STRINGS: Record<SupportedLocale, KontaktStrings> = {
  de: {
    page: {
      label: "Kontakt & Support",
      title: "Der schnellste Weg zu uns.",
      subtitle: "Per Formular oder direkt per E-Mail.",
      emailLabel: "E-Mail:",
      emailNote: "Direkt ans Team VoiceOpenGov",
      responseTime: "Anfragen versuchen wir binnen 24 Stunden zu beantworten.",
      providerTitle: "Anbieter / ladungsfähige Anschrift (gem. § 5 DDG)",
      providerIntro: "VoiceOpenGov – Initiative von",
      addressLines: [
        "Ricky G. Fleischer",
        "Clara-Müller-Jahnke-Str. 41",
        "12589 Berlin",
        "Deutschland",
      ],
      responsibleNote:
        "Verantwortlich i.S.d. § 18 Abs. 2 MStV (journalistisch-redaktionelle Inhalte): Ricky G. Fleischer (Anschrift wie oben)",
      impressumBefore: "Weitere Angaben findest du im",
      impressumLink: "Impressum",
      impressumAfter: ".",
      fallbackNote:
        "Sollte das Formular einmal nicht funktionieren, erreichst du uns jederzeit unter",
    },
    form: {
      title: "Kontaktformular",
      subtitle: "Wir routen dein Anliegen intern an die passende Stelle.",
      success:
        "Danke! Deine Nachricht ist bei uns angekommen. Wir freuen uns über jedes Feedback und melden uns zeitnah.",
      errors: {
        ratelimit:
          "Kurz zu viele Anfragen. Bitte versuche es in ein paar Minuten erneut oder schreib direkt an kontakt@voiceopengov.org.",
        captcha:
          "Die Verifizierung konnte nicht abgeschlossen werden. Bitte lade die Seite neu oder schreib uns direkt an kontakt@voiceopengov.org.",
        invalid:
          "Die Angaben waren unvollständig. Bitte prüfe die Felder oder schreib direkt an kontakt@voiceopengov.org.",
        challenge:
          "Die Sicherheitsfrage wurde nicht korrekt beantwortet. Bitte versuche es erneut oder schreib uns direkt an kontakt@voiceopengov.org.",
        shape:
          "Bitte klicke die korrekte Form an (Kreis). Sollte das nicht funktionieren, schreib uns direkt an kontakt@voiceopengov.org.",
      },
      turnstileError:
        "Die Schutzabfrage konnte nicht geladen werden. Du kannst das Formular trotzdem absenden oder uns direkt per Mail an kontakt@voiceopengov.org schreiben.",
      honeypot: "Bitte dieses Feld frei lassen",
      categoryLabel: "Worum geht es?",
      categoryPlaceholder: "Bitte auswählen …",
      categories: [
        { value: "juristisch", label: "Juristische / rechtliche Anfrage" },
        { value: "presse", label: "Presse- / Interviewanfrage" },
        { value: "medien", label: "Medien / Kooperation" },
        { value: "partei", label: "Partei, Fraktion oder Mandatsträger:in" },
        { value: "bewerbung", label: "Bewerbung / Mitarbeit" },
        { value: "sonstiges", label: "Sonstiges Anliegen" },
      ],
      nameLabel: "Name",
      emailLabel: "E-Mail",
      phoneLabel: "Telefon (optional)",
      phonePlaceholder: "Wenn du einen Rückruf wünschst, gib bitte eine Nummer an.",
      subjectLabel: "Betreff (optional)",
      subjectPlaceholder: "Worum geht es in einem Satz?",
      messageLabel: "Nachricht",
      messagePlaceholder: "Wie können wir dir helfen?",
      humanCheck: {
        title: "Human Check",
        description:
          "Bitte den blauen Kreis auswählen und die Farbe ins Feld schreiben. Hinweis: Rechteck ist türkis, Dreieck ist grün.",
        clickCheckLabel: "Klickcheck",
        reshuffle: "Challenge neu mischen",
        shapeSelected: "(anklicken)",
        shapeNot: "(nicht auswählen)",
        writingLabel: "Kurze Schreibfrage",
        writingHelp: "Schreibe die Farbe des angeklickten Kreises ins Feld (Tipp: blau).",
        writingPlaceholder: 'Bitte "blau" eintragen',
      },
      shapes: [
        {
          value: "kreis",
          label: "Kreis",
          hint: "blau",
          shape: "circle",
          gradient: "bg-gradient-to-br from-sky-400 to-blue-600",
        },
        {
          value: "rechteck",
          label: "Rechteck",
          hint: "türkis",
          shape: "rect",
          gradient: "bg-gradient-to-br from-teal-300 to-cyan-400",
        },
        {
          value: "dreieck",
          label: "Dreieck",
          hint: "grün",
          shape: "triangle",
          gradient: "bg-gradient-to-br from-sky-300 to-sky-500",
        },
      ],
      turnstileLabel: "Kurze Bestätigung, dass du kein Bot bist:",
      newsletterLabel:
        "Ich möchte gelegentlich Updates und Informationen zu VoiceOpenGov erhalten (Newsletter). Du kannst dich jederzeit wieder abmelden.",
      privacyNote:
        "Mit dem Absenden erklärst du dich einverstanden, dass wir deine Angaben zur Bearbeitung deiner Anfrage verarbeiten. Vollständige Datenschutz-Hinweise folgen nach Gesellschaftseintragung.",
      submit: "Anfrage absenden",
      emailCta: "Oder direkt per E-Mail schreiben",
    },
  },
  en: {
    page: {
      label: "Contact & support",
      title: "The fastest way to reach us.",
      subtitle: "Via form or directly by email.",
      emailLabel: "Email:",
      emailNote: "Directly to the VoiceOpenGov team",
      responseTime: "We aim to respond within 24 hours.",
      providerTitle: "Provider / legal address (per § 5 DDG)",
      providerIntro: "VoiceOpenGov – initiative by",
      addressLines: [
        "Ricky G. Fleischer",
        "Clara-Müller-Jahnke-Str. 41",
        "12589 Berlin",
        "Germany",
      ],
      responsibleNote:
        "Responsible per § 18(2) MStV (editorial content): Ricky G. Fleischer (address above)",
      impressumBefore: "Further details in the",
      impressumLink: "legal notice",
      impressumAfter: ".",
      fallbackNote:
        "If the form doesn't work, you can always reach us at",
    },
    form: {
      title: "Contact form",
      subtitle: "We route your request to the right team internally.",
      success:
        "Thanks! We received your message. We appreciate feedback and will get back to you soon.",
      errors: {
        ratelimit:
          "Too many requests. Please try again in a few minutes or write to kontakt@voiceopengov.org.",
        captcha:
          "Verification could not be completed. Please reload the page or write to kontakt@voiceopengov.org.",
        invalid:
          "The information was incomplete. Please check the fields or write to kontakt@voiceopengov.org.",
        challenge:
          "The security question was not answered correctly. Please try again or write to kontakt@voiceopengov.org.",
        shape:
          "Please click the correct shape (circle). If that fails, write to kontakt@voiceopengov.org.",
      },
      turnstileError:
        "The protection check couldn't load. You can still submit the form or email kontakt@voiceopengov.org.",
      honeypot: "Please leave this field empty",
      categoryLabel: "What's this about?",
      categoryPlaceholder: "Please choose …",
      categories: [
        { value: "juristisch", label: "Legal / regulatory inquiry" },
        { value: "presse", label: "Press / interview request" },
        { value: "medien", label: "Media / cooperation" },
        { value: "partei", label: "Party, parliamentary group or elected official" },
        { value: "bewerbung", label: "Application / collaboration" },
        { value: "sonstiges", label: "Other request" },
      ],
      nameLabel: "Name",
      emailLabel: "Email",
      phoneLabel: "Phone (optional)",
      phonePlaceholder: "If you want a call back, please provide a number.",
      subjectLabel: "Subject (optional)",
      subjectPlaceholder: "What's it about in one sentence?",
      messageLabel: "Message",
      messagePlaceholder: "How can we help?",
      humanCheck: {
        title: "Human check",
        description:
          "Please select the blue circle and write the color into the field. Note: rectangle is turquoise, triangle is green.",
        clickCheckLabel: "Click check",
        reshuffle: "Shuffle challenge",
        shapeSelected: "(select)",
        shapeNot: "(do not select)",
        writingLabel: "Short writing task",
        writingHelp: "Write the color of the selected circle into the field (tip: blue).",
        writingPlaceholder: 'Please enter "blue"',
      },
      shapes: [
        {
          value: "kreis",
          label: "Circle",
          hint: "blue",
          shape: "circle",
          gradient: "bg-gradient-to-br from-sky-400 to-blue-600",
        },
        {
          value: "rechteck",
          label: "Rectangle",
          hint: "turquoise",
          shape: "rect",
          gradient: "bg-gradient-to-br from-teal-300 to-cyan-400",
        },
        {
          value: "dreieck",
          label: "Triangle",
          hint: "green",
          shape: "triangle",
          gradient: "bg-gradient-to-br from-sky-300 to-sky-500",
        },
      ],
      turnstileLabel: "Quick check that you're not a bot:",
      newsletterLabel:
        "I want occasional updates and information about VoiceOpenGov (newsletter). You can unsubscribe anytime.",
      privacyNote:
        "By submitting, you agree that we process your data to handle your request. Full privacy information will follow after company registration.",
      submit: "Send request",
      emailCta: "Or write by email",
    },
  },
  fr: {
    page: {
      label: "Contact & support",
      title: "Le moyen le plus rapide de nous joindre.",
      subtitle: "Par formulaire ou directement par e-mail.",
      emailLabel: "E-mail :",
      emailNote: "Directement à l'équipe VoiceOpenGov",
      responseTime: "Nous répondons généralement sous 24 heures.",
      providerTitle: "Prestataire / adresse légale (selon § 5 DDG)",
      providerIntro: "VoiceOpenGov – initiative de",
      addressLines: [
        "Ricky G. Fleischer",
        "Clara-Müller-Jahnke-Str. 41",
        "12589 Berlin",
        "Allemagne",
      ],
      responsibleNote:
        "Responsable au sens du § 18 (2) MStV (contenus rédactionnels) : Ricky G. Fleischer (adresse ci-dessus)",
      impressumBefore: "Plus de détails dans le",
      impressumLink: "mention légale",
      impressumAfter: ".",
      fallbackNote: "Si le formulaire ne fonctionne pas, écrivez-nous à",
    },
    form: {
      title: "Formulaire de contact",
      subtitle: "Nous acheminons votre demande vers la bonne équipe.",
      success:
        "Merci ! Votre message a bien été reçu. Nous apprécions les retours et répondrons rapidement.",
      errors: {
        ratelimit:
          "Trop de demandes. Veuillez réessayer dans quelques minutes ou écrire à kontakt@voiceopengov.org.",
        captcha:
          "La vérification n'a pas pu être effectuée. Rechargez la page ou écrivez à kontakt@voiceopengov.org.",
        invalid:
          "Informations incomplètes. Vérifiez les champs ou écrivez à kontakt@voiceopengov.org.",
        challenge:
          "La question de sécurité est incorrecte. Réessayez ou écrivez à kontakt@voiceopengov.org.",
        shape:
          "Veuillez cliquer la bonne forme (cercle). Si cela échoue, écrivez à kontakt@voiceopengov.org.",
      },
      turnstileError:
        "La vérification n'a pas pu être chargée. Vous pouvez envoyer le formulaire ou écrire à kontakt@voiceopengov.org.",
      honeypot: "Veuillez laisser ce champ vide",
      categoryLabel: "De quoi s'agit-il ?",
      categoryPlaceholder: "Veuillez choisir …",
      categories: [
        { value: "juristisch", label: "Demande juridique / réglementaire" },
        { value: "presse", label: "Demande presse / interview" },
        { value: "medien", label: "Médias / coopération" },
        { value: "partei", label: "Parti, groupe parlementaire ou élu" },
        { value: "bewerbung", label: "Candidature / collaboration" },
        { value: "sonstiges", label: "Autre demande" },
      ],
      nameLabel: "Nom",
      emailLabel: "E-mail",
      phoneLabel: "Téléphone (optionnel)",
      phonePlaceholder: "Si vous souhaitez un rappel, indiquez un numéro.",
      subjectLabel: "Objet (optionnel)",
      subjectPlaceholder: "En une phrase, de quoi s'agit-il ?",
      messageLabel: "Message",
      messagePlaceholder: "Comment pouvons-nous aider ?",
      humanCheck: {
        title: "Human check",
        description:
          "Veuillez sélectionner le cercle bleu et écrire la couleur dans le champ. Note : rectangle turquoise, triangle vert.",
        clickCheckLabel: "Vérification clic",
        reshuffle: "Mélanger la challenge",
        shapeSelected: "(sélectionner)",
        shapeNot: "(ne pas sélectionner)",
        writingLabel: "Question courte",
        writingHelp: "Écrivez la couleur du cercle sélectionné (indice : bleu).",
        writingPlaceholder: 'Veuillez saisir "bleu"',
      },
      shapes: [
        {
          value: "kreis",
          label: "Cercle",
          hint: "bleu",
          shape: "circle",
          gradient: "bg-gradient-to-br from-sky-400 to-blue-600",
        },
        {
          value: "rechteck",
          label: "Rectangle",
          hint: "turquoise",
          shape: "rect",
          gradient: "bg-gradient-to-br from-teal-300 to-cyan-400",
        },
        {
          value: "dreieck",
          label: "Triangle",
          hint: "vert",
          shape: "triangle",
          gradient: "bg-gradient-to-br from-sky-300 to-sky-500",
        },
      ],
      turnstileLabel: "Vérification rapide que vous n'êtes pas un bot :",
      newsletterLabel:
        "Je souhaite recevoir occasionnellement des mises à jour sur VoiceOpenGov (newsletter). Vous pouvez vous désinscrire à tout moment.",
      privacyNote:
        "En envoyant, vous acceptez que nous traitions vos données pour répondre à votre demande. Les informations complètes de confidentialité suivront après l'enregistrement de la société.",
      submit: "Envoyer la demande",
      emailCta: "Ou écrire par e-mail",
    },
  },
  pl: {
    page: {
      label: "Kontakt i wsparcie",
      title: "Najszybszy sposób kontaktu.",
      subtitle: "Przez formularz lub bezpośrednio e-mailem.",
      emailLabel: "E-mail:",
      emailNote: "Bezpośrednio do zespołu VoiceOpenGov",
      responseTime: "Staramy się odpowiadać w ciągu 24 godzin.",
      providerTitle: "Dostawca / adres prawny (wg § 5 DDG)",
      providerIntro: "VoiceOpenGov – inicjatywa",
      addressLines: [
        "Ricky G. Fleischer",
        "Clara-Müller-Jahnke-Str. 41",
        "12589 Berlin",
        "Niemcy",
      ],
      responsibleNote:
        "Odpowiedzialny zgodnie z § 18 ust. 2 MStV (treści redakcyjne): Ricky G. Fleischer (adres jak wyżej)",
      impressumBefore: "Więcej informacji w",
      impressumLink: "impressum",
      impressumAfter: ".",
      fallbackNote: "Jeśli formularz nie działa, napisz do",
    },
    form: {
      title: "Formularz kontaktowy",
      subtitle: "Kierujemy zgłoszenie do właściwego zespołu.",
      success:
        "Dziękujemy! Otrzymaliśmy Twoją wiadomość i wkrótce odpowiemy.",
      errors: {
        ratelimit:
          "Zbyt wiele zapytań. Spróbuj ponownie za kilka minut lub napisz do kontakt@voiceopengov.org.",
        captcha:
          "Weryfikacja nie powiodła się. Odśwież stronę lub napisz do kontakt@voiceopengov.org.",
        invalid:
          "Niekompletne dane. Sprawdź pola lub napisz do kontakt@voiceopengov.org.",
        challenge:
          "Pytanie bezpieczeństwa jest niepoprawne. Spróbuj ponownie lub napisz do kontakt@voiceopengov.org.",
        shape:
          "Kliknij poprawny kształt (okrąg). Jeśli to nie działa, napisz do kontakt@voiceopengov.org.",
      },
      turnstileError:
        "Nie udało się załadować weryfikacji. Możesz wysłać formularz lub napisać na kontakt@voiceopengov.org.",
      honeypot: "Pozostaw to pole puste",
      categoryLabel: "Czego dotyczy?",
      categoryPlaceholder: "Wybierz …",
      categories: [
        { value: "juristisch", label: "Zapytanie prawne" },
        { value: "presse", label: "Zapytanie prasowe / wywiad" },
        { value: "medien", label: "Media / współpraca" },
        { value: "partei", label: "Partia, klub parlamentarny lub poseł" },
        { value: "bewerbung", label: "Aplikacja / współpraca" },
        { value: "sonstiges", label: "Inne" },
      ],
      nameLabel: "Imię i nazwisko",
      emailLabel: "E-mail",
      phoneLabel: "Telefon (opcjonalnie)",
      phonePlaceholder: "Jeśli chcesz rozmowy, podaj numer.",
      subjectLabel: "Temat (opcjonalnie)",
      subjectPlaceholder: "O co chodzi w jednym zdaniu?",
      messageLabel: "Wiadomość",
      messagePlaceholder: "Jak możemy pomóc?",
      humanCheck: {
        title: "Human check",
        description:
          "Wybierz niebieski okrąg i wpisz kolor w polu. Uwaga: prostokąt jest turkusowy, trójkąt zielony.",
        clickCheckLabel: "Sprawdzenie kliknięcia",
        reshuffle: "Wymieszaj wyzwanie",
        shapeSelected: "(wybierz)",
        shapeNot: "(nie wybieraj)",
        writingLabel: "Krótka odpowiedź",
        writingHelp: "Wpisz kolor zaznaczonego okręgu (wskazówka: niebieski).",
        writingPlaceholder: 'Wpisz "niebieski"',
      },
      shapes: [
        {
          value: "kreis",
          label: "Okrąg",
          hint: "niebieski",
          shape: "circle",
          gradient: "bg-gradient-to-br from-sky-400 to-blue-600",
        },
        {
          value: "rechteck",
          label: "Prostokąt",
          hint: "turkusowy",
          shape: "rect",
          gradient: "bg-gradient-to-br from-teal-300 to-cyan-400",
        },
        {
          value: "dreieck",
          label: "Trójkąt",
          hint: "zielony",
          shape: "triangle",
          gradient: "bg-gradient-to-br from-sky-300 to-sky-500",
        },
      ],
      turnstileLabel: "Krótka weryfikacja, że nie jesteś botem:",
      newsletterLabel:
        "Chcę otrzymywać okazjonalne aktualizacje o VoiceOpenGov (newsletter). W każdej chwili możesz się wypisać.",
      privacyNote:
        "Wysyłając, zgadzasz się na przetwarzanie danych w celu obsługi zgłoszenia. Pełna informacja o prywatności po rejestracji spółki.",
      submit: "Wyślij",
      emailCta: "Lub napisz e-mail",
    },
  },
  es: {
    page: {
      label: "Contacto y soporte",
      title: "La forma más rápida de contactarnos.",
      subtitle: "Por formulario o directamente por e-mail.",
      emailLabel: "E-mail:",
      emailNote: "Directamente al equipo de VoiceOpenGov",
      responseTime: "Intentamos responder en 24 horas.",
      providerTitle: "Proveedor / dirección legal (según § 5 DDG)",
      providerIntro: "VoiceOpenGov – iniciativa de",
      addressLines: [
        "Ricky G. Fleischer",
        "Clara-Müller-Jahnke-Str. 41",
        "12589 Berlin",
        "Alemania",
      ],
      responsibleNote:
        "Responsable según § 18(2) MStV (contenidos editoriales): Ricky G. Fleischer (dirección arriba)",
      impressumBefore: "Más detalles en el",
      impressumLink: "aviso legal",
      impressumAfter: ".",
      fallbackNote: "Si el formulario no funciona, escribe a",
    },
    form: {
      title: "Formulario de contacto",
      subtitle: "Enrutamos tu solicitud al equipo adecuado.",
      success:
        "¡Gracias! Recibimos tu mensaje y responderemos pronto.",
      errors: {
        ratelimit:
          "Demasiadas solicitudes. Intenta de nuevo en unos minutos o escribe a kontakt@voiceopengov.org.",
        captcha:
          "No se pudo completar la verificación. Recarga la página o escribe a kontakt@voiceopengov.org.",
        invalid:
          "Información incompleta. Revisa los campos o escribe a kontakt@voiceopengov.org.",
        challenge:
          "La pregunta de seguridad no fue respondida correctamente. Intenta de nuevo o escribe a kontakt@voiceopengov.org.",
        shape:
          "Haz clic en la forma correcta (círculo). Si falla, escribe a kontakt@voiceopengov.org.",
      },
      turnstileError:
        "No se pudo cargar la verificación. Puedes enviar el formulario o escribir a kontakt@voiceopengov.org.",
      honeypot: "Deja este campo vacío",
      categoryLabel: "¿De qué se trata?",
      categoryPlaceholder: "Selecciona …",
      categories: [
        { value: "juristisch", label: "Consulta legal" },
        { value: "presse", label: "Solicitud de prensa / entrevista" },
        { value: "medien", label: "Medios / cooperación" },
        { value: "partei", label: "Partido, grupo parlamentario o cargo electo" },
        { value: "bewerbung", label: "Solicitud / colaboración" },
        { value: "sonstiges", label: "Otro" },
      ],
      nameLabel: "Nombre",
      emailLabel: "E-mail",
      phoneLabel: "Teléfono (opcional)",
      phonePlaceholder: "Si deseas una llamada, indica un número.",
      subjectLabel: "Asunto (opcional)",
      subjectPlaceholder: "¿De qué se trata en una frase?",
      messageLabel: "Mensaje",
      messagePlaceholder: "¿Cómo можемос ayudarte?",
      humanCheck: {
        title: "Human check",
        description:
          "Selecciona el círculo azul y escribe el color en el campo. Nota: rectángulo turquesa, triángulo verde.",
        clickCheckLabel: "Verificación de clic",
        reshuffle: "Mezclar desafío",
        shapeSelected: "(seleccionar)",
        shapeNot: "(no seleccionar)",
        writingLabel: "Pregunta breve",
        writingHelp: "Escribe el color del círculo seleccionado (pista: azul).",
        writingPlaceholder: 'Escribe "azul"',
      },
      shapes: [
        {
          value: "kreis",
          label: "Círculo",
          hint: "azul",
          shape: "circle",
          gradient: "bg-gradient-to-br from-sky-400 to-blue-600",
        },
        {
          value: "rechteck",
          label: "Rectángulo",
          hint: "turquesa",
          shape: "rect",
          gradient: "bg-gradient-to-br from-teal-300 to-cyan-400",
        },
        {
          value: "dreieck",
          label: "Triángulo",
          hint: "verde",
          shape: "triangle",
          gradient: "bg-gradient-to-br from-sky-300 to-sky-500",
        },
      ],
      turnstileLabel: "Confirmación rápida de que no eres un bot:",
      newsletterLabel:
        "Quiero recibir actualizaciones ocasionales sobre VoiceOpenGov (newsletter). Puedes darte de baja en cualquier momento.",
      privacyNote:
        "Al enviar, aceptas que procesemos tus datos para gestionar la solicitud. La información completa de privacidad seguirá tras el registro de la empresa.",
      submit: "Enviar solicitud",
      emailCta: "O escribir por e-mail",
    },
  },
  it: {
    page: {
      label: "Contatto e supporto",
      title: "Il modo più veloce per contattarci.",
      subtitle: "Tramite modulo o direttamente via e-mail.",
      emailLabel: "E-mail:",
      emailNote: "Direttamente al team VoiceOpenGov",
      responseTime: "Rispondiamo di solito entro 24 ore.",
      providerTitle: "Fornitore / indirizzo legale (ai sensi del § 5 DDG)",
      providerIntro: "VoiceOpenGov – iniziativa di",
      addressLines: [
        "Ricky G. Fleischer",
        "Clara-Müller-Jahnke-Str. 41",
        "12589 Berlin",
        "Germania",
      ],
      responsibleNote:
        "Responsabile ai sensi del § 18(2) MStV (contenuti editoriali): Ricky G. Fleischer (indirizzo sopra)",
      impressumBefore: "Ulteriori dettagli nel",
      impressumLink: "impressum",
      impressumAfter: ".",
      fallbackNote: "Se il modulo non funziona, scrivi a",
    },
    form: {
      title: "Modulo di contatto",
      subtitle: "Instradiamo la tua richiesta al team giusto.",
      success:
        "Grazie! Abbiamo ricevuto il tuo messaggio e ti risponderemo presto.",
      errors: {
        ratelimit:
          "Troppe richieste. Riprova tra qualche minuto o scrivi a kontakt@voiceopengov.org.",
        captcha:
          "Verifica non riuscita. Ricarica la pagina o scrivi a kontakt@voiceopengov.org.",
        invalid:
          "Dati incompleti. Controlla i campi o scrivi a kontakt@voiceopengov.org.",
        challenge:
          "La domanda di sicurezza non è corretta. Riprova o scrivi a kontakt@voiceopengov.org.",
        shape:
          "Seleziona la forma corretta (cerchio). Se non funziona, scrivi a kontakt@voiceopengov.org.",
      },
      turnstileError:
        "Impossibile caricare la verifica. Puoi inviare il modulo o scrivere a kontakt@voiceopengov.org.",
      honeypot: "Lascia questo campo vuoto",
      categoryLabel: "Di cosa si tratta?",
      categoryPlaceholder: "Seleziona …",
      categories: [
        { value: "juristisch", label: "Richiesta legale" },
        { value: "presse", label: "Richiesta stampa / интервью" },
        { value: "medien", label: "Media / collaborazione" },
        { value: "partei", label: "Partito, gruppo parlamentare o eletto" },
        { value: "bewerbung", label: "Candidatura / collaborazione" },
        { value: "sonstiges", label: "Altro" },
      ],
      nameLabel: "Nome",
      emailLabel: "E-mail",
      phoneLabel: "Telefono (opzionale)",
      phonePlaceholder: "Se desideri un richiamo, indica un numero.",
      subjectLabel: "Oggetto (opzionale)",
      subjectPlaceholder: "Di cosa si tratta in una frase?",
      messageLabel: "Messaggio",
      messagePlaceholder: "Come possiamo aiutare?",
      humanCheck: {
        title: "Human check",
        description:
          "Seleziona il cerchio blu e scrivi il colore nel campo. Nota: rettangolo turchese, triangolo verde.",
        clickCheckLabel: "Controllo clic",
        reshuffle: "Mescola la sfida",
        shapeSelected: "(seleziona)",
        shapeNot: "(non selezionare)",
        writingLabel: "Domanda breve",
        writingHelp: "Scrivi il colore del cerchio selezionato (suggerimento: blu).",
        writingPlaceholder: 'Inserisci "blu"',
      },
      shapes: [
        {
          value: "kreis",
          label: "Cerchio",
          hint: "blu",
          shape: "circle",
          gradient: "bg-gradient-to-br from-sky-400 to-blue-600",
        },
        {
          value: "rechteck",
          label: "Rettangolo",
          hint: "turchese",
          shape: "rect",
          gradient: "bg-gradient-to-br from-teal-300 to-cyan-400",
        },
        {
          value: "dreieck",
          label: "Triangolo",
          hint: "verde",
          shape: "triangle",
          gradient: "bg-gradient-to-br from-sky-300 to-sky-500",
        },
      ],
      turnstileLabel: "Conferma rapida che non sei un bot:",
      newsletterLabel:
        "Voglio ricevere occasionali aggiornamenti su VoiceOpenGov (newsletter). Puoi annullare in qualsiasi momento.",
      privacyNote:
        "Inviando, accetti che trattiamo i tuoi dati per gestire la richiesta. Le informazioni complete sulla privacy seguiranno dopo la registrazione della società.",
      submit: "Invia richiesta",
      emailCta: "O scrivi via e-mail",
    },
  },
  tr: {
    page: {
      label: "İletişim ve destek",
      title: "Bize ulaşmanın en hızlı yolu.",
      subtitle: "Form veya doğrudan e-posta ile.",
      emailLabel: "E-posta:",
      emailNote: "VoiceOpenGov ekibine doğrudan",
      responseTime: "Genellikle 24 saat içinde yanıt veririz.",
      providerTitle: "Sağlayıcı / yasal adres (§ 5 DDG)",
      providerIntro: "VoiceOpenGov – girişimi",
      addressLines: [
        "Ricky G. Fleischer",
        "Clara-Müller-Jahnke-Str. 41",
        "12589 Berlin",
        "Almanya",
      ],
      responsibleNote:
        "§ 18(2) MStV uyarınca sorumlu (editoryal içerik): Ricky G. Fleischer (yukarıdaki adres)",
      impressumBefore: "Daha fazla bilgi için",
      impressumLink: "impressum",
      impressumAfter: ".",
      fallbackNote: "Form çalışmazsa, şuraya yazabilirsiniz:",
    },
    form: {
      title: "İletişim formu",
      subtitle: "Talebinizi doğru ekibe yönlendiriyoruz.",
      success:
        "Teşekkürler! Mesajınızı aldık ve kısa sürede dönüş yapacağız.",
      errors: {
        ratelimit:
          "Çok fazla istek. Birkaç dakika sonra tekrar deneyin veya kontakt@voiceopengov.org adresine yazın.",
        captcha:
          "Doğrulama tamamlanamadı. Sayfayı yenileyin veya kontakt@voiceopengov.org adresine yazın.",
        invalid:
          "Bilgiler eksik. Alanları kontrol edin veya kontakt@voiceopengov.org adresine yazın.",
        challenge:
          "Güvenlik sorusu yanlış cevaplandı. Tekrar deneyin veya kontakt@voiceopengov.org adresine yazın.",
        shape:
          "Doğru şekli tıklayın (daire). Olmazsa kontakt@voiceopengov.org adresine yazın.",
      },
      turnstileError:
        "Koruma doğrulaması yüklenemedi. Formu yine de gönderebilir veya kontakt@voiceopengov.org adresine yazabilirsiniz.",
      honeypot: "Lütfen bu alanı boş bırakın",
      categoryLabel: "Konu nedir?",
      categoryPlaceholder: "Seçiniz …",
      categories: [
        { value: "juristisch", label: "Hukuki / yasal talep" },
        { value: "presse", label: "Basın / röportaj talebi" },
        { value: "medien", label: "Medya / işbirliği" },
        { value: "partei", label: "Parti, parlamento grubu veya seçilmiş" },
        { value: "bewerbung", label: "Başvuru / işbirliği" },
        { value: "sonstiges", label: "Diğer" },
      ],
      nameLabel: "Ad",
      emailLabel: "E-posta",
      phoneLabel: "Telefon (isteğe bağlı)",
      phonePlaceholder: "Geri arama isterseniz numara bırakın.",
      subjectLabel: "Konu (isteğe bağlı)",
      subjectPlaceholder: "Tek cümlede konu nedir?",
      messageLabel: "Mesaj",
      messagePlaceholder: "Nasıl yardımcı olabiliriz?",
      humanCheck: {
        title: "Human check",
        description:
          "Mavi daireyi seçin ve rengi alana yazın. Not: dikdörtgen turkuaz, üçgen yeşil.",
        clickCheckLabel: "Tıklama kontrolü",
        reshuffle: "Görevi karıştır",
        shapeSelected: "(seç)",
        shapeNot: "(seçme)",
        writingLabel: "Kısa yazı",
        writingHelp: "Seçilen dairenin rengini yazın (ipucu: mavi).",
        writingPlaceholder: '"mavi" yazın',
      },
      shapes: [
        {
          value: "kreis",
          label: "Daire",
          hint: "mavi",
          shape: "circle",
          gradient: "bg-gradient-to-br from-sky-400 to-blue-600",
        },
        {
          value: "rechteck",
          label: "Dikdörtgen",
          hint: "turkuaz",
          shape: "rect",
          gradient: "bg-gradient-to-br from-teal-300 to-cyan-400",
        },
        {
          value: "dreieck",
          label: "Üçgen",
          hint: "yeşil",
          shape: "triangle",
          gradient: "bg-gradient-to-br from-sky-300 to-sky-500",
        },
      ],
      turnstileLabel: "Bot olmadığınızı doğrulayan kısa kontrol:",
      newsletterLabel:
        "VoiceOpenGov hakkında ara sıra güncellemeler almak istiyorum (bülten). İstediğiniz zaman çıkabilirsiniz.",
      privacyNote:
        "Göndererek, talebinizi işlemek için verilerinizi kullanmamızı kabul etmiş olursunuz. Tam gizlilik bilgileri şirket kaydından sonra paylaşılacaktır.",
      submit: "Talebi gönder",
      emailCta: "Veya e-posta ile yaz",
    },
  },
  ar: {
    page: {
      label: "اتصال ودعم",
      title: "أسرع طريقة للتواصل معنا.",
      subtitle: "عبر النموذج أو مباشرة عبر البريد الإلكتروني.",
      emailLabel: "البريد الإلكتروني:",
      emailNote: "مباشرة إلى فريق VoiceOpenGov",
      responseTime: "نحاول الرد خلال 24 ساعة.",
      providerTitle: "المزوّد / العنوان القانوني (وفق § 5 DDG)",
      providerIntro: "VoiceOpenGov – مبادرة من",
      addressLines: [
        "Ricky G. Fleischer",
        "Clara-Müller-Jahnke-Str. 41",
        "12589 Berlin",
        "ألمانيا",
      ],
      responsibleNote:
        "المسؤول وفق § 18(2) MStV (المحتوى التحريري): Ricky G. Fleischer (العنوان أعلاه)",
      impressumBefore: "تفاصيل إضافية في",
      impressumLink: "الإشعار القانوني",
      impressumAfter: ".",
      fallbackNote: "إذا لم يعمل النموذج، يمكنك مراسلتنا على",
    },
    form: {
      title: "نموذج الاتصال",
      subtitle: "نوجّه طلبك إلى الفريق المناسب.",
      success: "شكراً! استلمنا رسالتك وسنرد قريباً.",
      errors: {
        ratelimit:
          "طلبات كثيرة جداً. حاول بعد دقائق أو اكتب إلى kontakt@voiceopengov.org.",
        captcha:
          "لم تكتمل عملية التحقق. أعد تحميل الصفحة أو اكتب إلى kontakt@voiceopengov.org.",
        invalid:
          "البيانات غير مكتملة. تحقق من الحقول أو اكتب إلى kontakt@voiceopengov.org.",
        challenge:
          "سؤال الأمان غير صحيح. حاول مجدداً أو اكتب إلى kontakt@voiceopengov.org.",
        shape:
          "يرجى اختيار الشكل الصحيح (الدائرة). إذا لم ينجح، اكتب إلى kontakt@voiceopengov.org.",
      },
      turnstileError:
        "تعذر تحميل التحقق. يمكنك إرسال النموذج أو مراسلتنا على kontakt@voiceopengov.org.",
      honeypot: "يرجى ترك هذا الحقل فارغاً",
      categoryLabel: "ما هو موضوعك؟",
      categoryPlaceholder: "اختر …",
      categories: [
        { value: "juristisch", label: "استفسار قانوني" },
        { value: "presse", label: "طلب صحفي / مقابلة" },
        { value: "medien", label: "إعلام / تعاون" },
        { value: "partei", label: "حزب أو كتلة برلمانية أو مسؤول منتخب" },
        { value: "bewerbung", label: "طلب / تعاون" },
        { value: "sonstiges", label: "أخرى" },
      ],
      nameLabel: "الاسم",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف (اختياري)",
      phonePlaceholder: "إذا رغبت في مكالمة، أضف الرقم.",
      subjectLabel: "الموضوع (اختياري)",
      subjectPlaceholder: "عن ماذا يتحدث في جملة واحدة؟",
      messageLabel: "الرسالة",
      messagePlaceholder: "كيف يمكننا مساعدتك؟",
      humanCheck: {
        title: "Human check",
        description:
          "اختر الدائرة الزرقاء واكتب اللون في الحقل. ملاحظة: المستطيل تركوازي والمثلث أخضر.",
        clickCheckLabel: "تحقق النقر",
        reshuffle: "إعادة خلط التحدي",
        shapeSelected: "(اختر)",
        shapeNot: "(لا تختَر)",
        writingLabel: "سؤال قصير",
        writingHelp: "اكتب لون الدائرة المختارة (تلميح: أزرق).",
        writingPlaceholder: 'اكتب "أزرق"',
      },
      shapes: [
        {
          value: "kreis",
          label: "دائرة",
          hint: "أزرق",
          shape: "circle",
          gradient: "bg-gradient-to-br from-sky-400 to-blue-600",
        },
        {
          value: "rechteck",
          label: "مستطيل",
          hint: "تركوازي",
          shape: "rect",
          gradient: "bg-gradient-to-br from-teal-300 to-cyan-400",
        },
        {
          value: "dreieck",
          label: "مثلث",
          hint: "أخضر",
          shape: "triangle",
          gradient: "bg-gradient-to-br from-sky-300 to-sky-500",
        },
      ],
      turnstileLabel: "تحقق سريع أنك لست روبوتاً:",
      newsletterLabel:
        "أرغب في تلقي تحديثات دورية حول VoiceOpenGov (نشرة). يمكنك إلغاء الاشتراك في أي وقت.",
      privacyNote:
        "بإرسالك، توافق على معالجة بياناتك للرد على طلبك. ستتبع معلومات الخصوصية الكاملة بعد تسجيل الشركة.",
      submit: "إرسال الطلب",
      emailCta: "أو مراسلتنا عبر البريد الإلكتروني",
    },
  },
  ru: {
    page: {
      label: "Контакт и поддержка",
      title: "Самый быстрый способ связаться с нами.",
      subtitle: "Через форму или напрямую по e-mail.",
      emailLabel: "E-mail:",
      emailNote: "Напрямую команде VoiceOpenGov",
      responseTime: "Обычно отвечаем в течение 24 часов.",
      providerTitle: "Провайдер / юридический адрес (§ 5 DDG)",
      providerIntro: "VoiceOpenGov – инициатива",
      addressLines: [
        "Ricky G. Fleischer",
        "Clara-Müller-Jahnke-Str. 41",
        "12589 Berlin",
        "Германия",
      ],
      responsibleNote:
        "Ответственный по § 18(2) MStV (редакционный контент): Ricky G. Fleischer (адрес выше)",
      impressumBefore: "Доп. сведения в",
      impressumLink: "импрессуме",
      impressumAfter: ".",
      fallbackNote: "Если форма не работает, напишите на",
    },
    form: {
      title: "Форма контакта",
      subtitle: "Мы направим запрос в нужную команду.",
      success: "Спасибо! Мы получили сообщение и скоро ответим.",
      errors: {
        ratelimit:
          "Слишком много запросов. Попробуйте позже или напишите на kontakt@voiceopengov.org.",
        captcha:
          "Проверка не завершена. Перезагрузите страницу или напишите на kontakt@voiceopengov.org.",
        invalid:
          "Данные неполные. Проверьте поля или напишите на kontakt@voiceopengov.org.",
        challenge:
          "Ответ на контрольный вопрос неверен. Попробуйте снова или напишите на kontakt@voiceopengov.org.",
        shape:
          "Нажмите правильную фигуру (круг). Если не получается, напишите на kontakt@voiceopengov.org.",
      },
      turnstileError:
        "Не удалось загрузить проверку. Вы можете отправить форму или написать на kontakt@voiceopengov.org.",
      honeypot: "Оставьте это поле пустым",
      categoryLabel: "О чем вопрос?",
      categoryPlaceholder: "Выберите …",
      categories: [
        { value: "juristisch", label: "Юридический запрос" },
        { value: "presse", label: "Пресс‑запрос / интервью" },
        { value: "medien", label: "Медиа / сотрудничество" },
        { value: "partei", label: "Партия, фракция или избранный представитель" },
        { value: "bewerbung", label: "Заявка / сотрудничество" },
        { value: "sonstiges", label: "Другое" },
      ],
      nameLabel: "Имя",
      emailLabel: "E-mail",
      phoneLabel: "Телефон (необязательно)",
      phonePlaceholder: "Если хотите звонок, укажите номер.",
      subjectLabel: "Тема (необязательно)",
      subjectPlaceholder: "О чем в одном предложении?",
      messageLabel: "Сообщение",
      messagePlaceholder: "Как мы можем помочь?",
      humanCheck: {
        title: "Human check",
        description:
          "Выберите синий круг и напишите цвет. Примечание: прямоугольник — бирюзовый, треугольник — зелёный.",
        clickCheckLabel: "Проверка клика",
        reshuffle: "Перемешать задачу",
        shapeSelected: "(выбрать)",
        shapeNot: "(не выбирать)",
        writingLabel: "Короткий ответ",
        writingHelp: "Введите цвет выбранного круга (подсказка: синий).",
        writingPlaceholder: 'Введите "синий"',
      },
      shapes: [
        {
          value: "kreis",
          label: "Круг",
          hint: "синий",
          shape: "circle",
          gradient: "bg-gradient-to-br from-sky-400 to-blue-600",
        },
        {
          value: "rechteck",
          label: "Прямоугольник",
          hint: "бирюзовый",
          shape: "rect",
          gradient: "bg-gradient-to-br from-teal-300 to-cyan-400",
        },
        {
          value: "dreieck",
          label: "Треугольник",
          hint: "зелёный",
          shape: "triangle",
          gradient: "bg-gradient-to-br from-sky-300 to-sky-500",
        },
      ],
      turnstileLabel: "Короткая проверка, что вы не бот:",
      newsletterLabel:
        "Хочу получать редкие обновления о VoiceOpenGov (рассылка). Можно отписаться в любое время.",
      privacyNote:
        "Отправляя, вы соглашаетесь на обработку данных для ответа на запрос. Полная информация о конфиденциальности будет после регистрации компании.",
      submit: "Отправить",
      emailCta: "Или написать по e-mail",
    },
  },
  zh: {
    page: {
      label: "联系与支持",
      title: "联系我们的最快方式。",
      subtitle: "通过表单或直接邮件。",
      emailLabel: "邮箱：",
      emailNote: "直达 VoiceOpenGov 团队",
      responseTime: "我们通常在 24 小时内回复。",
      providerTitle: "提供者 / 法定地址（§ 5 DDG）",
      providerIntro: "VoiceOpenGov – 发起人",
      addressLines: [
        "Ricky G. Fleischer",
        "Clara-Müller-Jahnke-Str. 41",
        "12589 Berlin",
        "德国",
      ],
      responsibleNote:
        "编辑内容负责人（§ 18(2) MStV）：Ricky G. Fleischer（地址同上）",
      impressumBefore: "更多详情见",
      impressumLink: "法律声明",
      impressumAfter: "。",
      fallbackNote: "如果表单无法使用，可随时联系",
    },
    form: {
      title: "联系表单",
      subtitle: "我们会将你的请求转给合适的团队。",
      success: "感谢！我们已收到消息，会尽快回复。",
      errors: {
        ratelimit:
          "请求过多。请稍后再试或写信至 kontakt@voiceopengov.org。",
        captcha:
          "验证未完成。请刷新页面或写信至 kontakt@voiceopengov.org。",
        invalid:
          "信息不完整。请检查字段或写信至 kontakt@voiceopengov.org。",
        challenge:
          "安全问题回答不正确。请重试或写信至 kontakt@voiceopengov.org。",
        shape:
          "请选择正确形状（圆形）。如失败，请写信至 kontakt@voiceopengov.org。",
      },
      turnstileError:
        "保护校验未加载。你仍可提交表单或写信至 kontakt@voiceopengov.org。",
      honeypot: "请将此字段留空",
      categoryLabel: "关于什么？",
      categoryPlaceholder: "请选择 …",
      categories: [
        { value: "juristisch", label: "法律/法规咨询" },
        { value: "presse", label: "媒体/采访请求" },
        { value: "medien", label: "媒体/合作" },
        { value: "partei", label: "政党、议会团体或民选代表" },
        { value: "bewerbung", label: "申请 / 合作" },
        { value: "sonstiges", label: "其他" },
      ],
      nameLabel: "姓名",
      emailLabel: "邮箱",
      phoneLabel: "电话（可选）",
      phonePlaceholder: "如需回电，请填写号码。",
      subjectLabel: "主题（可选）",
      subjectPlaceholder: "一句话说明内容？",
      messageLabel: "留言",
      messagePlaceholder: "我们如何帮助你？",
      humanCheck: {
        title: "Human check",
        description:
          "请选择蓝色圆形并在输入框写出颜色。提示：矩形为青绿，三角为绿色。",
        clickCheckLabel: "点击检查",
        reshuffle: "重新打乱",
        shapeSelected: "(选择)",
        shapeNot: "(不要选)",
        writingLabel: "简短问题",
        writingHelp: "输入所选圆形的颜色（提示：蓝色）。",
        writingPlaceholder: '请输入“蓝色”',
      },
      shapes: [
        {
          value: "kreis",
          label: "圆形",
          hint: "蓝色",
          shape: "circle",
          gradient: "bg-gradient-to-br from-sky-400 to-blue-600",
        },
        {
          value: "rechteck",
          label: "矩形",
          hint: "青绿",
          shape: "rect",
          gradient: "bg-gradient-to-br from-teal-300 to-cyan-400",
        },
        {
          value: "dreieck",
          label: "三角形",
          hint: "绿色",
          shape: "triangle",
          gradient: "bg-gradient-to-br from-sky-300 to-sky-500",
        },
      ],
      turnstileLabel: "快速确认你不是机器人：",
      newsletterLabel:
        "我希望偶尔收到 VoiceOpenGov 的更新（新闻通讯）。可随时取消订阅。",
      privacyNote:
        "提交即表示同意我们为处理请求而使用你的信息。公司注册完成后会提供完整隐私说明。",
      submit: "发送请求",
      emailCta: "或直接发送邮件",
    },
  },
};

export function getKontaktStrings(locale: SupportedLocale | string): KontaktStrings {
  const normalized = (locale || DEFAULT_LOCALE) as SupportedLocale;
  return STRINGS[normalized] ?? STRINGS[DEFAULT_LOCALE];
}
