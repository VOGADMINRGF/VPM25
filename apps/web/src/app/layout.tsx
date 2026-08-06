// E200: Public root layout with locale bootstrap and consent banner.
import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import "./globals.css";
import { LocaleProvider } from "@/context/LocaleContext";
import {
  DEFAULT_LOCALE,
  REQUIRED_LAUNCH_LOCALES,
  getTextDirection,
  type SupportedLocale,
  isSupportedLocale,
} from "@/config/locales";
import { SiteHeader } from "./(components)/SiteHeader";
import { getPrivacyStrings } from "./privacyStrings";
import { VogCookieBanner } from "@/components/privacy/VogCookieBanner";
import { CONSENT_COOKIE_NAME, parseConsentCookie } from "@/lib/privacy/consent";
import SiteFooter from "@/components/SiteFooter";
import { VOICEOPENGOV_URL } from "@/config/links";
import { getRequestLocale } from "@/lib/locale";
import { localeAlternates } from "@/lib/i18n/localeContract";
import TranslationStatusNotice from "@/components/i18n/TranslationStatusNotice";

const META: Partial<
  Record<SupportedLocale, { title: string; description: string; skip: string }>
> = {
  de: {
    title: "VoiceOpenGov | Internationale Mitgliederbewegung",
    description:
      "VoiceOpenGov ist die internationale Mitgliederbewegung für nachvollziehbare Erkenntnis, echte Beteiligung und gemeinsam verantwortete Entscheidungen.",
    skip: "Zum Inhalt",
  },
  en: {
    title: "VoiceOpenGov | International membership movement",
    description:
      "VoiceOpenGov is the international membership movement for traceable insight, genuine participation and decisions carried through shared responsibility.",
    skip: "Skip to content",
  },
  fr: {
    title: "VoiceOpenGov | Mouvement international de membres",
    description:
      "VoiceOpenGov rassemble des personnes qui veulent comprendre, participer et assumer ensemble des décisions transparentes.",
    skip: "Aller au contenu",
  },
  es: {
    title: "VoiceOpenGov | Movimiento internacional de miembros",
    description:
      "VoiceOpenGov reúne a personas para comprender, participar y asumir conjuntamente decisiones transparentes.",
    skip: "Ir al contenido",
  },
  tr: {
    title: "VoiceOpenGov | Uluslararası üyelik hareketi",
    description:
      "VoiceOpenGov, anlaşılır bilgi, gerçek katılım ve ortak sorumluluk için insanları bir araya getirir.",
    skip: "İçeriğe geç",
  },
  ar: {
    title: "VoiceOpenGov | حركة عضوية دولية",
    description:
      "تجمع VoiceOpenGov الناس من أجل فهم يمكن التحقق منه ومشاركة حقيقية وقرارات تقوم على المسؤولية المشتركة.",
    skip: "الانتقال إلى المحتوى",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const copy = META[locale] ?? META.en!;

  return {
    metadataBase: new URL(VOICEOPENGOV_URL),
    title: {
      default: copy.title,
      template: "%s | VoiceOpenGov",
    },
    description: copy.description,
    alternates: {
      canonical: VOICEOPENGOV_URL,
      languages: localeAlternates(VOICEOPENGOV_URL, REQUIRED_LAUNCH_LOCALES),
    },
  };
}

export const viewport = {
  themeColor: "#020617",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const initialLocale = await detectInitialLocale(cookieStore);
  const initialConsent = parseConsentCookie(
    cookieStore.get(CONSENT_COOKIE_NAME)?.value,
  );
  const privacyStrings = getPrivacyStrings(initialLocale);
  const meta = META[initialLocale] ?? META.en!;

  return (
    <html
      lang={initialLocale}
      dir={getTextDirection(initialLocale)}
      className="h-full"
    >
      <body className="min-h-screen bg-[#020617] text-[#f8fafc] antialiased">
        <LocaleProvider initialLocale={initialLocale}>
          <div className="flex min-h-screen flex-col">
            <a
              href="#main-content"
              className="fixed start-4 top-4 z-[70] -translate-y-24 rounded-full bg-[#18cfc8] px-4 py-2 font-bold text-[#071727] transition focus:translate-y-0"
            >
              {meta.skip}
            </a>
            <SiteHeader />
            <TranslationStatusNotice locale={initialLocale} />
            <div id="main-content" className="flex-1" tabIndex={-1}>
              {children}
            </div>
            <SiteFooter locale={initialLocale} />
            <div className="h-[env(safe-area-inset-bottom)]" />
            <VogCookieBanner
              strings={privacyStrings}
              initialConsent={initialConsent}
            />
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}

async function detectInitialLocale(
  cookieStore: Awaited<ReturnType<typeof cookies>>,
): Promise<SupportedLocale> {
  const cookieLocale = cookieStore.get("lang")?.value;
  if (isSupportedLocale(cookieLocale)) return cookieLocale;

  const headerStore = await headers();
  const acceptLanguage = headerStore.get("accept-language");
  if (acceptLanguage) {
    const candidates = acceptLanguage
      .split(",")
      .map((part) => part.split(";")[0]?.trim())
      .filter(Boolean);

    for (const candidate of candidates) {
      const short = candidate?.slice(0, 2).toLowerCase();
      if (isSupportedLocale(short)) return short;
    }
  }

  return DEFAULT_LOCALE;
}
