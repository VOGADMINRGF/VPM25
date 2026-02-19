"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { HumanChallenge } from "@/lib/spam/humanChallenge";
import { useLocale } from "@/context/LocaleContext";
import { getKontaktStrings } from "./strings";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, any>) => string;
      reset?: (id?: string) => void;
      remove?: (id?: string) => void;
    };
  }
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const CONTACT_EMAIL = "kontakt@voiceopengov.org";

type Props = {
  sent?: boolean;
  error?: string;
  challenge: HumanChallenge;
};

function useFormStartTimestamp() {
  const [formStartedAt, setFormStartedAt] = useState<string>("");
  useEffect(() => {
    setFormStartedAt(String(Date.now()));
  }, []);
  return formStartedAt;
}

function useTurnstile() {
  const [token, setToken] = useState("");
  const [error, setError] = useState<string | null>(null);
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || !widgetRef.current) return;
    let cancelled = false;

    const loadScript = () =>
      new Promise<void>((resolve, reject) => {
        if (window.turnstile) return resolve();
        const existing = document.querySelector<HTMLScriptElement>(
          "script[data-turnstile]"
        );
        if (existing) {
          existing.addEventListener("load", () => resolve(), { once: true });
          existing.addEventListener("error", () => reject(new Error("load")), {
            once: true,
          });
          return;
        }
        const script = document.createElement("script");
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        script.async = true;
        script.defer = true;
        script.dataset.turnstile = "1";
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("load"));
        document.head.appendChild(script);
      });

    loadScript()
      .then(() => {
        if (cancelled || !window.turnstile || !widgetRef.current) return;
        try {
          const id = window.turnstile.render(widgetRef.current, {
            sitekey: TURNSTILE_SITE_KEY,
            "response-field": false,
            callback: (val: string) => setToken(val),
            "error-callback": () => setError("verify_failed"),
            "expired-callback": () => setToken(""),
          });
          widgetIdRef.current = id;
        } catch (e) {
          setError("render_failed");
        }
      })
      .catch(() => setError("load_failed"));

    return () => {
      cancelled = true;
      if (widgetIdRef.current) {
        window.turnstile?.reset?.(widgetIdRef.current);
        window.turnstile?.remove?.(widgetIdRef.current);
      }
    };
  }, []);

  return { token, error, widgetRef };
}

function renderWithEmailLink(text: string) {
  const parts = text.split(CONTACT_EMAIL);
  if (parts.length === 1) return text;
  return (
    <>
      {parts[0]}
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="font-semibold text-amber-200 underline underline-offset-4"
      >
        {CONTACT_EMAIL}
      </a>
      {parts.slice(1).join(CONTACT_EMAIL)}
    </>
  );
}

export default function KontaktForm({ sent, error, challenge }: Props) {
  const { locale } = useLocale();
  const strings = getKontaktStrings(locale);
  const formStrings = strings.form;
  const formStartedAt = useFormStartTimestamp();
  const { token: turnstileToken, error: turnstileError, widgetRef } = useTurnstile();
  const showTurnstile = Boolean(TURNSTILE_SITE_KEY);
  const displayError = error
    ? formStrings.errors[error] ?? formStrings.errors.invalid
    : null;
  const [shapes, setShapes] = useState(formStrings.shapes);

  const reshuffleShapes = () => {
    const arr = [...formStrings.shapes];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setShapes(arr);
  };

  useEffect(() => {
    setShapes(formStrings.shapes);
  }, [formStrings.shapes]);

  return (
    <section
      id="kontaktformular"
      className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 shadow-sm ring-1 ring-slate-800"
    >
      <h2 className="text-base font-semibold text-slate-100 text-center">
        {formStrings.title}
      </h2>
      <p className="mt-1 text-center text-xs text-slate-400">
        {formStrings.subtitle}
      </p>
      {sent && (
        <div className="mt-3 rounded-xl border border-sky-900/60 bg-sky-950/40 px-4 py-3 text-sm text-sky-200">
          {formStrings.success}
        </div>
      )}
      {displayError && (
        <div className="mt-3 rounded-xl border border-rose-900/60 bg-rose-950/40 px-4 py-3 text-sm text-rose-200">
          {displayError}
        </div>
      )}
      {!sent && turnstileError && showTurnstile && (
        <div className="mt-3 rounded-xl border border-amber-900/60 bg-amber-950/40 px-4 py-3 text-xs text-amber-200">
          {renderWithEmailLink(formStrings.turnstileError)}
        </div>
      )}

      <form className="mt-5 space-y-4 relative" action="/api/contact" method="POST">
        <input type="hidden" name="formStartedAt" value={formStartedAt} readOnly />
        <input type="hidden" name="turnstileToken" value={turnstileToken} readOnly />
        <input type="hidden" name="humanChallengeId" value={challenge.id} readOnly />

        <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="website">{formStrings.honeypot}</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          <input id="hp_contact" name="hp_contact" type="text" tabIndex={-1} autoComplete="off" />
          <input id="hp_company" name="hp_company" type="text" tabIndex={-1} autoComplete="off" />
          <input id="hp_message_copy" name="hp_message_copy" type="text" tabIndex={-1} autoComplete="off" />
          <input id="hp_social" name="hp_social" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <label htmlFor="category" className="block text-xs font-semibold text-slate-300">
            {formStrings.categoryLabel}
          </label>
          <select
            id="category"
            name="category"
            required
            className="mt-1 block w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 shadow-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-800/40"
          >
            <option value="">{formStrings.categoryPlaceholder}</option>
            {formStrings.categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-1">
            <label htmlFor="name" className="block text-xs font-semibold text-slate-300">
              {formStrings.nameLabel}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-800/40"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="block text-xs font-semibold text-slate-300">
              {formStrings.emailLabel}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-800/40"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="phone" className="block text-xs font-semibold text-slate-300">
            {formStrings.phoneLabel}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-800/40"
            placeholder={formStrings.phonePlaceholder}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="subject" className="block text-xs font-semibold text-slate-300">
            {formStrings.subjectLabel}
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-800/40"
            placeholder={formStrings.subjectPlaceholder}
            maxLength={200}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="message" className="block text-xs font-semibold text-slate-300">
            {formStrings.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-800/40"
            placeholder={formStrings.messagePlaceholder}
            maxLength={5000}
          />
        </div>

        <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-4 shadow-sm">
          <div className="flex flex-col gap-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
              {formStrings.humanCheck.title}
            </p>
            <p className="text-sm text-slate-300">
              {formStrings.humanCheck.description}
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-semibold text-slate-400">
                  {formStrings.humanCheck.clickCheckLabel}
                </p>
                <button
                  type="button"
                  onClick={reshuffleShapes}
                  className="text-[11px] font-semibold text-sky-300 hover:text-sky-200 underline underline-offset-4"
                >
                  {formStrings.humanCheck.reshuffle}
                </button>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {shapes.map((shape) => (
                  <label className="block" key={shape.value}>
                    <input
                      type="radio"
                      name="humanShape"
                      value={shape.value}
                      required={shape.value === "kreis"}
                      className="peer sr-only"
                      aria-label={`${shape.label} (${shape.hint})`}
                    />
                    <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 shadow-sm transition hover:border-sky-500/60 hover:shadow-md peer-checked:border-sky-500 peer-checked:ring-2 peer-checked:ring-sky-800/40">
                      <span className="flex h-10 w-10 items-center justify-center">
                        {shape.shape === "circle" && (
                          <span className={`block h-8 w-8 rounded-full ${shape.gradient} shadow-inner`} />
                        )}
                        {shape.shape === "rect" && (
                          <span className={`block h-8 w-8 rounded-lg ${shape.gradient}`} />
                        )}
                        {shape.shape === "triangle" && (
                          <span
                            className={`block h-8 w-8 ${shape.gradient}`}
                            style={{ clipPath: "polygon(50% 0, 0 100%, 100% 100%)" }}
                          />
                        )}
                      </span>
                      <div className="leading-tight">
                        <div className="text-sm font-semibold text-slate-100">{shape.label}</div>
                        <div className="text-[11px] text-slate-400">
                          {shape.hint}{" "}
                          {shape.value === "kreis"
                            ? formStrings.humanCheck.shapeSelected
                            : formStrings.humanCheck.shapeNot}
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="humanAnswer" className="text-[11px] font-semibold text-slate-400">
                {formStrings.humanCheck.writingLabel}
              </label>
              <p className="text-[11px] text-slate-400">
                {formStrings.humanCheck.writingHelp}
              </p>
              <input
                id="humanAnswer"
                name="humanAnswer"
                type="text"
                autoComplete="off"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-800/40"
                placeholder={formStrings.humanCheck.writingPlaceholder}
              />
            </div>
          </div>
        </div>

        {showTurnstile && (
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-3">
            <p className="text-[11px] text-slate-400">
              {formStrings.turnstileLabel}
            </p>
            <div ref={widgetRef} className="mt-2" aria-live="polite" />
          </div>
        )}

        <div className="flex items-start gap-2 pt-1">
          <input
            id="newsletterOptIn"
            name="newsletterOptIn"
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-slate-500 text-sky-500 focus:ring-sky-500"
          />
          <label htmlFor="newsletterOptIn" className="text-[11px] leading-snug text-slate-400">
            {formStrings.newsletterLabel}
          </label>
        </div>

        <p className="text-[11px] text-slate-400">
          {formStrings.privacyNote}
        </p>

        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(14,116,144,0.35)] transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-sky-200 md:w-auto md:px-10"
          >
            {formStrings.submit}
          </button>

          <Link
            href={`mailto:${CONTACT_EMAIL}`}
            className="w-full rounded-full border border-sky-700/60 bg-slate-950/60 px-4 py-3 text-center text-sm font-semibold text-sky-200 shadow-[0_6px_18px_rgba(14,165,233,0.15)] transition hover:border-sky-400 hover:bg-slate-950 hover:text-sky-100 md:w-auto"
          >
            {formStrings.emailCta}
          </Link>
        </div>
      </form>
    </section>
  );
}
