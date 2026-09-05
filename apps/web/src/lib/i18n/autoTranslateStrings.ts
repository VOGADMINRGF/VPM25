import { createHash } from "crypto";
import { DEFAULT_LOCALE } from "@/config/locales";
import { callOpenAIJson } from "@features/ai/askAny";
import {
  readTranslationCache,
  writeMachineTranslationCache,
} from "@/lib/i18n/translationCache";

const MAX_TEXT_ITEMS = 600;
const MAX_TOTAL_CHARS = 18000;
const CACHE_TTL_MS = 1000 * 60 * 60 * 24;
const TRANSLATION_PROMPT_VERSION = "vog-public-i18n-2026-09-v1";

const SKIP_KEYS = new Set(["href", "slug", "id", "url", "email", "link", "path"]);

const LOCALE_NAMES: Record<string, string> = {
  de: "German",
  en: "English",
  fr: "French",
  pl: "Polish",
  es: "Spanish",
  it: "Italian",
  tr: "Turkish",
  ar: "Arabic",
  ru: "Russian",
  zh: "Chinese (Simplified)",
};

type CacheEntry<T> = {
  value: T;
  expiresAt: number;
};

type StringPath = Array<string | number>;

function getCache<T>(): Map<string, CacheEntry<T>> {
  const globalAny = globalThis as any;
  if (!globalAny.__vogAutoStringsCache) {
    globalAny.__vogAutoStringsCache = new Map<string, CacheEntry<T>>();
  }
  return globalAny.__vogAutoStringsCache as Map<string, CacheEntry<T>>;
}

function collectStrings(value: unknown, path: StringPath, items: string[], paths: StringPath[]) {
  if (typeof value === "string") {
    items.push(value);
    paths.push(path);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, idx) => collectStrings(item, [...path, idx], items, paths));
    return;
  }
  if (!value || typeof value !== "object") return;
  Object.entries(value as Record<string, unknown>).forEach(([key, val]) => {
    if (SKIP_KEYS.has(key)) return;
    collectStrings(val, [...path, key], items, paths);
  });
}

function setAtPath(target: any, path: StringPath, value: string) {
  let cursor = target;
  for (let i = 0; i < path.length - 1; i += 1) {
    const key = path[i];
    if (cursor == null) return;
    cursor = cursor[key as any];
  }
  const lastKey = path[path.length - 1];
  if (cursor != null) cursor[lastKey as any] = value;
}

function applyTranslations<T>(base: T, paths: StringPath[], translated: string[]): T {
  const clone = JSON.parse(JSON.stringify(base)) as T;
  paths.forEach((path, idx) => {
    setAtPath(clone as any, path, translated[idx] ?? "");
  });
  return clone;
}

function buildSourceHash(texts: string[]) {
  return createHash("sha256").update(texts.join("\n")).digest("hex");
}

function buildCacheKey(sourceHash: string, locale: string) {
  return createHash("sha256")
    .update(`${TRANSLATION_PROMPT_VERSION}:${locale}:${sourceHash}`)
    .digest("hex");
}

export async function getAutoTranslatedStrings<T>(
  locale: string,
  base: T,
  manual?: T | null,
): Promise<T> {
  if (!locale || locale === DEFAULT_LOCALE) return base;

  const items: string[] = [];
  const paths: StringPath[] = [];
  collectStrings(base, [], items, paths);

  if (items.length === 0) return manual ?? base;
  if (items.length > MAX_TEXT_ITEMS) return manual ?? base;
  const totalChars = items.reduce((sum, item) => sum + item.length, 0);
  if (totalChars > MAX_TOTAL_CHARS) return manual ?? base;

  const sourceHash = buildSourceHash(items);
  const cacheKey = buildCacheKey(sourceHash, locale);
  const memoryCache = getCache<T>();
  const memoryCached = memoryCache.get(cacheKey);
  if (memoryCached && memoryCached.expiresAt > Date.now()) return memoryCached.value;

  const persistentCached = await readTranslationCache<T>(cacheKey);
  if (persistentCached) {
    memoryCache.set(cacheKey, {
      value: persistentCached,
      expiresAt: Date.now() + CACHE_TTL_MS,
    });
    return persistentCached;
  }

  const autoFlag = process.env.VOG_AUTO_TRANSLATE_STRINGS;
  const liveFallbackEnabled = process.env.VOG_LIVE_TRANSLATION_FALLBACK !== "0";
  if (autoFlag === "0" || !liveFallbackEnabled || !process.env.OPENAI_API_KEY) {
    return manual ?? base;
  }

  const targetName = LOCALE_NAMES[locale] ?? locale.toUpperCase();
  const system =
    "You are a precise translator. Translate from German into the target language. " +
    "Preserve punctuation, numbers, arrows (→), and placeholders like {city}. " +
    "Do not translate URL-like strings or anchors. " +
    "DO NOT translate these product/proper names: VoiceOpenGov, eDebatte, Weißbuch, Legitimation 2.0, RePro. " +
    "Return ONLY a JSON array of strings, same length and order as the input.";
  const user = `Target language: ${targetName}\n\n${JSON.stringify(items)}`;

  try {
    const { text } = await callOpenAIJson({
      system,
      user,
      max_tokens: 2000,
    });
    const data = JSON.parse(text);
    if (!Array.isArray(data) || data.length !== items.length) {
      return manual ?? base;
    }
    const translated = applyTranslations(base, paths, data as string[]);
    memoryCache.set(cacheKey, {
      value: translated,
      expiresAt: Date.now() + CACHE_TTL_MS,
    });
    await writeMachineTranslationCache({
      key: cacheKey,
      locale,
      sourceHash,
      promptVersion: TRANSLATION_PROMPT_VERSION,
      value: translated,
    });
    return translated;
  } catch (error) {
    console.error("[auto-strings] translation failed", error);
    return manual ?? base;
  }
}
