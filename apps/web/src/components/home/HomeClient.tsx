"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { getCountryOptions } from "@/lib/countries";
import { getBand } from "@/app/grundlagen/bands";
import { getCovers } from "@/app/grundlagen/covers";
import { EDEBATTE_PREORDER_URL, EDEBATTE_SIGNUP_URL, VOG_SUPPORT_PATH } from "@/config/links";
import CoverLightbox from "@/components/media/CoverLightbox";
import { MembershipCalculator_VOG } from "@/components/support/MembershipCalculator_VOG";
import { getHomeStrings } from "./strings";

type Notice = { ok: boolean; msg: string } | null;

const MIN_AGE = 16;

function parseDateOnly(value: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim());
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (!Number.isFinite(year) || !Number.isFinite(month) || !Number.isFinite(day)) return null;
  const date = new Date(Date.UTC(year, month - 1, day));
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }
  return date;
}

function isAtLeastAge(dateStr: string, minAge: number) {
  const birth = parseDateOnly(dateStr);
  if (!birth) return false;
  const now = new Date();
  const cutoff = new Date(
    Date.UTC(now.getUTCFullYear() - minAge, now.getUTCMonth(), now.getUTCDate()),
  );
  return birth <= cutoff;
}

function maxBirthDateIso(minAge: number) {
  const now = new Date();
  const cutoff = new Date(
    Date.UTC(now.getUTCFullYear() - minAge, now.getUTCMonth(), now.getUTCDate()),
  );
  return cutoff.toISOString().slice(0, 10);
}

export default function HomeClient({
  supportBank: _supportBank,
  contactEmail,
}: {
  supportBank: {
    recipient?: string | null;
    iban?: string | null;
    bic?: string | null;
    bank?: string | null;
    referencePrefix?: string | null;
  };
  contactEmail: string;
}) {
  const { locale } = useLocale();
  const strings = getHomeStrings(locale);
  const highlightLabels = strings.hero.highlightLabels;
  const countryOptions = useMemo(() => getCountryOptions(locale), [locale]);
  const [memberType, setMemberType] = useState<"person" | "organisation">("person");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [isStepTwoOpen, setIsStepTwoOpen] = useState(false);
  const [wantsNewsletter, setWantsNewsletter] = useState(false);
  const [wantsNewsletterEdDebatte, setWantsNewsletterEdDebatte] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [notice, setNotice] = useState<Notice>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactFirstName, setContactFirstName] = useState("");
  const [contactLastName, setContactLastName] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactHumanCheck, setContactHumanCheck] = useState(false);
  const [contactError, setContactError] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const stepTwoFirstRef = useRef<HTMLInputElement>(null);
  const inputClass =
    "w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-800/40";
  const labelClass = "text-xs font-medium text-slate-300";
  const isPublic = true;
  const cityRequired = true;
  const canOpenCalculator = email.trim().length > 3 && email.includes("@");

  const resetForm = () => {
    setMemberType("person");
    setFirstName("");
    setLastName("");
    setBirthDate("");
    setOrgName("");
    setEmail("");
    setCity("");
    setCountryCode("");
    setIsStepTwoOpen(false);
    setWantsNewsletter(false);
    setWantsNewsletterEdDebatte(false);
    setPrivacyAccepted(false);
  };

  useEffect(() => {
    setBirthDate("");
  }, [memberType]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const focusEmail = () => {
      if (window.location.hash === "#join") {
        window.setTimeout(() => emailRef.current?.focus(), 80);
      }
    };
    focusEmail();
    window.addEventListener("hashchange", focusEmail);
    return () => window.removeEventListener("hashchange", focusEmail);
  }, []);

  useEffect(() => {
    if (!isStepTwoOpen) return;
    window.setTimeout(() => stepTwoFirstRef.current?.focus(), 80);
  }, [isStepTwoOpen]);

  const handleRequestEmail = () => {
    if (typeof window !== "undefined") {
      window.location.hash = "#join";
    }
    window.setTimeout(() => emailRef.current?.focus(), 80);
  };

  const handleContactSubmit = () => {
    const first = contactFirstName.trim();
    const last = contactLastName.trim();
    const subject = contactSubject.trim();

    if (!first || !last || !subject) {
      setContactError(strings.supportBank.contact.errorRequired);
      return;
    }
    if (!contactHumanCheck) {
      setContactError(strings.supportBank.contact.errorHuman);
      return;
    }

    const bodyLines = [
      strings.supportBank.contact.mailIntro,
      `${strings.supportBank.contact.mailName} ${first} ${last}`.trim(),
      `${strings.supportBank.contact.mailSubject} ${subject}`.trim(),
      email.trim()
        ? `${strings.supportBank.contact.mailEmail} ${email.trim()}`
        : undefined,
      strings.supportBank.contact.mailOutro,
    ].filter(Boolean);

    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    setContactError("");
    window.location.href = mailto;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice(null);

    if (!isStepTwoOpen) {
      setIsStepTwoOpen(true);
      return;
    }

    if (!privacyAccepted) {
      setNotice({ ok: false, msg: strings.notices.privacyRequired });
      return;
    }

    if (memberType === "person") {
      if (!birthDate.trim()) {
        setNotice({ ok: false, msg: strings.notices.birthMissing });
        return;
      }
      if (!isAtLeastAge(birthDate, MIN_AGE)) {
        setNotice({ ok: false, msg: strings.notices.ageTooYoung });
        return;
      }
    }

    if (cityRequired && !city.trim()) {
      setNotice({ ok: false, msg: strings.notices.cityRequired });
      return;
    }

    setIsSubmitting(true);
    try {
      const payload: Record<string, unknown> = {
        type: memberType,
        email: email.trim(),
        firstName: memberType === "person" ? firstName.trim() || undefined : undefined,
        lastName: memberType === "person" ? lastName.trim() || undefined : undefined,
        birthDate: memberType === "person" ? birthDate.trim() || undefined : undefined,
        orgName: memberType === "organisation" ? orgName.trim() || undefined : undefined,
        city: city.trim() || undefined,
        country: countryCode || undefined,
        isPublic,
        wantsNewsletter,
        wantsNewsletterEdDebatte,
      };

      const res = await fetch("/api/members/public-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data?.ok) {
        setNotice({ ok: true, msg: strings.notices.submitOk });
        resetForm();
      } else {
        setNotice({ ok: false, msg: strings.notices.submitFail });
      }
    } catch {
      setNotice({ ok: false, msg: strings.notices.submitFail });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pb-16 text-slate-100">
      <section
        id="hero"
        className="relative overflow-hidden border-b border-slate-800/70 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
      >
        <div className="pointer-events-none absolute -right-20 top-12 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-7">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-semibold text-sky-300">
                  {strings.hero.badge}
                </div>
                <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-semibold text-slate-200">
                  Private Initiative
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
                  <span className="block headline-gradient">{strings.hero.title}</span>
                  <span className="block text-slate-100">{strings.hero.subtitle}</span>
                </h1>
                <p className="max-w-2xl text-base font-semibold text-slate-100 md:text-lg">
                  {strings.hero.oneLiner}
                </p>
                <p className="max-w-2xl text-sm text-slate-300">
                  {strings.hero.lead.pre}{" "}
                  <span className="text-slate-100">{strings.hero.lead.highlight1}</span>{" "}
                  {strings.hero.lead.mid1}{" "}
                  <span className="text-slate-100">{strings.hero.lead.highlight2}</span>{" "}
                  {strings.hero.lead.mid2}{" "}
                  <span className="text-slate-100">{strings.hero.lead.highlight3}</span>{" "}
                  {strings.hero.lead.post}
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-slate-300 shadow-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                      {highlightLabels.focus}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-100 leading-relaxed">
                      {strings.hero.focus}
                    </p>
                  </article>
                  <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-slate-300 shadow-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                      {highlightLabels.scalable}
                    </p>
                    <p className="mt-2 text-sm text-slate-200 leading-relaxed">
                      {strings.hero.scalable}
                    </p>
                  </article>
                  <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-slate-300 shadow-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                      {highlightLabels.mobility}
                    </p>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                      {strings.hero.micro.line1}
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {strings.hero.micro.line2}
                    </p>
                  </article>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/#join" className="btn btn-primary">
                    {strings.hero.ctas.join}
                  </Link>
                  <Link href={VOG_SUPPORT_PATH} className="btn btn-ghost">
                    {strings.hero.ctas.support}
                  </Link>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {strings.hero.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                  <span className="font-semibold text-slate-300">
                    {strings.hero.more.label}
                  </span>
                  <a
                    href={EDEBATTE_SIGNUP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-slate-100 underline underline-offset-2"
                  >
                    {strings.hero.more.edebatte}
                  </a>
                  <a
                    href={EDEBATTE_PREORDER_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-slate-100 underline underline-offset-2"
                  >
                    {strings.hero.more.preorder}
                  </a>
                  <span className="text-slate-500">·</span>
                  <Link
                    href="/howtoworks/bewegung"
                    className="font-semibold text-slate-100 underline underline-offset-2"
                  >
                    {strings.hero.ctas.how}
                  </Link>
                </div>
                <div className="mt-6 grid gap-3 md:grid-cols-4">
                  {strings.hero.steps.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-left shadow-sm transition hover:border-sky-400/60"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 group-hover:text-sky-200">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-100">{item.body}</p>
                      <p className="mt-2 text-xs text-slate-400 group-hover:text-slate-300">
                        {strings.hero.learnMore}
                      </p>
                    </Link>
                  ))}
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {strings.hero.cards.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs text-slate-300 shadow-sm"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-100">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-8 top-10 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
              <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-400">
                  <span>{strings.decisionCard.label}</span>
                  <span className="rounded-full border border-slate-700 bg-slate-950/70 px-2 py-0.5 text-[10px] text-slate-300">
                    {strings.decisionCard.tag}
                  </span>
                </div>
                <h2 className="mt-3 text-xl font-semibold text-slate-100">
                  {strings.decisionCard.title}
                </h2>
                <div className="mt-4 grid gap-2">
                  {strings.decisionCard.steps.map((step) => (
                    <div
                      key={step}
                      className="rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-2 text-xs text-slate-300"
                    >
                      {step}
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-xs text-slate-400">
                  {strings.decisionCard.note}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {strings.foundations.label}
          </p>
          <h2 className="text-2xl font-bold text-slate-100 headline-gradient">
            {strings.foundations.title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-400">
            {strings.foundations.subtitle}
          </p>
          <p className="text-base font-semibold text-slate-100">
            {strings.foundations.bandLine}
          </p>
          <p className="mx-auto max-w-2xl text-sm text-slate-400">
            {strings.foundations.bandHint}
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {strings.foundations.items.map((item) => {
            const slug = String(item.href || "").split("/").pop() || "";
            const band = getBand(slug);
            const covers = getCovers(slug);
            const showBandSubtitle = !item.subtitle && locale === "de";
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm"
              >
                {covers?.front ? (
                  <div className="mb-4">
                    <CoverLightbox
                      frontSrc={covers.front}
                      backSrc={covers.back}
                      title={`${band?.title ?? item.title}`}
                      thumbClassName="bg-slate-950/30"
                    />
                  </div>
                ) : null}
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {strings.foundations.bandLabel} {band?.roman ?? ""}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-100">
                  {band?.title ?? item.title}
                </h3>
                {item.subtitle ? (
                  <p className="mt-1 text-sm text-slate-400">{item.subtitle}</p>
                ) : showBandSubtitle && band?.subtitle ? (
                  <p className="mt-1 text-sm text-slate-400">{band.subtitle}</p>
                ) : null}
                <p className="mt-3 text-sm text-slate-300">{item.body}</p>
                <Link
                  href={item.href}
                  className="mt-4 inline-block text-sm font-semibold text-sky-300 hover:underline"
                >
                  {item.cta}
                </Link>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          {strings.foundations.footerNote}
        </p>

        <div className="mt-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {strings.foundations.architectureLabel}
          </p>
          <p className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-slate-300">
            {strings.foundations.architectureFlow.join(" → ")} →{" "}
            <span className="text-slate-100 font-semibold">
              {strings.foundations.architectureStrong}
            </span>
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 text-center shadow-sm">
          <h3 className="text-lg font-semibold text-slate-100">
            {strings.foundations.ctaTitle}
          </h3>
          <p className="mt-2 text-sm text-slate-300">{strings.foundations.ctaBody}</p>
          <Link href="/#join" className="btn btn-ghost mt-4">
            {strings.foundations.ctaButton}
          </Link>
        </div>
      </section>

      <section id="mitmachen" className="mx-auto mt-12 max-w-6xl px-4">
        <div id="join" className="scroll-mt-24" />
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {strings.membership.label}
              </p>
              <h2 className="text-2xl font-bold text-slate-100">{strings.membership.title}</h2>
              <p className="mt-1 text-xs text-slate-400">{strings.membership.subtitle}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-end">
                <div className="flex-1 space-y-1">
                  <label className={labelClass} htmlFor="email">
                    {strings.form.email}
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    className={inputClass}
                    ref={emailRef}
                  />
                </div>
                {!isStepTwoOpen && (
                  <button
                    type="submit"
                    className="btn btn-primary"
                    aria-expanded={isStepTwoOpen}
                    aria-controls="join-details"
                  >
                    {strings.form.step1Cta}
                  </button>
                )}
              </div>
              <p className="mt-2 text-xs text-slate-300">{strings.form.step1Hint}</p>
            </div>

            {isStepTwoOpen && (
              <>
                <div
                  id="join-details"
                  className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {strings.form.step2Label}
                    </p>
                    <p className="text-xs text-slate-400">{strings.form.step2Hint}</p>
                  </div>
                  <div className="inline-flex rounded-full border border-slate-700 bg-slate-950/60 p-1 text-xs font-semibold text-slate-300">
                    {(["person", "organisation"] as const).map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setMemberType(value)}
                        className={`rounded-full px-3 py-1 ${
                          memberType === value ? "bg-sky-600 text-white" : "hover:bg-slate-900"
                        }`}
                      >
                        {value === "person"
                          ? strings.membership.type.person
                          : strings.membership.type.organisation}
                      </button>
                    ))}
                  </div>

                  {memberType === "person" && (
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="space-y-1">
                        <label className={labelClass} htmlFor="firstName">
                          {strings.form.firstName}
                        </label>
                        <input
                          id="firstName"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          autoComplete="given-name"
                          className={inputClass}
                          ref={stepTwoFirstRef}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className={labelClass} htmlFor="lastName">
                          {strings.form.lastName}
                        </label>
                        <input
                          id="lastName"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          autoComplete="family-name"
                          className={inputClass}
                        />
                      </div>
                      <div className="space-y-1 md:col-span-2">
                        <label className={labelClass} htmlFor="birthDate">
                          {strings.form.birthDate}
                        </label>
                        <input
                          id="birthDate"
                          required
                          type="date"
                          value={birthDate}
                          onChange={(e) => setBirthDate(e.target.value)}
                          max={maxBirthDateIso(MIN_AGE)}
                          autoComplete="bday"
                          className={inputClass}
                        />
                        <p className="text-[11px] text-slate-400">{strings.form.birthHint}</p>
                      </div>
                    </div>
                  )}

                  {memberType === "organisation" && (
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="space-y-1 md:col-span-2">
                        <label className={labelClass} htmlFor="orgName">
                          {strings.form.organisation}
                        </label>
                        <input
                          id="orgName"
                          required
                          value={orgName}
                          onChange={(e) => setOrgName(e.target.value)}
                          autoComplete="organization"
                          className={inputClass}
                          ref={stepTwoFirstRef}
                        />
                      </div>
                    </div>
                  )}

                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="space-y-1">
                      <label className={labelClass} htmlFor="city">
                        {strings.form.city}{" "}
                        {!cityRequired && (
                          <span className="text-slate-400">{strings.form.optional}</span>
                        )}
                      </label>
                      <input
                        id="city"
                        required={cityRequired}
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        autoComplete="address-level2"
                        className={inputClass}
                        placeholder={
                          cityRequired
                            ? strings.form.cityPlaceholderPublic
                            : strings.form.cityPlaceholderPrivate
                        }
                      />
                    </div>
                    <div className="space-y-1">
                      <label className={labelClass} htmlFor="country">
                        {strings.form.country}
                      </label>
                      <select
                        id="country"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className={inputClass}
                      >
                        <option value="">{strings.form.countryPlaceholder}</option>
                        {countryOptions.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <p className="text-xs font-medium text-slate-300">
                      {strings.form.locationVisibility}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {strings.form.visibilityHint}
                    </p>
                  </div>

                  <label id="newsletter" className="flex items-start gap-2 text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={wantsNewsletter}
                      onChange={(e) => setWantsNewsletter(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-slate-500 text-sky-500"
                    />
                    <span>{strings.form.newsletter}</span>
                  </label>
                  <label className="flex items-start gap-2 text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={wantsNewsletterEdDebatte}
                      onChange={(e) => setWantsNewsletterEdDebatte(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-slate-500 text-sky-500"
                    />
                    <span>{strings.form.newsletterTool}</span>
                  </label>
                </div>

                <label className="flex items-start gap-2 text-xs text-slate-300">
                  <input
                    type="checkbox"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-slate-500 text-sky-500"
                    required
                  />
                  <span>
                    {strings.form.privacyBefore}{" "}
                    <Link
                      href="/datenschutz"
                      className="font-semibold text-slate-100 underline underline-offset-2"
                    >
                      {strings.form.privacyLink}
                    </Link>{" "}
                    {strings.form.privacyAfter}
                  </span>
                </label>

                <div className="flex flex-wrap items-center gap-3">
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                    {isSubmitting ? strings.form.submitting : strings.form.submit}
                  </button>
                  {notice && (
                    <span
                      className={`text-xs ${notice.ok ? "text-sky-300" : "text-red-400"}`}
                      role="status"
                      aria-live="polite"
                    >
                      {notice.msg}
                    </span>
                  )}
                </div>
              </>
            )}
          </form>

          <div className="mt-4 space-y-2 text-xs text-slate-300">
            <p>{strings.footer.membershipFree}</p>
            <p>
              {strings.footer.supportNoteBefore}{" "}
              <Link
                href={VOG_SUPPORT_PATH}
                className="font-semibold text-slate-100 underline underline-offset-2"
              >
                {strings.footer.supportNoteLink}
              </Link>{" "}
              {strings.footer.supportNoteAfter}{" "}
              <a href="mailto:members@voiceopengov.org" className="font-semibold text-slate-100">
                members@voiceopengov.org
              </a>
              .
            </p>
            <p>{strings.footer.publicPrivateNote}</p>
          </div>
        </div>
      </section>

      <section id="voiceopengov-support" className="mx-auto mt-14 max-w-6xl px-4 pb-10">
        <div className="grid gap-6">
          <MembershipCalculator_VOG
            strings={strings.supportCalculator}
            canOpen={canOpenCalculator}
            onRequestEmail={handleRequestEmail}
          />

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 text-center shadow-sm">
            <p className="text-sm font-semibold text-slate-100">
              {strings.supportAfterCta.title}
            </p>
            <p className="mt-2 text-sm text-slate-300">{strings.supportAfterCta.body}</p>
            <Link href="/#join" className="btn btn-primary mt-4">
              {strings.supportAfterCta.cta}
            </Link>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h4 className="text-lg font-semibold text-slate-100">
                  {strings.supportBank.title}
                </h4>
                <p className="mt-2 text-sm text-slate-300">{strings.supportBank.body}</p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-dashed border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-400">
              {strings.supportBank.noDetails}
            </div>

            <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {strings.supportBank.contact.title}
              </p>
              <p className="mt-2 text-xs text-slate-300">{strings.supportBank.contact.body}</p>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                <label className="space-y-1 text-xs font-medium text-slate-300">
                  <span>{strings.supportBank.contact.firstName}</span>
                  <input
                    value={contactFirstName}
                    onChange={(e) => {
                      setContactFirstName(e.target.value);
                      setContactError("");
                    }}
                    className={inputClass}
                  />
                </label>
                <label className="space-y-1 text-xs font-medium text-slate-300">
                  <span>{strings.supportBank.contact.lastName}</span>
                  <input
                    value={contactLastName}
                    onChange={(e) => {
                      setContactLastName(e.target.value);
                      setContactError("");
                    }}
                    className={inputClass}
                  />
                </label>
                <label className="space-y-1 text-xs font-medium text-slate-300 md:col-span-2">
                  <span>{strings.supportBank.contact.subject}</span>
                  <input
                    value={contactSubject}
                    onChange={(e) => {
                      setContactSubject(e.target.value);
                      setContactError("");
                    }}
                    className={inputClass}
                    placeholder={strings.supportBank.contact.subjectPlaceholder}
                  />
                </label>
              </div>
              <label className="mt-3 flex items-start gap-2 text-xs text-slate-300">
                <input
                  type="checkbox"
                  checked={contactHumanCheck}
                  onChange={(e) => {
                    setContactHumanCheck(e.target.checked);
                    setContactError("");
                  }}
                  className="mt-1 h-4 w-4 rounded border-slate-500 text-sky-500"
                />
                <span>{strings.supportBank.contact.humanCheck}</span>
              </label>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <button type="button" onClick={handleContactSubmit} className="btn btn-ghost">
                  {strings.supportBank.contact.submit}
                </button>
                {contactError ? (
                  <span className="text-xs text-amber-300">{contactError}</span>
                ) : null}
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-400">{strings.supportBank.afterNote}</p>
          </div>
        </div>
      </section>
    </main>
  );
}