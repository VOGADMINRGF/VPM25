import Link from "next/link";
import { getRequestLocale } from "@/lib/locale";

export const metadata = {
  title: "VoiceOpenGov als Initiative | Bewegung, Unterstützung und Perspektive",
  description:
    "Warum VoiceOpenGov als unabhängige Initiative für nachvollziehbare öffentliche Evidenz, direkte demokratische Beteiligung und eine neue Diskussionskultur antritt.",
};

const CONTENT = {
  de: {
    badge: "VoiceOpenGov als Initiative",
    title:
      "Direktdemokratische Beteiligung braucht endlich eine Form, der man wieder vertrauen kann.",
    lead: "VoiceOpenGov ist eine Initiative für nachvollziehbare öffentliche Evidenz und Beteiligung.",
    intro:
      "Wir wollen Vertrauen in öffentliche Meinungsbildung nicht durch Lautstärke zurückgewinnen, sondern durch eine neue Informationsarchitektur: verständlich, statusgeführt, quellenoffen, barrierearm und anschlussfähig. Der Anspruch ist groß, aber die Haltung ist klar: keine Parteilinie, kein Lobbyvehikel, kein Rage-Produkt – sondern ein ernsthafter Versuch, demokratische Beteiligung wieder lesbar und tragfähig zu machen.",
    ctas: {
      support: "Unterstützen",
      join: "Mitglied werden",
      edebatte: "eDebatte verstehen",
    },
    principles: [
      {
        title: "Direktdemokratie klar benennen",
        body:
          "VoiceOpenGov steht selbstbewusst für direkte und digitale Beteiligung. Nicht als lautes Gegenmodell ohne Struktur, sondern als ernsthafte Weiterentwicklung demokratischer Praxis.",
      },
      {
        title: "Nachvollziehbarkeit statt Nebel",
        body:
          "Öffentliche Diskussion verliert Vertrauen, wenn Behauptungen, Zuständigkeiten, Optionen und Ergebnisse auseinanderfallen. Wir wollen genau diese Brüche sichtbar und bearbeitbar machen.",
      },
      {
        title: "Evidenz statt bloßer Lautstärke",
        body:
          "Wir wollen keine weitere Gruppierung sein, die nur brüllt. VoiceOpenGov will zeigen, dass gesellschaftliche Vernunft, saubere Struktur und nachvollziehbare Evidenz wieder tragfähig werden können.",
      },
      {
        title: "Weltweit offen, lokal anschlussfähig",
        body:
          "VoiceOpenGov beginnt unabhängig und konkret, ist aber von Anfang an grenzüberschreitend gedacht: offen für Menschen, Initiativen und Perspektiven über Länder und Systeme hinweg.",
      },
    ],
    supportLabel: "Warum das mehr ist als eine Website",
    supportTitle: "VoiceOpenGov ist der öffentliche Rahmen. eDebatte ist das Werkzeug.",
    supportBody1:
      "Die Initiative erklärt, wofür wir stehen: mehr direkte Beteiligung, mehr öffentliche Nachvollziehbarkeit, mehr Verständlichkeit in komplexen Fragen. eDebatte ist der Ort, an dem diese Haltung praktisch wird – mit geordneten Themenräumen, Dossiers, Beteiligung und Status statt bloßer Kommentarspiralen.",
    supportBody2:
      "Genau deshalb suchen wir Unterstützer. Nicht, damit Geld Meinung kauft, sondern damit eine unabhängige Infrastruktur wachsen kann, die weder von Werbung noch von versteckten Interessen abhängt.",
    supportWaysLabel: "Was Unterstützung hier bedeutet",
    supportWays: [
      "als Bürgerin oder Bürger mitgehen und die Idee weitertragen",
      "als Initiative andocken und Erfahrungen, Themen und Perspektiven einbringen",
      "als Unterstützer den Aufbau unabhängig finanzieren helfen",
      "als Mitglied intern an Veranstaltungen, Treffen, Satzungsfragen und Themenräumen mitwirken",
    ],
    todayLabel: "Heute",
    todayTitle: "Private Initiative mit klarem Anspruch",
    todayBody:
      "Aktuell ist VoiceOpenGov keine gemeinnützige Struktur und keine Stiftung, sondern eine private Initiative. Genau deshalb sprechen wir offen darüber. Wir wollen nichts vorspiegeln, sondern belastbar aufbauen.",
    perspectiveLabel: "Perspektive",
    perspectiveTitle: "Stiftung als Reifeschritt, nicht als Etikett",
    perspectiveBody:
      "Sobald Mittel, Strukturen und Wirkung tragfähig genug sind, soll aus diesem Aufbau eine unabhängige Stiftung entstehen. Ihr Zweck wäre nicht parteipolitische Einflussnahme, sondern die dauerhafte Sicherung der Erkenntnisse, Ergebnisse und Lernprozesse, die aus eDebatte hervorgehen.",
    closingTitle: "Unser Maßstab ist einfach",
    closingBody:
      "Öffentliche Diskussion soll wieder verständlicher, fairer und belastbarer werden. Wenn Menschen nachvollziehen können, worum es geht, was offen ist, welche Optionen bestehen und was aus Beteiligung tatsächlich folgt, wächst auch das Vertrauen in demokratische Prozesse zurück.",
  },
  en: {
    badge: "VoiceOpenGov as an initiative",
    title: "Direct-democratic participation needs a form we can trust again.",
    lead: "VoiceOpenGov is an initiative for traceable public evidence and participation.",
    intro:
      "We want to rebuild trust in public opinion formation not through loudness, but through a new information architecture: understandable, status-guided, source-aware, accessible and connectable. The ambition is big, but the stance is clear: no party line, no lobby vehicle, no rage product – but a serious attempt to make democratic participation readable and viable again.",
    ctas: {
      support: "Support",
      join: "Become a member",
      edebatte: "Understand eDebatte",
    },
    principles: [
      {
        title: "Name direct democracy clearly",
        body:
          "VoiceOpenGov stands confidently for direct and digital participation. Not as a loud counter-model without structure, but as a serious evolution of democratic practice.",
      },
      {
        title: "Traceability instead of fog",
        body:
          "Public debate loses trust when claims, responsibilities, options and outcomes fall apart. We want to make those breaks visible and actionable.",
      },
      {
        title: "Evidence instead of sheer loudness",
        body:
          "We do not want to be another grouping that only shouts. VoiceOpenGov aims to show that social reason, clean structure and traceable evidence can become viable again.",
      },
      {
        title: "Open globally, usable locally",
        body:
          "VoiceOpenGov starts independently and concretely, but is designed from day one to be cross-border: open to people, initiatives and perspectives across countries and systems.",
      },
    ],
    supportLabel: "Why this is more than a website",
    supportTitle: "VoiceOpenGov is the public frame. eDebatte is the tool.",
    supportBody1:
      "The initiative explains what we stand for: more direct participation, more public traceability, more clarity in complex questions. eDebatte is the place where this stance becomes practical – with ordered topic spaces, dossiers, participation and status instead of endless comment spirals.",
    supportBody2:
      "That is exactly why we are looking for supporters. Not so money can buy opinion, but so an independent infrastructure can grow – one that is driven neither by ads nor hidden interests.",
    supportWaysLabel: "What support means here",
    supportWays: [
      "join as a citizen and carry the idea forward",
      "connect as an initiative and bring experiences, topics and perspectives",
      "help finance the build-up independently as a supporter",
      "participate internally as a member in events, meetings, statutes and topic spaces",
    ],
    todayLabel: "Today",
    todayTitle: "Private initiative with a clear claim",
    todayBody:
      "At the moment VoiceOpenGov is not a nonprofit structure and not a foundation, but a private initiative. That is precisely why we speak openly about it. We want to build reliably, not pretend.",
    perspectiveLabel: "Perspective",
    perspectiveTitle: "Foundation as a maturity step, not a label",
    perspectiveBody:
      "As soon as funds, structures and impact are solid enough, this build-up should become an independent foundation. Its purpose would not be partisan influence, but the long-term safeguarding of the insights, outcomes and learning processes that emerge from eDebatte.",
    closingTitle: "Our measure is simple",
    closingBody:
      "Public discussion should become more understandable, fair and resilient again. When people can see what a topic is about, what is open, which options exist and what follows from participation, trust in democratic processes grows back.",
  },
};

export default async function BewegungPage() {
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
            <div className="flex flex-wrap gap-3">
              <Link href="/#join" className="btn btn-primary">
                {copy.ctas.join}
              </Link>
              <Link href="/#voiceopengov-support" className="btn btn-ghost">
                {copy.ctas.support}
              </Link>
              <Link href="/howtoworks/edebatte" className="btn btn-ghost">
                {copy.ctas.edebatte}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="grid gap-5 md:grid-cols-2">
          {copy.principles.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-100">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800/70 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {copy.supportLabel}
              </p>
              <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
                {copy.supportTitle}
              </h2>
              <p className="text-sm leading-7 text-slate-300">{copy.supportBody1}</p>
              <p className="text-sm leading-7 text-slate-300">{copy.supportBody2}</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {copy.supportWaysLabel}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {copy.supportWays.map((item) => (
                  <li key={item} className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {copy.todayLabel}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-100">{copy.todayTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{copy.todayBody}</p>
          </article>
          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {copy.perspectiveLabel}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-100">{copy.perspectiveTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{copy.perspectiveBody}</p>
          </article>
        </div>

        <div className="mt-8 rounded-3xl border border-sky-500/30 bg-sky-500/10 p-6">
          <h2 className="text-xl font-semibold text-slate-100">{copy.closingTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-200">{copy.closingBody}</p>
        </div>
      </section>
    </main>
  );
}
