import { getMemberAccountStrings } from "@/app/memberAccountStrings";
import { getPublicRouteMetadata } from "@/lib/i18n/publicRouteMetadata";
import { getRequestLocale } from "@/lib/locale";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const strings = getMemberAccountStrings(locale);
  return getPublicRouteMetadata("/mitglied-werden", {
    title: strings.join.title,
    description: strings.join.intro,
  });
}

export default function MembershipLayout({ children }: { children: React.ReactNode }) {
  return children;
}
