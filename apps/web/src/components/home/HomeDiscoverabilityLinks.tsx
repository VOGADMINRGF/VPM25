import Link from "next/link";
import type { SupportedLocale } from "@/config/locales";

type Copy = {
  eyebrow: string;
  title: string;
  body: string;
  regions: string;
  regionsBody: string;
  theses: string;
  thesesBody: string;
};

const COPY: Partial<Record<SupportedLocale, Copy>> = {
  de: {
    eyebrow: "Weiterdenken",
    title: "Global denken. Regional anfangen. Persönliche Positionen klar kennzeichnen.",
    body: "VoiceOpenGov trennt regionale Organisation, öffentliche Grundfragen und persönliche Ausgangsthesen bewusst voneinander.",
    regions: "Regionale Einstiege",
    regionsBody: "Länder und Regionen mit eigener, überprüfbarer Einordnung statt automatisch erzeugter Ortsseiten.",
    theses: "Thesen von Ricky Gerd Fleischer",
    thesesBody: "Persönliche Ausgangspunkte des Initiators – ausdrücklich keine Beschlüsse oder verbindlichen Positionen der Bewegung.",
  },
  en: {
    eyebrow: "Explore further",
    title: "Think globally. Start locally. Label personal positions clearly.",
    body: "VoiceOpenGov deliberately separates regional organization, public foundational questions and personal starting theses.",
    regions: "Regional entry points",
    regionsBody: "Countries and regions with their own verifiable context instead of automatically generated location pages.",
    theses: "Theses by Ricky Gerd Fleischer",
    thesesBody: "Personal starting points of the initiator — explicitly not resolutions or binding positions of the movement.",
  },
  fr: {
    eyebrow: "Approfondir",
    title: "Penser globalement. Commencer localement. Identifier clairement les positions personnelles.",
    body: "VoiceOpenGov sépare volontairement l’organisation régionale, les questions publiques fondamentales et les thèses personnelles.",
    regions: "Points d’entrée régionaux",
    regionsBody: "Pays et régions avec leur propre contexte vérifiable plutôt que des pages locales générées automatiquement.",
    theses: "Thèses de Ricky Gerd Fleischer",
    thesesBody: "Points de départ personnels de l’initiateur — ni décisions ni positions contraignantes du mouvement.",
  },
  es: {
    eyebrow: "Seguir explorando",
    title: "Pensar globalmente. Empezar localmente. Marcar claramente las posiciones personales.",
    body: "VoiceOpenGov separa de forma deliberada la organización regional, las preguntas públicas y las tesis personales.",
    regions: "Puntos de entrada regionales",
    regionsBody: "Países y regiones con contexto propio y verificable, no páginas locales generadas automáticamente.",
    theses: "Tesis de Ricky Gerd Fleischer",
    thesesBody: "Puntos de partida personales del iniciador; no son acuerdos ni posiciones vinculantes del movimiento.",
  },
  tr: {
    eyebrow: "Daha fazlasını keşfet",
    title: "Küresel düşün. Yerelde başla. Kişisel görüşleri açıkça işaretle.",
    body: "VoiceOpenGov bölgesel örgütlenmeyi, açık temel soruları ve kişisel başlangıç tezlerini bilinçli biçimde birbirinden ayırır.",
    regions: "Bölgesel girişler",
    regionsBody: "Otomatik yerel sayfalar yerine kendi doğrulanabilir bağlamına sahip ülke ve bölgeler.",
    theses: "Ricky Gerd Fleischer’in tezleri",
    thesesBody: "Girişimcinin kişisel başlangıç noktaları; hareketin kararı veya bağlayıcı görüşü değildir.",
  },
  ar: {
    eyebrow: "استكشف أكثر",
    title: "فكر عالمياً. ابدأ محلياً. وميّز المواقف الشخصية بوضوح.",
    body: "تفصل VoiceOpenGov عمداً بين التنظيم الإقليمي والأسئلة العامة الأساسية والأطروحات الشخصية.",
    regions: "نقاط دخول إقليمية",
    regionsBody: "بلدان ومناطق بسياق خاص قابل للتحقق بدلاً من صفحات محلية مولدة آلياً.",
    theses: "أطروحات Ricky Gerd Fleischer",
    thesesBody: "نقاط انطلاق شخصية للمبادر، وليست قرارات أو مواقف ملزمة للحركة.",
  },
};

function href(path: string, locale: SupportedLocale) {
  const params = new URLSearchParams({ lang: locale });
  return `${path}?${params.toString()}`;
}

export default function HomeDiscoverabilityLinks({ locale }: { locale: SupportedLocale }) {
  const copy = COPY[locale] ?? COPY.en!;

  return (
    <section className="border-t border-slate-800 bg-[#020617]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-18">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#18cfc8]">{copy.eyebrow}</p>
        <h2 className="mt-3 max-w-4xl text-3xl font-black tracking-tight sm:text-4xl">{copy.title}</h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-300">{copy.body}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Link href={href("/regionen", locale)} className="rounded-3xl border border-slate-800 bg-[#0b1220] p-6 transition hover:border-[#18cfc8]/60">
            <strong className="text-xl">{copy.regions}</strong>
            <span className="mt-3 block leading-7 text-slate-300">{copy.regionsBody}</span>
          </Link>
          <Link href={href("/thesen/ricky-gerd-fleischer", locale)} className="rounded-3xl border border-slate-800 bg-[#0b1220] p-6 transition hover:border-[#1a8cff]/70">
            <strong className="text-xl">{copy.theses}</strong>
            <span className="mt-3 block leading-7 text-slate-300">{copy.thesesBody}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
