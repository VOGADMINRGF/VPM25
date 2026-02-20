"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { SupporterSection } from "@/components/join/SupporterSection";
import { useLocale } from "@/context/LocaleContext";
import { getCountryOptions } from "@/lib/countries";
import { getBand } from "@/app/grundlagen/bands";
import { getHomeStrings } from "./strings";

type Notice = { ok: boolean; msg: string } | null;

const MAX_IMAGE_BYTES = 2 * 1024 * 1024;
const MIN_AGE = 16;
const MOTIVATION_MAX = 160;

function applyMotivationTemplate(
  template: string,
  cityValue: string,
  cityTemplate: string,
  cityFallback: string,
) {
  const trimmed = cityValue.trim();
  const place = trimmed
    ? cityTemplate.replace("{city}", trimmed)
    : cityFallback;
  return template.replaceAll("{ort}", place);
}

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

export default function HomeClient() {
  const { locale } = useLocale();
  const strings = getHomeStrings(locale);
  const countryOptions = useMemo(() => getCountryOptions(locale), [locale]);
  const [memberType, setMemberType] = useState<"person" | "organisation">("person");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [avatarDataUrl, setAvatarDataUrl] = useState<string | null>(null);
  const [avatarFileName, setAvatarFileName] = useState("");
  const [publicSupporter, setPublicSupporter] = useState(false);
  const [supporterMode, setSupporterMode] = useState<"reuse" | "separate">("reuse");
  const [supporterImageUrl, setSupporterImageUrl] = useState("");
  const [supporterImageDataUrl, setSupporterImageDataUrl] = useState<string | null>(null);
  const [supporterImageFileName, setSupporterImageFileName] = useState("");
  const [supporterNote, setSupporterNote] = useState("");
  const [wantsNewsletter, setWantsNewsletter] = useState(false);
  const [wantsNewsletterEdDebatte, setWantsNewsletterEdDebatte] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [notice, setNotice] = useState<Notice>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const avatarFileRef = useRef<HTMLInputElement | null>(null);
  const supporterFileRef = useRef<HTMLInputElement | null>(null);
  const inputClass =
    "w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-800/40";
  const labelClass = "text-xs font-medium text-slate-300";
  const isPerson = memberType === "person";
  const isOrg = memberType === "organisation";
  const showMediaFields = isPublic || publicSupporter;
  const cityRequired = isPublic;

  const handleImageFile = (
    file: File | null,
    setDataUrl: (value: string | null) => void,
    setFileName: (value: string) => void,
  ) => {
    if (!file) {
      setDataUrl(null);
      setFileName("");
      return;
    }
    if (!file.type.startsWith("image/")) {
      setNotice({ ok: false, msg: strings.notices.imageType });
      return;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      setNotice({ ok: false, msg: strings.notices.imageTooLarge });
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      setDataUrl(result || null);
      setFileName(file.name);
    };
    reader.onerror = () => {
      setNotice({ ok: false, msg: strings.notices.imageReadFail });
    };
    reader.readAsDataURL(file);
  };

  const resetForm = () => {
    setMemberType("person");
    setFirstName("");
    setLastName("");
    setBirthDate("");
    setOrgName("");
    setEmail("");
    setCity("");
    setCountryCode("");
    setIsPublic(true);
    setAvatarUrl("");
    setAvatarDataUrl(null);
    setAvatarFileName("");
    setPublicSupporter(false);
    setSupporterMode("reuse");
    setSupporterImageUrl("");
    setSupporterImageDataUrl(null);
    setSupporterImageFileName("");
    setSupporterNote("");
    setWantsNewsletter(false);
    setWantsNewsletterEdDebatte(false);
    setPrivacyAccepted(false);
    if (avatarFileRef.current) avatarFileRef.current.value = "";
    if (supporterFileRef.current) supporterFileRef.current.value = "";
  };

  useEffect(() => {
    setAvatarUrl("");
    setAvatarDataUrl(null);
    setAvatarFileName("");
    setBirthDate("");
    setSupporterMode("reuse");
    setSupporterImageUrl("");
    setSupporterImageDataUrl(null);
    setSupporterImageFileName("");
    setSupporterNote("");
    if (avatarFileRef.current) avatarFileRef.current.value = "";
    if (supporterFileRef.current) supporterFileRef.current.value = "";
  }, [memberType]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice(null);

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
      const avatarValue =
        memberType === "person" ? avatarDataUrl || undefined : avatarUrl.trim() || undefined;

      if (publicSupporter && supporterMode === "reuse" && !avatarValue) {
        setNotice({
          ok: false,
          msg: strings.notices.supporterImageMissing,
        });
        return;
      }

      const supporterImageValue = publicSupporter
        ? supporterMode === "reuse"
          ? avatarValue
          : memberType === "person"
            ? supporterImageDataUrl || undefined
            : supporterImageUrl.trim() || undefined
        : undefined;

      const payload: Record<string, unknown> = {
        type: memberType,
        email: email.trim(),
        firstName: memberType === "person" ? firstName.trim() || undefined : undefined,
        lastName: memberType === "person" ? lastName.trim() || undefined : undefined,
        birthDate: memberType === "person" ? birthDate.trim() || undefined : undefined,
        orgName: memberType === "organisation" ? orgName.trim() || undefined : undefined,
        // Ort: bei Öffentlich Pflicht (Orts-Summen), bei Privat optional und nicht öffentlich aggregiert.
        city: city.trim() || undefined,
        country: countryCode || undefined,
        isPublic,
        avatarUrl: isPublic ? avatarValue : undefined,
        publicSupporter,
        supporterImageUrl: supporterImageValue,
        supporterNote: supporterNote.trim() || undefined,
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
                  <span className="block headline-gradient">
                    {strings.hero.title}
                  </span>
                  <span className="block text-slate-100">{strings.hero.subtitle}</span>
                </h1>
                <p className="max-w-2xl text-sm font-semibold text-slate-100 md:text-base">
                  VoiceOpenGov ist eine private, unabhängige Initiative.
                </p>
                <p className="max-w-2xl text-lg text-slate-300 md:text-xl">
                  Mit{" "}
                  <span className="font-semibold text-slate-100">eDebatte</span> entwickeln wir eine{" "}
                  <span className="font-semibold text-slate-100">Informationsarchitektur</span> für Beteiligung:
                  klare Optionen, dokumentierte Begründungen und Status – damit Mitwirkung zwischen Wahlterminen
                  nachvollziehbar funktioniert.
                </p>
                <p className="max-w-2xl text-sm text-slate-400">
                  Gemeinwohlorientiert und unabhängig – mit dem Ziel einer tragfähigen Trägerstruktur.
                </p>
                <p className="max-w-2xl text-xs text-slate-400">
                  Wenn du dich einbringen willst: sachlich, respektvoll und quellenorientiert – gern mobil am Smartphone.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/#mitmachen" className="btn btn-primary">
                    {strings.hero.ctas.join}
                  </Link>
                  <Link href="/howtoworks/bewegung" className="btn btn-ghost">
                    {strings.hero.ctas.how}
                  </Link>
                  <Link href="/unterstuetzen" className="btn btn-ghost">
                    {strings.hero.ctas.support}
                  </Link>
                </div>
                <p className="mt-3 max-w-2xl text-xs text-slate-400">
                  3 Minuten • Double-Opt-In • Öffentlich = nur Orts-Summen • Keine Einzelprofile • Keine Stimmvorteile durch Unterstützung
                </p>
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
            const showBandSubtitle = !item.subtitle && locale === "de";
            return (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm"
            >
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
          )})}
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
          <p className="mt-2 text-sm text-slate-300">
            {strings.foundations.ctaBody}
          </p>
          <Link href="/#mitmachen" className="btn btn-primary mt-4">
            {strings.foundations.ctaButton}
          </Link>
        </div>
      </section>

      <section id="mitmachen" className="mx-auto mt-12 max-w-6xl px-4">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {strings.membership.label}
              </p>
              <h2 className="text-2xl font-bold text-slate-100">{strings.membership.title}</h2>
              <p className="mt-1 text-xs text-slate-400">
                {strings.membership.subtitle}
              </p>
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
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
                  />
                </div>
              </div>
            )}

            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-1">
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
                />
              </div>
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

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">
                {strings.form.locationVisibility}
              </label>
              <div className="inline-flex rounded-full border border-slate-700 bg-slate-950/60 p-1 text-xs font-semibold text-slate-300">
                <button
                  type="button"
                  onClick={() => setIsPublic(true)}
                  className={`rounded-full px-3 py-1 ${isPublic ? "bg-sky-600 text-white" : "hover:bg-slate-900"}`}
                >
                  {strings.form.public}
                </button>
                <button
                  type="button"
                  onClick={() => setIsPublic(false)}
                  className={`rounded-full px-3 py-1 ${!isPublic ? "bg-sky-600 text-white" : "hover:bg-slate-900"}`}
                >
                  {strings.form.private}
                </button>
              </div>
              <p className="text-xs text-slate-400">
                {strings.form.visibilityHint}
              </p>
            </div>

            {showMediaFields && isOrg && (
              <div className="space-y-1">
                <label className={labelClass} htmlFor="avatarUrl">
                  {strings.form.logoUrl}
                </label>
                <input
                  id="avatarUrl"
                  type="url"
                  value={avatarUrl}
                  onChange={(e) => setAvatarUrl(e.target.value)}
                  className={inputClass}
                  placeholder="https://"
                />
              </div>
            )}

            {showMediaFields && isPerson && (
              <div className="space-y-1">
                <label className={labelClass} htmlFor="avatarFile">
                  {strings.form.avatarUpload}
                </label>
                <input
                  id="avatarFile"
                  ref={avatarFileRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleImageFile(e.target.files?.[0] ?? null, setAvatarDataUrl, setAvatarFileName)
                  }
                  className={inputClass}
                />
                {avatarDataUrl && (
                  <div className="mt-2 flex items-center gap-2">
                    <img
                      src={avatarDataUrl}
                      alt={strings.form.previewLabel}
                      className="h-10 w-10 rounded-full border border-slate-700 object-cover"
                    />
                    <p className="text-[11px] text-slate-400">
                      {strings.form.previewLabel}
                      {avatarFileName ? ` • ${avatarFileName}` : ""}
                    </p>
                  </div>
                )}
                {avatarFileName && (
                  <p className="text-[11px] text-slate-400">
                    {strings.form.selectedLabel.replace("{name}", avatarFileName)}
                  </p>
                )}
                <p className="text-[11px] text-slate-400">{strings.form.imageHint}</p>
              </div>
            )}

            <div className="space-y-3">
              <SupporterSection
                enabled={publicSupporter}
                mode={supporterMode}
                strings={strings.supporterSection}
                onEnabledChange={(value) => {
                  setPublicSupporter(value);
                  if (!value) {
                    setSupporterMode("reuse");
                    setSupporterImageUrl("");
                    setSupporterImageDataUrl(null);
                    setSupporterImageFileName("");
                    if (supporterFileRef.current) supporterFileRef.current.value = "";
                  }
                }}
                onModeChange={(mode) => {
                  setSupporterMode(mode);
                  if (mode === "reuse") {
                    setSupporterImageUrl("");
                    setSupporterImageDataUrl(null);
                    setSupporterImageFileName("");
                    if (supporterFileRef.current) supporterFileRef.current.value = "";
                  }
                }}
              />

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium text-slate-300">
                    {strings.form.motivation}
                  </label>
                  <span className="text-[11px] text-slate-400">
                    {supporterNote.length}/{MOTIVATION_MAX}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {strings.motivationPresets.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() =>
                        setSupporterNote(
                          applyMotivationTemplate(
                            preset.template,
                            city,
                            strings.form.cityTemplate,
                            strings.form.cityFallback,
                          ).slice(0, MOTIVATION_MAX),
                        )
                      }
                      className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-[11px] font-semibold text-slate-200 hover:border-sky-300 hover:text-sky-200"
                      title={preset.template}
                    >
                      {preset.label}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setSupporterNote("")}
                    className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-[11px] font-semibold text-slate-400 hover:text-slate-200"
                  >
                    {strings.form.clear}
                  </button>
                </div>
                <textarea
                  rows={3}
                  maxLength={MOTIVATION_MAX}
                  value={supporterNote}
                  onChange={(e) => setSupporterNote(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-800/40"
                  placeholder={strings.form.motivationPlaceholder}
                />
                <p className="text-[11px] text-slate-400">
                  {strings.form.motivationHint}
                </p>
              </div>

              {publicSupporter && supporterMode === "separate" && memberType === "organisation" && (
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">
                    {strings.form.supporterImage}
                  </label>
                  <input
                    type="url"
                    value={supporterImageUrl}
                    onChange={(e) => setSupporterImageUrl(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-800/40"
                    placeholder="https://"
                  />
                </div>
              )}

              {publicSupporter && supporterMode === "separate" && memberType === "person" && (
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">
                    {strings.form.supporterImage}
                  </label>
                  <input
                    ref={supporterFileRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleImageFile(
                        e.target.files?.[0] ?? null,
                        setSupporterImageDataUrl,
                        setSupporterImageFileName,
                      )
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-800/40"
                  />
                  {supporterImageFileName && (
                    <p className="text-[11px] text-slate-400">
                      {strings.form.selectedLabel.replace("{name}", supporterImageFileName)}
                    </p>
                  )}
                  <p className="text-[11px] text-slate-400">{strings.form.imageHint}</p>
                </div>
              )}
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

            <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs font-medium text-slate-300">
                {strings.form.supportCardTitle}
              </p>
              <p className="text-xs text-slate-400">
                {strings.form.supportCardBody}
              </p>
              <Link href="/unterstuetzen" className="btn btn-ghost">
                {strings.form.supportCardCta}
              </Link>
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
                <Link href="/datenschutz" className="font-semibold text-slate-100 underline underline-offset-2">
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
          </form>

          <div className="mt-4 space-y-2 text-xs text-slate-300">
            <p>{strings.footer.membershipFree}</p>
            <p>
              {strings.footer.supportNoteBefore}{" "}
              <Link href="/unterstuetzen" className="font-semibold text-slate-100 underline underline-offset-2">
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

      <section id="unterstuetzen" className="mx-auto mt-14 max-w-6xl px-4 pb-10">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {strings.supportSection.label}
              </p>
              <h3 className="text-xl font-semibold text-slate-100">
                {strings.supportSection.title}
              </h3>
              <p className="text-sm text-slate-300">
                {strings.supportSection.body}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/unterstuetzen" className="btn btn-primary">
                {strings.supportSection.ctaSupport}
              </Link>
              <Link href="/kontakt" className="btn btn-ghost">
                {strings.supportSection.ctaQuestions}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
