import type { SupportedLocale } from "@/config/locales";
import type { HumanCheckStrings } from "@/components/security/HumanCheck";

export type RegionalActivationStrings = {
  meta: { title: string; description: string };
  page: {
    eyebrow: string;
    title: string;
    intro: string;
    promise: string;
    steps: Array<{ title: string; body: string }>;
    todayTitle: string;
    todayBody: string;
    laterTitle: string;
    laterBody: string;
    responsibilityTitle: string;
    responsibilityBody: string;
    rolesLink: string;
  };
  form: {
    title: string;
    subtitle: string;
    labels: {
      name: string;
      email: string;
      location: string;
      topic: string;
      intentions: string;
      notes: string;
      contactConsent: string;
      matchingConsent: string;
      privacy: { before: string; link: string; after: string };
      honeypot: string;
    };
    placeholders: { location: string; topic: string; notes: string };
    intentionOptions: Array<{ value: string; label: string; hint: string }>;
    notices: {
      intentionRequired: string;
      consentRequired: string;
      humanRequired: string;
      submitOk: string;
      submitFail: string;
    };
    submit: string;
    submitting: string;
  };
  humanCheck: HumanCheckStrings;
};

const deHumanCheck: HumanCheckStrings = {
  compact: {
    title: "Kurze Bestätigung",
    description: "Ein kleiner Anti-Spam-Check – ohne Werbetracking.",
    open: "Bestätigung öffnen",
  },
  loading: "Lade kurze Bestätigung …",
  promptTitle: "Kurze Bestätigung: Bist du ein Mensch?",
  verified: "✓ geprüft",
  intro: "Bitte löse die kleine Aufgabe. Sie schützt das Formular vor automatischem Spam.",
  honeypotLabel: "Bitte leer lassen",
  answerLabel: "Ergebnis eintragen",
  buttonChecking: "Prüfen …",
  buttonSolved: "Bestätigt",
  buttonIdle: "Kurz prüfen",
  messages: {
    alreadySolved: "Sicherheitscheck bereits erledigt.",
    numberRequired: "Bitte trage das Ergebnis als Zahl ein.",
    verifyFailed: "Die Bestätigung hat nicht geklappt. Bitte versuche es erneut.",
    techError: "Es gab ein technisches Problem. Bitte später erneut versuchen.",
    verified: "Danke – kurz bestätigt.",
  },
};

const enHumanCheck: HumanCheckStrings = {
  compact: {
    title: "Quick confirmation",
    description: "A small anti-spam check without advertising trackers.",
    open: "Open confirmation",
  },
  loading: "Loading confirmation …",
  promptTitle: "Quick confirmation: Are you human?",
  verified: "✓ verified",
  intro: "Please solve the small task. It protects the form from automated spam.",
  honeypotLabel: "Please leave empty",
  answerLabel: "Enter the result",
  buttonChecking: "Checking …",
  buttonSolved: "Confirmed",
  buttonIdle: "Check",
  messages: {
    alreadySolved: "Security check already completed.",
    numberRequired: "Please enter the result as a number.",
    verifyFailed: "The confirmation failed. Please try again.",
    techError: "There was a technical problem. Please try again later.",
    verified: "Thank you – confirmed.",
  },
};

const DE: RegionalActivationStrings = {
  meta: {
    title: "In deiner Region aktiv werden | VoiceOpenGov",
    description: "Melde dich unverbindlich, wenn du Menschen in deiner Region kennenlernen, bei einem Stammtisch dabei sein oder selbst einen ersten Austausch anstoßen möchtest.",
  },
  page: {
    eyebrow: "VoiceOpenGov vor Ort",
    title: "Du möchtest in deiner Region nicht nur zuschauen?",
    intro: "Du brauchst keine fertige Gruppe und musst auch nicht sofort Verantwortung übernehmen. Sag uns einfach, wo du lebst und was du dir vorstellen kannst.",
    promise: "Wir versprechen dir keine fertige Veranstaltung. Wir schaffen den ehrlichen ersten Schritt, damit Menschen mit ähnlichem Interesse zueinanderfinden können.",
    steps: [
      { title: "1. Du meldest dich", body: "Unverbindlich und ohne öffentliches Profil." },
      { title: "2. Wir schauen nach", body: "Gibt es bereits Interessierte oder eine passende regionale Gruppe?" },
      { title: "3. Du entscheidest", body: "Kontakt entsteht nur, wenn du ausdrücklich zustimmst." },
    ],
    todayTitle: "Was heute schon möglich ist",
    todayBody: "Wir können dein regionales Interesse aufnehmen, unterscheiden, ob du teilnehmen, etwas anstoßen oder helfen möchtest, und dich später über passende nächste Schritte informieren.",
    laterTitle: "Was als Nächstes entsteht",
    laterBody: "Im Mitgliederbereich sollen regionale Räume mit Aufgaben, geschütztem Austausch, Stammtischvorschlägen und einer einfachen Termin- und Ortsplanung entstehen.",
    responsibilityTitle: "Wer veranstaltet einen Stammtisch?",
    responsibilityBody: "VoiceOpenGov ermöglicht Mitgliedern, regionale Treffen vorzubereiten. Solange VoiceOpenGov Veranstaltungen noch nicht selbst operativ anbietet, wird ein konkretes Treffen von benannten Gastgebern verantwortet.",
    rolesLink: "Weitere Möglichkeiten ansehen",
  },
  form: {
    title: "Was möchtest du in deiner Region tun?",
    subtitle: "Mehrere Antworten sind möglich. Deine Angaben bleiben zunächst intern.",
    labels: {
      name: "Dein Name",
      email: "Deine E-Mail",
      location: "Ort oder Region",
      topic: "Gibt es ein Thema, das dir besonders wichtig ist? (optional)",
      intentions: "Ich möchte …",
      notes: "Was sollten wir noch wissen? (optional)",
      contactConsent: "VoiceOpenGov darf mich zu dieser regionalen Anfrage kontaktieren.",
      matchingConsent: "Wenn es passt, dürft ihr mich später nach meiner Zustimmung mit anderen Interessierten zusammenbringen.",
      privacy: { before: "Ich akzeptiere die", link: "Datenschutzhinweise", after: "." },
      honeypot: "Bitte dieses Feld frei lassen",
    },
    placeholders: {
      location: "z. B. Berlin-Rahnsdorf, Köln oder Rhein-Main",
      topic: "z. B. sichere Schulwege, Pflege, Wohnen oder einfach VoiceOpenGov",
      notes: "Zeiten, Erfahrungen, Kontakte oder etwas, das dir wichtig ist …",
    },
    intentionOptions: [
      { value: "stay_informed", label: "erfahren, was in meiner Region passiert", hint: "Ich möchte zunächst informiert bleiben." },
      { value: "join_meetup", label: "bei einem Stammtisch dabei sein", hint: "Ich möchte Menschen aus meiner Region kennenlernen." },
      { value: "start_meetup", label: "einen ersten Stammtisch anstoßen", hint: "Ich gebe gern den Impuls, brauche aber nicht alles allein zu organisieren." },
      { value: "help_organize", label: "bei Termin oder Organisation helfen", hint: "Ich kann einen überschaubaren Teil übernehmen." },
      { value: "offer_space", label: "einen Raum oder Treffpunkt anbieten", hint: "Ich kenne vielleicht einen passenden Ort." },
      { value: "offer_contacts", label: "Kontakte einbringen", hint: "Ich kenne Menschen, Vereine oder Einrichtungen, die helfen könnten." },
      { value: "offer_expertise", label: "Wissen oder Erfahrung einbringen", hint: "Ich kann fachlich oder praktisch unterstützen." },
      { value: "regional_long_term", label: "längerfristig regional mitarbeiten", hint: "Ich möchte mit anderen regelmäßig etwas aufbauen." },
    ],
    notices: {
      intentionRequired: "Bitte wähle mindestens eine Möglichkeit aus.",
      consentRequired: "Bitte bestätige Kontakt und Datenschutz.",
      humanRequired: "Bitte schließe den kurzen Anti-Spam-Check ab.",
      submitOk: "Danke. Wir haben dein regionales Interesse aufgenommen. Noch wurde keine Veranstaltung geplant und niemandem wurden deine Daten gezeigt.",
      submitFail: "Das hat noch nicht funktioniert. Bitte versuche es später erneut.",
    },
    submit: "Regional Interesse anmelden",
    submitting: "Wird übermittelt …",
  },
  humanCheck: deHumanCheck,
};

const EN: RegionalActivationStrings = {
  meta: {
    title: "Get active in your region | VoiceOpenGov",
    description: "Register your interest if you would like to meet people nearby, join a local gathering or help start the first conversation.",
  },
  page: {
    eyebrow: "VoiceOpenGov locally",
    title: "Would you like to do more than watch in your region?",
    intro: "You do not need an existing group and you do not need to take responsibility immediately. Just tell us where you are and what you could imagine doing.",
    promise: "We do not promise a ready-made event. We provide an honest first step so people with similar interests can find one another.",
    steps: [
      { title: "1. You register", body: "Non-binding and without a public profile." },
      { title: "2. We check", body: "Are there already interested people or a suitable regional group?" },
      { title: "3. You decide", body: "Contact only happens with your explicit consent." },
    ],
    todayTitle: "What is possible today",
    todayBody: "We can record your regional interest, distinguish whether you want to attend, initiate or help, and inform you later about suitable next steps.",
    laterTitle: "What we are building next",
    laterBody: "The member area is intended to provide regional spaces with tasks, protected conversation, meetup proposals and simple date and venue planning.",
    responsibilityTitle: "Who hosts a meetup?",
    responsibilityBody: "VoiceOpenGov enables members to prepare regional meetings. Until VoiceOpenGov can operationally host events itself, each meeting is the responsibility of named hosts.",
    rolesLink: "See more ways to contribute",
  },
  form: {
    title: "What would you like to do in your region?",
    subtitle: "You may select several options. Your details initially remain internal.",
    labels: {
      name: "Your name",
      email: "Your email",
      location: "City or region",
      topic: "Is there a topic that matters especially to you? (optional)",
      intentions: "I would like to …",
      notes: "Anything else we should know? (optional)",
      contactConsent: "VoiceOpenGov may contact me about this regional request.",
      matchingConsent: "Where appropriate, you may later ask whether I want to be introduced to other interested people.",
      privacy: { before: "I accept the", link: "privacy notice", after: "." },
      honeypot: "Please leave this field empty",
    },
    placeholders: {
      location: "e.g. Berlin-Rahnsdorf, Cologne or Rhine-Main",
      topic: "e.g. safer school routes, care, housing or VoiceOpenGov in general",
      notes: "Times, experience, contacts or anything important to you …",
    },
    intentionOptions: [
      { value: "stay_informed", label: "learn what is happening in my region", hint: "I would initially like to stay informed." },
      { value: "join_meetup", label: "join a local meetup", hint: "I would like to meet people from my region." },
      { value: "start_meetup", label: "help start a first meetup", hint: "I can provide the initial impulse without organising everything alone." },
      { value: "help_organize", label: "help with timing or organisation", hint: "I can take on a manageable part." },
      { value: "offer_space", label: "offer a room or meeting place", hint: "I may know a suitable location." },
      { value: "offer_contacts", label: "contribute contacts", hint: "I know people, associations or institutions that might help." },
      { value: "offer_expertise", label: "contribute knowledge or experience", hint: "I can provide practical or specialist support." },
      { value: "regional_long_term", label: "work locally over the longer term", hint: "I would like to build something with others regularly." },
    ],
    notices: {
      intentionRequired: "Please select at least one option.",
      consentRequired: "Please confirm contact and privacy.",
      humanRequired: "Please complete the short anti-spam check.",
      submitOk: "Thank you. We recorded your regional interest. No event has been planned and your details have not been shown to anyone.",
      submitFail: "That did not work yet. Please try again later.",
    },
    submit: "Register regional interest",
    submitting: "Submitting …",
  },
  humanCheck: enHumanCheck,
};

export function getRegionalActivationStrings(locale: SupportedLocale): RegionalActivationStrings {
  return locale === "en" ? EN : DE;
}
