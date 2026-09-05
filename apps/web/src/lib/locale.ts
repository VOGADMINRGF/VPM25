import { cookies, headers } from "next/headers";
import {
  DEFAULT_LOCALE,
  type SupportedLocale,
  isSupportedLocale,
} from "@/config/locales";

export async function getRequestLocale(): Promise<SupportedLocale> {
  const headerStore = await headers();

  // Middleware maps an explicit ?lang=... choice to this request header.
  const routedLocale = headerStore.get("x-vog-locale");
  if (isSupportedLocale(routedLocale)) return routedLocale;

  // Persisted user choice is the next source of truth.
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("lang")?.value;
  if (isSupportedLocale(cookieLocale)) return cookieLocale;

  // Otherwise use the first browser-preferred language VoiceOpenGov supports.
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
