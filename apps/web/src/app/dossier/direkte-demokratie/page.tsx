import Link from "next/link";

export default function DirekteDemokratieDossierPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pb-16 text-slate-100">
      <section className="mx-auto max-w-4xl px-4 pb-10 pt-12">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Beispiel-Dossier</p>
        <h1 className="mt-2 text-4xl font-extrabold leading-tight headline-gradient md:text-5xl">
          Direkte Demokratie
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Ein Dossier bündelt Behauptungen, Quellen, offene Fragen und Varianten. So wird sichtbar,
          worüber Mehrheiten entscheiden und welche Grundlagen geprüft wurden.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            "Wie sichern wir die Qualität von Abstimmungen?",
            "Welche Rollen haben Regionen und Gemeinden?",
            "Welche Standards braucht die Umsetzung?",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>

        <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Diskussion
              </p>
              <h2 className="text-xl font-semibold text-slate-100">
                Beiträge aus eDebatte
              </h2>
              <p className="text-sm text-slate-300">
                Hier entsteht die Diskussion zu diesem Dossier. Die Live‑Einbindung folgt; bis
                dahin kannst du direkt im Tool mitdiskutieren.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://edebatte.org"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Diskussion öffnen
              </a>
              <Link
                href="/#mitmachen"
                className="btn border border-slate-700 text-slate-100 hover:bg-slate-800"
              >
                Mitglied werden
              </Link>
            </div>
          </div>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/#mitmachen" className="btn btn-primary">
            Mitglied werden
          </Link>
          <Link href="/initiatives" className="btn border border-slate-700 text-slate-100 hover:bg-slate-800">
            Thema einreichen
          </Link>
        </div>
      </section>
    </main>
  );
}
