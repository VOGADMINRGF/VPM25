import type { Metadata } from "next";
import { REQUIRED_LAUNCH_LOCALES, getLocaleConfig } from "@/config/locales";
import { VOICEOPENGOV_URL } from "@/config/links";
import { getRequestLocale } from "@/lib/locale";
import {
  localizedRouteUrl,
  routeLocaleAlternates,
} from "@/lib/i18n/localeContract";

type PublicRouteMetadataOptions = {
  title?: string;
  description?: string;
};

export async function getPublicRouteMetadata(
  pathname: string,
  options: PublicRouteMetadataOptions = {},
): Promise<Metadata> {
  const locale = await getRequestLocale();
  const canonical = localizedRouteUrl(VOICEOPENGOV_URL, pathname, locale);

  return {
    ...(options.title ? { title: options.title } : {}),
    ...(options.description ? { description: options.description } : {}),
    alternates: {
      canonical,
      languages: routeLocaleAlternates(
        VOICEOPENGOV_URL,
        pathname,
        REQUIRED_LAUNCH_LOCALES,
      ),
    },
    openGraph: {
      type: "website",
      siteName: "VoiceOpenGov",
      ...(options.title ? { title: options.title } : {}),
      ...(options.description ? { description: options.description } : {}),
      url: canonical,
      locale: getLocaleConfig(locale).bcp47.replace("-", "_"),
    },
  };
}
