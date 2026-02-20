"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { GrundlagenEntry } from "../strings";
import type { GrundlagenRelease } from "../versioning";
import { getBand } from "../bands";

type GrundlagenReaderStrings = {
  label: string;
  tocLabel: string;
  volumeLabel: string;
  translation: {
    notice: string;
    originalButton: string;
    translatedButton: string;
    loading: string;
    unavailable: string;
  };
  release: {
    label: string;
    versionLabel: string;
    statusDraft: string;
    statusStable: string;
    changelogLabel: string;
  };
  citation: {
    label: string;
    note: string;
    copy: string;
    copied: string;
  };
  download: {
    label: string;
    md: string;
    txt: string;
  };
  overview: {
    contribute: {
      ctas: {
        statements: string;
        vote: string;
        support: string;
      };
    };
  };
  supportNote: string;
  order: {
    title: string;
    body: string;
    cta: string;
  };
  ctas: { join: string; support: string };
};

type TranslationState = "idle" | "loading" | "ready" | "error";

export default function GrundlagenReaderClient({
  locale,
  strings,
  entry,
  orderPrice,
  release,
  siteUrl,
}: {
  locale: string;
  strings: GrundlagenReaderStrings;
  entry: GrundlagenEntry;
  orderPrice: string;
  release: GrundlagenRelease | null;
  siteUrl: string;
}) {
  const [translatedEntry, setTranslatedEntry] = useState<GrundlagenEntry | null>(null);
  const [translationState, setTranslationState] = useState<TranslationState>("idle");
  const [showOriginal, setShowOriginal] = useState(false);
  const [copied, setCopied] = useState(false);
  const shouldTranslate = locale !== "de";

  useEffect(() => {
    if (!shouldTranslate) {
      setTranslatedEntry(null);
      setTranslationState("idle");
      setShowOriginal(false);
      return;
    }

    let cancelled = false;
    const controller = new AbortController();
    const run = async () => {
      try {
        setTranslationState("loading");
        const res = await fetch(
          `/api/grundlagen/${entry.slug}/translate?lang=${encodeURIComponent(locale)}`,
          {
            signal: controller.signal,
          },
        );
        if (!res.ok) throw new Error("translation_failed");
        const data = await res.json();
        if (!data?.ok || !data?.entry) throw new Error("translation_failed");
        if (!cancelled) {
          setTranslatedEntry(data.entry as GrundlagenEntry);
          setTranslationState("ready");
        }
      } catch {
        if (!cancelled) {
          setTranslationState("error");
        }
      }
    };

    run();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [entry.slug, locale, shouldTranslate]);

  const bandNumber = getBand(entry.slug)?.roman ?? "I";
  const statusLabel =
    release?.status === "stabil" ? strings.release.statusStable : strings.release.statusDraft;
  const formattedDate = useMemo(() => {
    if (!release?.date) return "";
    try {
      const date = new Date(`${release.date}T00:00:00Z`);
      return new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }).format(date);
    } catch {
      return release.date;
    }
  }, [locale, release?.date]);
  const permalink = `${siteUrl.replace(/\/$/, "")}/grundlagen/${entry.slug}`;
  const citationText = release
    ? `VoiceOpenGov. ${strings.volumeLabel} ${bandNumber}: ${entry.title}. ${strings.release.versionLabel} ${release.version} · ${statusLabel} · ${strings.release.label} ${formattedDate}. ${permalink}`
    : `VoiceOpenGov. ${strings.volumeLabel} ${bandNumber}: ${entry.title}. ${permalink}`;
  const view = useMemo(() => {
    if (!shouldTranslate) return entry;
    if (translationState !== "ready" || !translatedEntry) return entry;
    return showOriginal ? entry : translatedEntry;
  }, [entry, shouldTranslate, showOriginal, translatedEntry, translationState]);

  const showTranslationToggle = shouldTranslate && translationState === "ready";
  const showTranslationNotice = shouldTranslate;

  return (
    <>
      <div className="mb-4">
        <Link
          href="/grundlagen"
          className="inline-flex items-center text-xs font-semibold text-sky-300 hover:underline"
        >
          ← {strings.label}
        </Link>
      </div>
      <header className="space-y-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {strings.label}
        </p>
        <h1 className="text-3xl font-extrabold leading-tight headline-gradient md:text-4xl">
          {strings.volumeLabel} {bandNumber}: {view.title}
        </h1>
        <p className="text-sm text-slate-300 md:text-base">{view.subtitle}</p>
        <p className="text-sm text-slate-400">{view.intro}</p>
        {release && (
          <div className="mx-auto mt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            <span className="rounded-full border border-slate-800 bg-slate-950/70 px-3 py-1">
              {strings.release.versionLabel} {release.version}
            </span>
            <span className="rounded-full border border-slate-800 bg-slate-950/70 px-3 py-1">
              {statusLabel}
            </span>
            <span className="rounded-full border border-slate-800 bg-slate-950/70 px-3 py-1">
              {strings.release.label} {formattedDate}
            </span>
          </div>
        )}

        {showTranslationNotice && (
          <div className="mx-auto mt-4 max-w-2xl rounded-2xl border border-slate-800 bg-slate-950/60 p-3 text-left">
            <p className="text-xs text-slate-300">{strings.translation.notice}</p>
            {translationState === "loading" && (
              <p className="mt-1 text-xs text-slate-400">{strings.translation.loading}</p>
            )}
            {translationState === "error" && (
              <p className="mt-1 text-xs text-red-400">{strings.translation.unavailable}</p>
            )}
            {showTranslationToggle && (
              <button
                type="button"
                onClick={() => setShowOriginal((prev) => !prev)}
                className="mt-2 text-xs font-semibold text-sky-300 hover:underline"
              >
                {showOriginal
                  ? strings.translation.translatedButton
                  : strings.translation.originalButton}
              </button>
            )}
          </div>
        )}
      </header>

      <div className="mt-8 grid gap-6 md:grid-cols-[220px_1fr]">
        <nav className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {strings.tocLabel}
          </p>
          <ul className="mt-3 space-y-2">
            {view.sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="hover:text-slate-100 hover:underline hover:underline-offset-4"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <article className="space-y-8">
          {view.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h2 className="text-lg font-semibold text-slate-100">{section.title}</h2>
              {section.body.map((paragraph, idx) => (
                <p key={idx} className="mt-2 text-sm text-slate-300">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </article>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link href="/#mitmachen" className="btn btn-primary">
          {strings.ctas.join}
        </Link>
        <Link href="/statements" className="btn btn-ghost">
          {strings.overview.contribute.ctas.statements}
        </Link>
        <Link href="/swipes" className="btn btn-ghost">
          {strings.overview.contribute.ctas.vote}
        </Link>
        <Link href="/unterstuetzen" className="btn btn-ghost">
          {strings.overview.contribute.ctas.support}
        </Link>
      </div>
      <p className="mt-4 text-center text-xs text-slate-400">{strings.supportNote}</p>

      {release?.changelog?.length ? (
        <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-5 text-sm text-slate-300 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {strings.release.changelogLabel}
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {release.changelog.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-5 text-sm text-slate-300 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          {strings.citation.label}
        </p>
        <p className="mt-2 text-xs text-slate-400">{strings.citation.note}</p>
        <div className="mt-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-3 text-xs text-slate-200">
          {citationText}
        </div>
        <button
          type="button"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(citationText);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            } catch {
              setCopied(false);
            }
          }}
          className="mt-3 text-xs font-semibold text-sky-300 hover:underline"
        >
          {copied ? strings.citation.copied : strings.citation.copy}
        </button>
      </div>

      <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-5 text-center text-sm text-slate-300 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          {strings.download.label}
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-3">
          <a
            href={`/api/grundlagen/${entry.slug}/download?format=md`}
            className="btn btn-ghost"
          >
            {strings.download.md}
          </a>
          <a
            href={`/api/grundlagen/${entry.slug}/download?format=txt`}
            className="btn btn-ghost"
          >
            {strings.download.txt}
          </a>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/80 p-5 text-center shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          {strings.order.title}
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-slate-100">
          {orderPrice}
        </h3>
        <p className="mt-2 text-sm text-slate-300">{strings.order.body}</p>
        <Link href={`/grundlagen/bestellen?band=${entry.slug}`} className="btn btn-ghost mt-4">
          {strings.order.cta}
        </Link>
      </div>
    </>
  );
}
