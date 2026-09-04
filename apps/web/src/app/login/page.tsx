"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const payload = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string; redirectUrl?: string }
        | null;
      if (!response.ok || !payload?.ok) {
        setError(
          payload?.error === "rate_limited"
            ? "Zu viele Anmeldeversuche. Bitte versuche es später erneut."
            : "E-Mail oder Passwort sind nicht korrekt – oder die E-Mail wurde noch nicht bestätigt.",
        );
        return;
      }
      router.push(payload.redirectUrl || "/konto");
      router.refresh();
    } catch {
      setError("Die Anmeldung konnte nicht durchgeführt werden. Bitte versuche es erneut.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-[72vh] bg-[#07110f] px-5 py-16 text-[#f4f1e8] md:px-8">
      <div className="mx-auto max-w-lg">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d6ff65]">VoiceOpenGov</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight">Anmelden</h1>
        <p className="mt-3 leading-7 text-[#f4f1e8]/65">
          Der Login ist für bestätigte Mitgliedschaften verfügbar.
        </p>

        <form onSubmit={submit} className="mt-8 grid gap-5 rounded-[2rem] border border-[#f4f1e8]/12 bg-[#0b1714] p-6 shadow-2xl shadow-black/25 md:p-8">
          <label className="grid gap-2 text-sm font-bold text-[#f4f1e8]/80">
            E-Mail
            <input
              required
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="rounded-2xl border border-[#f4f1e8]/15 bg-[#07110f] px-4 py-3 font-normal text-[#f4f1e8] outline-none focus:border-[#d6ff65]/60"
            />
          </label>
          <label className="grid gap-2 text-sm font-bold text-[#f4f1e8]/80">
            Passwort
            <input
              required
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="rounded-2xl border border-[#f4f1e8]/15 bg-[#07110f] px-4 py-3 font-normal text-[#f4f1e8] outline-none focus:border-[#d6ff65]/60"
            />
          </label>

          {error ? (
            <div role="alert" className="rounded-2xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-100">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className="rounded-full bg-[#d6ff65] px-6 py-3 font-black text-[#07110f] transition hover:bg-[#e2ff8a] disabled:cursor-wait disabled:opacity-60"
          >
            {submitting ? "Anmeldung läuft …" : "Anmelden"}
          </button>

          <div className="grid gap-2 border-t border-[#f4f1e8]/10 pt-5 text-sm text-[#f4f1e8]/60 sm:grid-cols-2">
            <Link href="/konto/passwort" className="font-bold text-[#d6ff65]">
              Passwort / Zugang einrichten
            </Link>
            <Link href="/mitglied-werden" className="font-bold text-[#d6ff65] sm:text-right">
              Noch kein Mitglied?
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
