import { NextResponse } from "next/server";
import { createHash } from "crypto";
import {
  DEFAULT_LOCALE,
  type SupportedLocale,
  isSupportedLocale,
} from "@/config/locales";
import { callOpenAIJson } from "@features/ai/askAny";
import { getGrundlagenSourceEntry } from "@/app/grundlagen/source";
import type { GrundlagenEntry } from "@/app/grundlagen/strings";

const LOCALE_NAMES: Record<SupportedLocale, string> = {
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

const MAX_TEXT_ITEMS = 200;
const MAX_TOTAL_CHARS = 12000;
const CACHE_TTL_MS = 1000 * 60 * 60 * 24;

type CacheEntry = {
  entry: GrundlagenEntry;
  expiresAt: number;
};

const getCache = (): Map<string, CacheEntry> => {
  const globalAny = globalThis as any;
  if (!globalAny.__grundlagenTranslateCache) {
    globalAny.__grundlagenTranslateCache = new Map<string, CacheEntry>();
  }
  return globalAny.__grundlagenTranslateCache;
};

function collectEntryTexts(entry: GrundlagenEntry): string[] {
  const texts: string[] = [entry.title, entry.subtitle, entry.intro];
  entry.sections.forEach((section) => {
    texts.push(section.title);
    section.body.forEach((paragraph) => texts.push(paragraph));
  });
  return texts;
}

function applyEntryTexts(entry: GrundlagenEntry, texts: string[]): GrundlagenEntry {
  let idx = 0;
  const title = texts[idx++] ?? entry.title;
  const subtitle = texts[idx++] ?? entry.subtitle;
  const intro = texts[idx++] ?? entry.intro;
  const sections = entry.sections.map((section) => {
    const sectionTitle = texts[idx++] ?? section.title;
    const body = section.body.map((paragraph) => texts[idx++] ?? paragraph);
    return { ...section, title: sectionTitle, body };
  });
  return { ...entry, title, subtitle, intro, sections };
}

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const url = new URL(request.url);
  const localeParam = url.searchParams.get("lang") || url.searchParams.get("locale");
  const locale = isSupportedLocale(localeParam) ? localeParam : DEFAULT_LOCALE;

  const entry = getGrundlagenSourceEntry(params.slug);
  if (!entry) {
    return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });
  }

  if (locale === DEFAULT_LOCALE) {
    return NextResponse.json({ ok: true, entry });
  }

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { ok: false, error: "unconfigured" },
      { status: 503 },
    );
  }

  const texts = collectEntryTexts(entry);
  if (texts.length > MAX_TEXT_ITEMS) {
    return NextResponse.json(
      { ok: false, error: "too_many_texts" },
      { status: 413 },
    );
  }
  const totalChars = texts.reduce((sum, item) => sum + item.length, 0);
  if (totalChars > MAX_TOTAL_CHARS) {
    return NextResponse.json(
      { ok: false, error: "payload_too_large" },
      { status: 413 },
    );
  }

  const targetName = LOCALE_NAMES[locale] ?? locale.toUpperCase();
  const hash = createHash("sha1").update(texts.join("\n")).digest("hex");
  const cacheKey = `${locale}:${entry.slug}:${hash}`;
  const cache = getCache();
  const cached = cache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) {
    return NextResponse.json(
      { ok: true, entry: cached.entry },
      { headers: { "Cache-Control": "public, max-age=600, s-maxage=86400, stale-while-revalidate=3600" } },
    );
  }
  const system =
    "You are a precise translator. Translate from German into the target language. " +
    "Preserve punctuation, numbers, arrows (→), and placeholders like {city}. " +
    "Return ONLY a JSON array of strings, same length and order as the input.";
  const user = `Target language: ${targetName}\n\n${JSON.stringify(texts)}`;

  try {
    const { text } = await callOpenAIJson({
      system,
      user,
      max_tokens: 1200,
    });
    const data = JSON.parse(text);
    if (!Array.isArray(data) || data.length !== texts.length) {
      return NextResponse.json(
        { ok: false, error: "invalid_translation" },
        { status: 502 },
      );
    }
    const translatedEntry = applyEntryTexts(entry, data as string[]);
    cache.set(cacheKey, { entry: translatedEntry, expiresAt: Date.now() + CACHE_TTL_MS });
    return NextResponse.json(
      { ok: true, entry: translatedEntry },
      { headers: { "Cache-Control": "public, max-age=600, s-maxage=86400, stale-while-revalidate=3600" } },
    );
  } catch (error) {
    console.error("[grundlagen-translate] failed", error);
    return NextResponse.json(
      { ok: false, error: "translation_failed" },
      { status: 502 },
    );
  }
}
