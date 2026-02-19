import { cookies, headers } from "next/headers";
import { DEFAULT_LOCALE, type SupportedLocale, isSupportedLocale } from "@/config/locales";

export async function getRequestLocale(): Promise<SupportedLocale> {
  const cookieStore = await cookies();
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
