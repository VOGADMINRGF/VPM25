import {
  DEFAULT_LOCALE,
  getLocaleConfig,
  isSupportedLocale,
  type SupportedLocale,
  type TranslationStatus,
} from "@/config/locales";

export type LocaleDimensions = {
  originalLocale: SupportedLocale;
  readingLocale: SupportedLocale;
  uiLocale: SupportedLocale;
  outputLocale: SupportedLocale;
};

export type TranslationDescriptor = {
  originalLocale: SupportedLocale;
  renderedLocale: SupportedLocale;
  status: TranslationStatus;
  isOriginal: boolean;
};

type LocaleInput = Partial<Record<keyof LocaleDimensions, string | null | undefined>>;

const CANONICAL_ID_PATTERN = /^[a-zA-Z0-9][a-zA-Z0-9._:-]{0,159}$/;

export function normalizeLocale(
  value: string | null | undefined,
  fallback: SupportedLocale = DEFAULT_LOCALE,
): SupportedLocale {
  if (!value) return fallback;
  const short = value.trim().toLowerCase().split("-")[0];
  return isSupportedLocale(short) ? short : fallback;
}

export function resolveLocaleDimensions(
  input: LocaleInput,
  fallback: SupportedLocale = DEFAULT_LOCALE,
): LocaleDimensions {
  const uiLocale = normalizeLocale(input.uiLocale, fallback);
  const readingLocale = normalizeLocale(input.readingLocale, uiLocale);
  const originalLocale = normalizeLocale(input.originalLocale, DEFAULT_LOCALE);
  const outputLocale = normalizeLocale(input.outputLocale, readingLocale);

  return {
    originalLocale,
    readingLocale,
    uiLocale,
    outputLocale,
  };
}

export function getTranslationDescriptor(
  originalLocale: SupportedLocale,
  renderedLocale: SupportedLocale,
  explicitStatus?: TranslationStatus,
): TranslationDescriptor {
  const isOriginal = originalLocale === renderedLocale;
  return {
    originalLocale,
    renderedLocale,
    isOriginal,
    status: isOriginal
      ? "source"
      : explicitStatus ??
        getLocaleConfig(renderedLocale).defaultTranslationStatus,
  };
}

export function buildLocaleHandoffUrl(
  targetBaseUrl: string,
  dimensions: LocaleDimensions,
  options?: {
    canonicalId?: string;
    source?: "voiceopengov";
  },
): string {
  const url = new URL(targetBaseUrl);
  url.searchParams.set("originalLocale", dimensions.originalLocale);
  url.searchParams.set("readingLocale", dimensions.readingLocale);
  url.searchParams.set("uiLocale", dimensions.uiLocale);
  url.searchParams.set("outputLocale", dimensions.outputLocale);
  url.searchParams.set("source", options?.source ?? "voiceopengov");

  const canonicalId = options?.canonicalId?.trim();
  if (canonicalId && CANONICAL_ID_PATTERN.test(canonicalId)) {
    url.searchParams.set("canonicalId", canonicalId);
  }

  return url.toString();
}

export function localizedCanonicalUrl(
  baseUrl: string,
  locale: SupportedLocale,
): string {
  if (locale === DEFAULT_LOCALE) return baseUrl;
  const url = new URL(baseUrl);
  url.searchParams.set("lang", locale);
  return url.toString();
}

export function localeAlternates(
  baseUrl: string,
  locales: readonly SupportedLocale[],
): Record<string, string> {
  const alternates = Object.fromEntries(
    locales.map((locale) => [
      getLocaleConfig(locale).bcp47,
      localizedCanonicalUrl(baseUrl, locale),
    ]),
  );

  return {
    ...alternates,
    "x-default": baseUrl,
  };
}

function normalizePublicPath(pathname: string): string {
  const trimmed = pathname.trim();
  if (!trimmed || trimmed === "/") return "/";
  const withoutQuery = trimmed.split("?")[0]?.split("#")[0] ?? "/";
  return withoutQuery.startsWith("/") ? withoutQuery : `/${withoutQuery}`;
}

export function localizedRouteUrl(
  siteUrl: string,
  pathname: string,
  locale: SupportedLocale,
): string {
  const url = new URL(normalizePublicPath(pathname), siteUrl);
  if (locale !== DEFAULT_LOCALE) url.searchParams.set("lang", locale);
  return url.toString();
}

export function routeLocaleAlternates(
  siteUrl: string,
  pathname: string,
  locales: readonly SupportedLocale[],
): Record<string, string> {
  const defaultUrl = localizedRouteUrl(siteUrl, pathname, DEFAULT_LOCALE);
  const alternates = Object.fromEntries(
    locales.map((locale) => [
      getLocaleConfig(locale).bcp47,
      localizedRouteUrl(siteUrl, pathname, locale),
    ]),
  );

  return {
    ...alternates,
    "x-default": defaultUrl,
  };
}