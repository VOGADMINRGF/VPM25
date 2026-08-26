import type { Metadata } from "next";
import { REQUIRED_LAUNCH_LOCALES } from "@/config/locales";
import { VOICEOPENGOV_URL } from "@/config/links";
import { localeAlternates } from "@/lib/i18n/localeContract";

export async function generateMetadata(): Promise<Metadata> {
  const canonical = `${VOICEOPENGOV_URL}/mitmachen/rollen`;
  return {
    alternates: {
      canonical,
      languages: localeAlternates(canonical, REQUIRED_LAUNCH_LOCALES),
    },
  };
}

export default function RolesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
