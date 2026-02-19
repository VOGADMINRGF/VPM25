"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SupporterSection } from "@/components/join/SupporterSection";
import { COUNTRY_OPTIONS } from "@/lib/countries";

type Notice = { ok: boolean; msg: string } | null;

const MAX_IMAGE_BYTES = 2 * 1024 * 1024;
const MIN_AGE = 16;
const MOTIVATION_MAX = 160;
const MOTIVATION_PRESETS = [
  "Ich möchte meine Perspektive strukturiert und nachvollziehbar einbringen.",
  "Ich unterstütze VoiceOpenGov, weil klare Entscheidungswege wichtig sind.",
  "Ich möchte Entscheidungen verstehen und ihre Begründung nachvollziehen.",
  "Ich will mich {ort} sachlich beteiligen – mit klaren Optionen.",
  "Ich unterstütze eine formale Dokumentation von Entscheidung und Status.",
];

function applyMotivationTemplate(template: string, cityValue: string) {
  const place = cityValue.trim() ? `in ${cityValue.trim()}` : "in meinem Ort";
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
      setNotice({ ok: false, msg: "Bitte eine Bilddatei auswählen." });
      return;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      setNotice({ ok: false, msg: "Bitte ein Bild unter 2 MB hochladen." });
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      setDataUrl(result || null);
      setFileName(file.name);
    };
    reader.onerror = () => {
      setNotice({ ok: false, msg: "Bild konnte nicht gelesen werden." });
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
      setNotice({ ok: false, msg: "Bitte Datenschutzhinweis akzeptieren." });
      return;
    }

    if (memberType === "person") {
      if (!birthDate.trim()) {
        setNotice({ ok: false, msg: "Bitte gib dein Geburtsdatum an." });
        return;
      }
      if (!isAtLeastAge(birthDate, MIN_AGE)) {
        setNotice({ ok: false, msg: "Teilnahme ist erst ab 16 Jahren möglich." });
        return;
      }
    }

    if (isPublic && !city.trim()) {
      setNotice({ ok: false, msg: "Bitte gib deinen Ort an (für die Orts-Summen)." });
      return;
    }

    setIsSubmitting(true);
    try {
      const avatarValue =
        memberType === "person" ? avatarDataUrl || undefined : avatarUrl.trim() || undefined;

      if (publicSupporter && supporterMode === "reuse" && !avatarValue) {
        setNotice({
          ok: false,
          msg: "Bitte Profilfoto/Logo hochladen oder 'Anderes Bild' wählen.",
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
          setNotice({ ok: true, msg: "Bitte E-Mail bestätigen – wir haben dir einen Link geschickt." });
          resetForm();
        } else {
        setNotice({ ok: false, msg: "Das hat nicht geklappt. Bitte später erneut versuchen." });
      }
    } catch {
      setNotice({ ok: false, msg: "Das hat nicht geklappt. Bitte später erneut versuchen." });
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
              <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-semibold text-sky-300">
                Strukturierte Beteiligung
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
                  <span className="block headline-gradient">
                    Mehrheiten, die man prüfen kann.
                  </span>
                  <span className="block text-slate-100">Neutral, nachvollziehbar, verantwortbar.</span>
                </h1>
                <p className="max-w-2xl text-lg text-slate-300 md:text-xl">
                  VoiceOpenGov ermöglicht strukturierte Beteiligung mit klaren Entscheidungswegen,
                  dokumentierten Optionen und nachvollziehbaren Ergebnissen.
                </p>
                <p className="max-w-2xl text-sm text-slate-400">
                  Wir freuen uns über Beiträge von Menschen, die ihre Meinung regelmäßig einbringen
                  möchten – respektvoll, sachlich und lösungsorientiert.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/#mitmachen" className="btn btn-primary">
                    Kostenfrei beitreten
                  </Link>
                  <Link href="/unterstuetzen" className="btn btn-ghost">
                    Initiative unterstützen
                  </Link>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      title: "Strukturierte Entscheidungsdimensionen",
                      body: "Ziel, Wirkung, Kosten, Zeit, Risiken, Zuständigkeit.",
                    },
                    {
                      title: "Klare Verantwortungszuordnung",
                      body: "Verantwortliche Stellen werden benannt und dokumentiert.",
                    },
                    {
                      title: "Formaler Berichtsteil",
                      body: "Beschluss, Begründung, Verantwortlichkeit, Status.",
                    },
                  ].map((item) => (
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
                  <span>Entscheidungslogik</span>
                  <span className="rounded-full border border-slate-700 bg-slate-950/70 px-2 py-0.5 text-[10px] text-slate-300">
                    Civic-Level
                  </span>
                </div>
                <h2 className="mt-3 text-xl font-semibold text-slate-100">
                  Civic-Level 5 Optionen
                </h2>
                <div className="mt-4 grid gap-2">
                  {[
                    "1. Informieren",
                    "2. Feedback einholen",
                    "3. Mitgestalten",
                    "4. Entscheiden",
                    "5. Umsetzung begleiten",
                  ].map((step) => (
                    <div
                      key={step}
                      className="rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-2 text-xs text-slate-300"
                    >
                      {step}
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-xs text-slate-400">
                  Realistische Zahlen: Beiträge und Reichweite werden im Bericht ausgewiesen.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mitmachen" className="mx-auto mt-12 max-w-6xl px-4">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Mitgliedschaft
              </p>
              <h2 className="text-2xl font-bold text-slate-100">Kostenfrei beitreten</h2>
              <p className="mt-1 text-xs text-slate-400">
                Double-Opt-In: Bitte E-Mail bestätigen. Mitgliedschaft ist kostenfrei.
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
                  {value === "person" ? "Person" : "Organisation"}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {memberType === "person" && (
              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Vorname</label>
                  <input
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-800/40"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Nachname</label>
                  <input
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-800/40"
                  />
                </div>
                <div className="space-y-1 md:col-span-2">
                  <label className="text-xs font-medium text-slate-300">Geburtsdatum</label>
                  <input
                    required
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    max={maxBirthDateIso(MIN_AGE)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-800/40"
                  />
                  <p className="text-[11px] text-slate-400">Teilnahme ab 16 Jahren.</p>
                </div>
              </div>
            )}

            {memberType === "organisation" && (
              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-1 md:col-span-2">
                  <label className="text-xs font-medium text-slate-300">Organisation</label>
                  <input
                    required
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-800/40"
                  />
                </div>
              </div>
            )}

            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">E-Mail</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-800/40"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Ort</label>
                <input
                  required={isPublic}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-800/40"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Land (optional)</label>
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-800/40"
                >
                  <option value="">Bitte wählen</option>
                  {COUNTRY_OPTIONS.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Orts-Sichtbarkeit</label>
              <div className="inline-flex rounded-full border border-slate-700 bg-slate-950/60 p-1 text-xs font-semibold text-slate-300">
                <button
                  type="button"
                  onClick={() => setIsPublic(true)}
                  className={`rounded-full px-3 py-1 ${isPublic ? "bg-sky-600 text-white" : "hover:bg-slate-900"}`}
                >
                  Öffentlich
                </button>
                <button
                  type="button"
                  onClick={() => setIsPublic(false)}
                  className={`rounded-full px-3 py-1 ${!isPublic ? "bg-sky-600 text-white" : "hover:bg-slate-900"}`}
                >
                  Privat
                </button>
              </div>
              <p className="text-xs text-slate-400">
                Öffentlich zeigt nur Orts-Summen. Keine Einzelprofile oder Rohdaten.
              </p>
            </div>

            {(isPublic || publicSupporter) && memberType === "organisation" && (
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Logo-Link (optional)</label>
                <input
                  type="url"
                  value={avatarUrl}
                  onChange={(e) => setAvatarUrl(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-800/40"
                  placeholder="https://"
                />
              </div>
            )}

            {(isPublic || publicSupporter) && memberType === "person" && (
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">
                  Profilfoto hochladen (optional)
                </label>
                <input
                  ref={avatarFileRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleImageFile(e.target.files?.[0] ?? null, setAvatarDataUrl, setAvatarFileName)
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-800/40"
                />
                {avatarFileName && (
                  <p className="text-[11px] text-slate-400">Ausgewählt: {avatarFileName}</p>
                )}
                <p className="text-[11px] text-slate-400">Max. 2 MB, JPG/PNG.</p>
              </div>
            )}

            <div className="space-y-3">
              <SupporterSection
                enabled={publicSupporter}
                mode={supporterMode}
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
                    Motivation (optional)
                  </label>
                  <span className="text-[11px] text-slate-400">
                    {supporterNote.length}/{MOTIVATION_MAX}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {MOTIVATION_PRESETS.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() =>
                        setSupporterNote(
                          applyMotivationTemplate(preset, city).slice(0, MOTIVATION_MAX),
                        )
                      }
                      className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-[11px] font-semibold text-slate-200 hover:border-sky-300 hover:text-sky-200"
                    >
                      Vorschlag
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setSupporterNote("")}
                    className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-[11px] font-semibold text-slate-400 hover:text-slate-200"
                  >
                    Leeren
                  </button>
                </div>
                <textarea
                  rows={3}
                  maxLength={MOTIVATION_MAX}
                  value={supporterNote}
                  onChange={(e) => setSupporterNote(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-800/40"
                  placeholder="Warum bist du Teil der Community?"
                />
                <p className="text-[11px] text-slate-400">
                  Öffentlich sichtbar nur, wenn du als Unterstützer aktiviert bist. Bitte keine
                  Kontaktdaten.
                </p>
              </div>

              {publicSupporter && supporterMode === "separate" && memberType === "organisation" && (
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">
                    Unterstützer-Bild (optional)
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
                    Unterstützer-Bild (optional)
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
                      Ausgewählt: {supporterImageFileName}
                    </p>
                  )}
                  <p className="text-[11px] text-slate-400">Max. 2 MB, JPG/PNG.</p>
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
              <span>Newsletter-Updates zu VoiceOpenGov (optional)</span>
            </label>
            <label className="flex items-start gap-2 text-xs text-slate-300">
              <input
                type="checkbox"
                checked={wantsNewsletterEdDebatte}
                onChange={(e) => setWantsNewsletterEdDebatte(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-500 text-sky-500"
              />
              <span>Updates zu eDebatte (Werkzeug) (optional)</span>
            </label>

            <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs font-medium text-slate-300">Initiative unterstützen</p>
              <p className="text-xs text-slate-400">
                Freiwillige Unterstützung hält Infrastruktur, Recherche und Moderation am Laufen. Keine Stimmvorteile.
              </p>
              <Link href="/unterstuetzen" className="btn btn-ghost">
                Unterstützungswege ansehen
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
                Ich akzeptiere die{" "}
                <Link href="/datenschutz" className="font-semibold text-slate-100 underline underline-offset-2">
                  Datenschutzhinweise
                </Link>{" "}
                und den Double-Opt-In Hinweis.
              </span>
            </label>

            <div className="flex flex-wrap items-center gap-3">
              <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                {isSubmitting ? "Senden ..." : "Jetzt eintragen"}
              </button>
              {notice && (
                <span
                  className={`text-xs ${notice.ok ? "text-sky-300" : "text-red-400"}`}
                  role="status"
                >
                  {notice.msg}
                </span>
              )}
            </div>
          </form>

          <div className="mt-4 space-y-2 text-xs text-slate-300">
            <p>Mitgliedschaft ist kostenfrei.</p>
            <p>
              Unterstützung ist freiwillig und hilft beim Aufbau von Moderation, Dossiers und
              Infrastruktur. Details findest du unter{" "}
              <Link href="/unterstuetzen" className="font-semibold text-slate-100 underline underline-offset-2">
                Unterstützen
              </Link>{" "}
              oder per Mail an{" "}
              <a href="mailto:members@voiceopengov.org" className="font-semibold text-slate-100">
                members@voiceopengov.org
              </a>
              .
            </p>
            <p>Öffentlich/Privat: Öffentlich zeigt nur Orts-Summen (keine Einzelprofile, keine Rohdaten).</p>
          </div>
        </div>
      </section>

      <section id="unterstuetzen" className="mx-auto mt-14 max-w-6xl px-4 pb-10">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Unterstützen</p>
              <h3 className="text-xl font-semibold text-slate-100">
                Unterstütze die Initiative – transparent und ohne Stimmvorteile.
              </h3>
              <p className="text-sm text-slate-300">
                Unterstützung ermöglicht Infrastruktur, Recherche und Übersetzungen. Wir halten
                alles nachvollziehbar und offen dokumentiert.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/unterstuetzen" className="btn btn-primary">
                Unterstützungswege
              </Link>
              <Link href="/kontakt" className="btn btn-ghost">
                Fragen stellen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
