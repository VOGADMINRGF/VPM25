import Link from "next/link";
import { pickHumanChallenge } from "@/lib/spam/humanChallenge";
import KontaktForm from "./KontaktForm";

export const dynamic = "force-dynamic";

export default function KontaktPage({
  searchParams,
}: {
  searchParams?: { sent?: string; error?: string };
}) {
  const sent = searchParams?.sent === "1";
  const error = searchParams?.error;
  const challenge = pickHumanChallenge();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pb-16 text-slate-100">
      <section className="mx-auto max-w-5xl px-4 pt-14">
        <div className="rounded-3xl bg-slate-900/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.4)] ring-1 ring-slate-800 md:p-10">
          <header className="space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Kontakt & Support
            </p>
            <h1 className="text-3xl font-extrabold leading-tight md:text-4xl headline-gradient">
              Der schnellste Weg zu uns.
            </h1>
            <p className="text-sm leading-relaxed text-slate-300 md:text-base">
              Per Formular oder direkt per E-Mail.
            </p>
          </header>

          <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-sm text-slate-200">
            <div className="grid gap-4 md:grid-cols-2 md:items-start">
              <div className="space-y-1">
                <p>
                  <span className="font-semibold">E-Mail:</span>{" "}
                  <a
                    href="mailto:kontakt@voiceopengov.org"
                    className="font-semibold text-sky-300 underline underline-offset-4"
                  >
                    kontakt@voiceopengov.org
                  </a>
                </p>
                <p>Direkt ans Team VoiceOpenGov</p>
                <p className="text-xs text-slate-400">
                  Anfragen versuchen wir binnen 24 Stunden zu beantworten.
                </p>
              </div>

              <div className="space-y-1 md:text-right">
                <p className="font-semibold text-slate-100">
                  Anbieter / ladungsfähige Anschrift (gem. § 5 DDG)
                </p>
                <p>VoiceOpenGov – Initiative von</p>
                <p className="font-semibold text-slate-100">Ricky G. Fleischer</p>
                <p>Clara-Müller-Jahnke-Str. 41</p>
                <p>12589 Berlin</p>
                <p>Deutschland</p>

                <p className="mt-2 text-[11px] text-slate-400">
                  Verantwortlich i.S.d. § 18 Abs. 2 MStV (journalistisch-redaktionelle Inhalte):{" "}
                  Ricky G. Fleischer (Anschrift wie oben)
                </p>

                <p className="mt-2 text-[11px] text-slate-500">
                  Weitere Angaben findest du im{" "}
                  <Link
                    href="/impressum"
                    className="font-semibold text-sky-300 underline underline-offset-4"
                  >
                    Impressum
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          <KontaktForm sent={sent} error={error} challenge={challenge} />

          <div className="mt-6 text-center text-xs text-slate-400">
            Sollte das Formular einmal nicht funktionieren, erreichst du uns jederzeit unter{" "}
            <a
              href="mailto:kontakt@voiceopengov.org"
              className="font-semibold text-sky-300 underline underline-offset-4"
            >
              kontakt@voiceopengov.org
            </a>
            .
          </div>
        </div>
      </section>
    </main>
  );
}
