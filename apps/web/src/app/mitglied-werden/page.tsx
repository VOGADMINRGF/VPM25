"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type MemberType = "person" | "organisation";

type ApiError = {
  error?: string | { message?: string };
};

const ERROR_COPY: Record<string, string> = {
  account_exists: "Für diese E-Mail besteht bereits ein Zugang. Bitte melde dich an.",
  account_setup_required:
    "Deine Mitgliedschaft ist bereits aktiv. Richte deinen Zugang über den E-Mail-Link ein.",
  registration_pending:
    "Für diese E-Mail läuft bereits eine Registrierung. Bitte nutze den Bestätigungslink aus deiner E-Mail.",
  password_too_short: "Das Passwort muss mindestens 12 Zeichen lang sein.",
  password_too_long: "Das Passwort darf höchstens 128 Zeichen lang sein.",
  password_needs_number: "Das Passwort benötigt mindestens eine Zahl.",
  password_needs_special: "Das Passwort benötigt mindestens ein Sonderzeichen.",
  invalid_birthdate: "Bitte gib ein gültiges Geburtsdatum an.",
  underage: "Die Mitgliedschaft ist ab 16 Jahren möglich.",
  rate_limited: "Zu viele Versuche. Bitte versuche es später erneut.",
};

function readError(payload: ApiError | null) {
  if (!payload?.error) return "Die Registrierung konnte nicht abgeschlossen werden.";
  const code =
    typeof payload.error === "string" ? payload.error : payload.error.message || "unknown_error";
  return ERROR_COPY[code] || "Die Registrierung konnte nicht abgeschlossen werden.";
}

export default function MitgliedWerdenPage() {
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

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!privacyAccepted) {
      setError("Bitte bestätige die Datenschutzhinweise.");
      return;
    }
    if (type === "person" && (!firstName.trim() || !lastName.trim() || !birthDate)) {
      setError("Bitte fülle Name und Geburtsdatum vollständig aus.");
      return;
    }
    if (type === "organisation" && !orgName.trim()) {
      setError("Bitte gib den Namen der Organisation an.");
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
      setError("Die Verbindung konnte nicht hergestellt werden. Bitte versuche es erneut.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <main className="min-h-[72vh] bg-[#07110f] px-5 py-16 text-[#f4f1e8] md:px-8">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-[#d6ff65]/25 bg-[#0b1714] p-8 shadow-2xl shadow-black/30 md:p-10">
          <div className="inline-flex rounded-full border border-[#d6ff65]/30 bg-[#d6ff65]/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#d6ff65]">
            Fast geschafft
          </div>
          <h1 className="mt-5 text-3xl font-black tracking-tight md:text-4xl">Bestätige jetzt deine E-Mail.</h1>
          <p className="mt-4 leading-7 text-[#f4f1e8]/70">
            Wir haben dir einen Bestätigungslink geschickt. Erst nach dem Double-Opt-In wird deine Mitgliedschaft aktiv und dein Login freigeschaltet.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/login" className="rounded-full bg-[#d6ff65] px-5 py-3 font-black text-[#07110f]">
              Zum Login
            </Link>
            <Link href="/" className="rounded-full border border-[#f4f1e8]/20 px-5 py-3 font-bold text-[#f4f1e8]">
              Zur Startseite
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#07110f] px-5 py-12 text-[#f4f1e8] md:px-8 md:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d6ff65]">VoiceOpenGov</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Mitglied werden.</h1>
          <p className="mt-4 text-lg leading-8 text-[#f4f1e8]/68">
            Ein Account ist noch keine aktive Mitgliedschaft. Deine Mitgliedschaft wird erst nach der E-Mail-Bestätigung aktiviert.
          </p>
        </div>

        <form onSubmit={submit} className="mt-10 grid gap-6 rounded-[2rem] border border-[#f4f1e8]/12 bg-[#0b1714] p-6 shadow-2xl shadow-black/25 md:p-8">
          <fieldset>
            <legend className="text-sm font-black">Mitgliedstyp</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {(["person", "organisation"] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setType(value)}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                    type === value
                      ? "bg-[#d6ff65] text-[#07110f]"
                      : "border border-[#f4f1e8]/15 text-[#f4f1e8]/70 hover:border-[#d6ff65]/45"
                  }`}
                >
                  {value === "person" ? "Person" : "Organisation"}
                </button>
              ))}
            </div>
          </fieldset>

          {type === "person" ? (
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Vorname" value={firstName} onChange={setFirstName} autoComplete="given-name" />
              <Field label="Nachname" value={lastName} onChange={setLastName} autoComplete="family-name" />
              <label className="grid gap-2 text-sm font-bold text-[#f4f1e8]/80 md:col-span-2">
                Geburtsdatum
                <input
                  required
                  type="date"
                  value={birthDate}
                  onChange={(event) => setBirthDate(event.target.value)}
                  className="rounded-2xl border border-[#f4f1e8]/15 bg-[#07110f] px-4 py-3 font-normal text-[#f4f1e8] outline-none focus:border-[#d6ff65]/60"
                />
              </label>
            </div>
          ) : (
            <Field label="Name der Organisation" value={orgName} onChange={setOrgName} autoComplete="organization" />
          )}

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Ort" value={city} onChange={setCity} autoComplete="address-level2" required={false} />
            <Field label="Land (ISO-Code)" value={country} onChange={setCountry} autoComplete="country" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="E-Mail" value={email} onChange={setEmail} type="email" autoComplete="email" />
            <label className="grid gap-2 text-sm font-bold text-[#f4f1e8]/80">
              Passwort
              <input
                required
                type="password"
                minLength={12}
                maxLength={128}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="new-password"
                className="rounded-2xl border border-[#f4f1e8]/15 bg-[#07110f] px-4 py-3 font-normal text-[#f4f1e8] outline-none focus:border-[#d6ff65]/60"
              />
              <span className="text-xs font-normal text-[#f4f1e8]/45">Mindestens 12 Zeichen, eine Zahl und ein Sonderzeichen.</span>
            </label>
          </div>

          <div className="grid gap-3 rounded-2xl border border-[#f4f1e8]/10 bg-[#07110f]/60 p-4 text-sm text-[#f4f1e8]/70">
            <Check checked={isPublic} onChange={setIsPublic} label="Meine Region darf in den öffentlichen, aggregierten Orts-Summen erscheinen." />
            <Check checked={wantsNewsletter} onChange={setWantsNewsletter} label="Ich möchte Updates von VoiceOpenGov erhalten." />
            <Check checked={wantsNewsletterEdDebatte} onChange={setWantsNewsletterEdDebatte} label="Ich möchte zusätzlich Updates zu eDebatte erhalten." />
            <Check
              checked={privacyAccepted}
              onChange={setPrivacyAccepted}
              label={
                <span>
                  Ich akzeptiere die <Link href="/datenschutz" className="font-bold text-[#d6ff65] underline underline-offset-4">Datenschutzhinweise</Link>.
                </span>
              }
            />
          </div>

          {error ? (
            <div role="alert" className="rounded-2xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-100">
              {error}
            </div>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-[#d6ff65] px-6 py-3 font-black text-[#07110f] transition hover:bg-[#e2ff8a] disabled:cursor-wait disabled:opacity-60"
            >
              {submitting ? "Wird angelegt …" : "Mitgliedschaft starten"}
            </button>
            <div className="text-sm text-[#f4f1e8]/55">
              Schon Mitglied?{" "}
              <Link href="/login" className="font-bold text-[#d6ff65]">Anmelden</Link>
              {" · "}
              <Link href="/konto/passwort" className="font-bold text-[#d6ff65]">Zugang einrichten</Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  required = true,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-[#f4f1e8]/80">
      {label}
      <input
        required={required}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        className="rounded-2xl border border-[#f4f1e8]/15 bg-[#07110f] px-4 py-3 font-normal text-[#f4f1e8] outline-none focus:border-[#d6ff65]/60"
      />
    </label>
  );
}

function Check({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: React.ReactNode;
}) {
  return (
    <label className="flex items-start gap-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-4 w-4 rounded border-[#f4f1e8]/30 bg-[#07110f] accent-[#d6ff65]"
      />
      <span>{label}</span>
    </label>
  );
}
