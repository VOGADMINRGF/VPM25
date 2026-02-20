import { DEFAULT_LOCALE, type SupportedLocale } from "@/config/locales";

export type PaymentsStrings = {
  meta: { title: string; description: string };
  header: { label: string; title: string; body: string };
  login: {
    invalid: string;
    unconfigured: string;
    placeholder: string;
    button: string;
    noAccess: string;
  };
  manage: { title: string; body: string; cta: string };
  book: { title: string; body: string; cta: string };
  bank: {
    title: string;
    body: string;
    summary: string;
    labels: {
      recipient: string;
      bank: string;
      iban: string;
      bic: string;
      reference: string;
    };
    referenceHint: string;
    noDetails: string;
  };
  hint: { label: string; body: string };
  logout: string;
};

const STRINGS: Partial<Record<SupportedLocale, PaymentsStrings>> = {
  de: {
    meta: {
      title: "Zahlungen verwalten – VoiceOpenGov",
      description: "Zahlungen verwalten oder buchen – geschützt und übersichtlich.",
    },
    header: {
      label: "Zahlungen",
      title: "Zahlungen verwalten und buchen",
      body:
        "Hier verwaltest du regelmäßige Beiträge und kannst Zahlungen buchen. Zugang nur mit Code.",
    },
    login: {
      invalid: "Zugangscode ist nicht korrekt.",
      unconfigured: "Zugangscode ist aktuell nicht konfiguriert. Bitte admin informieren.",
      placeholder: "Zugangscode",
      button: "Freischalten",
      noAccess: "Kein Zugang? Schreib an",
    },
    manage: {
      title: "Regelmäßige Beiträge verwalten",
      body:
        "Passe deinen Dauerauftrag im Online-Banking an oder sende uns eine kurze Nachricht mit Wunschbetrag und Intervall.",
      cta: "Änderung anfragen",
    },
    book: {
      title: "Zahlung buchen",
      body:
        "Einmalige Zahlung oder Start eines regelmäßigen Beitrags – nutze die Bankdaten unten.",
      cta: "Zahlung ankündigen",
    },
    bank: {
      title: "Bankverbindung",
      body: "Bitte im Verwendungszweck nur das Nötigste angeben.",
      summary: "Bankverbindung anzeigen",
      labels: {
        recipient: "Kontoinhaber",
        bank: "Bank",
        iban: "IBAN",
        bic: "BIC",
        reference: "Verwendungszweck",
      },
      referenceHint: "{bankRefPrefix} optionaler Hinweis (z. B. Stadt oder Projekt)",
      noDetails: "Bankdaten senden wir dir gern auf Anfrage.",
    },
    hint: {
      label: "Hinweis",
      body:
        "Verwaltung erfolgt derzeit manuell. Wir bestätigen jede Änderung per E-Mail.",
    },
    logout: "Abmelden",
  },
  en: {
    meta: {
      title: "Manage payments – VoiceOpenGov",
      description: "Manage or book payments — protected and clear.",
    },
    header: {
      label: "Payments",
      title: "Manage and book payments",
      body: "Manage recurring contributions and book payments. Access by code only.",
    },
    login: {
      invalid: "Access code is not correct.",
      unconfigured: "Access code is not configured. Please notify admin.",
      placeholder: "Access code",
      button: "Unlock",
      noAccess: "No access? Write to",
    },
    manage: {
      title: "Manage recurring contributions",
      body:
        "Adjust your standing order in online banking or send us a short note with amount and interval.",
      cta: "Request change",
    },
    book: {
      title: "Book a payment",
      body:
        "One-time payment or start of a recurring contribution — use the bank details below.",
      cta: "Announce payment",
    },
    bank: {
      title: "Bank details",
      body: "Please include only what is necessary in the reference.",
      summary: "Show bank details",
      labels: {
        recipient: "Account holder",
        bank: "Bank",
        iban: "IBAN",
        bic: "BIC",
        reference: "Reference",
      },
      referenceHint: "{bankRefPrefix} optional hint (e.g. city or project)",
      noDetails: "We can send bank details on request.",
    },
    hint: {
      label: "Note",
      body: "Management is currently manual. We confirm every change by email.",
    },
    logout: "Logout",
  },
};

export function getPaymentsStrings(locale: SupportedLocale | string): PaymentsStrings {
  const normalized = (locale || DEFAULT_LOCALE) as SupportedLocale;
  return STRINGS[normalized] ?? STRINGS[DEFAULT_LOCALE]!;
}

export function getPaymentsStringsOptional(
  locale: SupportedLocale | string,
): PaymentsStrings | null {
  const normalized = (locale || DEFAULT_LOCALE) as SupportedLocale;
  return STRINGS[normalized] ?? null;
}
