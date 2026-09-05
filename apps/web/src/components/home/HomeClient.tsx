"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { getCountryOptions } from "@/lib/countries";
import { EDEBATTE_SIGNUP_URL, VOG_JOIN_PATH, VOG_QUESTIONS_PATH } from "@/config/links";
import type { HomeCopy } from "./homeCopy";

type Notice = { ok: boolean; msg: string } | null;

const sectionClass = "mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28";
const cardClass = "rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/10 backdrop-blur";

export default function HomeClient({
  contactEmail,
  copy,
}: {
  supportBank: Record<string, unknown>;
  contactEmail: string;
  copy: HomeCopy;
}) {
  const { locale } = useLocale();
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
      setNotice({ ok: false, msg: copy.formMissing });
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch("/api/members/public-register", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-vog-locale": locale },
        body: JSON.stringify({
          type,
          email: email.trim(),
          firstName: type === "person" ? firstName.trim() || undefined : undefined,
          lastName: type === "person" ? lastName.trim() || undefined : undefined,
          birthDate: type === "person" ? birthDate || undefined : undefined,
          orgName: type === "organisation" ? organisation.trim() || undefined : undefined,
          city: city.trim(),
          country: country || undefined,
          preferredLocale: locale,
          isPublic: true,
          wantsNewsletter: newsletter,
          wantsNewsletterEdDebatte: false,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data?.ok) throw new Error("registration_failed");
      setNotice({ ok: true, msg: copy.formSuccess });
      setFirstName(""); setLastName(""); setBirthDate(""); setOrganisation("");
      setEmail(""); setCity(""); setCountry(""); setPrivacy(false); setNewsletter(false);
    } catch {
      setNotice({ ok: false, msg: copy.formFailed });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#07110f] text-[#f4f1e8]">
      <section className="relative isolate min-h-[88vh] border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(214,255,101,0.20),transparent_30%),radial-gradient(circle_at_20%_75%,rgba(72,167,143,0.22),transparent_34%)]" />
        <div className="mx-auto grid min-h-[88vh] max-w-6xl items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.12fr_.88fr]">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-[#d6ff65]">{copy.eyebrow}</p>
            <h1 className="max-w-4xl text-6xl font-black leading-[0.94] tracking-[-0.055em] md:text-8xl">{copy.title}</h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/72 md:text-2xl">{copy.intro}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href={VOG_JOIN_PATH} className="rounded-full bg-[#d6ff65] px-6 py-3 font-bold text-[#07110f]">{copy.ctaJoin}</Link>
              <a href="#reality" className="rounded-full border border-white/20 px-6 py-3 font-bold text-white">{copy.ctaUnderstand}</a>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md rounded-[3rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl">
            <div className="flex h-full flex-col justify-between rounded-[2.2rem] border border-[#d6ff65]/25 bg-[#0d1d19] p-7">
              <span className="text-5xl">✦</span>
              <blockquote className="text-2xl font-semibold leading-snug">“{copy.heroQuote}”</blockquote>
              <p className="text-sm text-white/55">{copy.heroQuoteSource}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="reality" className={sectionClass}>
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d6ff65]">{copy.realityEyebrow}</p><h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">{copy.realityTitle}</h2></div>
          <div><p className="text-xl leading-relaxed text-white/70">{copy.realityLead}</p><div className="mt-8 grid gap-3">{copy.realityItems.map((item, index) => <div key={item} className="flex gap-4 border-t border-white/10 py-5"><span className="text-[#d6ff65]">0{index + 1}</span><p className="text-lg">{item}</p></div>)}</div><p className="mt-10 border-l-2 border-[#d6ff65] pl-6 text-2xl font-semibold leading-relaxed">{copy.bridge}</p></div>
        </div>
      </section>

      <section id="movement" className="border-y border-white/10 bg-[#0b1714]"><div className={sectionClass}><div className="max-w-4xl"><h2 className="text-4xl font-black tracking-tight md:text-6xl">{copy.movementTitle}</h2><p className="mt-6 text-xl leading-relaxed text-white/65">{copy.movementBody}</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{copy.movementCards.map((card) => <article key={card.title} className={cardClass}><h3 className="text-2xl font-bold">{card.title}</h3><p className="mt-4 leading-relaxed text-white/62">{card.body}</p></article>)}</div></div></section>

      <section id="edebatte" className={sectionClass}><div className="grid gap-8 lg:grid-cols-2"><div className={cardClass}><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d6ff65]">eDebatte</p><h2 className="mt-5 text-4xl font-black tracking-tight">{copy.edebatteTitle}</h2><p className="mt-6 text-lg leading-relaxed text-white/65">{copy.edebatteBody}</p><a href={EDEBATTE_SIGNUP_URL} className="mt-8 inline-flex rounded-full border border-[#d6ff65]/50 px-5 py-2.5 font-bold text-[#d6ff65]">{copy.edebatteCta} ↗</a></div><div className="rounded-3xl border border-white/10 bg-[#d6ff65] p-8 text-[#07110f]"><p className="text-xs font-black uppercase tracking-[0.25em]">Voxy</p><h2 className="mt-5 text-4xl font-black tracking-tight">{copy.voxyTitle}</h2><p className="mt-6 text-lg leading-relaxed text-[#07110f]/70">{copy.voxyBody}</p><blockquote className="mt-9 border-l-2 border-[#07110f] pl-5 text-2xl font-bold leading-snug">„{copy.voxyQuote}“</blockquote></div></div></section>

      <section id="transparency" className="border-y border-white/10 bg-[#f0eee5] text-[#07110f]"><div className={sectionClass}><div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]"><div><p className="text-sm font-black uppercase tracking-[0.2em]">{copy.transparencyEyebrow}</p><h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">{copy.transparencyTitle}</h2><p className="mt-6 text-xl leading-relaxed text-[#07110f]/65">{copy.transparencyBody}</p></div><div className="grid gap-3 sm:grid-cols-2">{copy.transparencyItems.map((item) => <div key={item} className="rounded-2xl border border-[#07110f]/15 p-5 font-bold">↗ {item}</div>)}</div></div></div></section>

      <section className={sectionClass}><div className="max-w-4xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d6ff65]">{copy.questionsEyebrow}</p><h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">{copy.questionsTitle}</h2><p className="mt-6 text-xl text-white/65">{copy.questionsBody}</p></div><div className="mt-12 grid gap-4 md:grid-cols-2">{copy.questions.map((question, index) => <div key={question} className="group flex items-start gap-5 rounded-2xl border border-white/10 p-6 transition hover:border-[#d6ff65]/50"><span className="font-mono text-sm text-[#d6ff65]">{String(index + 1).padStart(2, "0")}</span><p className="text-xl font-semibold leading-snug">{question}</p></div>)}</div><Link href={VOG_QUESTIONS_PATH} className="mt-8 inline-flex font-bold text-[#d6ff65]">{copy.questionsCta}</Link></section>

      <section id="mitmachen" className="scroll-mt-24 border-t border-white/10 bg-[#0b1714]"><div className={sectionClass}><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d6ff65]">{copy.membershipEyebrow}</p><h2 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">{copy.joinTitle}</h2><p className="mt-6 text-xl leading-relaxed text-white/65">{copy.joinBody}</p><p className="mt-8 text-sm text-white/45">{copy.contactLabel}: {contactEmail}</p></div>
        <form onSubmit={submit} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 md:p-8">
          <div className="mb-6 flex gap-2"><button type="button" onClick={() => setType("person")} className={`rounded-full px-4 py-2 text-sm font-bold ${type === "person" ? "bg-[#d6ff65] text-[#07110f]" : "border border-white/15"}`}>{copy.person}</button><button type="button" onClick={() => setType("organisation")} className={`rounded-full px-4 py-2 text-sm font-bold ${type === "organisation" ? "bg-[#d6ff65] text-[#07110f]" : "border border-white/15"}`}>{copy.organisation}</button></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {type === "person" ? <><input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder={copy.firstName} className="rounded-xl border border-white/15 bg-[#07110f] px-4 py-3 outline-none focus:border-[#d6ff65]"/><input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder={copy.lastName} className="rounded-xl border border-white/15 bg-[#07110f] px-4 py-3 outline-none focus:border-[#d6ff65]"/><input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} aria-label={copy.birthDate} className="rounded-xl border border-white/15 bg-[#07110f] px-4 py-3 outline-none focus:border-[#d6ff65]"/></> : <input value={organisation} onChange={(e) => setOrganisation(e.target.value)} placeholder={copy.organisationName} className="rounded-xl border border-white/15 bg-[#07110f] px-4 py-3 outline-none focus:border-[#d6ff65] sm:col-span-2"/>}
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={copy.email} className="rounded-xl border border-white/15 bg-[#07110f] px-4 py-3 outline-none focus:border-[#d6ff65]"/>
            <input required value={city} onChange={(e) => setCity(e.target.value)} placeholder={copy.city} className="rounded-xl border border-white/15 bg-[#07110f] px-4 py-3 outline-none focus:border-[#d6ff65]"/>
            <select aria-label={copy.country} value={country} onChange={(e) => setCountry(e.target.value)} className="rounded-xl border border-white/15 bg-[#07110f] px-4 py-3 outline-none focus:border-[#d6ff65] sm:col-span-2"><option value="">{copy.countryPlaceholder}</option>{countryOptions.map((option) => <option key={option.code} value={option.code}>{option.label}</option>)}</select>
          </div>
          <label className="mt-6 flex gap-3 text-sm text-white/65"><input type="checkbox" checked={privacy} onChange={(e) => setPrivacy(e.target.checked)} className="mt-1"/><span>{copy.privacy}</span></label>
          <label className="mt-3 flex gap-3 text-sm text-white/65"><input type="checkbox" checked={newsletter} onChange={(e) => setNewsletter(e.target.checked)} className="mt-1"/><span>{copy.newsletter}</span></label>
          {notice && <p className={`mt-5 rounded-xl px-4 py-3 text-sm ${notice.ok ? "bg-emerald-400/15 text-emerald-200" : "bg-red-400/15 text-red-200"}`}>{notice.msg}</p>}
          <button disabled={submitting} className="mt-6 w-full rounded-full bg-[#d6ff65] px-6 py-3.5 font-black text-[#07110f] disabled:opacity-60">{submitting ? copy.submitting : copy.submit}</button>
        </form></div></div></section>

      <section id="voiceopengov-support" className="scroll-mt-24 border-t border-white/10"><div className={`${sectionClass} py-14 md:py-16`}><div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><h2 className="text-3xl font-black">{copy.supportTitle}</h2><p className="mt-3 max-w-2xl text-white/60">{copy.supportBody}</p></div><Link href="/unterstuetzen" className="rounded-full border border-white/20 px-6 py-3 font-bold transition hover:border-[#d6ff65]/60 hover:text-[#d6ff65]">{copy.supportCta}</Link></div></div></section>
    </main>
  );
}
