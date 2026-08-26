import { cookies, headers } from "next/headers";
import {
  DEFAULT_LOCALE,
  type SupportedLocale,
  isSupportedLocale,
} from "@/config/locales";

export async function getRequestLocale(): Promise<SupportedLocale> {
  const headerStore = await headers();
  const routedLocale = headerStore.get("x-vog-locale");
  if (isSupportedLocale(routedLocale)) return routedLocale;

  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("lang")?.value;
  if (isSupportedLocale(cookieLocale)) return cookieLocale;

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
