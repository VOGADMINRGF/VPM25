const REQUIRED_LAUNCH_LOCALES = ["de", "en", "fr", "es", "tr", "ar"] as const;
const EXTENDED_LOCALES = ["pl", "it", "ru", "zh"] as const;

export const SUPPORTED_LOCALES = [
  ...REQUIRED_LAUNCH_LOCALES,
  ...EXTENDED_LOCALES,
] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
export type TextDirection = "ltr" | "rtl";
export type TranslationStatus =
  | "source"
  | "human_reviewed"
  | "machine_assisted"
  | "missing";

export const DEFAULT_LOCALE: SupportedLocale = "de";

export interface LocaleConfig {
  code: SupportedLocale;
  bcp47: string;
  label: string;
  flagEmoji: string;
  direction: TextDirection;
  defaultTranslationStatus: TranslationStatus;
  defaultRegion?: string;
}

export const LOCALE_CONFIG: LocaleConfig[] = [
  {
    code: "de",
    bcp47: "de-DE",
    label: "Deutsch",
    flagEmoji: "🇩🇪",
    direction: "ltr",
    defaultTranslationStatus: "source",
    defaultRegion: "DE",
  },
  {
    code: "en",
    bcp47: "en",
    label: "English",
    flagEmoji: "🇺🇳",
    direction: "ltr",
    defaultTranslationStatus: "human_reviewed",
    defaultRegion: "EU",
  },
  {
    code: "fr",
    bcp47: "fr",
    label: "Français",
    flagEmoji: "🇫🇷",
    direction: "ltr",
    defaultTranslationStatus: "machine_assisted",
    defaultRegion: "FR",
  },
  {
    code: "es",
    bcp47: "es",
    label: "Español",
    flagEmoji: "🇪🇸",
    direction: "ltr",
    defaultTranslationStatus: "machine_assisted",
    defaultRegion: "ES",
  },
  {
    code: "tr",
    bcp47: "tr",
    label: "Türkçe",
    flagEmoji: "🇹🇷",
    direction: "ltr",
    defaultTranslationStatus: "machine_assisted",
    defaultRegion: "TR",
  },
  {
    code: "ar",
    bcp47: "ar",
    label: "العربية",
    flagEmoji: "🇦🇪",
    direction: "rtl",
    defaultTranslationStatus: "machine_assisted",
    defaultRegion: "MENA",
  },
  {
    code: "pl",
    bcp47: "pl",
    label: "Polski",
    flagEmoji: "🇵🇱",
    direction: "ltr",
    defaultTranslationStatus: "machine_assisted",
    defaultRegion: "PL",
  },
  {
    code: "it",
    bcp47: "it",
    label: "Italiano",
    flagEmoji: "🇮🇹",
    direction: "ltr",
    defaultTranslationStatus: "machine_assisted",
    defaultRegion: "IT",
  },
  {
    code: "ru",
    bcp47: "ru",
    label: "Русский",
    flagEmoji: "🇷🇺",
    direction: "ltr",
    defaultTranslationStatus: "machine_assisted",
    defaultRegion: "RU",
  },
  {
    code: "zh",
    bcp47: "zh-Hans",
    label: "中文",
    flagEmoji: "🇨🇳",
    direction: "ltr",
    defaultTranslationStatus: "machine_assisted",
    defaultRegion: "CN",
  },
];

export function getLocaleConfig(code: SupportedLocale): LocaleConfig {
  const config = LOCALE_CONFIG.find((item) => item.code === code);
  if (config) return config;

  return {
    code,
    bcp47: code,
    label: code,
    flagEmoji: "🏳️",
    direction: "ltr",
    defaultTranslationStatus: "missing",
  };
}

export function getTextDirection(locale: SupportedLocale): TextDirection {
  return getLocaleConfig(locale).direction;
}

export function isSupportedLocale(
  locale: string | null | undefined,
): locale is SupportedLocale {
  return Boolean(
    locale && (SUPPORTED_LOCALES as readonly string[]).includes(locale),
  );
}

export function isCoreLocale(
  locale: string | null | undefined,
): locale is (typeof REQUIRED_LAUNCH_LOCALES)[number] {
  return Boolean(
    locale &&
      (REQUIRED_LAUNCH_LOCALES as readonly string[]).includes(locale),
  );
}

export function isExtendedLocale(
  locale: string | null | undefined,
): locale is (typeof EXTENDED_LOCALES)[number] {
  return Boolean(
    locale && (EXTENDED_LOCALES as readonly string[]).includes(locale),
  );
}

export { REQUIRED_LAUNCH_LOCALES };
