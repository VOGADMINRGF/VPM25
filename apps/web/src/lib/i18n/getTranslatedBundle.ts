import type {
  SupportedLocale,
  TranslationStatus,
} from "@/config/locales";
import { getAutoTranslatedStrings } from "@/lib/i18n/autoTranslateStrings";

export type TranslatedBundle<T> = {
  value: T;
  status: TranslationStatus;
  originalLocale: SupportedLocale;
  renderedLocale: SupportedLocale;
};

export async function getTranslatedBundle<T>(options: {
  locale: SupportedLocale;
  original: T;
  reviewedEnglish?: T;
  originalLocale?: SupportedLocale;
}): Promise<TranslatedBundle<T>> {
  const originalLocale = options.originalLocale ?? "de";

  if (options.locale === originalLocale) {
    return {
      value: options.original,
      status: "source",
      originalLocale,
      renderedLocale: options.locale,
    };
  }

  if (options.locale === "en" && options.reviewedEnglish) {
    return {
      value: options.reviewedEnglish,
      status: "human_reviewed",
      originalLocale,
      renderedLocale: options.locale,
    };
  }

  const translated = await getAutoTranslatedStrings(
    options.locale,
    options.original,
    null,
  );
  const unchanged = JSON.stringify(translated) === JSON.stringify(options.original);

  return {
    value: translated,
    status: unchanged ? "missing" : "machine_assisted",
    originalLocale,
    renderedLocale: options.locale,
  };
}
