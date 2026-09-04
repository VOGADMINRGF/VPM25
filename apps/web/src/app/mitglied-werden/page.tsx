"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { getMemberAccountStrings } from "@/app/memberAccountStrings";

type MemberType = "person" | "organisation";
type ApiError = { error?: string | { message?: string } };

export default function MitgliedWerdenPage() {
  const { locale } = useLocale();
  const strings = getMemberAccountStrings(locale);
  const [type, setType] = useState<MemberType>("person");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [orgName, setOrgName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("DE");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [wantsNewsletter, setWantsNewsletter] = useState(false);
  const [wantsNewsletterEdDebatte, setWantsNewsletterEdDebatte] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function readError(payload: ApiError | null) {
    const code =
      typeof payload?.error === "string"
        ? payload.error
        : payload?.error?.message || "unknown_error";
    const copy: Record<string, string> = {
      password_too_short: strings.join.passwordTooShort,
      password_too_long: strings.join.passwordTooLong,
      password_needs_number: strings.join.passwordNeedsNumber,
      password_needs_special: strings.join.passwordNeedsSpecial,
      invalid_birthdate: strings.join.invalidBirthdate,
      underage: strings.join.underage,
      rate_limited: strings.common.rateLimited,
    };
    return copy[code] || strings.join.failed;
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!privacyAccepted) {
      setError(strings.join.missingPrivacy);
      return;
    }
    if (type === "person" && (!firstName.trim() || !lastName.trim() || !birthDate)) {
      setError(strings.join.missingPerson);
      return;
    }
    if (type === "organisation" && !orgName.trim()) {
      setError(strings.join.missingOrganisation);
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          type,
          firstName: type === "person" ? firstName.trim() : undefined,
          lastName: type === "person" ? lastName.trim() : undefined,
          birthDate: type === "person" ? birthDate : undefined,
          orgName: type === "organisation" ? orgName.trim() : undefined,
          city: city.trim() || undefined,
          country: country.trim().toUpperCase() || undefined,
          email: email.trim(),
          password,
          isPublic,
          wantsNewsletter,
          wantsNewsletterEdDebatte,
          donationCents: 0,
        }),
      });
      const payload = (await response.json().catch(() => null)) as ApiError | null;
      if (!response.ok) {
        setError(readError(payload));
        return;
      }
      setSuccess(true);
    } catch {
      setError(strings.common.networkError);
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <main className="min-h-[72vh] bg-slate-950 px-5 py-16 text-slate-50 md:px-8">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-cyan-500/25 bg-slate-900 p-8 shadow-2xl shadow-black/30 md:p-10">
          <div className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-400">
            {strings.join.successBadge}
          </div>
          <h1 className="mt-5 text-3xl font-black tracking-tight md:text-4xl">{strings.join.successTitle}</h1>
          <p className="mt-4 leading-7 text-slate-300">{strings.join.successBody}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/login" className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-black text-[#071727]">
              {strings.common.login}
            </Link>
            <Link href="/" className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-50">
              {strings.common.home}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-slate-950 px-5 py-12 text-slate-50 md:px-8 md:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">{strings.join.eyebrow}</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">{strings.join.title}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-300">{strings.join.intro}</p>
        </div>

        <form onSubmit={submit} className="mt-10 grid gap-6 rounded-[2rem] border border-slate-700/70 bg-slate-900 p-6 shadow-2xl shadow-black/25 md:p-8">
          <fieldset>
            <legend className="text-sm font-black">{strings.join.memberType}</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {(["person", "organisation"] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setType(value)}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                    type === value
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-[#071727]"
                      : "border border-slate-700 text-slate-300 hover:border-cyan-400"
                  }`}
                >
                  {value === "person" ? strings.join.person : strings.join.organisation}
                </button>
              ))}
            </div>
          </fieldset>

          {type === "person" ? (
            <div className="grid gap-4 md:grid-cols-2">
              <Field label={strings.join.firstName} value={firstName} onChange={setFirstName} autoComplete="given-name" />
              <Field label={strings.join.lastName} value={lastName} onChange={setLastName} autoComplete="family-name" />
              <label className="grid gap-2 text-sm font-bold text-slate-200 md:col-span-2">
                {strings.join.birthDate}
                <input required type="date" value={birthDate} onChange={(event) => setBirthDate(event.target.value)} className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 font-normal text-slate-50 outline-none focus:border-cyan-400" />
              </label>
            </div>
          ) : (
            <Field label={strings.join.organisationName} value={orgName} onChange={setOrgName} autoComplete="organization" />
          )}

          <div className="grid gap-4 md:grid-cols-2">
            <Field label={strings.join.city} value={city} onChange={setCity} autoComplete="address-level2" required={false} />
            <Field label={strings.join.country} value={country} onChange={setCountry} autoComplete="country" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Field label={strings.common.email} value={email} onChange={setEmail} type="email" autoComplete="email" />
            <label className="grid gap-2 text-sm font-bold text-slate-200">
              {strings.common.password}
              <input required type="password" minLength={12} maxLength={128} value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="new-password" className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 font-normal text-slate-50 outline-none focus:border-cyan-400" />
              <span className="text-xs font-normal text-slate-400">{strings.join.passwordHint}</span>
            </label>
          </div>

          <div className="grid gap-3 rounded-2xl border border-slate-700/70 bg-slate-950/60 p-4 text-sm text-slate-300">
            <Check checked={isPublic} onChange={setIsPublic} label={strings.join.publicLocation} />
            <Check checked={wantsNewsletter} onChange={setWantsNewsletter} label={strings.join.newsletter} />
            <Check checked={wantsNewsletterEdDebatte} onChange={setWantsNewsletterEdDebatte} label={strings.join.edebatteNewsletter} />
            <Check
              checked={privacyAccepted}
              onChange={setPrivacyAccepted}
              label={
                <span>
                  {strings.join.privacyPrefix}{" "}
                  <Link href="/datenschutz" className="font-bold text-cyan-400 underline underline-offset-4">{strings.join.privacyLink}</Link>.
                </span>
              }
            />
          </div>

          {error ? (
            <div role="alert" className="rounded-2xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-100">{error}</div>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button type="submit" disabled={submitting} className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-black text-[#071727] transition hover:brightness-105 disabled:cursor-wait disabled:opacity-60">
              {submitting ? strings.join.submitting : strings.join.submit}
            </button>
            <div className="text-sm text-slate-400">
              {strings.join.alreadyMember}{" "}
              <Link href="/login" className="font-bold text-cyan-400">{strings.common.login}</Link>
              {" · "}
              <Link href="/konto/passwort" className="font-bold text-cyan-400">{strings.common.setupAccess}</Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

function Field({ label, value, onChange, type = "text", autoComplete, required = true }: { label: string; value: string; onChange: (value: string) => void; type?: string; autoComplete?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-slate-200">
      {label}
      <input required={required} type={type} value={value} onChange={(event) => onChange(event.target.value)} autoComplete={autoComplete} className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 font-normal text-slate-50 outline-none focus:border-cyan-400" />
    </label>
  );
}

function Check({ checked, onChange, label }: { checked: boolean; onChange: (checked: boolean) => void; label: React.ReactNode }) {
  return (
    <label className="flex items-start gap-3">
      <input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-950 accent-cyan-500" />
      <span>{label}</span>
    </label>
  );
}
