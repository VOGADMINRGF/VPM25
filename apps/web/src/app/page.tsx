import HomeClient from "@/components/home/HomeClient";
import TranslationStatusNotice from "@/components/i18n/TranslationStatusNotice";
import { getRequestLocale } from "@/lib/locale";

export default async function HomePage() {
  const locale = await getRequestLocale();
  const contactEmail =
    process.env.VOG_MEMBERSHIP_CONTACT_EMAIL || "members@voiceopengov.org";
  const supportBank = {
    recipient: process.env.VOG_PAYMENT_BANK_RECIPIENT,
    iban: process.env.VOG_PAYMENT_BANK_IBAN,
    bic: process.env.VOG_PAYMENT_BANK_BIC,
    bank: process.env.VOG_PAYMENT_BANK_NAME,
    referencePrefix: process.env.VOG_PAYMENT_REFERENCE_PREFIX,
  };

  return (
    <>
      <TranslationStatusNotice
        locale={locale}
        status={locale === "de" ? "source" : locale === "en" ? "human_reviewed" : "missing"}
      />
      <HomeClient supportBank={supportBank} contactEmail={contactEmail} />
    </>
  );
}
