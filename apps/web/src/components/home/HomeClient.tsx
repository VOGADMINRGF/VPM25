"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { getCountryOptions } from "@/lib/countries";
import { EDEBATTE_SIGNUP_URL, VOG_SUPPORT_PATH } from "@/config/links";
import { MembershipCalculator_VOG } from "@/components/support/MembershipCalculator_VOG";
import { getHomeStrings } from "./strings";

type Notice = { ok: boolean; msg: string } | null;

const MIN_AGE = 16;

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

export default function HomeClient({
  supportBank: _supportBank,
  contactEmail,
}: {
  supportBank: {
    recipient?: string | null;
    iban?: string | null;
    bic?: string | null;
    bank?: string | null;
    referencePrefix?: string | null;
  };
  contactEmail: string;
}) {
  const { locale } = useLocale();
  const strings = getHomeStrings(locale);
  const countryOptions = useMemo(() => getCountryOptions(locale), [locale]);
  const [memberType, setMemberType] = useState<"person" | "organisation">("person");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [isStepTwoOpen, setIsStepTwoOpen] = useState(false);
  const [wantsNewsletter, setWantsNewsletter] = useState(false);
  const [wantsNewsletterEdDebatte, setWantsNewsletterEdDebatte] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [notice, setNotice] = useState<Notice>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactFirstName, setContactFirstName] = useState("");
  const [contactLastName, setContactLastName] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactHumanCheck, setContactHumanCheck] = useState(false);
  const [contactError, setContactError] = useState("");
  const [supportOpen, setSupportOpen] = useState(false);
  const [supportContactOpen, setSupportContactOpen] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const stepTwoFirstRef = useRef<HTMLInputElement>(null);
  const inputClass =
    "w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-800/40";
  const labelClass = "text-xs font-medium text-slate-300";
  const isPublic = true;
  const cityRequired = true;
  const canOpenCalculator = email.trim().length > 3 && email.includes("@");
  const isGerman = locale === "de";

  const copy = isGerman
    ? {
        heroBadge: "Initiative für nachvollziehbare öffentliche Evidenz und Beteiligung",
        heroKicker: "Private Initiative · weltweit offen, lokal anschlussfähig",
        heroTitleA: "VoiceOpenGov",
        heroTitleB: "für eine neue",
        heroTitleC: "direktdemokratische Diskussionskultur.",
        heroLead:
          "Nicht noch mehr Lautstärke. Nicht noch mehr Nebel. Sondern eine Form, in der öffentliche Themen verständlich, prüfbar, mehrheitsfähig und statusgeführt bearbeitet werden können.",
        heroBody:
          "Wir wollen Vertrauen in öffentliche Meinungsbildung zurückholen – mit einer neuen Informationsarchitektur, die Problem, Evidenz, Optionen, Verantwortung und Ergebnis wieder lesbar macht. eDebatte ist dafür das Werkzeug. VoiceOpenGov ist die Bewegung und der öffentliche Rahmen.",
        primaryCta: "Unterstützen",
        secondaryCta: "Die Bewegung verstehen",
        tertiaryLabel: "Praktisches Werkzeug:",
        tertiaryLink: "eDebatte ansehen",
        principleEyebrow: "Mehrheit braucht Form",
        principleTitle: "Mehrheit ist kein Stimmungsrausch, sondern Verantwortung.",
        principleBody:
          "Eine Mehrheit soll sichtbar werden können – aber nicht als bloße Lautstärke. Sie braucht Kontext, Optionen, Folgen, Minderheitensichtbarkeit und einen nachvollziehbaren Weg vom Thema bis zum Status.",
        principlePoints: [
          "Mehrheiten sollen lesbar werden, nicht künstlich erzeugt.",
          "Minderheiten bleiben sichtbar, auch wenn sie nicht obsiegen.",
          "Beteiligung ohne Anschluss erzeugt Enttäuschung statt Legitimität.",
        ],
        problemLabel: "Das Problem",
        problemTitle: "Warum so viele Debatten heute Vertrauen verlieren",
        problemIntro:
          "Öffentliche Diskussion scheitert oft nicht am Interesse der Menschen, sondern an der Form.",
        problems: [
          {
            title: "Fragmentierte Information",
            body:
              "Behauptungen, Links, Kommentare und Empörung stehen nebeneinander, aber selten in einer gemeinsamen, nachvollziehbaren Struktur.",
          },
          {
            title: "Fehlender Anschluss",
            body:
              "Selbst wenn Beteiligung stattfindet, bleibt oft unklar, was daraus folgt, wer zuständig ist und in welchem Status sich ein Thema befindet.",
          },
          {
            title: "Mehrheit ohne Tiefenschärfe",
            body:
              "Zahlen allein erklären noch nichts. Ohne Optionen, Folgen und Kontext wird auch Mehrheit schnell zum Missverständnis.",
          },
        ],
        solutionLabel: "Unsere Antwort",
        solutionTitle: "Problem, Lösung, Bewegung – in einer klaren Logik",
        solutionIntro:
          "VoiceOpenGov will die öffentliche Form verbessern. eDebatte macht diese Form praktisch nutzbar.",
        movementLabel: "Die Bewegung",
        movementTitle: "VoiceOpenGov ist mehr als ein Tool-Label.",
        movementBody:
          "Wir suchen Bürger, Initiativen und Unterstützer, die eine neue demokratische Kultur nicht nur fordern, sondern strukturell mit aufbauen wollen – unabhängig, nachvollziehbar und ohne versteckte Einflusslogik.",
        movementCards: [
          {
            title: "Für Bürger",
            body:
              "Wer mittragen will, dass Beteiligung verständlicher, fairer und direkter wird, findet hier einen öffentlichen Rahmen.",
          },
          {
            title: "Für Initiativen",
            body:
              "Wer Themen, Erfahrungen und Perspektiven anschlussfähig machen will, braucht keine neue Empörungsbühne, sondern eine tragfähige Form.",
          },
          {
            title: "Für Unterstützer",
            body:
              "Wer Unabhängigkeit ernst meint, hilft beim Aufbau einer Infrastruktur, die nicht von Werbung, Lobby oder Exit-Logik getrieben ist.",
          },
        ],
        movementPrimary: "Jetzt unterstützen",
        movementSecondary: "Zu eDebatte",
        joinTitle: "Mitglied werden und intern mitwirken",
        joinBody:
          "Mitgliedschaft ist kostenfrei. Interne Themenräume zu Veranstaltungen, Treffen, Satzung oder Prioritäten sollen innerhalb der Mitgliedschaft geführt werden – datenschutzsauber und nicht künstlich öffentlich gemacht.",
      }
    : {
        heroBadge: "Initiative for traceable public evidence and participation",
        heroKicker: "Private initiative · globally open, locally usable",
        heroTitleA: "VoiceOpenGov",
        heroTitleB: "for a new",
        heroTitleC: "direct-democratic discussion culture.",
        heroLead:
          "Not more noise. Not more fog. A form in which public issues can be handled in a way that is understandable, verifiable, majoritarian and status-guided.",
        heroBody:
          "We want to rebuild trust in public opinion-forming through a new information architecture that makes problems, evidence, options, responsibility and outcomes readable again. eDebatte is the tool for that. VoiceOpenGov is the movement and the public frame.",
        primaryCta: "Support",
        secondaryCta: "Understand the movement",
        tertiaryLabel: "Practical tool:",
        tertiaryLink: "See eDebatte",
        principleEyebrow: "Majority needs form",
        principleTitle: "Majority is responsibility, not a mood spike.",
        principleBody:
          "A majority should become visible – but not as sheer loudness. It needs context, options, consequences, minority visibility and a traceable path from issue to status.",
        principlePoints: [
          "Majorities should become readable, not artificially manufactured.",
          "Minorities remain visible even when they do not prevail.",
          "Participation without follow-through creates disappointment, not legitimacy.",
        ],
        problemLabel: "The problem",
        problemTitle: "Why so many debates lose trust today",
        problemIntro:
          "Public discussion often fails not because people do not care, but because the form is broken.",
        problems: [
          {
            title: "Fragmented information",
            body:
              "Claims, links, comments and outrage sit next to each other, but rarely in a shared and traceable structure.",
          },
          {
            title: "Missing follow-through",
            body:
              "Even when participation happens, it often stays unclear what follows, who is responsible and what status a topic is in.",
          },
          {
            title: "Majority without depth",
            body:
              "Numbers alone explain nothing. Without options, consequences and context, majority itself becomes misleading.",
          },
        ],
        solutionLabel: "Our answer",
        solutionTitle: "Problem, solution, movement – in one clear logic",
        solutionIntro:
          "VoiceOpenGov improves the public form. eDebatte makes that form usable in practice.",
        movementLabel: "The movement",
        movementTitle: "VoiceOpenGov is more than a tool label.",
        movementBody:
          "We are looking for citizens, initiatives and supporters who do not only demand a new democratic culture, but want to help build it in a structured and independent way.",
        movementCards: [
          {
            title: "For citizens",
            body:
              "If you want participation to become clearer, fairer and more direct, this is a public frame to stand behind.",
          },
          {
            title: "For initiatives",
            body:
              "If you want to make issues and perspectives connectable, you need more than outrage – you need a form that can carry them.",
          },
          {
            title: "For supporters",
            body:
              "If you take independence seriously, you help build an infrastructure that is not driven by ads, lobbying or exit logic.",
          },
        ],
        movementPrimary: "Support now",
        movementSecondary: "Go to eDebatte",
        joinTitle: "Become a member and participate internally",
        joinBody:
          "Membership is free. Internal topic spaces around events, meetings, statutes or priorities should live within membership – privacy-safe and not artificially exposed in public.",
      };

  const solutionSteps = isGerman
    ? [
        {
          title: "Check",
          body: "Begriffe, Behauptungen und Zuständigkeiten werden so geklärt, dass aus einem Thema eine prüfbare Ausgangsfrage wird.",
        },
        {
          title: "Dossier",
          body: "Quellen, Konflikte, Optionen, Folgen und Verantwortung werden in eine lesbare Struktur übersetzt.",
        },
        {
          title: "Beteiligung",
          body: "Mehrheiten werden nicht behauptet, sondern in klaren Ergebnisarten sichtbar gemacht: Stimmung, Priorisierung, Empfehlung oder Entscheidung.",
        },
        {
          title: "Status",
          body: "Nach dem Ergebnis bleibt sichtbar, was daraus folgt, wo es hängt und wer Verantwortung trägt.",
        },
      ]
    : [
        {
          title: "Check",
          body: "Terms, claims and responsibilities are clarified until an issue becomes a verifiable starting question.",
        },
        {
          title: "Dossier",
          body: "Sources, conflicts, options, consequences and responsibility are translated into a readable structure.",
        },
        {
          title: "Participation",
          body: "Majorities are not claimed but made visible through clear result types: mood, prioritization, recommendation or decision.",
        },
        {
          title: "Status",
          body: "After an outcome, it remains visible what follows, where it stalls and who carries responsibility.",
        },
      ];

  const resetForm = () => {
    setMemberType("person");
    setFirstName("");
    setLastName("");
    setBirthDate("");
    setOrgName("");
    setEmail("");
    setCity("");
    setCountryCode("");
    setIsStepTwoOpen(false);
    setWantsNewsletter(false);
    setWantsNewsletterEdDebatte(false);
    setPrivacyAccepted(false);
  };

  useEffect(() => {
    setBirthDate("");
  }, [memberType]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const focusEmail = () => {
      if (window.location.hash === "#join") {
        window.setTimeout(() => emailRef.current?.focus(), 80);
      }
    };
    focusEmail();
    window.addEventListener("hashchange", focusEmail);
    return () => window.removeEventListener("hashchange", focusEmail);
  }, []);

  useEffect(() => {
    if (!isStepTwoOpen) return;
    window.setTimeout(() => stepTwoFirstRef.current?.focus(), 80);
  }, [isStepTwoOpen]);

  const handleRequestEmail = () => {
    if (typeof window !== "undefined") {
      window.location.hash = "#join";
    }
    window.setTimeout(() => emailRef.current?.focus(), 80);
  };

  const handleContactSubmit = () => {
    const first = contactFirstName.trim();
    const last = contactLastName.trim();
    const subject = contactSubject.trim();

    if (!first || !last || !subject) {
      setContactError(strings.supportBank.contact.errorRequired);
      return;
    }
    if (!contactHumanCheck) {
      setContactError(strings.supportBank.contact.errorHuman);
      return;
    }

    const bodyLines = [
      strings.supportBank.contact.mailIntro,
      `${strings.supportBank.contact.mailName} ${first} ${last}`.trim(),
      `${strings.supportBank.contact.mailSubject} ${subject}`.trim(),
      email.trim()
        ? `${strings.supportBank.contact.mailEmail} ${email.trim()}`
        : undefined,
      strings.supportBank.contact.mailOutro,
    ].filter(Boolean);

    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    setContactError("");
    window.location.href = mailto;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice(null);

    if (!isStepTwoOpen) {
      setIsStepTwoOpen(true);
      return;
    }

    if (!privacyAccepted) {
      setNotice({ ok: false, msg: strings.notices.privacyRequired });
      return;
    }

    if (memberType === "person") {
      if (!birthDate.trim()) {
        setNotice({ ok: false, msg: strings.notices.birthMissing });
        return;
      }
      if (!isAtLeastAge(birthDate, MIN_AGE)) {
        setNotice({ ok: false, msg: strings.notices.ageTooYoung });
        return;
      }
    }

    if (cityRequired && !city.trim()) {
      setNotice({ ok: false, msg: strings.notices.cityRequired });
      return;
    }

    setIsSubmitting(true);
    try {
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
        setNotice({ ok: true, msg: strings.notices.submitOk });
        resetForm();
      } else {
        setNotice({ ok: false, msg: strings.notices.submitFail });
      }
    } catch {
      setNotice({ ok: false, msg: strings.notices.submitFail });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.16),transparent_28%),linear-gradient(to_bottom,#020617,#020617,#081226)] pb-16 text-slate-100">
      <section id="hero" className="relative overflow-hidden border-b border-slate-800/70">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
        <div className="pointer-events-none absolute -left-32 top-16 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-24 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 md:pb-20 md:pt-16">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="space-y-7">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200">
                  {copy.heroBadge}
                </div>
                <div className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                  {copy.heroKicker}
                </div>
              </div>

              <div className="max-w-4xl space-y-5">
                <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.04em] text-white md:text-7xl">
                  <span className="block headline-gradient">{copy.heroTitleA}</span>
                  <span className="block text-slate-100">{copy.heroTitleB}</span>
                  <span className="block text-slate-100">{copy.heroTitleC}</span>
                </h1>
                <p className="max-w-3xl text-lg font-semibold leading-8 text-slate-100 md:text-xl">
                  {copy.heroLead}
                </p>
                <p className="max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                  {copy.heroBody}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href={VOG_SUPPORT_PATH} className="btn btn-primary">
                  {copy.primaryCta}
                </Link>
                <Link href="/howtoworks/bewegung" className="btn btn-ghost">
                  {copy.secondaryCta}
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-300">
                <span className="font-semibold text-slate-400">{copy.tertiaryLabel}</span>
                <a
                  href={EDEBATTE_SIGNUP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-slate-100 underline underline-offset-4"
                >
                  {copy.tertiaryLink}
                </a>
                <span className="text-slate-500">·</span>
                <Link
                  href="/howtoworks/edebatte"
                  className="font-semibold text-slate-100 underline underline-offset-4"
                >
                  {isGerman ? "Wie die Informationsarchitektur funktioniert" : "How the information architecture works"}
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-4 top-10 h-44 w-44 rounded-full bg-sky-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.45)]">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                    {copy.principleEyebrow}
                  </p>
                  <span className="rounded-full border border-sky-400/20 bg-sky-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-200">
                    {isGerman ? "Mehrheitsprinzip" : "Majority principle"}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold leading-tight text-slate-100">
                  {copy.principleTitle}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {copy.principleBody}
                </p>
                <div className="mt-6 space-y-3">
                  {copy.principlePoints.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-200"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {copy.problemLabel}
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-100 md:text-4xl">
            <span className="headline-gradient">{copy.problemTitle}</span>
          </h2>
          <p className="text-sm leading-7 text-slate-300 md:text-base">
            {copy.problemIntro}
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {copy.problems.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-slate-800/90 bg-slate-900/75 p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-slate-100">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {copy.solutionLabel}
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-100 md:text-4xl">
              <span className="headline-gradient">{copy.solutionTitle}</span>
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              {copy.solutionIntro}
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-sky-400/20 bg-sky-500/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              {isGerman ? "Unser öffentliches Versprechen" : "Our public promise"}
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              {isGerman
                ? "Wir versprechen keine perfekte Wahrheit. Wir versprechen eine bessere öffentliche Form: verständlicher, evidenznäher, mehrheitsfähig und mit sichtbarem Anschluss nach der Beteiligung."
                : "We do not promise perfect truth. We promise a better public form: more understandable, more evidence-aware, capable of majority formation and with visible follow-through after participation."}
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {solutionSteps.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-slate-800/90 bg-slate-900/75 p-6 shadow-sm"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-200">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4">
        <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-6 md:p-8 shadow-sm">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {copy.movementLabel}
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-100 md:text-4xl">
              <span className="headline-gradient">{copy.movementTitle}</span>
            </h2>
            <p className="text-sm leading-7 text-slate-300 md:text-base">
              {copy.movementBody}
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {copy.movementCards.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-slate-800 bg-slate-950/50 p-5"
              >
                <p className="text-sm font-semibold text-slate-100">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={VOG_SUPPORT_PATH} className="btn btn-primary">
              {copy.movementPrimary}
            </Link>
            <a
              href={EDEBATTE_SIGNUP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              {copy.movementSecondary}
            </a>
          </div>
        </div>
      </section>

      <section id="mitmachen" className="mx-auto mt-16 max-w-6xl px-4">
        <div id="join" className="scroll-mt-24" />
        <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-6 shadow-sm md:p-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {strings.membership.label}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-[-0.03em] text-slate-100">
              <span className="headline-gradient">{copy.joinTitle}</span>
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
              {copy.joinBody}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-end">
                <div className="flex-1 space-y-1">
                  <label className={labelClass} htmlFor="email">
                    {strings.form.email}
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    className={inputClass}
                    ref={emailRef}
                  />
                </div>
                {!isStepTwoOpen && (
                  <button
                    type="submit"
                    className="btn btn-primary"
                    aria-expanded={isStepTwoOpen}
                    aria-controls="join-details"
                  >
                    {strings.form.step1Cta}
                  </button>
                )}
              </div>
              <p className="mt-2 text-xs text-slate-300">{strings.form.step1Hint}</p>
            </div>

            {isStepTwoOpen && (
              <>
                <div
                  id="join-details"
                  className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {strings.form.step2Label}
                    </p>
                    <p className="text-xs text-slate-400">{strings.form.step2Hint}</p>
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
                        {value === "person"
                          ? strings.membership.type.person
                          : strings.membership.type.organisation}
                      </button>
                    ))}
                  </div>

                  {memberType === "person" && (
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="space-y-1">
                        <label className={labelClass} htmlFor="firstName">
                          {strings.form.firstName}
                        </label>
                        <input
                          id="firstName"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          autoComplete="given-name"
                          className={inputClass}
                          ref={stepTwoFirstRef}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className={labelClass} htmlFor="lastName">
                          {strings.form.lastName}
                        </label>
                        <input
                          id="lastName"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          autoComplete="family-name"
                          className={inputClass}
                        />
                      </div>
                      <div className="space-y-1 md:col-span-2">
                        <label className={labelClass} htmlFor="birthDate">
                          {strings.form.birthDate}
                        </label>
                        <input
                          id="birthDate"
                          required
                          type="date"
                          value={birthDate}
                          onChange={(e) => setBirthDate(e.target.value)}
                          max={maxBirthDateIso(MIN_AGE)}
                          autoComplete="bday"
                          className={inputClass}
                        />
                        <p className="text-[11px] text-slate-400">{strings.form.birthHint}</p>
                      </div>
                    </div>
                  )}

                  {memberType === "organisation" && (
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="space-y-1 md:col-span-2">
                        <label className={labelClass} htmlFor="orgName">
                          {strings.form.organisation}
                        </label>
                        <input
                          id="orgName"
                          required
                          value={orgName}
                          onChange={(e) => setOrgName(e.target.value)}
                          autoComplete="organization"
                          className={inputClass}
                          ref={stepTwoFirstRef}
                        />
                      </div>
                    </div>
                  )}

                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="space-y-1">
                      <label className={labelClass} htmlFor="city">
                        {strings.form.city}{" "}
                        {!cityRequired && (
                          <span className="text-slate-400">{strings.form.optional}</span>
                        )}
                      </label>
                      <input
                        id="city"
                        required={cityRequired}
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        autoComplete="address-level2"
                        className={inputClass}
                        placeholder={
                          cityRequired
                            ? strings.form.cityPlaceholderPublic
                            : strings.form.cityPlaceholderPrivate
                        }
                      />
                    </div>
                    <div className="space-y-1">
                      <label className={labelClass} htmlFor="country">
                        {strings.form.country}
                      </label>
                      <select
                        id="country"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className={inputClass}
                      >
                        <option value="">{strings.form.countryPlaceholder}</option>
                        {countryOptions.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <p className="text-xs font-medium text-slate-300">
                      {strings.form.locationVisibility}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {strings.form.visibilityHint}
                    </p>
                  </div>

                  <label id="newsletter" className="flex items-start gap-2 text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={wantsNewsletter}
                      onChange={(e) => setWantsNewsletter(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-slate-500 text-sky-500"
                    />
                    <span>{strings.form.newsletter}</span>
                  </label>
                  <label className="flex items-start gap-2 text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={wantsNewsletterEdDebatte}
                      onChange={(e) => setWantsNewsletterEdDebatte(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-slate-500 text-sky-500"
                    />
                    <span>{strings.form.newsletterTool}</span>
                  </label>
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
                    {strings.form.privacyBefore}{" "}
                    <Link
                      href="/datenschutz"
                      className="font-semibold text-slate-100 underline underline-offset-2"
                    >
                      {strings.form.privacyLink}
                    </Link>{" "}
                    {strings.form.privacyAfter}
                  </span>
                </label>

                <div className="flex flex-wrap items-center gap-3">
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                    {isSubmitting ? strings.form.submitting : strings.form.submit}
                  </button>
                  {notice && (
                    <span
                      className={`text-xs ${notice.ok ? "text-sky-300" : "text-red-400"}`}
                      role="status"
                      aria-live="polite"
                    >
                      {notice.msg}
                    </span>
                  )}
                </div>
              </>
            )}
          </form>

          <div className="mt-4 space-y-2 text-xs text-slate-300">
            <p>{strings.footer.membershipFree}</p>
            <p>
              {strings.footer.supportNoteBefore}{" "}
              <Link
                href={VOG_SUPPORT_PATH}
                className="font-semibold text-slate-100 underline underline-offset-2"
              >
                {strings.footer.supportNoteLink}
              </Link>{" "}
              {strings.footer.supportNoteAfter}{" "}
              <a href={`mailto:${contactEmail}`} className="font-semibold text-slate-100">
                {contactEmail}
              </a>
              .
            </p>
            <p>{strings.footer.publicPrivateNote}</p>
          </div>
        </div>
      </section>

      <section id="voiceopengov-support" className="mx-auto mt-12 max-w-6xl px-4 pb-12">
        <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-6 shadow-sm md:p-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {strings.supportSection.label}
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-100 md:text-4xl">
              <span className="headline-gradient">{strings.supportSection.title}</span>
            </h2>
            <p className="text-sm leading-7 text-slate-300 md:text-base">
              {strings.supportSection.body}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setSupportOpen((prev) => !prev)}
            >
              {strings.supportSection.ctaSupport}
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setSupportContactOpen((prev) => !prev)}
            >
              {strings.supportBank.contact.title}
            </button>
          </div>

          {supportOpen && (
            <div className="mt-6">
              <MembershipCalculator_VOG
                strings={strings.supportCalculator}
                canOpen={canOpenCalculator}
                onRequestEmail={handleRequestEmail}
              />
            </div>
          )}

          {supportContactOpen && (
            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {strings.supportBank.title}
              </p>
              <p className="mt-2 text-sm text-slate-300">{strings.supportBank.body}</p>
              <p className="mt-3 text-xs text-slate-400">{strings.supportBank.noDetails}</p>
              <p className="mt-3 text-xs text-slate-300">{strings.supportBank.contact.body}</p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <label className="space-y-1 text-xs font-medium text-slate-300">
                  <span>{strings.supportBank.contact.firstName}</span>
                  <input
                    value={contactFirstName}
                    onChange={(e) => {
                      setContactFirstName(e.target.value);
                      setContactError("");
                    }}
                    className={inputClass}
                  />
                </label>
                <label className="space-y-1 text-xs font-medium text-slate-300">
                  <span>{strings.supportBank.contact.lastName}</span>
                  <input
                    value={contactLastName}
                    onChange={(e) => {
                      setContactLastName(e.target.value);
                      setContactError("");
                    }}
                    className={inputClass}
                  />
                </label>
                <label className="space-y-1 text-xs font-medium text-slate-300 md:col-span-2">
                  <span>{strings.supportBank.contact.subject}</span>
                  <input
                    value={contactSubject}
                    onChange={(e) => {
                      setContactSubject(e.target.value);
                      setContactError("");
                    }}
                    className={inputClass}
                    placeholder={strings.supportBank.contact.subjectPlaceholder}
                  />
                </label>
              </div>
              <label className="mt-3 flex items-start gap-2 text-xs text-slate-300">
                <input
                  type="checkbox"
                  checked={contactHumanCheck}
                  onChange={(e) => {
                    setContactHumanCheck(e.target.checked);
                    setContactError("");
                  }}
                  className="mt-1 h-4 w-4 rounded border-slate-500 text-sky-500"
                />
                <span>{strings.supportBank.contact.humanCheck}</span>
              </label>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <button type="button" onClick={handleContactSubmit} className="btn btn-ghost">
                  {strings.supportBank.contact.submit}
                </button>
                {contactError ? <span className="text-xs text-amber-300">{contactError}</span> : null}
              </div>
              <p className="mt-3 text-xs text-slate-400">{strings.supportBank.afterNote}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
