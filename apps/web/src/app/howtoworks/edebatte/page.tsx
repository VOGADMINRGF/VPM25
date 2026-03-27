import Link from "next/link";
import { EDEBATTE_SIGNUP_URL } from "@/config/links";
import { getRequestLocale } from "@/lib/locale";

export const metadata = {
  title: "eDebatte verstehen | Werkzeug für Anlassräume, Dossiers und Status",
  description:
    "Warum eDebatte für VoiceOpenGov relevant ist und wie eine neue Informationsarchitektur Vertrauen, Nachvollziehbarkeit und bessere Diskussionskultur stärken kann.",
};

const CONTENT = {
  de: {
    badge: "eDebatte als Werkzeug",
    title: "Warum eDebatte für VoiceOpenGov relevant ist",
    lead: "eDebatte ist die praktische Infrastruktur hinter einer neuen Diskussionskultur.",
    intro:
      "VoiceOpenGov erklärt den öffentlichen Anspruch. eDebatte ist das Werkzeug, in dem dieser Anspruch konkret geführt werden kann: mit Themenräumen, Dossiers, Beteiligung und Status. Genau dort entsteht die Informationsarchitektur, die öffentliche Debatten wieder lesbarer, fairer und belastbarer machen soll.",
    ctas: {
      primary: "Zu eDebatte",
      secondary: "VoiceOpenGov als Initiative",
      tertiary: "Mitglied werden",
    },
    architectureLabel: "Neue Informationsarchitektur",
    architectureTitle: "eDebatte ist relevant, weil Vertrauen ohne Form nicht zurückkommt.",
    architectureIntro:
      "Viele Diskussionen scheitern nicht daran, dass Menschen keine Meinung hätten, sondern daran, dass Themen ungeordnet bleiben: Behauptungen stehen neben Gerüchten, Forderungen neben Zuständigkeitslücken, Abstimmungen neben späterem Schweigen. eDebatte setzt genau dort an und übersetzt öffentliche Konflikte in eine bearbeitbare, nachvollziehbare Form.",
    architecture: [
      {
        title: "Check",
        body:
          "Aus einer Behauptung wird eine prüfbare Kernfrage. Begriffe, Zuständigkeiten und erste Quellen werden sichtbar gemacht, statt sofort in Lagerlogik zu kippen.",
      },
      {
        title: "Dossier",
        body:
          "Aus Material wird eine lesbare Struktur: Quellen, Konflikte, offene Fragen, Optionen, Folgen und Verantwortungspfade. Nicht als Linkliste, sondern als nachvollziehbare Landkarte.",
      },
      {
        title: "Beteiligung",
        body:
          "Beteiligung soll nicht nur Zahlen erzeugen, sondern klar benennbare Ergebnisarten: Stimmungsbild, Priorisierung, Empfehlung oder Entscheidung – je nach Rahmen.",
      },
      {
        title: "Status",
        body:
          "Nach der Beteiligung endet der Prozess nicht im Nichts. Status, Monitoring und sichtbare nächste Schritte sind entscheidend, damit Vertrauen nicht wieder verloren geht.",
      },
    ],
    trustLabel: "Anlassräume statt Kommentarnebel",
    trustTitle: "Öffentliche Themen brauchen geordnete Räume.",
    trustBody1:
      "Auf VoiceOpenGov erklären wir, warum solche Räume nötig sind. Auf eDebatte können sie praktisch entstehen. Dort lassen sich Themen aufnehmen, ordnen und so weiterführen, dass Beiträge nicht im Rauschen verschwinden, sondern in einem nachvollziehbaren Prozess landen.",
    trustBody2:
      "Für VoiceOpenGov-Mitglieder können zusätzlich interne Themenräume sinnvoll sein – etwa zu Veranstaltungen, Treffen, Satzungsfragen oder eigenen Prioritäten. Wo Ergebnisse später öffentlich verdichtet werden, muss das datenschutzsauber und erst ab einer belastbaren Mindestzahl von Rückmeldungen geschehen.",
    trustPointsLabel: "Was Vertrauen konkret stärkt",
    trustPoints: [
      "keine künstliche Empörungsmechanik",
      "klare Trennung von Behauptung, Quelle, Option und Ergebnis",
      "sichtbare offene Fragen statt vorgetäuschter Gewissheit",
      "mehr Orientierung in komplexen Themen durch barrierearme Sprache",
      "neue Diskussionskultur durch Struktur statt durch Lautstärke",
    ],
    submissionLabel: "Öffentliche Einreichung",
    submissionTitle: "Öffentliche Anlassräume gehören praktisch auf eDebatte.",
    submissionBody:
      "VoiceOpenGov projiziert keinen künstlichen Demo-Anlassraum auf die eigene Website. Die Brücke ist klarer: Die Initiative erklärt das Warum, eDebatte führt das Wie. Deshalb wird die öffentliche Einreichung von Anlassräumen direkt dort verortet, wo Themen später auch tatsächlich statusgeführt, dokumentiert und weiterbearbeitet werden können.",
    submissionCta: "Anlassräume über eDebatte starten",
    submissionBack: "Zurück zur Initiative",
  },
  en: {
    badge: "eDebatte as a tool",
    title: "Why eDebatte matters for VoiceOpenGov",
    lead: "eDebatte is the practical infrastructure behind a new discussion culture.",
    intro:
      "VoiceOpenGov explains the public claim. eDebatte is the tool where this claim can be carried out in practice: with topic spaces, dossiers, participation and status. This is where the information architecture emerges that should make public debate readable, fair and resilient again.",
    ctas: {
      primary: "Go to eDebatte",
      secondary: "VoiceOpenGov as an initiative",
      tertiary: "Become a member",
    },
    architectureLabel: "New information architecture",
    architectureTitle: "eDebatte matters because trust does not return without form.",
    architectureIntro:
      "Many discussions fail not because people lack opinions, but because topics remain unordered: claims sit next to rumors, demands next to responsibility gaps, votes next to later silence. eDebatte starts exactly there and translates public conflict into a workable, traceable form.",
    architecture: [
      {
        title: "Check",
        body:
          "A claim becomes a verifiable core question. Terms, responsibilities and initial sources are made visible instead of falling into camp logic immediately.",
      },
      {
        title: "Dossier",
        body:
          "Material becomes a readable structure: sources, conflicts, open questions, options, consequences and responsibility paths. Not a link list, but a traceable map.",
      },
      {
        title: "Participation",
        body:
          "Participation should not only produce numbers, but clearly named result types: mood, prioritization, recommendation or decision – depending on the frame.",
      },
      {
        title: "Status",
        body:
          "After participation the process does not end in nothingness. Status, monitoring and visible next steps are decisive so trust does not get lost again.",
      },
    ],
    trustLabel: "Issue spaces instead of comment fog",
    trustTitle: "Public issues need ordered spaces.",
    trustBody1:
      "On VoiceOpenGov we explain why such spaces are needed. On eDebatte they can take shape in practice. There, topics can be captured, ordered and carried forward so that contributions do not disappear into noise but land in a traceable process.",
    trustBody2:
      "For VoiceOpenGov members, internal topic spaces can also make sense – for events, meetings, statute questions or their own priorities. Where outcomes are later condensed publicly, this must be privacy-safe and only after a reliable minimum number of responses.",
    trustPointsLabel: "What strengthens trust in practice",
    trustPoints: [
      "no artificial outrage mechanics",
      "clear separation of claim, source, option and outcome",
      "visible open questions instead of pretended certainty",
      "more orientation in complex topics through accessible language",
      "new discussion culture through structure instead of loudness",
    ],
    submissionLabel: "Public submission",
    submissionTitle: "Public issue spaces belong on eDebatte in practice.",
    submissionBody:
      "VoiceOpenGov does not project a fake demo issue space onto its own website. The bridge is clearer: the initiative explains the why, eDebatte delivers the how. That is why public submission of issue spaces is placed directly where topics can later be status-guided, documented and worked on.",
    submissionCta: "Start issue spaces via eDebatte",
    submissionBack: "Back to the initiative",
  },
};

export default async function EDebattePage() {
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
              <a
                href={EDEBATTE_SIGNUP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                {copy.ctas.primary}
              </a>
              <Link href="/howtoworks/bewegung" className="btn btn-ghost">
                {copy.ctas.secondary}
              </Link>
              <Link href="/#join" className="btn btn-ghost">
                {copy.ctas.tertiary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {copy.architectureLabel}
          </p>
          <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
            {copy.architectureTitle}
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-slate-300">{copy.architectureIntro}</p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {copy.architecture.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800/70 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {copy.trustLabel}
              </p>
              <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
                {copy.trustTitle}
              </h2>
              <p className="text-sm leading-7 text-slate-300">{copy.trustBody1}</p>
              <p className="text-sm leading-7 text-slate-300">{copy.trustBody2}</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {copy.trustPointsLabel}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {copy.trustPoints.map((item) => (
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
        <div className="rounded-3xl border border-sky-500/30 bg-sky-500/10 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
            {copy.submissionLabel}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-100 headline-gradient">
            {copy.submissionTitle}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-200">{copy.submissionBody}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={EDEBATTE_SIGNUP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              {copy.submissionCta}
            </a>
            <Link href="/howtoworks/bewegung" className="btn btn-ghost">
              {copy.submissionBack}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
