import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  REQUIRED_LAUNCH_LOCALES,
  getLocaleConfig,
  getTextDirection,
} from "@/config/locales";
import {
  buildLocaleHandoffUrl,
  localizedRouteUrl,
  resolveLocaleDimensions,
  routeLocaleAlternates,
} from "@/lib/i18n/localeContract";
import {
  getMemberFlowStrings,
  memberFlowDirection,
  resolveMemberFlowLocale,
} from "@/lib/i18n/memberFlowI18n";
import {
  VOG_QUESTION_COUNT,
  VOG_QUESTION_GROUPS,
} from "@/content/vogQuestions";

function source(relativePath: string) {
  return readFileSync(new URL(`../src/${relativePath}`, import.meta.url), "utf8");
}

const CORE_PUBLIC_SOURCES = [
  "app/page.tsx",
  "app/fragen/page.tsx",
  "app/transparenz/page.tsx",
  "app/mitmachen/rollen/page.tsx",
  "app/vor-ort/page.tsx",
  "app/(components)/SiteHeader.tsx",
  "components/SiteFooter.tsx",
  "components/home/RegionalActivationTeaser.tsx",
];

const COLLAPSED_LOCALE_PATTERNS = [
  /locale\s*===\s*["']de["']\s*\?\s*["']de["']\s*:\s*["']en["']/,
  /locale\s*===\s*["']de["']\s*\?\s*COPY\.de\s*:\s*COPY\.en/,
  /locale\s*===\s*["']en["']\s*\?\s*EN\s*:\s*DE/,
];

describe("VoiceOpenGov locale contract", () => {
  it("keeps the six required launch locales explicit", () => {
    expect(REQUIRED_LAUNCH_LOCALES).toEqual(["de", "en", "fr", "es", "tr", "ar"]);
  });

  it("shows only launch-ready locales in the public language switcher", () => {
    const header = source("app/(components)/SiteHeader.tsx");
    expect(header).toContain("REQUIRED_LAUNCH_LOCALES.map");
    expect(header).not.toContain("SUPPORTED_LOCALES.map");
  });

  it("keeps the VoiceOpenGov wordmark explicit and on the canonical cyan-blue gradient", () => {
    const header = source("app/(components)/SiteHeader.tsx");
    expect(header).toContain("VoiceOpenGov");
    expect(header).toContain("from-[#18cfc8]");
    expect(header).toContain("to-[#1a8cff]");
  });

  it("marks Arabic as RTL with a BCP-47 locale", () => {
    expect(getTextDirection("ar")).toBe("rtl");
    expect(getLocaleConfig("ar").bcp47).toBe("ar");
    expect(memberFlowDirection("ar")).toBe("rtl");
  });

  it("does not silently collapse the four language dimensions", () => {
    expect(resolveLocaleDimensions({ originalLocale:"de", readingLocale:"fr", uiLocale:"ar", outputLocale:"en" }))
      .toEqual({ originalLocale:"de", readingLocale:"fr", uiLocale:"ar", outputLocale:"en" });
  });

  it("hands locale context over without identity data", () => {
    const url = new URL(buildLocaleHandoffUrl(
      "https://www.edebatte.org/",
      { originalLocale:"de", readingLocale:"fr", uiLocale:"fr", outputLocale:"fr" },
      { canonicalId:"vog-question-07" },
    ));
    expect(url.searchParams.get("canonicalId")).toBe("vog-question-07");
    expect(url.searchParams.get("readingLocale")).toBe("fr");
    expect(url.searchParams.has("email")).toBe(false);
    expect(url.searchParams.has("memberId")).toBe(false);
  });

  it("creates route-specific canonical and hreflang URLs", () => {
    expect(localizedRouteUrl("https://voiceopengov.org", "/fragen", "de"))
      .toBe("https://voiceopengov.org/fragen");
    expect(localizedRouteUrl("https://voiceopengov.org", "/fragen", "fr"))
      .toBe("https://voiceopengov.org/fragen?lang=fr");

    const alternates = routeLocaleAlternates(
      "https://voiceopengov.org",
      "/transparenz",
      REQUIRED_LAUNCH_LOCALES,
    );
    expect(alternates["de-DE"]).toBe("https://voiceopengov.org/transparenz");
    expect(alternates.fr).toBe("https://voiceopengov.org/transparenz?lang=fr");
    expect(alternates.ar).toBe("https://voiceopengov.org/transparenz?lang=ar");
    expect(alternates["x-default"]).toBe("https://voiceopengov.org/transparenz");
  });

  it("does not define a homepage canonical in the root layout", () => {
    const layout = source("app/layout.tsx");
    expect(layout).not.toContain("localizedCanonicalUrl");
    expect(layout).not.toContain("localeAlternates(");
  });

  it("has public member-flow copy for every launch locale", () => {
    for (const locale of REQUIRED_LAUNCH_LOCALES) {
      const resolved = resolveMemberFlowLocale(locale);
      const strings = getMemberFlowStrings(resolved);
      expect(strings.verifyTitle.trim().length).toBeGreaterThan(3);
      expect(strings.verifyButton.trim().length).toBeGreaterThan(3);
      expect(strings.setupTitle.trim().length).toBeGreaterThan(3);
      expect(strings.successTitle.trim().length).toBeGreaterThan(3);
    }
  });

  it("blocks DE-or-EN collapse patterns on core public surfaces", () => {
    for (const relativePath of CORE_PUBLIC_SOURCES) {
      const content = source(relativePath);
      for (const pattern of COLLAPSED_LOCALE_PATTERNS) {
        expect(content, `${relativePath} contains collapsed locale logic`).not.toMatch(pattern);
      }
    }
  });

  it("keeps core public pages on shared translation contracts", () => {
    const home = source("components/home/HomeClient.tsx");
    const homePage = source("app/page.tsx");
    const transparency = source("app/transparenz/page.tsx");
    const roles = source("app/mitmachen/rollen/page.tsx");
    const regional = source("app/vor-ort/page.tsx");
    const footer = source("components/SiteFooter.tsx");

    expect(home).toContain("preferredLocale: locale");
    expect(homePage).toContain("getPublicRouteMetadata");
    expect(transparency).toContain("getPublicRouteMetadata");
    expect(roles).toContain("getPublicRouteMetadata");
    expect(regional).toContain("getTranslatedBundle");
    expect(footer).toContain("getFooterEcosystemStrings(locale)");
  });

  it("propagates locale through DOI and password email server surfaces", () => {
    const register = source("app/api/members/public-register/route.ts");
    const confirm = source("app/api/members/confirm/route.ts");
    const passwordStart = source("app/api/auth/password/start/route.ts");

    expect(register).toContain("preferredLocale: locale");
    expect(register).toContain("&lang=${locale}");
    expect(register).toContain("memberFlowDirection(locale)");
    expect(confirm).toContain('<html lang="${locale}" dir="${dir}">');
    expect(confirm).not.toContain('<html lang="de">');
    expect(passwordStart).toContain("&lang=${locale}");
    expect(passwordStart).toContain("memberFlowDirection(locale)");
  });
});

describe("VoiceOpenGov canonical questions", () => {
  it("contains exactly 50 unique stable question IDs", () => {
    const ids = VOG_QUESTION_GROUPS.flatMap((group) => group.questions.map((question) => question.id));
    expect(VOG_QUESTION_COUNT).toBe(50);
    expect(ids).toHaveLength(50);
    expect(new Set(ids).size).toBe(50);
    expect(ids[0]).toBe("vog-question-01");
    expect(ids[49]).toBe("vog-question-50");
  });

  it("keeps German and English text on the same canonical identity", () => {
    for (const group of VOG_QUESTION_GROUPS) {
      for (const question of group.questions) {
        expect(question.de.trim().length).toBeGreaterThan(20);
        expect(question.en.trim().length).toBeGreaterThan(20);
      }
    }
  });
});
