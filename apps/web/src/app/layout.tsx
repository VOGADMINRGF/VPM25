// E200: Public root layout with locale bootstrap and consent banner.
import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import "./globals.css";
import { LocaleProvider } from "@/context/LocaleContext";
import { DEFAULT_LOCALE, type SupportedLocale, isSupportedLocale } from "@/config/locales";
import { SiteHeader } from "./(components)/SiteHeader";
import { getPrivacyStrings } from "./privacyStrings";
import { VogCookieBanner } from "@/components/privacy/VogCookieBanner";
import { CONSENT_COOKIE_NAME, parseConsentCookie } from "@/lib/privacy/consent";
import SiteFooter from "@/components/SiteFooter";
import { VOICEOPENGOV_URL } from "@/config/links";
import { getRequestLocale } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const isGerman = locale === "de";

  return {
    metadataBase: new URL(VOICEOPENGOV_URL),
    title: {
      default: isGerman
        ? "VoiceOpenGov | Internationale Mitgliederbewegung"
        : "VoiceOpenGov | International membership movement",
      template: "%s | VoiceOpenGov",
    },
    description: isGerman
      ? "VoiceOpenGov ist die internationale Mitgliederbewegung für nachvollziehbare Erkenntnis, echte Beteiligung und gemeinsam verantwortete Entscheidungen."
      : "VoiceOpenGov is the international membership movement for traceable insight, genuine participation and decisions carried through shared responsibility.",
  };
}
export const viewport = {
  themeColor: "#07110f",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const initialLocale = await detectInitialLocale(cookieStore);
  const initialConsent = parseConsentCookie(cookieStore.get(CONSENT_COOKIE_NAME)?.value);
  const privacyStrings = getPrivacyStrings(initialLocale);

  return (
    <html lang={initialLocale} dir={initialLocale === "ar" ? "rtl" : "ltr"} className="h-full">
      <body className="min-h-screen bg-[#07110f] text-[#f4f1e8] antialiased">
        <LocaleProvider initialLocale={initialLocale}>
          <div className="flex min-h-screen flex-col">
            <a
              href="#main-content"
              className="fixed left-4 top-4 z-[70] -translate-y-24 rounded-full bg-[#d6ff65] px-4 py-2 font-bold text-[#07110f] transition focus:translate-y-0"
            >
              {initialLocale === "de" ? "Zum Inhalt" : "Skip to content"}
            </a>
            <SiteHeader />
            <div id="main-content" className="flex-1" tabIndex={-1}>
              {children}
            </div>
            <SiteFooter locale={initialLocale} />
            <div className="h-[env(safe-area-inset-bottom)]" />
            <VogCookieBanner strings={privacyStrings} initialConsent={initialConsent} />
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}

async function detectInitialLocale(cookieStore: Awaited<ReturnType<typeof cookies>>): Promise<SupportedLocale> {
  const cookieLocale = cookieStore.get("lang")?.value;
  if (isSupportedLocale(cookieLocale)) return cookieLocale;

  const headerStore = await headers();
  const acceptLanguage = headerStore.get("accept-language");
  if (acceptLanguage) {
    const primary = acceptLanguage.split(",")[0]?.split(";")[0]?.trim();
    if (primary) {
      const short = primary.slice(0, 2).toLowerCase();
      if (isSupportedLocale(short)) return short;
    }
  }

  return DEFAULT_LOCALE;
}
