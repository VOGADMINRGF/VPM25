export default function NotfoundPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 space-y-8 text-slate-100">
      <h1 className="text-3xl font-bold headline-gradient text-center">
        404 - Seite nicht gefunden
      </h1>
      <p className="text-slate-300 text-lg text-center">
        Die Seite, die du gesucht hast, gibt es nicht oder sie wurde verschoben.
      </p>
      <p className="text-center">
        <a className="text-sky-300 underline" href="/">
          Zur Startseite
        </a>
      </p>
    </main>
  );
}
