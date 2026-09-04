"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";

const PASSWORD_ERRORS: Record<string, string> = {
  password_too_short: "Das Passwort muss mindestens 12 Zeichen lang sein.",
  password_too_long: "Das Passwort darf höchstens 128 Zeichen lang sein.",
  password_needs_number: "Das Passwort benötigt mindestens eine Zahl.",
  password_needs_special: "Das Passwort benötigt mindestens ein Sonderzeichen.",
  invalid_or_expired_token: "Der Link ist ungültig oder abgelaufen. Bitte fordere einen neuen an.",
  rate_limited: "Zu viele Versuche. Bitte versuche es später erneut.",
};

export default function PasswortPage() {
  const [tokenReady, setTokenReady] = useState(false);
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("token") || "";
    setToken(value);
    setTokenReady(true);
  }, []);

  async function requestLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");
    setSubmitting(true);
    try {
      await fetch("/api/auth/password/start", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setMessage(
        "Wenn eine aktive Mitgliedschaft zu dieser E-Mail besteht, haben wir dir einen Link zum Einrichten des Passworts geschickt.",
      );
    } catch {
      setError("Die Anfrage konnte nicht gesendet werden. Bitte versuche es erneut.");
    } finally {
      setSubmitting(false);
    }
  }

  async function setNewPassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (password !== passwordRepeat) {
      setError("Die beiden Passwörter stimmen nicht überein.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/auth/password/confirm", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const payload = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;
      if (!response.ok || !payload?.ok) {
        setError(
          (payload?.error && PASSWORD_ERRORS[payload.error]) ||
            "Das Passwort konnte nicht gespeichert werden.",
        );
        return;
      }
      setComplete(true);
    } catch {
      setError("Das Passwort konnte nicht gespeichert werden. Bitte versuche es erneut.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-[72vh] bg-[#07110f] px-5 py-16 text-[#f4f1e8] md:px-8">
      <div className="mx-auto max-w-lg">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d6ff65]">Mitgliedszugang</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight">
          {token ? "Passwort festlegen" : "Zugang einrichten"}
        </h1>
        <p className="mt-3 leading-7 text-[#f4f1e8]/65">
          {token
            ? "Lege ein neues Passwort für deinen bestätigten Mitgliedszugang fest."
            : "Das funktioniert auch für Mitgliedschaften, die schon vor dem neuen Login bestätigt wurden."}
        </p>

        {!tokenReady ? (
          <div className="mt-8 text-[#f4f1e8]/55">Zugang wird geprüft …</div>
        ) : complete ? (
          <div className="mt-8 rounded-[2rem] border border-[#d6ff65]/25 bg-[#0b1714] p-7">
            <h2 className="text-2xl font-black">Passwort gespeichert.</h2>
            <p className="mt-3 text-[#f4f1e8]/65">Du kannst dich jetzt mit deiner E-Mail-Adresse anmelden.</p>
            <Link href="/login" className="mt-6 inline-flex rounded-full bg-[#d6ff65] px-5 py-3 font-black text-[#07110f]">
              Zum Login
            </Link>
          </div>
        ) : token ? (
          <form onSubmit={setNewPassword} className="mt-8 grid gap-5 rounded-[2rem] border border-[#f4f1e8]/12 bg-[#0b1714] p-6 md:p-8">
            <PasswordField label="Neues Passwort" value={password} onChange={setPassword} />
            <PasswordField label="Passwort wiederholen" value={passwordRepeat} onChange={setPasswordRepeat} />
            <p className="text-xs leading-5 text-[#f4f1e8]/45">Mindestens 12 Zeichen, eine Zahl und ein Sonderzeichen.</p>
            {error ? <ErrorBox>{error}</ErrorBox> : null}
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-[#d6ff65] px-6 py-3 font-black text-[#07110f] disabled:opacity-60"
            >
              {submitting ? "Wird gespeichert …" : "Passwort speichern"}
            </button>
          </form>
        ) : (
          <form onSubmit={requestLink} className="mt-8 grid gap-5 rounded-[2rem] border border-[#f4f1e8]/12 bg-[#0b1714] p-6 md:p-8">
            <label className="grid gap-2 text-sm font-bold text-[#f4f1e8]/80">
              E-Mail deiner Mitgliedschaft
              <input
                required
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="rounded-2xl border border-[#f4f1e8]/15 bg-[#07110f] px-4 py-3 font-normal text-[#f4f1e8] outline-none focus:border-[#d6ff65]/60"
              />
            </label>
            {message ? (
              <div className="rounded-2xl border border-[#d6ff65]/25 bg-[#d6ff65]/10 px-4 py-3 text-sm text-[#f4f1e8]/80">{message}</div>
            ) : null}
            {error ? <ErrorBox>{error}</ErrorBox> : null}
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-[#d6ff65] px-6 py-3 font-black text-[#07110f] disabled:opacity-60"
            >
              {submitting ? "Wird gesendet …" : "Einrichtungslink senden"}
            </button>
            <Link href="/login" className="text-center text-sm font-bold text-[#d6ff65]">Zurück zum Login</Link>
          </form>
        )}
      </div>
    </main>
  );
}

function PasswordField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-[#f4f1e8]/80">
      {label}
      <input
        required
        type="password"
        minLength={12}
        maxLength={128}
        autoComplete="new-password"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-2xl border border-[#f4f1e8]/15 bg-[#07110f] px-4 py-3 font-normal text-[#f4f1e8] outline-none focus:border-[#d6ff65]/60"
      />
    </label>
  );
}

function ErrorBox({ children }: { children: string }) {
  return (
    <div role="alert" className="rounded-2xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-100">
      {children}
    </div>
  );
}
