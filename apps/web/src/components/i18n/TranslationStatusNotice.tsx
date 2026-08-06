import Link from "next/link";
import {
  getLocaleConfig,
  type SupportedLocale,
  type TranslationStatus,
} from "@/config/locales";

const COPY: Partial<
  Record<
    SupportedLocale,
    {
      source: string;
      reviewed: string;
      assisted: string;
      original: string;
    }
  >
> = {
  en: {
    source: "Original version",
    reviewed: "Human-reviewed translation",
    assisted: "Machine-assisted translation – not an independent source",
    original: "Read the German original",
  },
  fr: {
    source: "Version originale",
    reviewed: "Traduction vérifiée par une personne",
    assisted: "Traduction assistée par IA – ce n’est pas une source indépendante",
    original: "Lire l’original allemand",
  },
  es: {
    source: "Versión original",
    reviewed: "Traducción revisada por una persona",
    assisted: "Traducción asistida por IA; no es una fuente independiente",
    original: "Leer el original en alemán",
  },
  tr: {
    source: "Özgün sürüm",
    reviewed: "İnsan tarafından gözden geçirilmiş çeviri",
    assisted: "Yapay zekâ destekli çeviri; bağımsız bir kaynak değildir",
    original: "Almanca özgün metni oku",
  },
  ar: {
    source: "النسخة الأصلية",
    reviewed: "ترجمة راجعها شخص",
    assisted: "ترجمة بمساعدة الذكاء الاصطناعي وليست مصدراً مستقلاً",
    original: "قراءة الأصل الألماني",
  },
};

const FALLBACK = COPY.en!;

export default function TranslationStatusNotice({
  locale,
  originalLocale = "de",
  status,
}: {
  locale: SupportedLocale;
  originalLocale?: SupportedLocale;
  status?: TranslationStatus;
}) {
  if (locale === originalLocale) return null;

  const config = getLocaleConfig(locale);
  const actualStatus = status ?? config.defaultTranslationStatus;
  const copy = COPY[locale] ?? FALLBACK;
  const label =
    actualStatus === "human_reviewed"
      ? copy.reviewed
      : actualStatus === "source"
        ? copy.source
        : copy.assisted;

  return (
    <aside
      aria-label={label}
      className="border-b border-[#f4f1e8]/10 bg-[#0b1714] px-5 py-2.5 text-xs text-[#f4f1e8]/70 md:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
        <span>
          <strong className="font-black text-[#18cfc8]">{label}</strong>
          <span className="mx-2" aria-hidden="true">·</span>
          <span>VoiceOpenGov</span>
        </span>
        <Link
          href="?lang=de"
          hrefLang="de"
          className="font-bold text-[#f4f1e8] underline decoration-[#18cfc8]/55 underline-offset-4 hover:text-[#18cfc8]"
        >
          {copy.original}
        </Link>
      </div>
    </aside>
  );
}
