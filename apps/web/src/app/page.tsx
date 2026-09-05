import HomeClient from "@/components/home/HomeClient";
import { HOME_COPY_DE, HOME_COPY_EN } from "@/components/home/homeCopy";
import RegionalActivationTeaser from "@/components/home/RegionalActivationTeaser";
import HomeDiscoverabilityLinks from "@/components/home/HomeDiscoverabilityLinks";
import TranslationStatusNotice from "@/components/i18n/TranslationStatusNotice";
import { getAutoTranslatedStrings } from "@/lib/i18n/autoTranslateStrings";
import { getPublicRouteMetadata } from "@/lib/i18n/publicRouteMetadata";
import { getRequestLocale } from "@/lib/locale";

async function getHomeCopy() {
  const locale = await getRequestLocale();
  const copy = await getAutoTranslatedStrings(
    locale,
    HOME_COPY_DE,
    locale === "de" ? HOME_COPY_DE : HOME_COPY_EN,
  );
  return { locale, copy };
}

export async function generateMetadata() {
  const { copy } = await getHomeCopy();
  return getPublicRouteMetadata("/", {
    title: copy.title,
    description: copy.intro,
  });
}

export default async function HomePage() {
  const { locale, copy } = await getHomeCopy();
  const contactEmail = process.env.VOG_MEMBERSHIP_CONTACT_EMAIL || "members@voiceopengov.org";
  const supportBank = {
    recipient: process.env.VOG_PAYMENT_BANK_RECIPIENT,
    iban: process.env.VOG_PAYMENT_BANK_IBAN,
    bic: process.env.VOG_PAYMENT_BANK_BIC,
    bank: process.env.VOG_PAYMENT_BANK_NAME,
    referencePrefix: process.env.VOG_PAYMENT_REFERENCE_PREFIX,
  };

  const autoTranslationAvailable =
    process.env.VOG_AUTO_TRANSLATE_STRINGS !== "0" && Boolean(process.env.OPENAI_API_KEY);
  const translationStatus =
    locale === "de"
      ? "source"
      : locale === "en"
        ? "human_reviewed"
        : autoTranslationAvailable
          ? "machine_assisted"
          : "missing";

  return (
    <>
      <TranslationStatusNotice locale={locale} status={translationStatus} />
      <HomeClient supportBank={supportBank} contactEmail={contactEmail} copy={copy} />
      <RegionalActivationTeaser />
      <HomeDiscoverabilityLinks locale={locale} />
    </>
  );
}
