import HomeClient from "@/components/home/HomeClient";
import { HOME_COPY_DE, HOME_COPY_EN } from "@/components/home/homeCopy";
import RegionalActivationTeaser from "@/components/home/RegionalActivationTeaser";
import HomeDiscoverabilityLinks from "@/components/home/HomeDiscoverabilityLinks";
import TranslationStatusNotice from "@/components/i18n/TranslationStatusNotice";
import { getAutoTranslatedStrings } from "@/lib/i18n/autoTranslateStrings";
import { getRequestLocale } from "@/lib/locale";

export default async function HomePage() {
  const locale = await getRequestLocale();
  const contactEmail = process.env.VOG_MEMBERSHIP_CONTACT_EMAIL || "members@voiceopengov.org";
  const supportBank = {
    recipient: process.env.VOG_PAYMENT_BANK_RECIPIENT,
    iban: process.env.VOG_PAYMENT_BANK_IBAN,
    bic: process.env.VOG_PAYMENT_BANK_BIC,
    bank: process.env.VOG_PAYMENT_BANK_NAME,
    referencePrefix: process.env.VOG_PAYMENT_REFERENCE_PREFIX,
  };

  const copy = await getAutoTranslatedStrings(
    locale,
    HOME_COPY_DE,
    locale === "de" ? HOME_COPY_DE : HOME_COPY_EN,
  );
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
