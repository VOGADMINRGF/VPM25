import Link from "next/link";
import { cookies } from "next/headers";
import { getRequestLocale } from "@/lib/locale";
import { SUPPORT_COOKIE, verifySupportCookie } from "@/lib/supportSession";
import { loginSupporter, logoutSupporter } from "./actions";
import { getSupportStrings } from "./strings";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const strings = getSupportStrings(locale);
  return {
    title: strings.meta.title,
    description: strings.meta.description,
  };
}

export default async function SupportPage({
  searchParams,
}: {
  searchParams?: { error?: string };
}) {
  const locale = await getRequestLocale();
  const strings = getSupportStrings(locale);
  const supportSecret =
    process.env.JWT_SECRET || process.env.EDITOR_TOKEN || "support-session";
  const cookieStore = await cookies();
  const isAuthed = verifySupportCookie(
    cookieStore.get(SUPPORT_COOKIE)?.value,
    supportSecret,
  );
  const bankRecipient = process.env.VOG_PAYMENT_BANK_RECIPIENT;
  const bankIban = process.env.VOG_PAYMENT_BANK_IBAN;
  const bankBic = process.env.VOG_PAYMENT_BANK_BIC;
  const bankName = process.env.VOG_PAYMENT_BANK_NAME;
  const bankRefPrefix = process.env.VOG_PAYMENT_REFERENCE_PREFIX;
  const contactEmail =
    process.env.VOG_MEMBERSHIP_CONTACT_EMAIL || "members@voiceopengov.org";
  const hasBankDetails = Boolean(bankRecipient && bankIban && bankBic && bankName);
  const error = searchParams?.error;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100 pb-16">
      <section className="mx-auto max-w-4xl px-4 py-16 space-y-10">
        <header className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            {strings.header.label}
          </p>
          <h1
            className="text-3xl md:text-4xl font-extrabold leading-tight headline-gradient"
          >
            {strings.header.title}
          </h1>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            {strings.header.body}
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {strings.cards.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {item.title}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-100">{item.body}</p>
            </div>
          ))}
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-100">{strings.how.title}</h2>
          <p className="mt-2 text-sm text-slate-300">
            {strings.how.body}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={`mailto:${contactEmail}`} className="btn btn-primary">
              {strings.how.ctaPrimary}
            </a>
            <Link href="/kontakt" className="btn btn-ghost !bg-slate-900/70 !text-slate-100 !border-slate-700">
              {strings.how.ctaSecondary}
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-slate-100">{strings.bank.title}</h2>
              <p className="mt-2 text-sm text-slate-300">
                {strings.bank.body}
              </p>
            </div>
            {isAuthed && (
              <form action={logoutSupporter}>
                <button
                  type="submit"
                  className="btn btn-ghost !bg-slate-900/70 !text-slate-100 !border-slate-700"
                >
                  {strings.bank.logout}
                </button>
              </form>
            )}
          </div>

          {!isAuthed && (
            <form action={loginSupporter} className="mt-4 space-y-3">
              {error === "invalid" && (
                <p className="text-xs text-red-400">
                  {strings.bank.login.invalid}
                </p>
              )}
              {error === "unconfigured" && (
                <p className="text-xs text-red-400">
                  {strings.bank.login.unconfigured}
                </p>
              )}
              <div className="flex flex-wrap gap-3">
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder={strings.bank.login.placeholder}
                  className="w-full max-w-xs rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-800/40"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  {strings.bank.login.button}
                </button>
              </div>
              <p className="text-xs text-slate-400">
                {strings.bank.login.noAccess}{" "}
                <a href={`mailto:${contactEmail}`} className="font-semibold text-slate-100">
                  {contactEmail}
                </a>
                .
              </p>
            </form>
          )}

          {isAuthed && (
            <>
              {hasBankDetails ? (
                <details
                  className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300"
                  open
                >
                  <summary className="cursor-pointer text-sm font-semibold text-slate-100">
                    {strings.bank.summary}
                  </summary>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        {strings.bank.labels.recipient}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-100">
                        {bankRecipient}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        {strings.bank.labels.bank}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-100">{bankName}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        {strings.bank.labels.iban}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-100">{bankIban}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        {strings.bank.labels.bic}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-100">{bankBic}</p>
                    </div>
                    {bankRefPrefix ? (
                      <div className="sm:col-span-2">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                          {strings.bank.labels.reference}
                        </p>
                        <p className="mt-1 text-sm text-slate-300">
                          {strings.bank.referenceHint.replace("{bankRefPrefix}", bankRefPrefix)}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </details>
              ) : (
                <div className="mt-4 rounded-2xl border border-dashed border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-400">
                  {strings.bank.noDetails}
                </div>
              )}
              <p className="mt-3 text-xs text-slate-400">
                {strings.bank.afterNote}
              </p>
            </>
          )}
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 text-xs text-slate-400">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            {strings.hint.label}
          </p>
          <p className="mt-2">
            {strings.hint.body}
          </p>
        </section>
      </section>
    </main>
  );
}
