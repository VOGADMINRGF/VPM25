import Link from "next/link";

const sections = [
  {
    title: "Finanzierung",
    status: "Im Aufbau",
    description: "Einnahmen, Ausgaben, Förderungen und Abhängigkeiten werden hier nachvollziehbar veröffentlicht. Solange Zahlen noch nicht belastbar vorliegen, zeigen wir keinen erfundenen Fortschritt.",
  },
  {
    title: "Mitgliederentwicklung",
    status: "Datenschutzprüfung",
    description: "Veröffentlicht werden ausschließlich aggregierte Zahlen nach Regionen und Ländern. Keine Einzelprofile, keine Rohdaten, keine Stimmvorteile durch Beiträge.",
  },
  {
    title: "Entscheidungen & Verantwortung",
    status: "Verfahrensmodell in Arbeit",
    description: "Beschlüsse, Zuständigkeiten, offene Einwände, Minderheitenvoten und spätere Kursänderungen sollen versioniert nachvollziehbar werden.",
  },
  {
    title: "Partnerschaften & Interessen",
    status: "Register vorgesehen",
    description: "Partner, institutionelle Beziehungen und mögliche Interessenkonflikte werden nicht hinter allgemeinen Unabhängigkeitsbehauptungen versteckt.",
  },
  {
    title: "KI & Voxy",
    status: "Grundsatz veröffentlicht",
    description: "Voxy erklärt, strukturiert und übersetzt. Voxy entscheidet nicht. Modellwechsel, Unsicherheiten und menschliche Prüfungen sollen sichtbar bleiben.",
  },
  {
    title: "Fehler & Lernstände",
    status: "Öffentliche Chronik geplant",
    description: "Wir wollen sichtbar machen, was nicht funktioniert hat, was verworfen wurde und warum wir unsere Einschätzung geändert haben.",
  },
];

export const metadata = {
  title: "Transparenz | VoiceOpenGov",
  description: "Öffentlicher Transparenzstand von VoiceOpenGov.",
};

export default function TransparencyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Transparenzregister</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Wir verlangen nichts, was wir nicht selbst tun.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Transparenz ist kein Siegel, das man sich selbst verleiht. Deshalb zeigen wir hier auch Lücken, unfertige Register und offene Prüfungen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan-300">
                {section.status}
              </span>
              <h2 className="mt-4 text-xl font-extrabold">{section.title}</h2>
              <p className="mt-3 leading-7 text-slate-300">{section.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-amber-400/20 bg-amber-400/5 p-7">
          <h2 className="text-2xl font-black">Was wir heute noch nicht behaupten</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Wir behaupten weder repräsentative Zustimmung noch vollständige Unabhängigkeit oder objektive Wahrheit. Wir machen stattdessen Herkunft, Verfahren, Abhängigkeiten, Unsicherheit und Änderungen prüfbar.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/fragen" className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-300">Zu den 50 Fragen</Link>
          <Link href="/mitmachen/rollen" className="rounded-full border border-slate-700 px-5 py-3 font-bold hover:border-cyan-300">Wie du beitragen kannst</Link>
        </div>
      </section>
    </div>
  );
}
