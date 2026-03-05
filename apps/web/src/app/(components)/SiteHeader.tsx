"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale } from "@/context/LocaleContext";
import { getLocaleConfig, SUPPORTED_LOCALES, type SupportedLocale } from "@/config/locales";
import { getHeaderStrings } from "./headerStrings";

export function SiteHeader() {
  const { locale, setLocale } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [localeOpen, setLocaleOpen] = useState(false);
  const [themeMode, setThemeMode] = useState<"system" | "light">("system");
  const router = useRouter();
  const strings = getHeaderStrings(locale);

  const activeLang = locale || "de";
  const activeLocaleConfig = useMemo(
    () => getLocaleConfig(activeLang as SupportedLocale),
    [activeLang],
  );
  const localeLabel = useMemo(
    () => activeLang.toUpperCase(),
    [activeLang],
  );
  const localeOptions = SUPPORTED_LOCALES.map((code) => {
    const cfg = getLocaleConfig(code);
    return {
      code,
      label: cfg.label,
      flag: cfg.flagEmoji || "🏳️",
    };
  });
  const localeAriaLabel = strings.aria.localeSelect.replace("{label}", activeLocaleConfig.label);

  useEffect(() => {
    if (!mobileOpen) setLocaleOpen(false);
  }, [mobileOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("vog_theme");
    if (stored === "system" || stored === "light") {
      setThemeMode(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      const useLight = themeMode === "light" || (themeMode === "system" && !media.matches);
      if (useLight) {
        document.documentElement.dataset.theme = "light";
        document.documentElement.style.colorScheme = "light";
      } else {
        document.documentElement.removeAttribute("data-theme");
        document.documentElement.style.colorScheme = "dark";
      }
    };

    apply();
    if (themeMode === "system") {
      media.addEventListener("change", apply);
      return () => media.removeEventListener("change", apply);
    }
    return;
  }, [themeMode]);

  const handleThemeSelect = (next: "system" | "light") => {
    setThemeMode(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("vog_theme", next);
    }
  };

  const handleLocaleSelect = (next: SupportedLocale) => {
    setLocale(next);
    setLocaleOpen(false);
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className="text-lg font-extrabold leading-tight tracking-tight"
            style={{
              backgroundImage:
                "linear-gradient(120deg,var(--brand-cyan),var(--brand-blue))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            VoiceOpenGov
          </span>
        </Link>

        {/* Rechts: Avatar/Account + Hamburger */}
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
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
              <div className="absolute right-0 mt-2 w-44 rounded-2xl border border-slate-700 bg-slate-950 p-2 shadow-lg">
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900 text-sm font-semibold text-slate-200 shadow-sm hover:border-sky-300"
          >
            <>
              <span className="sr-only">{strings.menuLabel}</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h10"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                />
              </svg>
            </>
          </button>
        </div>
      </div>

      {/* Mobile-Drawer */}
      {mobileOpen && (
        <div className="border-t border-slate-800/80 bg-slate-950/95">
          <div className="mx-auto max-w-6xl px-4 py-4 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs uppercase tracking-wide text-slate-400">
                {strings.navigationLabel}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wide text-slate-400">
                  {strings.theme.label}
                </span>
                <div className="inline-flex rounded-full border border-slate-700 bg-slate-900 p-1 text-[11px] font-semibold text-slate-300">
                  {(["system", "light"] as const).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => handleThemeSelect(mode)}
                      className={`rounded-full px-3 py-1 ${
                        themeMode === mode ? "bg-sky-600 text-white" : "hover:bg-slate-900"
                      }`}
                    >
                      {mode === "system" ? strings.theme.system : strings.theme.light}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wide text-slate-400">
                {strings.localeLabel}
              </span>
              <div className="grid grid-cols-2 gap-2">
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

            <nav
              aria-label={strings.aria.mobileNav}
              className="flex flex-col gap-2 text-sm font-semibold text-slate-100"
            >
              {strings.navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-left hover:border-sky-300 hover:bg-slate-900"
                >
                  <span className="block text-sm font-semibold">
                    {item.label}
                  </span>
                  <span className="mt-0.5 block text-[11px] font-normal text-slate-400">
                    {item.description}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
