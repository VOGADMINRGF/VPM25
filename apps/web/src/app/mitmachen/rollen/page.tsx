import Link from "next/link";

const roles = [
  { title: "Nachbar", body: "Du verfolgst Themen, stellst Fragen, widersprichst und hilfst dabei, Prioritäten sichtbar zu machen." },
  { title: "Quellenfinder", body: "Du suchst belastbare Quellen, Gegenquellen und fehlende Perspektiven – ohne daraus automatisch eine Meinung abzuleiten." },
  { title: "Erklärer", body: "Du machst komplexe Zusammenhänge verständlicher, ohne Unsicherheit oder Zielkonflikte glattzubügeln." },
  { title: "Übersetzer", body: "Du hilfst Menschen über Sprachen und kulturelle Kontexte hinweg, dieselbe Frage wirklich zu verstehen." },
  { title: "Moderator", body: "Du schützt das Verfahren, sorgst für respektvollen Widerspruch und trennst Moderation von politischer Bewertung." },
  { title: "Regionaler Organisator", body: "Du baust vor Ort Räume auf, verbindest lokale Fragen mit überregionalen Erkenntnissen und hältst Verantwortung sichtbar." },
  { title: "Prüfer", body: "Du hinterfragst Quellenlage, Rechtsbezug, Annahmen, Repräsentativität und mögliche Interessenkonflikte." },
  { title: "Fördermitglied", body: "Du ermöglichst Recherche, Technik und Community-Arbeit. Dein Beitrag kauft keine zusätzliche Stimme oder Sichtbarkeit." },
  { title: "Partnerorganisation", body: "Du bringst Wissen, Reichweite oder Infrastruktur ein – mit offengelegten Interessen und ohne bevorzugte politische Gewichtung." },
];

export const metadata = {
  title: "Mitwirkungsrollen | VoiceOpenGov",
  description: "Konkrete Rollen für Mitglieder und Unterstützer von VoiceOpenGov.",
};

export default function RolesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Mitmachen</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Du musst nicht alles können. Du musst nur irgendwo anfangen.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Eine Bewegung wird nicht dadurch groß, dass alle dasselbe tun. Sie wird stark, wenn Menschen ihre unterschiedlichen Fähigkeiten verantwortlich einbringen können.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <article key={role.title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <h2 className="text-xl font-extrabold">{role.title}</h2>
              <p className="mt-3 leading-7 text-slate-300">{role.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Dein erster Schritt</p>
          <h2 className="mt-3 text-3xl font-black">Mitglied werden. Rolle später wählen.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Die Mitgliedschaft verpflichtet dich nicht zu einer fertigen Aufgabe. Nach der Bestätigung soll ein Aktivierungspfad folgen: Region wählen, Themen auswählen und mit einer kleinen, konkreten Handlung beginnen.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/#mitmachen" className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-300">Kostenfrei Mitglied werden</Link>
            <Link href="/fragen" className="rounded-full border border-slate-700 px-5 py-3 font-bold hover:border-cyan-300">Eine Frage auswählen</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
