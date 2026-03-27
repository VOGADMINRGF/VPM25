import Link from "next/link";
import { EDEBATTE_SIGNUP_URL } from "@/config/links";

export const metadata = {
  title: "eDebatte verstehen | Werkzeug für Anlassräume, Dossiers und Status",
  description:
    "Warum eDebatte für VoiceOpenGov relevant ist und wie eine neue Informationsarchitektur Vertrauen, Nachvollziehbarkeit und bessere Diskussionskultur stärken kann.",
};

const architecture = [
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
];

const trustPoints = [
  "keine künstliche Empörungsmechanik",
  "klare Trennung von Behauptung, Quelle, Option und Ergebnis",
  "sichtbare offene Fragen statt vorgetäuschter Gewissheit",
  "mehr Orientierung in komplexen Themen durch barrierearme Sprache",
  "neue Diskussionskultur durch Struktur statt durch Lautstärke",
];

export default function EDebattePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <section className="border-b border-slate-800/70">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-semibold text-sky-300">
              eDebatte als Werkzeug
            </div>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Warum eDebatte für VoiceOpenGov relevant ist
            </h1>
            <p className="text-lg font-semibold text-slate-100">
              eDebatte ist die praktische Infrastruktur hinter einer neuen Diskussionskultur.
            </p>
            <p className="text-sm leading-7 text-slate-300">
              VoiceOpenGov erklärt den öffentlichen Anspruch. eDebatte ist das Werkzeug, in dem dieser
              Anspruch konkret geführt werden kann: mit Themenräumen, Dossiers, Beteiligung und Status.
              Genau dort entsteht die Informationsarchitektur, die öffentliche Debatten wieder lesbarer,
              fairer und belastbarer machen soll.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={EDEBATTE_SIGNUP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Zu eDebatte
              </a>
              <Link href="/howtoworks/bewegung" className="btn btn-ghost">
                VoiceOpenGov als Initiative
              </Link>
              <Link href="/#voiceopengov-support" className="btn btn-ghost">
                Unterstützen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Neue Informationsarchitektur
          </p>
          <h2 className="text-2xl font-bold text-slate-100">
            eDebatte ist relevant, weil Vertrauen ohne Form nicht zurückkommt.
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-slate-300">
            Viele Diskussionen scheitern nicht daran, dass Menschen keine Meinung hätten, sondern daran,
            dass Themen ungeordnet bleiben: Behauptungen stehen neben Gerüchten, Forderungen neben
            Zuständigkeitslücken, Abstimmungen neben späterem Schweigen. eDebatte setzt genau dort an
            und übersetzt öffentliche Konflikte in eine bearbeitbare, nachvollziehbare Form.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {architecture.map((item) => (
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
                Anlassräume statt Kommentarnebel
              </p>
              <h2 className="text-2xl font-bold text-slate-100">
                Öffentliche Themen brauchen geordnete Räume.
              </h2>
              <p className="text-sm leading-7 text-slate-300">
                Auf VoiceOpenGov erklären wir, warum solche Räume nötig sind. Auf eDebatte können sie
                praktisch entstehen. Dort lassen sich Themen aufnehmen, ordnen und so weiterführen, dass
                Beiträge nicht im Rauschen verschwinden, sondern in einem nachvollziehbaren Prozess
                landen.
              </p>
              <p className="text-sm leading-7 text-slate-300">
                Für VoiceOpenGov-Mitglieder können zusätzlich interne Themenräume sinnvoll sein – etwa zu
                Veranstaltungen, Treffen, Satzungsfragen oder eigenen Prioritäten. Wo Ergebnisse später
                öffentlich verdichtet werden, muss das datenschutzsauber und erst ab einer belastbaren
                Mindestzahl von Rückmeldungen geschehen.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Was Vertrauen konkret stärkt
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {trustPoints.map((item) => (
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
            Öffentliche Einreichung
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-100">
            Öffentliche Anlassräume gehören praktisch auf eDebatte.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-200">
            VoiceOpenGov projiziert keinen künstlichen Demo-Anlassraum auf die eigene Website. Die
            Brücke ist klarer: Die Initiative erklärt das Warum, eDebatte führt das Wie. Deshalb wird
            die öffentliche Einreichung von Anlassräumen direkt dort verortet, wo Themen später auch
            tatsächlich statusgeführt, dokumentiert und weiterbearbeitet werden können.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={EDEBATTE_SIGNUP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Anlassräume über eDebatte starten
            </a>
            <Link href="/howtoworks/bewegung" className="btn btn-ghost">
              Zurück zur Initiative
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
