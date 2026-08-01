"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { getCountryOptions } from "@/lib/countries";
import { EDEBATTE_SIGNUP_URL, VOG_SUPPORT_PATH } from "@/config/links";

type Notice = { ok: boolean; msg: string } | null;

type Copy = {
  nav: { movement: string; transparency: string; edebatte: string; join: string };
  eyebrow: string;
  title: string;
  intro: string;
  ctaJoin: string;
  ctaUnderstand: string;
  realityTitle: string;
  realityLead: string;
  realityItems: string[];
  bridge: string;
  movementTitle: string;
  movementBody: string;
  movementCards: Array<{ title: string; body: string }>;
  edebatteTitle: string;
  edebatteBody: string;
  voxyTitle: string;
  voxyBody: string;
  voxyQuote: string;
  transparencyTitle: string;
  transparencyBody: string;
  transparencyItems: string[];
  questionsTitle: string;
  questionsBody: string;
  questions: string[];
  joinTitle: string;
  joinBody: string;
  person: string;
  organisation: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  organisationName: string;
  email: string;
  city: string;
  country: string;
  countryPlaceholder: string;
  privacy: string;
  newsletter: string;
  submit: string;
  submitting: string;
  supportTitle: string;
  supportBody: string;
  supportCta: string;
  footer: string;
};

const COPY: Record<"de" | "en", Copy> = {
  de: {
    nav: { movement: "Bewegung", transparency: "Transparenz", edebatte: "eDebatte", join: "Mitglied werden" },
    eyebrow: "Eine internationale Mitgliederbewegung",
    title: "Willkommen Nachbar.",
    intro:
      "Wir kennen uns wahrscheinlich nicht. Trotzdem treffen wir jeden Tag Entscheidungen, die unser gemeinsames Leben beeinflussen. Vielleicht wird es Zeit, dass wir anfangen, sie gemeinsam besser zu verstehen.",
    ctaJoin: "Mitglied werden",
    ctaUnderstand: "Erst verstehen",
    realityTitle: "Es läuft einiges schief. Das ist keine gewagte These.",
    realityLead:
      "Vertrauen sinkt, Diskussionen werden lauter, Informationen werden mehr und Orientierung wird weniger. Vielleicht fehlt uns keine weitere Meinung. Vielleicht fehlt uns ein besseres Verfahren.",
    realityItems: [
      "Entscheidungen sind oft kaum nachvollziehbar.",
      "Interessen und Verantwortung bleiben unsichtbar.",
      "Menschen dürfen wählen, aber zu selten wirklich mitgestalten.",
      "Fehler werden verteidigt, statt gemeinsam daraus zu lernen.",
    ],
    bridge: "VoiceOpenGov will nicht noch lauter werden. Wir wollen besser verstehen, fairer abwägen und Verantwortung sichtbar machen.",
    movementTitle: "Nicht noch eine fertige Wahrheit. Eine Bewegung, die offen arbeitet.",
    movementBody:
      "VoiceOpenGov bringt Menschen zusammen, die Politik und Gesellschaft nicht nur kritisieren, sondern nachvollziehbarer, souveräner und lernfähiger gestalten wollen.",
    movementCards: [
      { title: "Verstehen", body: "Quellen, Zusammenhänge und Zielkonflikte werden sichtbar, bevor bewertet wird." },
      { title: "Mitgestalten", body: "Mitglieder entwickeln Charta, Themen und regionale Arbeitsräume gemeinsam weiter." },
      { title: "Verantworten", body: "Entscheidungen, Finanzierung, Interessen und Kursänderungen bleiben prüfbar." },
    ],
    edebatteTitle: "eDebatte ist das Instrument. Dort arbeitet die Bewegung.",
    edebatteBody:
      "Aus Quellen werden keine schnellen Parolen, sondern nachvollziehbare Claims, Alternativen, Beteiligung, Mehrheitsbilder, Minderheitenvoten und Wirkung. Der Reasoning Graph zeigt, wie aus Information eine Schlussfolgerung entsteht.",
    voxyTitle: "Voxy begleitet. Voxy entscheidet nicht.",
    voxyBody:
      "Voxy erklärt Charta, Mitgliedschaft und offene Fragen. In eDebatte strukturiert sie Beiträge, verbindet Quellen, erkennt Widersprüche und macht Unsicherheit sichtbar.",
    voxyQuote: "Du musst uns nicht glauben. Du sollst prüfen können, wie wir zu unseren Aussagen kommen.",
    transparencyTitle: "Wir verlangen nichts, was wir nicht selbst tun.",
    transparencyBody:
      "Transparenz ist kein Unterpunkt. Sie ist das Betriebssystem von VoiceOpenGov, eDebatte und Vote4Gov.",
    transparencyItems: [
      "Finanzierung und Abhängigkeiten",
      "Entscheidungen und Verantwortlichkeiten",
      "Mitgliederentwicklung und Governance",
      "Quellen, Änderungen und offene Fehler",
      "KI-Einsatz und Interessenkonflikte",
      "Wirkung, Zweifel und Kurskorrekturen",
    ],
    questionsTitle: "50 große Fragen. Keine 50 fertigen Antworten.",
    questionsBody:
      "Unsere ersten öffentlichen Räume beginnen nicht mit Parteischubladen, sondern mit den wichtigsten Zielkonflikten unserer Zeit.",
    questions: [
      "Wann ist eine politische Entscheidung wirklich legitim?",
      "Wie schützen wir Freiheit und Sicherheit zugleich?",
      "Wie nutzen wir KI so, dass sie Menschen stärkt?",
      "Wie sichern wir Wohlstand und unsere Lebensgrundlagen?",
      "Wie verbinden wir nationale Souveränität und internationale Verantwortung?",
      "Wie lernen Gesellschaften sichtbar aus Fehlern?",
    ],
    joinTitle: "Werde Nachbar.",
    joinBody:
      "Die Mitgliedschaft ist kostenfrei. Ein freiwilliger Beitrag hilft uns schneller zu wachsen, kauft aber niemals mehr Stimme oder Einfluss.",
    person: "Person",
    organisation: "Organisation",
    firstName: "Vorname",
    lastName: "Nachname",
    birthDate: "Geburtsdatum",
    organisationName: "Organisation",
    email: "E-Mail",
    city: "Ort",
    country: "Land",
    countryPlaceholder: "Bitte wählen",
    privacy: "Ich akzeptiere die Datenschutzhinweise und das Double-Opt-In-Verfahren.",
    newsletter: "Ich möchte Updates zu VoiceOpenGov erhalten.",
    submit: "Kostenfrei Mitglied werden",
    submitting: "Wird eingetragen …",
    supportTitle: "Bewegung ermöglichen, ohne Einfluss zu verkaufen.",
    supportBody:
      "Mitgliedschaft und Finanzierung bleiben getrennt. Wer mehr gibt, erhält nicht mehr politische Gewichtung.",
    supportCta: "Freiwillig unterstützen",
    footer: "Danke, dass du dir Zeit nimmst, Verantwortung gemeinsam neu zu denken.",
  },
  en: {
    nav: { movement: "Movement", transparency: "Transparency", edebatte: "eDebatte", join: "Become a member" },
    eyebrow: "An international membership movement",
    title: "Welcome, neighbour.",
    intro:
      "We probably do not know each other. Yet every day we make decisions that affect our shared lives. Perhaps it is time we started understanding them better together.",
    ctaJoin: "Become a member",
    ctaUnderstand: "Understand first",
    realityTitle: "A lot is going wrong. That is hardly a radical claim.",
    realityLead:
      "Trust is declining, debates are getting louder, information is increasing and orientation is disappearing. Perhaps we do not need another opinion. Perhaps we need a better process.",
    realityItems: [
      "Decisions are often hard to trace.",
      "Interests and responsibility remain hidden.",
      "People may vote, but rarely shape decisions continuously.",
      "Mistakes are defended instead of becoming shared learning.",
    ],
    bridge: "VoiceOpenGov does not aim to become louder. We aim to understand better, weigh fairly and make responsibility visible.",
    movementTitle: "Not another finished truth. A movement that works in the open.",
    movementBody:
      "VoiceOpenGov connects people who want to do more than criticise politics and society: they want to make both more transparent, sovereign and capable of learning.",
    movementCards: [
      { title: "Understand", body: "Sources, connections and trade-offs become visible before judgement." },
      { title: "Shape", body: "Members develop the charter, topics and regional spaces together." },
      { title: "Take responsibility", body: "Decisions, funding, interests and changes remain auditable." },
    ],
    edebatteTitle: "eDebatte is the instrument. It is where the movement works.",
    edebatteBody:
      "Sources do not become quick slogans, but traceable claims, alternatives, participation, majority pictures, minority views and measured effects. The reasoning graph shows how information becomes a conclusion.",
    voxyTitle: "Voxy assists. Voxy does not decide.",
    voxyBody:
      "Voxy explains the charter, membership and open questions. In eDebatte, she structures contributions, connects sources, detects contradictions and makes uncertainty visible.",
    voxyQuote: "You do not have to believe us. You should be able to inspect how we reached our conclusions.",
    transparencyTitle: "We demand nothing we are unwilling to do ourselves.",
    transparencyBody: "Transparency is not a subsection. It is the operating system of VoiceOpenGov, eDebatte and Vote4Gov.",
    transparencyItems: [
      "Funding and dependencies",
      "Decisions and responsibilities",
      "Membership development and governance",
      "Sources, changes and open mistakes",
      "AI use and conflicts of interest",
      "Impact, doubts and course corrections",
    ],
    questionsTitle: "50 major questions. Not 50 finished answers.",
    questionsBody: "Our first public spaces begin with the defining trade-offs of our time, not party categories.",
    questions: [
      "When is a political decision truly legitimate?",
      "How do we protect freedom and security at the same time?",
      "How do we use AI to strengthen people?",
      "How do we protect prosperity and the foundations of life?",
      "How do we connect national sovereignty and international responsibility?",
      "How do societies visibly learn from mistakes?",
    ],
    joinTitle: "Become a neighbour.",
    joinBody: "Membership is free. A voluntary contribution helps us grow faster, but never buys more voice or influence.",
    person: "Person",
    organisation: "Organisation",
    firstName: "First name",
    lastName: "Last name",
    birthDate: "Date of birth",
    organisationName: "Organisation",
    email: "Email",
    city: "City",
    country: "Country",
    countryPlaceholder: "Please choose",
    privacy: "I accept the privacy notice and double opt-in process.",
    newsletter: "I would like updates about VoiceOpenGov.",
    submit: "Join for free",
    submitting: "Joining …",
    supportTitle: "Enable the movement without selling influence.",
    supportBody: "Membership and funding remain separate. Giving more never creates more political weight.",
    supportCta: "Support voluntarily",
    footer: "Thank you for taking the time to rethink shared responsibility.",
  },
};

const sectionClass = "mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28";
const cardClass = "rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/10 backdrop-blur";
const primaryButtonClass = "rounded-full bg-gradient-to-r from-[#1a8cff] to-[#18cfc8] font-bold text-[#071727] shadow-lg shadow-[#1a8cff]/15 transition hover:brightness-110";
const accentTextClass = "text-[#18cfc8]";
const fieldClass = "rounded-xl border border-white/15 bg-[#020617] px-4 py-3 outline-none focus:border-[#18cfc8]";

export default function HomeClient({ contactEmail }: { supportBank: Record<string, unknown>; contactEmail: string }) {
  const { locale } = useLocale();
  const language = locale === "en" ? "en" : "de";
  const copy = COPY[language];
  const countryOptions = useMemo(() => getCountryOptions(locale), [locale]);
  const [type, setType] = useState<"person" | "organisation">("person");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [notice, setNotice] = useState<Notice>(null);
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(null);
    if (!privacy || !email.trim() || !city.trim()) {
      setNotice({ ok: false, msg: language === "de" ? "Bitte E-Mail, Ort und Datenschutz bestätigen." : "Please provide email, city and privacy consent." });
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch("/api/members/public-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          email: email.trim(),
          firstName: type === "person" ? firstName.trim() || undefined : undefined,
          lastName: type === "person" ? lastName.trim() || undefined : undefined,
          birthDate: type === "person" ? birthDate || undefined : undefined,
          orgName: type === "organisation" ? organisation.trim() || undefined : undefined,
          city: city.trim(),
          country: country || undefined,
          isPublic: true,
          wantsNewsletter: newsletter,
          wantsNewsletterEdDebatte: false,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data?.ok) throw new Error("registration_failed");
      setNotice({ ok: true, msg: language === "de" ? "Fast geschafft. Bitte bestätige jetzt die E-Mail." : "Almost there. Please confirm your email." });
      setFirstName(""); setLastName(""); setBirthDate(""); setOrganisation(""); setEmail(""); setCity(""); setCountry(""); setPrivacy(false); setNewsletter(false);
    } catch {
      setNotice({ ok: false, msg: language === "de" ? "Das hat noch nicht funktioniert. Bitte versuche es erneut." : "That did not work yet. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#020617] font-sans text-[#f8fafc]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#020617]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="bg-gradient-to-r from-[#1a8cff] to-[#18cfc8] bg-clip-text text-sm font-black uppercase tracking-[0.24em] text-transparent">VoiceOpenGov</Link>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#movement" className="hover:text-white">{copy.nav.movement}</a>
            <a href="#transparency" className="hover:text-white">{copy.nav.transparency}</a>
            <a href="#edebatte" className="hover:text-white">{copy.nav.edebatte}</a>
          </nav>
          <a href="#join" className={`${primaryButtonClass} px-4 py-2 text-sm hover:scale-[1.02]`}>{copy.nav.join}</a>
        </div>
      </header>

      <section className="relative isolate min-h-[88vh] border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(26,140,255,0.24),transparent_30%),radial-gradient(circle_at_20%_75%,rgba(24,207,200,0.18),transparent_34%)]" />
        <div className="mx-auto grid min-h-[88vh] max-w-6xl items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.12fr_.88fr]">
          <div>
            <p className={`mb-6 text-xs font-bold uppercase tracking-[0.28em] ${accentTextClass}`}>{copy.eyebrow}</p>
            <h1 className="max-w-4xl text-6xl font-black leading-[0.94] tracking-[-0.055em] md:text-8xl">{copy.title}</h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/72 md:text-2xl">{copy.intro}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#join" className={`${primaryButtonClass} px-6 py-3`}>{copy.ctaJoin}</a>
              <a href="#reality" className="rounded-full border border-white/20 px-6 py-3 font-bold text-white transition hover:border-[#18cfc8]/60">{copy.ctaUnderstand}</a>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md rounded-[3rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl">
            <div className="flex h-full flex-col justify-between rounded-[2.2rem] border border-[#18cfc8]/25 bg-[#0f1c31] p-7">
              <span className={`text-5xl ${accentTextClass}`}>✦</span>
              <blockquote className="text-2xl font-semibold leading-snug">„Vielleicht braucht es nicht noch eine Partei. Vielleicht braucht es endlich ein besseres Verfahren.“</blockquote>
              <p className="text-sm text-white/55">VoiceOpenGov · Entwurf einer Bewegung</p>
            </div>
          </div>
        </div>
      </section>

      <section id="reality" className={sectionClass}>
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className={`text-sm font-bold uppercase tracking-[0.2em] ${accentTextClass}`}>Realitätscheck</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">{copy.realityTitle}</h2>
          </div>
          <div>
            <p className="text-xl leading-relaxed text-white/70">{copy.realityLead}</p>
            <div className="mt-8 grid gap-3">
              {copy.realityItems.map((item, index) => <div key={item} className="flex gap-4 border-t border-white/10 py-5"><span className={accentTextClass}>0{index + 1}</span><p className="text-lg">{item}</p></div>)}
            </div>
            <p className="mt-10 border-l-2 border-[#18cfc8] pl-6 text-2xl font-semibold leading-relaxed">{copy.bridge}</p>
          </div>
        </div>
      </section>

      <section id="movement" className="border-y border-white/10 bg-[#0b1220]">
        <div className={sectionClass}>
          <div className="max-w-4xl"><h2 className="text-4xl font-black tracking-tight md:text-6xl">{copy.movementTitle}</h2><p className="mt-6 text-xl leading-relaxed text-white/65">{copy.movementBody}</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">{copy.movementCards.map((card) => <article key={card.title} className={cardClass}><h3 className="text-2xl font-bold">{card.title}</h3><p className="mt-4 leading-relaxed text-white/62">{card.body}</p></article>)}</div>
        </div>
      </section>

      <section id="edebatte" className={sectionClass}>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className={cardClass}><p className={`text-xs font-bold uppercase tracking-[0.25em] ${accentTextClass}`}>eDebatte</p><h2 className="mt-5 text-4xl font-black tracking-tight">{copy.edebatteTitle}</h2><p className="mt-6 text-lg leading-relaxed text-white/65">{copy.edebatteBody}</p><a href={EDEBATTE_SIGNUP_URL} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full border border-[#18cfc8]/50 px-5 py-2.5 font-bold text-[#18cfc8] transition hover:border-[#18cfc8]">eDebatte öffnen ↗</a></div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a8cff] to-[#18cfc8] p-8 text-[#071727]"><p className="text-xs font-black uppercase tracking-[0.25em]">Voxy</p><h2 className="mt-5 text-4xl font-black tracking-tight">{copy.voxyTitle}</h2><p className="mt-6 text-lg leading-relaxed text-[#071727]/70">{copy.voxyBody}</p><blockquote className="mt-9 border-l-2 border-[#071727] pl-5 text-2xl font-bold leading-snug">„{copy.voxyQuote}“</blockquote></div>
        </div>
      </section>

      <section id="transparency" className="border-y border-white/10 bg-[#f8fafc] text-[#071727]">
        <div className={sectionClass}>
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]"><div><p className="text-sm font-black uppercase tracking-[0.2em]">Transparenzversprechen</p><h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">{copy.transparencyTitle}</h2><p className="mt-6 text-xl leading-relaxed text-[#071727]/65">{copy.transparencyBody}</p></div><div className="grid gap-3 sm:grid-cols-2">{copy.transparencyItems.map((item) => <div key={item} className="rounded-2xl border border-[#071727]/15 p-5 font-bold">↗ {item}</div>)}</div></div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="max-w-4xl"><p className={`text-sm font-bold uppercase tracking-[0.2em] ${accentTextClass}`}>Öffentliche Räume</p><h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">{copy.questionsTitle}</h2><p className="mt-6 text-xl text-white/65">{copy.questionsBody}</p></div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">{copy.questions.map((question, index) => <div key={question} className="group flex items-start gap-5 rounded-2xl border border-white/10 p-6 transition hover:border-[#18cfc8]/50"><span className={`font-mono text-sm ${accentTextClass}`}>{String(index + 1).padStart(2, "0")}</span><p className="text-xl font-semibold leading-snug">{question}</p></div>)}</div>
        <Link href="/grundlagen" className={`mt-8 inline-flex font-bold ${accentTextClass}`}>Alle Grundlagen und Fragen ansehen →</Link>
      </section>

      <section id="join" className="border-t border-white/10 bg-[#0b1220]">
        <div className={sectionClass}>
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className={`text-sm font-bold uppercase tracking-[0.2em] ${accentTextClass}`}>Mitgliedschaft</p><h2 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">{copy.joinTitle}</h2><p className="mt-6 text-xl leading-relaxed text-white/65">{copy.joinBody}</p><p className="mt-8 text-sm text-white/45">Kontakt: {contactEmail}</p></div>
            <form onSubmit={submit} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 md:p-8">
              <div className="mb-6 flex gap-2"><button type="button" onClick={() => setType("person")} className={`rounded-full px-4 py-2 text-sm font-bold ${type === "person" ? "bg-gradient-to-r from-[#1a8cff] to-[#18cfc8] text-[#071727]" : "border border-white/15"}`}>{copy.person}</button><button type="button" onClick={() => setType("organisation")} className={`rounded-full px-4 py-2 text-sm font-bold ${type === "organisation" ? "bg-gradient-to-r from-[#1a8cff] to-[#18cfc8] text-[#071727]" : "border border-white/15"}`}>{copy.organisation}</button></div>
              <div className="grid gap-4 sm:grid-cols-2">
                {type === "person" ? <><input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder={copy.firstName} className={fieldClass} /><input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder={copy.lastName} className={fieldClass} /><input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} aria-label={copy.birthDate} className={fieldClass} /></> : <input value={organisation} onChange={(e) => setOrganisation(e.target.value)} placeholder={copy.organisationName} className={`${fieldClass} sm:col-span-2`} />}
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={copy.email} className={fieldClass} />
                <input required value={city} onChange={(e) => setCity(e.target.value)} placeholder={copy.city} className={fieldClass} />
                <select value={country} onChange={(e) => setCountry(e.target.value)} className={`${fieldClass} sm:col-span-2`}><option value="">{copy.countryPlaceholder}</option>{countryOptions.map((option) => <option key={option.code} value={option.code}>{option.label}</option>)}</select>
              </div>
              <label className="mt-6 flex gap-3 text-sm text-white/65"><input type="checkbox" checked={privacy} onChange={(e) => setPrivacy(e.target.checked)} className="mt-1" /><span>{copy.privacy}</span></label>
              <label className="mt-3 flex gap-3 text-sm text-white/65"><input type="checkbox" checked={newsletter} onChange={(e) => setNewsletter(e.target.checked)} className="mt-1" /><span>{copy.newsletter}</span></label>
              {notice && <p className={`mt-5 rounded-xl px-4 py-3 text-sm ${notice.ok ? "bg-emerald-400/15 text-emerald-200" : "bg-red-400/15 text-red-200"}`}>{notice.msg}</p>}
              <button disabled={submitting} className={`${primaryButtonClass} mt-6 w-full px-6 py-3.5 font-black disabled:opacity-60`}>{submitting ? copy.submitting : copy.submit}</button>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10"><div className={`${sectionClass} py-14 md:py-16`}><div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><h2 className="text-3xl font-black">{copy.supportTitle}</h2><p className="mt-3 max-w-2xl text-white/60">{copy.supportBody}</p></div><Link href={VOG_SUPPORT_PATH} className="rounded-full border border-white/20 px-6 py-3 font-bold transition hover:border-[#18cfc8]/60">{copy.supportCta}</Link></div></div></section>

      <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-white/45">{copy.footer}</footer>
    </main>
  );
}
