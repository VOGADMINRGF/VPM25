import Link from "next/link";
import { getRequestLocale } from "@/lib/locale";

export const metadata = {
  title: "Stiftungsperspektive | Langfristige Unabhängigkeit sichern",
  description:
    "Warum VoiceOpenGov langfristig eine Stiftung anstrebt, welche Varianten möglich sind und welche Kriterien vor einer Gründung erfüllt sein müssen.",
};

const CONTENT = {
  de: {
    badge: "Stiftungsperspektive",
    title: "Stiftung als Reifeschritt, nicht als Etikett.",
    lead:
      "VoiceOpenGov ist derzeit eine private Initiative. Eine Stiftung ist die langfristige Perspektive – erst, wenn Struktur, Finanzierung und Wirkung tragfähig sind.",
    intro:
      "Eine Stiftung soll nicht politische Richtung setzen, sondern Ergebnisse, Erkenntnisse und Lernprozesse aus eDebatte dauerhaft sichern.",
    whyLabel: "Warum Stiftung",
    whyTitle: "Langfristigkeit, Unabhängigkeit, Zweckbindung.",
    whyPoints: [
      {
        title: "Unabhängigkeit",
        body: "Schützt vor Lobby- oder Kampagnenlogik und schafft Stabilität.",
      },
      {
        title: "Zweckbindung",
        body: "Mittel sind an den Satzungszweck gebunden – keine kurzfristigen Richtungswechsel.",
      },
      {
        title: "Langfristigkeit",
        body: "Strukturen überdauern Einzelpersonen und politische Zyklen.",
      },
      {
        title: "Vertrauen",
        body: "Transparente Governance macht Entscheidungen nachvollziehbar.",
      },
    ],
    formsLabel: "Mögliche Varianten",
    formsTitle: "Welche Struktur ist sinnvoll?",
    formsBody:
      "Noch ist keine Entscheidung getroffen. Wir prüfen Varianten und wählen die, die Unabhängigkeit, Transparenz und Machbarkeit am besten verbindet.",
    forms: [
      {
        title: "Rechtsfähige Stiftung",
        body: "Hohe Unabhängigkeit, klare Zweckbindung, aber hoher Kapital- und Prüfaufwand.",
      },
      {
        title: "Treuhandstiftung",
        body: "Schneller umsetzbar, aber stärker abhängig vom Treuhänder.",
      },
      {
        title: "gGmbH / Verein",
        body: "Zwischenlösung mit mehr Flexibilität, aber weniger langfristiger Zweckbindung.",
      },
    ],
    triggerLabel: "Trigger-Kriterien",
    triggerTitle: "Wann eine Stiftung realistisch wird",
    triggerBody:
      "Eine Gründung erfolgt erst, wenn klare Reifeindikatoren erfüllt sind.",
    triggerPoints: [
      "Stabile Finanzierung über einen definierten Zeitraum",
      "Verlässliche Governance-Struktur und Audit-Gremium",
      "Nachweisbare Wirkung durch mehrere abgeschlossene Prozesse",
      "Team und Betrieb sind dauerhaft tragfähig",
    ],
    todayLabel: "Heute",
    todayTitle: "Ehrlich kommuniziert",
    todayBody:
      "Aktuell sind wir keine Stiftung und keine gemeinnützige Struktur. Genau deshalb sprechen wir offen darüber und bauen Schritt für Schritt belastbar auf.",
    ctaTitle: "Mittragen, bevor es ein Label gibt",
    ctaBody:
      "Die Grundlage ist die Mitgliedschaft. Freiwillige Unterstützung bleibt optional und getrennt.",
    ctaPrimary: "Mitglied werden",
    ctaSecondary: "Unterstützen",
    ctaTertiary: "So funktioniert’s",
  },
  en: {
    badge: "Foundation perspective",
    title: "Foundation as a maturity step, not a label.",
    lead:
      "VoiceOpenGov is currently a private initiative. A foundation is the long‑term perspective — only once structure, funding and impact are solid.",
    intro:
      "A foundation should not set political direction, but secure outcomes, insights and learning processes from eDebatte for the long term.",
    whyLabel: "Why a foundation",
    whyTitle: "Long‑term independence and purpose‑binding.",
    whyPoints: [
      {
        title: "Independence",
        body: "Protects against lobbying or campaign logic and creates stability.",
      },
      {
        title: "Purpose‑binding",
        body: "Funds are tied to the charter — no short‑term direction shifts.",
      },
      {
        title: "Longevity",
        body: "Structures outlast individuals and political cycles.",
      },
      {
        title: "Trust",
        body: "Transparent governance makes decisions traceable.",
      },
    ],
    formsLabel: "Possible forms",
    formsTitle: "Which structure is right?",
    formsBody:
      "No decision yet. We assess options and choose the one that best combines independence, transparency and feasibility.",
    forms: [
      {
        title: "Independent foundation",
        body: "High independence and clear purpose‑binding, but higher capital and review requirements.",
      },
      {
        title: "Trust foundation",
        body: "Faster to set up, but more dependent on the trustee.",
      },
      {
        title: "Nonprofit LLC / association",
        body: "Interim solution with flexibility, but less long‑term binding.",
      },
    ],
    triggerLabel: "Trigger criteria",
    triggerTitle: "When a foundation becomes realistic",
    triggerBody:
      "We only found a foundation once clear maturity indicators are met.",
    triggerPoints: [
      "Stable funding over a defined period",
      "Reliable governance structure and audit body",
      "Demonstrable impact through multiple completed processes",
      "Team and operations are sustainably viable",
    ],
    todayLabel: "Today",
    todayTitle: "Communicated honestly",
    todayBody:
      "Currently we are neither a foundation nor a nonprofit structure. That is why we speak openly and build reliably step by step.",
    ctaTitle: "Carry it before it becomes a label",
    ctaBody:
      "Membership is the foundation. Voluntary support stays optional and separate.",
    ctaPrimary: "Become a member",
    ctaSecondary: "Support",
    ctaTertiary: "How it works",
  },
};

export default async function StiftungPage() {
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
            {copy.whyLabel}
          </p>
          <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
            {copy.whyTitle}
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {copy.whyPoints.map((item) => (
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
              {copy.formsLabel}
            </p>
            <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
              {copy.formsTitle}
            </h2>
            <p className="text-sm leading-7 text-slate-300">{copy.formsBody}</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {copy.forms.map((item) => (
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
            {copy.triggerLabel}
          </p>
          <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
            {copy.triggerTitle}
          </h2>
          <p className="text-sm leading-7 text-slate-300">{copy.triggerBody}</p>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {copy.triggerPoints.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-300"
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
              {copy.todayLabel}
            </p>
            <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
              {copy.todayTitle}
            </h2>
            <p className="text-sm leading-7 text-slate-300">{copy.todayBody}</p>
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
            <Link href="/#join" className="btn btn-primary">
              {copy.ctaPrimary}
            </Link>
            <Link href="/unterstuetzen" className="btn btn-ghost">
              {copy.ctaSecondary}
            </Link>
            <Link href="/howtoworks" className="btn btn-ghost">
              {copy.ctaTertiary}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
