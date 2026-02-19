import { DEFAULT_LOCALE, type SupportedLocale } from "@/config/locales";

type NotFoundStrings = {
  title: string;
  body: string;
  cta: string;
};

const STRINGS: Record<SupportedLocale, NotFoundStrings> = {
  de: {
    title: "404 - Seite nicht gefunden",
    body: "Die Seite, die du gesucht hast, gibt es nicht oder sie wurde verschoben.",
    cta: "Zur Startseite",
  },
  en: {
    title: "404 - Page not found",
    body: "The page you were looking for doesn't exist or has been moved.",
    cta: "Back to home",
  },
  fr: {
    title: "404 - Page introuvable",
    body: "La page que vous cherchez n'existe pas ou a été déplacée.",
    cta: "Retour à l'accueil",
  },
  pl: {
    title: "404 - Nie znaleziono strony",
    body: "Strona, której szukasz, nie istnieje lub została przeniesiona.",
    cta: "Wróć na stronę główną",
  },
  es: {
    title: "404 - Página no encontrada",
    body: "La página que buscas no existe o se ha movido.",
    cta: "Volver al inicio",
  },
  it: {
    title: "404 - Pagina non trovata",
    body: "La pagina che cercavi non esiste o è stata spostata.",
    cta: "Torna alla home",
  },
  tr: {
    title: "404 - Sayfa bulunamadı",
    body: "Aradığın sayfa yok veya taşınmış olabilir.",
    cta: "Ana sayfaya dön",
  },
  ar: {
    title: "404 - الصفحة غير موجودة",
    body: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
    cta: "العودة إلى الصفحة الرئيسية",
  },
  ru: {
    title: "404 - Страница не найдена",
    body: "Страница, которую вы ищете, не существует или была перемещена.",
    cta: "На главную",
  },
  zh: {
    title: "404 - 页面未找到",
    body: "你访问的页面不存在或已被移动。",
    cta: "返回首页",
  },
};

export function getNotFoundStrings(locale: SupportedLocale | string): NotFoundStrings {
  const normalized = (locale || DEFAULT_LOCALE) as SupportedLocale;
  return STRINGS[normalized] ?? STRINGS[DEFAULT_LOCALE];
}
