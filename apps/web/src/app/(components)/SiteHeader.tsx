"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale } from "@/context/LocaleContext";
import {
  DEFAULT_LOCALE,
  getLocaleConfig,
  isCoreLocale,
  SUPPORTED_LOCALES,
  type SupportedLocale,
} from "@/config/locales";
import { getHeaderStrings } from "./headerStrings";

export function SiteHeader() {
  const { locale, setLocale } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [localeOpen, setLocaleOpen] = useState(false);
  const router = useRouter();

  const activeLang = isCoreLocale(locale) ? locale : DEFAULT_LOCALE;
  const strings = getHeaderStrings(activeLang);

  const activeLocaleConfig = useMemo(
    () => getLocaleConfig(activeLang as SupportedLocale),
    [activeLang],
  );
  const localeLabel = useMemo(() => activeLang.toUpperCase(), [activeLang]);
  const localeOptions = useMemo(
    () =>
      SUPPORTED_LOCALES.filter(isCoreLocale).map((code) => {
        const cfg = getLocaleConfig(code);
        return {
          code,
          label: cfg.label,
          flag: cfg.flagEmoji || "🏳️",
        };
      }),
    [],
  );

  const ctaItem = useMemo(
    () => strings.navItems.find((item) => item.href === "/#join"),
    [strings.navItems],
  );
  const primaryNav = useMemo(
    () => strings.navItems.filter((item) => item.href !== "/#join"),
    [strings.navItems],
  );

  const localeAriaLabel = strings.aria.localeSelect.replace(
    "{label}",
    activeLocaleConfig.label,
  );


  useEffect(() => {
    if (!mobileOpen) setLocaleOpen(false);
  }, [mobileOpen]);

  const handleLocaleSelect = (next: SupportedLocale) => {
    setLocale(next);
    setLocaleOpen(false);
    setMobileOpen(false);
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="text-lg font-extrabold leading-tight tracking-tight"
            style={{
              backgroundImage: "linear-gradient(120deg,var(--brand-cyan),var(--brand-blue))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            VoiceOpenGov
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-200 md:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-sky-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {ctaItem && (
            <Link
              href={ctaItem.href}
              className="btn btn-primary hidden sm:inline-flex"
            >
              {ctaItem.label}
            </Link>
          )}
          <div className="relative">
            <button
              type="button"
              aria-label={localeAriaLabel}
              aria-expanded={localeOpen}
              onClick={() => setLocaleOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-200 hover:border-sky-300 hover:text-sky-200"
            >
              <span aria-hidden="true" className="text-base">
                {activeLocaleConfig.flagEmoji || "🏳️"}
              </span>
              <span>{localeLabel}</span>
            </button>
            {localeOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-2xl border border-slate-700 bg-slate-950 p-2 shadow-lg">
                {localeOptions.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleLocaleSelect(lang.code)}
                    className="flex w-full items-center justify-between rounded-xl px-2 py-1 text-[11px] font-semibold text-slate-200 hover:bg-slate-900"
                  >
                    <span className="inline-flex items-center gap-2">
                      <span aria-hidden="true">{lang.flag}</span>
                      <span className="uppercase">{lang.code}</span>
                    </span>
                    <span className="text-[10px] text-slate-400">{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            type="button"
            aria-label={strings.aria.openNav}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900 text-sm font-semibold text-slate-200 shadow-sm hover:border-sky-300 md:hidden"
          >
            <span className="sr-only">{strings.menuLabel}</span>
            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h10"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-800/80 bg-slate-950/95">
          <div className="mx-auto max-w-6xl space-y-4 px-4 py-4">
            <nav className="flex flex-col gap-2 text-sm font-semibold text-slate-100">
              {ctaItem && (
                <Link
                  href={ctaItem.href}
                  onClick={() => setMobileOpen(false)}
                  className="btn btn-primary w-full"
                >
                  {ctaItem.label}
                </Link>
              )}
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-left hover:border-sky-300 hover:bg-slate-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {localeOptions.length > 1 && (
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
                <span className="text-xs uppercase tracking-wide text-slate-400">
                  {strings.localeLabel}
                </span>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {localeOptions.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => handleLocaleSelect(lang.code)}
                      className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-[11px] font-semibold text-slate-200 hover:border-sky-300 hover:text-sky-200"
                    >
                      <span className="inline-flex items-center gap-2">
                        <span aria-hidden="true">{lang.flag}</span>
                        <span className="uppercase">{lang.code}</span>
                      </span>
                      <span className="text-[10px] text-slate-400">{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
