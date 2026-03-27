import Link from "next/link";
import { getRequestLocale } from "@/lib/locale";
import { EDEBATTE_SIGNUP_URL } from "@/config/links";

export const metadata = {
  title: "Unterstützen | Unabhängigkeit und Integrität sichern",
  description:
    "Unterstützung bleibt freiwillig: Mitgliedschaft ist kostenfrei, Beiträge sind optional. Keine Spendenquittung, kein Steuersparmodell, keine Stimmvorteile.",
};

const CONTENT = {
  de: {
    badge: "Unterstützen",
    title: "Unabhängigkeit braucht freiwillige Unterstützung.",
    lead:
      "Mitgliedschaft ist kostenfrei. Wer VoiceOpenGov zusätzlich unterstützen möchte, kann das freiwillig tun – ohne Gegenrechte und ohne Stimmvorteile.",
    intro:
      "VoiceOpenGov ist die Initiative, eDebatte das Werkzeug. Unterstützung ermöglicht den Aufbau einer Infrastruktur, die nicht von Werbung, Lobby oder Exit-Logik abhängt.",
    integrityLabel: "Integritätszusagen",
    integrityTitle: "Geld kauft keine Stimme — und keine Richtung.",
    integrityBody:
      "Unterstützung bleibt freiwillig und getrennt von Beteiligung. Wir sichern klare Leitplanken für Vertrauen, Nachvollziehbarkeit und Unabhängigkeit.",
    integrityPoints: [
      {
        title: "Keine Stimmvorteile",
        body: "Beiträge verändern keine Beteiligungsrechte und keine Ergebnisse.",
      },
      {
        title: "Keine Spendenquittungen (aktuell)",
        body: "Als private Initiative können wir derzeit keine Zuwendungsbestätigungen ausstellen.",
      },
      {
        title: "Kein Steuersparmodell",
        body: "Unterstützung ist kein Steuerinstrument, sondern ein freiwilliger Beitrag zum Aufbau.",
      },
      {
        title: "Transparente Verwendung",
        body: "Wir dokumentieren, wofür Mittel eingesetzt werden – verständlich und nachvollziehbar.",
      },
    ],
    useLabel: "Wofür Unterstützung gebraucht wird",
    useTitle: "Infrastruktur, die Vertrauen verdient.",
    useBody:
      "Der Aufbau braucht verlässliche Ressourcen – nicht für Kampagnen, sondern für eine tragfähige öffentliche Form.",
    usePoints: [
      {
        title: "Technik & Betrieb",
        body: "Hosting, Sicherheit, Weiterentwicklung der Plattform und Datenpflege.",
      },
      {
        title: "Moderation & Dossiers",
        body: "Strukturierte Aufbereitung, Quellenarbeit und sichtbare Verantwortung.",
      },
      {
        title: "Übersetzung & Barrierearmut",
        body: "Leichte Sprache, internationale Verständlichkeit und bessere Zugänglichkeit.",
      },
      {
        title: "Monitoring & Status",
        body: "Langfristige Nachverfolgung statt kurzer Event-Logik.",
      },
    ],
    pathLabel: "Wie du unterstützen kannst",
    pathTitle: "Erst Mitglied werden, dann optional unterstützen.",
    pathBody:
      "Der Primärweg ist die Mitgliedschaft. Freiwillige Unterstützung ist ein optionaler Zweig – regelmäßig oder einmalig.",
    pathPrimaryTitle: "Mitglied werden (kostenfrei)",
    pathPrimaryBody:
      "Mitgliedschaft stärkt die Reichweite. Du kannst zusätzlich angeben, wie du dich einbringen möchtest.",
    pathPrimaryCta: "Mitglied werden",
    pathSecondaryTitle: "Freiwillig unterstützen",
    pathSecondaryBody:
      "Nach der Mitgliedschaft kannst du freiwillig beitragen – ohne Gegenrechte und ohne steuerliche Gegenleistung.",
    pathSecondaryCta: "Kontakt aufnehmen",
    contactLabel: "Kontakt",
    contactTitle: "Unterstützung kurz besprechen",
    contactBody:
      "Schreib uns, wie du unterstützen möchtest – finanziell, organisatorisch oder mit Know-how. Wir klären den passenden Weg.",
    contactCta: "Zum Kontakt",
    contactHint:
      "Hinweis: Mitgliedschaft und Unterstützung bleiben bewusst getrennt. Entscheidungen sind nachvollziehbar – und nie käuflich.",
    toolLabel: "eDebatte",
    toolBody:
      "eDebatte ist das Werkzeug, in dem Themen strukturiert, geprüft und mit Status geführt werden.",
    toolCta: "eDebatte ansehen",
  },
  en: {
    badge: "Support",
    title: "Independence needs voluntary support.",
    lead:
      "Membership is free. Anyone can support VoiceOpenGov voluntarily — without special rights and without voting advantages.",
    intro:
      "VoiceOpenGov is the initiative; eDebatte is the tool. Support enables an infrastructure that is not driven by ads, lobbying or exit logic.",
    integrityLabel: "Integrity commitments",
    integrityTitle: "Money buys no vote — and no direction.",
    integrityBody:
      "Support remains voluntary and separate from participation. We set clear guardrails for trust, traceability and independence.",
    integrityPoints: [
      {
        title: "No voting advantages",
        body: "Contributions never change participation rights or outcomes.",
      },
      {
        title: "No donation receipts (currently)",
        body: "As a private initiative we cannot issue donation receipts at this time.",
      },
      {
        title: "No tax-saving model",
        body: "Support is not a tax instrument, but a voluntary contribution to build-up.",
      },
      {
        title: "Transparent use",
        body: "We document where funds go — clearly and traceably.",
      },
    ],
    useLabel: "What support is used for",
    useTitle: "Infrastructure that deserves trust.",
    useBody:
      "The build-up needs reliable resources — not for campaigns, but for a viable public form.",
    usePoints: [
      {
        title: "Tech & operations",
        body: "Hosting, security, platform development and data maintenance.",
      },
      {
        title: "Moderation & dossiers",
        body: "Structured preparation, source work and visible responsibility.",
      },
      {
        title: "Translation & accessibility",
        body: "Plain language, international clarity and better accessibility.",
      },
      {
        title: "Monitoring & status",
        body: "Long-term follow-through instead of short event logic.",
      },
    ],
    pathLabel: "How you can support",
    pathTitle: "Join first, then support optionally.",
    pathBody:
      "The primary path is membership. Voluntary support is an optional branch — recurring or one-time.",
    pathPrimaryTitle: "Become a member (free)",
    pathPrimaryBody:
      "Membership expands reach. You can also share how you want to contribute beyond money.",
    pathPrimaryCta: "Become a member",
    pathSecondaryTitle: "Support voluntarily",
    pathSecondaryBody:
      "After joining you can contribute voluntarily — without special rights or tax benefits.",
    pathSecondaryCta: "Contact us",
    contactLabel: "Contact",
    contactTitle: "Discuss support briefly",
    contactBody:
      "Tell us how you want to support — financially, operationally, or with know-how. We will clarify the right path.",
    contactCta: "Go to contact",
    contactHint:
      "Note: Membership and support stay deliberately separate. Decisions are traceable — and never for sale.",
    toolLabel: "eDebatte",
    toolBody:
      "eDebatte is the tool where issues are structured, verified and status-tracked.",
    toolCta: "See eDebatte",
  },
};

export default async function SupportPage() {
  const locale = await getRequestLocale();
  const copy = locale === "de" ? CONTENT.de : CONTENT.en;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <section className="border-b border-slate-800/70">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-semibold text-sky-300">
              {copy.badge}
            </div>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl headline-gradient">
              {copy.title}
            </h1>
            <p className="text-lg font-semibold text-slate-100">{copy.lead}</p>
            <p className="text-sm leading-7 text-slate-300">{copy.intro}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {copy.integrityLabel}
          </p>
          <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
            {copy.integrityTitle}
          </h2>
          <p className="text-sm leading-7 text-slate-300">{copy.integrityBody}</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {copy.integrityPoints.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-slate-100">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800/70 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {copy.useLabel}
            </p>
            <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
              {copy.useTitle}
            </h2>
            <p className="text-sm leading-7 text-slate-300">{copy.useBody}</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {copy.usePoints.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <p className="text-sm font-semibold text-slate-100">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {copy.pathLabel}
          </p>
          <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
            {copy.pathTitle}
          </h2>
          <p className="text-sm leading-7 text-slate-300">{copy.pathBody}</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-100">{copy.pathPrimaryTitle}</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">{copy.pathPrimaryBody}</p>
            <Link href="/#join" className="btn btn-primary mt-4">
              {copy.pathPrimaryCta}
            </Link>
          </article>
          <article className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
            <p className="text-sm font-semibold text-slate-100">{copy.pathSecondaryTitle}</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">{copy.pathSecondaryBody}</p>
            <Link href="/kontakt" className="btn btn-ghost mt-4">
              {copy.pathSecondaryCta}
            </Link>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {copy.contactLabel}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-100 headline-gradient">
            {copy.contactTitle}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">{copy.contactBody}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/kontakt" className="btn btn-primary">
              {copy.contactCta}
            </Link>
            <a
              href={EDEBATTE_SIGNUP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              {copy.toolCta}
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-400">{copy.contactHint}</p>
        </div>
      </section>
    </main>
  );
}
