import HomeClient from "@/components/home/HomeClient";
import { HOME_COPY_DE, HOME_COPY_EN } from "@/components/home/homeCopy";
import RegionalActivationTeaser from "@/components/home/RegionalActivationTeaser";
import HomeDiscoverabilityLinks from "@/components/home/HomeDiscoverabilityLinks";
import TranslationStatusNotice from "@/components/i18n/TranslationStatusNotice";
import { getTranslatedBundle } from "@/lib/i18n/getTranslatedBundle";
import { getPublicRouteMetadata } from "@/lib/i18n/publicRouteMetadata";
import { getRequestLocale } from "@/lib/locale";

async function getHomeBundle() {
  const locale = await getRequestLocale();
  const bundle = await getTranslatedBundle({
    locale,
    original: HOME_COPY_DE,
    reviewedEnglish: HOME_COPY_EN,
  });
  return { locale, bundle };
}

export async function generateMetadata() {
  const { bundle } = await getHomeBundle();
  return getPublicRouteMetadata("/", {
    title: bundle.value.title,
    description: bundle.value.intro,
  });
}

export default async function HomePage() {
  const { locale, bundle } = await getHomeBundle();
  const contactEmail = process.env.VOG_MEMBERSHIP_CONTACT_EMAIL || "members@voiceopengov.org";
  const supportBank = {
    recipient: process.env.VOG_PAYMENT_BANK_RECIPIENT,
    iban: process.env.VOG_PAYMENT_BANK_IBAN,
    bic: process.env.VOG_PAYMENT_BANK_BIC,
    bank: process.env.VOG_PAYMENT_BANK_NAME,
    referencePrefix: process.env.VOG_PAYMENT_REFERENCE_PREFIX,
  };

  return (
    <>
      <TranslationStatusNotice locale={locale} status={bundle.status} />
      <HomeClient supportBank={supportBank} contactEmail={contactEmail} copy={bundle.value} />
      <RegionalActivationTeaser />
      <HomeDiscoverabilityLinks locale={locale} />
    </>
  );
}
