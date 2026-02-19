import countries from "world-countries";
import {
  DEFAULT_LOCALE,
  type SupportedLocale,
  isSupportedLocale,
} from "@/config/locales";

type CountryEntry = (typeof countries)[number];

export type CountryOption = {
  code: string;
  label: string;
};

const PRIORITY_CODES = ["DE", "AT", "CH", "LI", "LU"];
const EU_CODES = [
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
];

const LOCALE_TO_TRANSLATION: Partial<Record<SupportedLocale, string>> = {
  de: "deu",
  en: "eng",
  fr: "fra",
  pl: "pol",
  es: "spa",
  it: "ita",
  tr: "tur",
  ar: "ara",
  ru: "rus",
  zh: "zho",
};

function localizedLabel(country: CountryEntry, locale: SupportedLocale) {
  const translations = (country as any)?.translations;
  const translationKey = LOCALE_TO_TRANSLATION[locale] || "eng";
  return (
    translations?.[translationKey]?.common ||
    translations?.[translationKey]?.official ||
    translations?.eng?.common ||
    translations?.eng?.official ||
    country.name.common
  );
}

const optionsCache = new Map<SupportedLocale, CountryOption[]>();

export function getCountryOptions(locale: SupportedLocale | string): CountryOption[] {
  const normalized = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const cached = optionsCache.get(normalized);
  if (cached) return cached;

  const options = (countries as CountryEntry[])
    .map((country) => ({
      code: country.cca2,
      label: localizedLabel(country, normalized),
    }))
    .filter((entry) => Boolean(entry.code) && Boolean(entry.label));

  const byCode = new Map(options.map((entry) => [entry.code, entry]));
  const orderedCodes = [
    "DE",
    ...PRIORITY_CODES.filter((code) => code !== "DE"),
    ...EU_CODES.filter((code) => code !== "DE" && !PRIORITY_CODES.includes(code)),
  ];

  const ordered: CountryOption[] = [];
  const used = new Set<string>();
  orderedCodes.forEach((code) => {
    const entry = byCode.get(code);
    if (entry && !used.has(code)) {
      ordered.push(entry);
      used.add(code);
    }
  });

  const rest = options
    .filter((entry) => !used.has(entry.code))
    .sort((a, b) => a.label.localeCompare(b.label, normalized));

  const result = [...ordered, ...rest];
  optionsCache.set(normalized, result);
  return result;
}

const countryIndex = new Map(
  (countries as CountryEntry[]).map((country) => [country.cca2, country]),
);

export function getCountryMeta(code: string) {
  return countryIndex.get(code.toUpperCase());
}
