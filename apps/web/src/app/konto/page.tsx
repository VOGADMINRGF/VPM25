"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Member = {
  id: string;
  type: "person" | "organisation";
  email: string;
  firstName?: string;
  lastName?: string;
  orgName?: string;
  city?: string;
  country?: string;
  status: "active";
  isPublic: boolean;
  publicSupporter: boolean;
  wantsNewsletter: boolean;
  wantsNewsletterEdDebatte: boolean;
  confirmedAt?: string;
};

type SessionResponse =
  | { authenticated: false }
  | { authenticated: true; member: Member };

export default function KontoPage() {
  const [loading, setLoading] = useState(true);
  const [member, setMember] = useState<Member | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/auth/session", { cache: "no-store" })
      .then((response) => response.json() as Promise<SessionResponse>)
      .then((payload) => {
        if (cancelled) return;
        setMember(payload.authenticated ? payload.member : null);
      })
      .catch(() => {
        if (!cancelled) setMember(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" }).catch(() => null);
    window.location.href = "/login";
  }

  if (loading) {
    return (
      <main className="min-h-[72vh] bg-[#07110f] px-5 py-16 text-[#f4f1e8] md:px-8">
        <div className="mx-auto max-w-3xl text-[#f4f1e8]/60">Konto wird geladen …</div>
      </main>
    );
  }

  if (!member) {
    return (
      <main className="min-h-[72vh] bg-[#07110f] px-5 py-16 text-[#f4f1e8] md:px-8">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-[#f4f1e8]/12 bg-[#0b1714] p-8">
          <h1 className="text-3xl font-black">Dein Konto</h1>
          <p className="mt-3 text-[#f4f1e8]/65">Bitte melde dich an, um deinen Mitgliedsstatus zu sehen.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/login" className="rounded-full bg-[#d6ff65] px-5 py-3 font-black text-[#07110f]">Anmelden</Link>
            <Link href="/konto/passwort" className="rounded-full border border-[#f4f1e8]/20 px-5 py-3 font-bold">Zugang einrichten</Link>
          </div>
        </div>
      </main>
    );
  }

  const displayName =
    member.type === "organisation"
      ? member.orgName || "Organisation"
      : [member.firstName, member.lastName].filter(Boolean).join(" ") || "Mitglied";

  return (
    <main className="min-h-[72vh] bg-[#07110f] px-5 py-12 text-[#f4f1e8] md:px-8 md:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d6ff65]">Mitgliedskonto</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight">{displayName}</h1>
            <p className="mt-2 text-[#f4f1e8]/55">{member.email}</p>
          </div>
          <button
            type="button"
            onClick={logout}
            className="self-start rounded-full border border-[#f4f1e8]/20 px-5 py-2.5 text-sm font-bold transition hover:border-[#d6ff65]/50 hover:text-[#d6ff65] sm:self-auto"
          >
            Abmelden
          </button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <section className="rounded-[2rem] border border-[#d6ff65]/20 bg-[#0b1714] p-6">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#d6ff65]">Status</p>
            <div className="mt-4 flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-[#d6ff65] shadow-[0_0_18px_rgba(214,255,101,0.55)]" />
              <span className="text-xl font-black">Mitgliedschaft aktiv</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-[#f4f1e8]/55">
              Account und aktive Mitgliedschaft bleiben technisch getrennt. Dieser Status stammt aus dem bestätigten Mitgliedsdatensatz.
            </p>
          </section>

          <section className="rounded-[2rem] border border-[#f4f1e8]/12 bg-[#0b1714] p-6">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f4f1e8]/45">Region</p>
            <p className="mt-4 text-xl font-black">
              {[member.city, member.country].filter(Boolean).join(", ") || "Noch nicht hinterlegt"}
            </p>
            <p className="mt-3 text-sm text-[#f4f1e8]/55">
              Öffentliche Orts-Summen: {member.isPublic ? "freigegeben" : "nicht freigegeben"}
            </p>
          </section>

          <section className="rounded-[2rem] border border-[#f4f1e8]/12 bg-[#0b1714] p-6 md:col-span-2">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f4f1e8]/45">Kommunikation</p>
            <div className="mt-4 grid gap-3 text-sm text-[#f4f1e8]/70 sm:grid-cols-3">
              <StatusLine label="VoiceOpenGov Updates" active={member.wantsNewsletter} />
              <StatusLine label="eDebatte Updates" active={member.wantsNewsletterEdDebatte} />
              <StatusLine label="Unterstützer-Banner" active={member.publicSupporter} />
            </div>
          </section>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="rounded-full bg-[#d6ff65] px-5 py-3 font-black text-[#07110f]">Zur Bewegung</Link>
          <Link href="/konto/passwort" className="rounded-full border border-[#f4f1e8]/20 px-5 py-3 font-bold">Passwort ändern</Link>
          <Link href="/kontakt" className="rounded-full border border-[#f4f1e8]/20 px-5 py-3 font-bold">Kontakt</Link>
        </div>
      </div>
    </main>
  );
}

function StatusLine({ label, active }: { label: string; active: boolean }) {
  return (
    <div className="rounded-2xl border border-[#f4f1e8]/10 bg-[#07110f]/60 px-4 py-3">
      <span className="font-bold">{label}</span>
      <span className={`ml-2 ${active ? "text-[#d6ff65]" : "text-[#f4f1e8]/35"}`}>
        {active ? "an" : "aus"}
      </span>
    </div>
  );
}
