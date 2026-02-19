import Link from "next/link";
import type { SupportedLocale } from "@/config/locales";
import { getFooterStrings } from "@/components/footerStrings";

const currentYear = new Date().getFullYear();

type SiteFooterProps = {
  locale: SupportedLocale;
};

export default function SiteFooter({ locale }: SiteFooterProps) {
  const strings = getFooterStrings(locale);

  return (
    <footer
      className="mt-16 border-t border-slate-800 bg-slate-950/90"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand / Claim */}
          <div>
            <Link
              href="/"
              className="inline-flex text-lg font-extrabold tracking-tight"
              style={{
                backgroundImage:
                  "linear-gradient(120deg,var(--brand-cyan),var(--brand-blue))",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              VoiceOpenGov
            </Link>
            <p className="mt-2 text-sm font-semibold text-slate-100">
              {strings.brand.claim}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {strings.brand.body}
            </p>
          </div>

          {/* Mitmachen */}
          <FooterNav
            title={strings.columns.main}
            ariaLabel={strings.aria.main}
            links={strings.links.main}
          />

          {/* Initiativen */}
          <FooterNav
            title={strings.columns.initiatives}
            ariaLabel={strings.aria.initiatives}
            links={strings.links.initiatives}
          />

          {/* Kontakt & Rechtliches */}
          <FooterNav
            title={strings.columns.legal}
            ariaLabel={strings.aria.legal}
            links={strings.links.legal}
          />
        </div>

        <div className="mt-8 border-t border-slate-800/70 pt-6 text-xs text-slate-500 md:flex md:items-center md:justify-between">
          <p>© {currentYear} VoiceOpenGov</p>
          <p className="mt-2 text-[11px] text-slate-500 md:mt-0">
            {strings.poweredBy}
          </p>
        </div>
      </div>
    </footer>
  );
}

type FooterNavProps = {
  title: string;
  ariaLabel: string;
  links: { href: string; label: string; external?: boolean }[];
};

function FooterNav({ title, ariaLabel, links }: FooterNavProps) {
  return (
    <nav aria-label={ariaLabel}>
      <p className="text-sm font-semibold text-slate-100">{title}</p>
      <ul className="mt-3 space-y-2 text-sm text-slate-400">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-slate-100 hover:underline hover:underline-offset-4"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="transition hover:text-slate-100 hover:underline hover:underline-offset-4"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
