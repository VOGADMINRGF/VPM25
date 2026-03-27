import Link from "next/link";
import { getRequestLocale } from "@/lib/locale";
import { EDEBATTE_SIGNUP_URL } from "@/config/links";

export const metadata = {
  title: "Evidenz & Transparenz | VoiceOpenGov",
  description:
    "Wie VoiceOpenGov Evidenz, Quellenführung, Prüfstatus, Auditpfad und Statuslogik transparent macht – und was wir bewusst nicht tun.",
};

const CONTENT = {
  de: {
    badge: "Evidenz & Transparenz",
    title: "Neutralität ist ein Prozess, kein Versprechen.",
    lead:
      "VoiceOpenGov ist die Initiative, eDebatte das Werkzeug. Unsere Glaubwürdigkeit entsteht aus nachvollziehbaren Regeln, nicht aus Behauptungen.",
    intro:
      "Wir trennen Inhalt von Prüfstatus, machen Quellen sichtbar und dokumentieren Eingriffe. So wird Diskussion lesbar – auch wenn sie nicht abgeschlossen ist.",
    pillarsLabel: "Unsere Prozess-Logik",
    pillarsTitle: "Evidenz entsteht durch Struktur.",
    pillars: [
      {
        title: "Quellenführung",
        body:
          "Primär- und Sekundärquellen werden unterschieden. Lücken, Unsicherheiten und Konflikte werden sichtbar markiert.",
      },
      {
        title: "Prüfstatus",
        body:
          "Aussagen tragen einen Status: ungeprüft, geprüft, strittig oder widerlegt – keine falsche Endgültigkeit.",
      },
      {
        title: "Konfliktmarkierung",
        body:
          "Wenn Quellen oder Perspektiven kollidieren, wird das als Konflikt sichtbar gemacht – nicht verborgen.",
      },
      {
        title: "Auditpfad",
        body:
          "Änderungen und Eingriffe werden dokumentiert. Wer etwas markiert oder korrigiert, hinterlässt eine Spur.",
      },
    ],
    statusLabel: "Status-Logik",
    statusTitle: "Beteiligung braucht Anschluss.",
    statusBody:
      "Ergebnisse sind nur glaubwürdig, wenn sichtbar bleibt, was danach passiert. Status zeigt Zuständigkeiten, Fortschritt und Blockaden.",
    statusPoints: [
      "Ergebnisarten werden klar ausgewiesen (Stimmung, Priorisierung, Empfehlung, Entscheidung).",
      "Zuständigkeiten werden sichtbar gemacht.",
      "Monitoring ersetzt das Vergessen nach dem Event.",
    ],
    rolesLabel: "Rollen & Eingriffe",
    rolesTitle: "Eingriffe werden markiert, nicht versteckt.",
    rolesBody:
      "Moderation schützt die Struktur, nicht die Meinung. Inhalte werden nicht gelöscht, sondern mit Prüfstatus versehen.",
    rolesPoints: [
      "Trennung von Inhalt und Prüfstatus.",
      "Transparente Eingriffsgründe.",
      "Keine stille Manipulation von Ergebnissen.",
    ],
    notLabel: "Was wir nicht tun",
    notTitle: "Keine Wahrheitsmaschine. Keine Partei. Kein Kauf von Einfluss.",
    notBody:
      "VoiceOpenGov ist keine Kampagnenplattform und kein Wahrheitsmonopol. Wir liefern Struktur und Sichtbarkeit – nicht die eine Wahrheit.",
    notPoints: [
      "Keine Paywall für Grundwissen.",
      "Keine Stimmvorteile durch Geld.",
      "Keine versteckte Agenda oder Parteilinie.",
      "Kein Zwang zu einer einzigen Meinung.",
    ],
    ctaTitle: "Die Struktur praktisch sehen",
    ctaBody:
      "eDebatte macht die Informationsarchitektur sichtbar. VoiceOpenGov setzt den öffentlichen Rahmen dafür.",
    ctaPrimary: "eDebatte ansehen",
    ctaSecondary: "So funktioniert’s",
    ctaTertiary: "Mitglied werden",
  },
  en: {
    badge: "Evidence & transparency",
    title: "Neutrality is a process, not a promise.",
    lead:
      "VoiceOpenGov is the initiative; eDebatte is the tool. Credibility comes from traceable rules, not claims.",
    intro:
      "We separate content from verification status, make sources visible, and document interventions. Debate becomes readable — even when unresolved.",
    pillarsLabel: "Our process logic",
    pillarsTitle: "Evidence emerges through structure.",
    pillars: [
      {
        title: "Source handling",
        body:
          "Primary and secondary sources are separated. Gaps, uncertainty and conflicts are marked visibly.",
      },
      {
        title: "Verification status",
        body:
          "Statements carry a status: unverified, verified, disputed or refuted — no false finality.",
      },
      {
        title: "Conflict marking",
        body:
          "When sources or perspectives collide, the conflict is made visible — not hidden.",
      },
      {
        title: "Audit trail",
        body:
          "Changes and interventions are logged. Anyone who marks or corrects leaves a trace.",
      },
    ],
    statusLabel: "Status logic",
    statusTitle: "Participation needs follow-through.",
    statusBody:
      "Outcomes are only credible if it remains visible what happens next. Status shows responsibilities, progress and blockages.",
    statusPoints: [
      "Result types are explicit (mood, prioritization, recommendation, decision).",
      "Responsibilities are made visible.",
      "Monitoring replaces post-event forgetting.",
    ],
    rolesLabel: "Roles & interventions",
    rolesTitle: "Interventions are marked, not hidden.",
    rolesBody:
      "Moderation protects structure, not opinion. Content is not deleted, it is labeled with verification status.",
    rolesPoints: [
      "Separation of content and verification status.",
      "Transparent reasons for interventions.",
      "No silent manipulation of outcomes.",
    ],
    notLabel: "What we do not do",
    notTitle: "No truth machine. No party platform. No buying influence.",
    notBody:
      "VoiceOpenGov is not a campaign platform and not a monopoly on truth. We provide structure and visibility — not a single truth.",
    notPoints: [
      "No paywall for basic knowledge.",
      "No voting advantages through money.",
      "No hidden agenda or party line.",
      "No pressure toward a single opinion.",
    ],
    ctaTitle: "See the structure in practice",
    ctaBody:
      "eDebatte makes the information architecture visible. VoiceOpenGov sets the public frame.",
    ctaPrimary: "See eDebatte",
    ctaSecondary: "How it works",
    ctaTertiary: "Become a member",
  },
};

export default async function TransparencyPage() {
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
            {copy.pillarsLabel}
          </p>
          <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
            {copy.pillarsTitle}
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {copy.pillars.map((item) => (
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
              {copy.statusLabel}
            </p>
            <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
              {copy.statusTitle}
            </h2>
            <p className="text-sm leading-7 text-slate-300">{copy.statusBody}</p>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {copy.statusPoints.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {copy.rolesLabel}
          </p>
          <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
            {copy.rolesTitle}
          </h2>
          <p className="text-sm leading-7 text-slate-300">{copy.rolesBody}</p>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {copy.rolesPoints.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800/70 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {copy.notLabel}
            </p>
            <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
              {copy.notTitle}
            </h2>
            <p className="text-sm leading-7 text-slate-300">{copy.notBody}</p>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {copy.notPoints.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="rounded-3xl border border-sky-500/30 bg-sky-500/10 p-6">
          <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
            {copy.ctaTitle}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-200">{copy.ctaBody}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={EDEBATTE_SIGNUP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              {copy.ctaPrimary}
            </a>
            <Link href="/howtoworks" className="btn btn-ghost">
              {copy.ctaSecondary}
            </Link>
            <Link href="/#join" className="btn btn-ghost">
              {copy.ctaTertiary}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
