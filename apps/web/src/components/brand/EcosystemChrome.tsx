"use client";

import { useEffect } from "react";

const ECOSYSTEM = [
  {
    name: "eDebatte",
    role: "Verstehen",
    description: "Offener Arbeitsraum für nachvollziehbare Erkenntnis und Beteiligung.",
    href: "https://www.edebatte.org",
  },
  {
    name: "VoiceOpenGov",
    role: "Verbinden",
    description: "Internationale Mitgliederbewegung für nachvollziehbare Entscheidungen.",
    href: "https://www.voiceopengov.org",
    current: true,
  },
  {
    name: "Vote4Gov",
    role: "Weiterdenken",
    description: "Gesellschaftliche Denkwerkstatt für demokratische Mitbestimmung im digitalen Zeitalter.",
    href: "https://www.vote4gov.eu",
  },
  {
    name: "Voxy",
    role: "Orientieren",
    description: "Erklärt, strukturiert und verbindet. Entscheidet nicht.",
    href: "https://www.edebatte.org",
  },
];

export function EcosystemChrome({ footer = true }: { footer?: boolean }) {
  useEffect(() => {
    const brandLink = document.querySelector<HTMLAnchorElement>("header a[href='/']");
    if (!brandLink || brandLink.dataset.ecosystemLogo === "true") return;

    brandLink.dataset.ecosystemLogo = "true";
    brandLink.setAttribute("aria-label", "VoiceOpenGov Startseite");
    brandLink.innerHTML = `
      <picture class="block h-11 w-[190px] sm:w-[230px]">
        <source media="(prefers-color-scheme: light)" srcset="/brand/voiceopengov-logo-light.svg" />
        <img src="/brand/voiceopengov-logo.svg" alt="VoiceOpenGov – Verbinden" class="h-full w-full object-contain object-left" width="420" height="96" />
      </picture>
    `;
  }, []);

  if (!footer) return null;

  return (
    <section
      aria-labelledby="ecosystem-heading"
      className="border-t border-slate-800 bg-slate-950 px-4 py-12 text-slate-100"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Ein Ökosystem. Vier klare Rollen.</p>
          <h2 id="ecosystem-heading" className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Verstehen. Verbinden. Weiterdenken. Orientieren.
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Eigenständige Angebote mit gemeinsamer Designsprache, Transparenz und einer klaren Grenze: eDebatte bleibt offen für alle.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ECOSYSTEM.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={`group rounded-2xl border p-4 transition ${
                item.current
                  ? "border-cyan-400/70 bg-cyan-400/10 shadow-[0_16px_40px_rgba(34,211,238,0.09)]"
                  : "border-slate-800 bg-slate-900/60 hover:border-slate-600 hover:bg-slate-900"
              }`}
            >
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">{item.role}</span>
              <strong className="mt-2 block text-lg text-white">{item.name}</strong>
              <span className="mt-2 block text-sm leading-5 text-slate-400 group-hover:text-slate-300">{item.description}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
