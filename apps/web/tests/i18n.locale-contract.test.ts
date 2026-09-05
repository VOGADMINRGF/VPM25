import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  REQUIRED_LAUNCH_LOCALES,
  getLocaleConfig,
  getTextDirection,
} from "@/config/locales";
import {
  buildLocaleHandoffUrl,
  resolveLocaleDimensions,
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

describe("VoiceOpenGov locale contract", () => {
  it("keeps the six required launch locales explicit", () => {
    expect(REQUIRED_LAUNCH_LOCALES).toEqual(["de", "en", "fr", "es", "tr", "ar"]);
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

  it("keeps homepage, core public pages and footer on the request locale", () => {
    const home = source("components/home/HomeClient.tsx");
    const homePage = source("app/page.tsx");
    const transparency = source("app/transparenz/page.tsx");
    const roles = source("app/mitmachen/rollen/page.tsx");
    const footer = source("components/SiteFooter.tsx");

    expect(home).not.toContain('locale === "de" ? "de" : "en"');
    expect(home).toContain("preferredLocale: locale");
    expect(homePage).toContain("getAutoTranslatedStrings");
    expect(transparency).toContain("getAutoTranslatedStrings");
    expect(roles).toContain("getAutoTranslatedStrings");
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
