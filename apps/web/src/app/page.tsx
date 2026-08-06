import HomeClient from "@/components/home/HomeClient";
import RegionalActivationTeaser from "@/components/home/RegionalActivationTeaser";

export default function HomePage() {
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
      <HomeClient supportBank={supportBank} contactEmail={contactEmail} />
      <RegionalActivationTeaser />
    </>
  );
}
