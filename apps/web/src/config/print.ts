import { DEFAULT_LOCALE, type SupportedLocale } from "@/config/locales";

const DEFAULT_PRICE_CENTS = 2999;

const LOCALE_MAP: Record<SupportedLocale, string> = {
  de: "de-DE",
  en: "en-GB",
  fr: "fr-FR",
  pl: "pl-PL",
  es: "es-ES",
  it: "it-IT",
  tr: "tr-TR",
  ar: "ar-EG",
  ru: "ru-RU",
  zh: "zh-CN",
};

export function getPrintPriceCents() {
  const raw = process.env.VOG_PRINT_PRICE_CENTS;
  const parsed = raw ? Number(raw) : NaN;
  if (Number.isFinite(parsed) && parsed > 0) return Math.round(parsed);
  return DEFAULT_PRICE_CENTS;
}

export function getPrintPriceLabel(locale: SupportedLocale | string) {
  const cents = getPrintPriceCents();
  const currencyLocale =
    LOCALE_MAP[(locale as SupportedLocale) ?? DEFAULT_LOCALE] ?? "de-DE";
  try {
    return new Intl.NumberFormat(currencyLocale, {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(cents / 100);
  } catch {
    return "29,99 €";
  }
}
