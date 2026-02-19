import Link from "next/link";
import { pickHumanChallenge } from "@/lib/spam/humanChallenge";
import { getRequestLocale } from "@/lib/locale";
import KontaktForm from "./KontaktForm";
import { getKontaktStrings } from "./strings";

export const dynamic = "force-dynamic";

export default async function KontaktPage({
  searchParams,
}: {
  searchParams?: { sent?: string; error?: string };
}) {
  const locale = await getRequestLocale();
  const strings = getKontaktStrings(locale);
  const sent = searchParams?.sent === "1";
  const error = searchParams?.error;
  const challenge = pickHumanChallenge();
  const contactEmail = "kontakt@voiceopengov.org";

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pb-16 text-slate-100">
      <section className="mx-auto max-w-5xl px-4 pt-14">
        <div className="rounded-3xl bg-slate-900/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.4)] ring-1 ring-slate-800 md:p-10">
          <header className="space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {strings.page.label}
            </p>
            <h1 className="text-3xl font-extrabold leading-tight md:text-4xl headline-gradient">
              {strings.page.title}
            </h1>
            <p className="text-sm leading-relaxed text-slate-300 md:text-base">
              {strings.page.subtitle}
            </p>
          </header>

          <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-sm text-slate-200">
            <div className="grid gap-4 md:grid-cols-2 md:items-start">
              <div className="space-y-1">
                <p>
                  <span className="font-semibold">{strings.page.emailLabel}</span>{" "}
                  <a
                    href={`mailto:${contactEmail}`}
                    className="font-semibold text-sky-300 underline underline-offset-4"
                  >
                    {contactEmail}
                  </a>
                </p>
                <p>{strings.page.emailNote}</p>
                <p className="text-xs text-slate-400">
                  {strings.page.responseTime}
                </p>
              </div>

              <div className="space-y-1 md:text-right">
                <p className="font-semibold text-slate-100">
                  {strings.page.providerTitle}
                </p>
                <p>{strings.page.providerIntro}</p>
                {strings.page.addressLines.map((line) => (
                  <p key={line} className={line === strings.page.addressLines[0] ? "font-semibold text-slate-100" : undefined}>
                    {line}
                  </p>
                ))}

                <p className="mt-2 text-[11px] text-slate-400">
                  {strings.page.responsibleNote}
                </p>

                <p className="mt-2 text-[11px] text-slate-500">
                  {strings.page.impressumBefore}{" "}
                  <Link
                    href="/impressum"
                    className="font-semibold text-sky-300 underline underline-offset-4"
                  >
                    {strings.page.impressumLink}
                  </Link>
                  {strings.page.impressumAfter}
                </p>
              </div>
            </div>
          </section>

          <KontaktForm sent={sent} error={error} challenge={challenge} />

          <div className="mt-6 text-center text-xs text-slate-400">
            {strings.page.fallbackNote}{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="font-semibold text-sky-300 underline underline-offset-4"
            >
              {contactEmail}
            </a>
            .
          </div>
        </div>
      </section>
    </main>
  );
}
