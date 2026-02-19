"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { HumanCheck } from "@/components/security/HumanCheck";
import { getChapterStrings } from "./strings";

type Notice = { ok: boolean; msg: string } | null;

export default function ChapterIntakeForm({
  id,
  className,
}: {
  id?: string;
  className?: string;
}) {
  const { locale } = useLocale();
  const strings = getChapterStrings(locale);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [orgName, setOrgName] = useState("");
  const [location, setLocation] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [spaceAvailable, setSpaceAvailable] = useState("");
  const [spaceNotes, setSpaceNotes] = useState("");
  const [notes, setNotes] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [humanToken, setHumanToken] = useState("");
  const [notice, setNotice] = useState<Notice>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleInterest = (value: string) => {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    );
  };

  const resetForm = () => {
    setContactName("");
    setContactEmail("");
    setOrgName("");
    setLocation("");
    setInterests([]);
    setSpaceAvailable("");
    setSpaceNotes("");
    setNotes("");
    setPrivacyAccepted(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice(null);

    if (interests.length === 0) {
      setNotice({ ok: false, msg: strings.form.notices.interestRequired });
      return;
    }

    if (!privacyAccepted) {
      setNotice({ ok: false, msg: strings.form.notices.privacyRequired });
      return;
    }

    if (!humanToken) {
      setNotice({ ok: false, msg: strings.form.notices.humanRequired });
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        contactName: contactName.trim(),
        contactEmail: contactEmail.trim(),
        orgName: orgName.trim() || undefined,
        location: location.trim() || undefined,
        interests,
        spaceAvailable: spaceAvailable || undefined,
        spaceNotes: spaceNotes.trim() || undefined,
        notes: notes.trim() || undefined,
        privacyAccepted,
        humanToken,
        hp_chapter: honeypot.trim() || undefined,
      };

      const res = await fetch("/api/chapters/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data?.ok) {
        setNotice({
          ok: true,
          msg: strings.form.notices.submitOk,
        });
        resetForm();
      } else {
        setNotice({ ok: false, msg: strings.form.notices.submitFail });
      }
    } catch {
      setNotice({ ok: false, msg: strings.form.notices.submitFail });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id={id}
      className={`rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-sm ${
        className ?? ""
      }`}
    >
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-100">{strings.form.title}</h2>
        <p className="text-sm text-slate-300">
          {strings.form.subtitle}
        </p>
      </div>

      {notice && (
        <div
          className={`mt-4 rounded-xl border px-4 py-3 text-sm ${
            notice.ok
              ? "border-sky-900/60 bg-sky-950/40 text-sky-200"
              : "border-rose-900/60 bg-rose-950/40 text-rose-200"
          }`}
        >
          {notice.msg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="hp_chapter">{strings.form.labels.honeypot}</label>
          <input
            id="hp_chapter"
            name="hp_chapter"
            type="text"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-1">
            <label htmlFor="contactName" className="block text-xs font-semibold text-slate-300">
              {strings.form.labels.name}
            </label>
            <input
              id="contactName"
              name="contactName"
              type="text"
              autoComplete="name"
              required
              value={contactName}
              onChange={(event) => setContactName(event.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-800/40"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="contactEmail" className="block text-xs font-semibold text-slate-300">
              {strings.form.labels.email}
            </label>
            <input
              id="contactEmail"
              name="contactEmail"
              type="email"
              autoComplete="email"
              required
              value={contactEmail}
              onChange={(event) => setContactEmail(event.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-800/40"
            />
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-1">
            <label htmlFor="orgName" className="block text-xs font-semibold text-slate-300">
              {strings.form.labels.organisation}
            </label>
            <input
              id="orgName"
              name="orgName"
              type="text"
              value={orgName}
              onChange={(event) => setOrgName(event.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-800/40"
              placeholder={strings.form.placeholders.organisation}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="location" className="block text-xs font-semibold text-slate-300">
              {strings.form.labels.location}
            </label>
            <input
              id="location"
              name="location"
              type="text"
              required
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-800/40"
              placeholder={strings.form.placeholders.location}
            />
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {strings.form.labels.interest}
          </p>
          <div className="grid gap-2 md:grid-cols-2">
            {strings.form.interestOptions.map((option) => (
              <label
                key={option.value}
                className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-300 shadow-sm transition hover:border-sky-500/60"
              >
                <input
                  type="checkbox"
                  name="interests"
                  value={option.value}
                  checked={interests.includes(option.value)}
                  onChange={() => toggleInterest(option.value)}
                  className="mt-1 h-4 w-4 rounded border-slate-500 text-sky-500 focus:ring-sky-500"
                />
                <span>
                  <span className="block font-semibold text-slate-100">{option.label}</span>
                  <span className="text-[11px] text-slate-400">{option.hint}</span>
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-1">
            <label htmlFor="spaceAvailable" className="block text-xs font-semibold text-slate-300">
              {strings.form.labels.spaceAvailable}
            </label>
            <select
              id="spaceAvailable"
              name="spaceAvailable"
              value={spaceAvailable}
              onChange={(event) => setSpaceAvailable(event.target.value)}
              className="mt-1 block w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 shadow-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-800/40"
            >
              {strings.form.spaceOptions.map((option) => (
                <option key={option.value || "empty"} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <label htmlFor="spaceNotes" className="block text-xs font-semibold text-slate-300">
              {strings.form.labels.spaceNotes}
            </label>
            <input
              id="spaceNotes"
              name="spaceNotes"
              type="text"
              value={spaceNotes}
              onChange={(event) => setSpaceNotes(event.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-800/40"
              placeholder={strings.form.placeholders.spaceNotes}
            />
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="notes" className="block text-xs font-semibold text-slate-300">
            {strings.form.labels.notes}
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-800/40"
            placeholder={strings.form.placeholders.notes}
          />
        </div>

        <HumanCheck
          formId="chapter-intake"
          variant="compact"
          strings={strings.humanCheck}
          onSolved={({ token }) => setHumanToken(token)}
          onError={() => setHumanToken("")}
        />

        <div className="flex items-start gap-2 pt-1">
          <input
            id="privacyAccepted"
            name="privacyAccepted"
            type="checkbox"
            checked={privacyAccepted}
            onChange={(event) => setPrivacyAccepted(event.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-slate-500 text-sky-500 focus:ring-sky-500"
          />
          <label htmlFor="privacyAccepted" className="text-[11px] leading-snug text-slate-400">
            {strings.form.labels.privacy.before}{" "}
            <Link href="/datenschutz" className="font-semibold text-sky-300 underline underline-offset-4">
              {strings.form.labels.privacy.link}
            </Link>{" "}
            {strings.form.labels.privacy.after}
          </label>
        </div>

        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(14,116,144,0.35)] transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-sky-200 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto md:px-10"
          >
            {isSubmitting ? strings.form.submitting : strings.form.submit}
          </button>

          <a
            href="mailto:kontakt@voiceopengov.org"
            className="w-full rounded-full border border-sky-700/60 bg-slate-950/60 px-4 py-3 text-center text-sm font-semibold text-sky-200 shadow-[0_6px_18px_rgba(14,165,233,0.15)] transition hover:border-sky-400 hover:bg-slate-950 hover:text-sky-100 md:w-auto"
          >
            {strings.form.emailCta}
          </a>
        </div>
      </form>
    </section>
  );
}
