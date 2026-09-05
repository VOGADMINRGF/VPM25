import Link from "next/link";
import type { SupportedLocale } from "@/config/locales";
import { getFooterStrings } from "@/components/footerStrings";
import { getFooterEcosystemStrings } from "@/components/footerEcosystemStrings";
import { EDEBATTE_URL, VOTE4GOV_URL } from "@/config/links";

const currentYear = new Date().getFullYear();

type SiteFooterProps = { locale: SupportedLocale };

export default function SiteFooter({ locale }: SiteFooterProps) {
  const strings = getFooterStrings(locale);
  const ecosystem = getFooterEcosystemStrings(locale);

  return (
    <footer className="border-t border-[#f4f1e8]/10 bg-[#07110f] text-[#f4f1e8]" role="contentinfo">
      <section aria-labelledby="ecosystem-heading" className="border-b border-[#f4f1e8]/10 bg-[#0b1714]">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-18">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div><p className="text-xs font-black uppercase tracking-[0.22em] text-[#d6ff65]">{ecosystem.eyebrow}</p><h2 id="ecosystem-heading" className="mt-4 text-3xl font-black tracking-tight md:text-4xl">{ecosystem.title}</h2></div>
            <p className="max-w-3xl text-base leading-7 text-[#f4f1e8]/58">{ecosystem.body}</p>
          </div>
          <div className="mt-9 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <a href={EDEBATTE_URL} className="group rounded-3xl border border-[#f4f1e8]/10 bg-[#07110f]/70 p-5 transition hover:-translate-y-0.5 hover:border-[#d6ff65]/45"><span className="text-xs font-black uppercase tracking-[0.16em] text-[#d6ff65]">{ecosystem.items.edebatte.role}</span><strong className="mt-3 block text-xl">eDebatte ↗</strong><span className="mt-3 block text-sm leading-6 text-[#f4f1e8]/48 transition group-hover:text-[#f4f1e8]/68">{ecosystem.items.edebatte.description}</span></a>
            <Link href="/" aria-current="page" className="group rounded-3xl border border-[#d6ff65]/45 bg-[#d6ff65]/10 p-5 shadow-[0_20px_55px_rgba(214,255,101,0.06)] transition hover:-translate-y-0.5"><span className="text-xs font-black uppercase tracking-[0.16em] text-[#d6ff65]">{ecosystem.items.voiceopengov.role}</span><strong className="mt-3 block text-xl">VoiceOpenGov</strong><span className="mt-3 block text-sm leading-6 text-[#f4f1e8]/55 transition group-hover:text-[#f4f1e8]/72">{ecosystem.items.voiceopengov.description}</span></Link>
            <a href={VOTE4GOV_URL} className="group rounded-3xl border border-[#f4f1e8]/10 bg-[#07110f]/70 p-5 transition hover:-translate-y-0.5 hover:border-[#d6ff65]/45"><span className="text-xs font-black uppercase tracking-[0.16em] text-[#d6ff65]">{ecosystem.items.vote4gov.role}</span><strong className="mt-3 block text-xl">Vote4Gov ↗</strong><span className="mt-3 block text-sm leading-6 text-[#f4f1e8]/48 transition group-hover:text-[#f4f1e8]/68">{ecosystem.items.vote4gov.description}</span></a>
            <article className="rounded-3xl border border-[#f4f1e8]/10 bg-[#07110f]/70 p-5"><span className="text-xs font-black uppercase tracking-[0.16em] text-[#d6ff65]">{ecosystem.items.voxy.role}</span><strong className="mt-3 block text-xl">Voxy</strong><span className="mt-3 block text-sm leading-6 text-[#f4f1e8]/48">{ecosystem.items.voxy.description}</span></article>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-4">
          <div><Link href="/" className="text-sm font-black uppercase tracking-[0.2em] transition hover:text-[#d6ff65]">VoiceOpenGov</Link><p className="mt-3 font-bold text-[#f4f1e8]">{strings.brand.claim}</p><p className="mt-3 text-sm leading-6 text-[#f4f1e8]/48">{strings.brand.body}</p></div>
          <FooterNav title={strings.columns.main} ariaLabel={strings.aria.main} links={strings.links.main} />
          <FooterNav title={strings.columns.initiatives} ariaLabel={strings.aria.initiatives} links={strings.links.initiatives} />
          <FooterNav title={strings.columns.legal} ariaLabel={strings.aria.legal} links={strings.links.legal} />
        </div>
        <div className="mt-10 border-t border-[#f4f1e8]/10 pt-6 text-xs text-[#f4f1e8]/36 md:flex md:items-center md:justify-between"><p>© {currentYear} VoiceOpenGov</p><p className="mt-2 md:mt-0">{ecosystem.footerLine}</p></div>
      </div>
    </footer>
  );
}

type FooterNavProps = { title:string; ariaLabel:string; links:{ href:string; label:string; external?:boolean }[] };

function FooterNav({ title, ariaLabel, links }: FooterNavProps) {
  return <nav aria-label={ariaLabel}><p className="text-sm font-bold text-[#f4f1e8]">{title}</p><ul className="mt-4 space-y-2.5 text-sm text-[#f4f1e8]/48">{links.map((link) => <li key={`${link.href}-${link.label}`}>{link.external ? <a href={link.href} className="transition hover:text-[#d6ff65]">{link.label}</a> : <Link href={link.href} className="transition hover:text-[#d6ff65]">{link.label}</Link>}</li>)}</ul></nav>;
}
