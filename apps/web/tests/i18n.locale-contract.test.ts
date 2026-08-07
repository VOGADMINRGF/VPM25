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
  VOG_QUESTION_COUNT,
  VOG_QUESTION_GROUPS,
} from "@/content/vogQuestions";

describe("VoiceOpenGov locale contract", () => {
  it("keeps the six required launch locales explicit", () => {
    expect(REQUIRED_LAUNCH_LOCALES).toEqual([
      "de",
      "en",
      "fr",
      "es",
      "tr",
      "ar",
    ]);
  });

  it("marks Arabic as RTL with a BCP-47 locale", () => {
    expect(getTextDirection("ar")).toBe("rtl");
    expect(getLocaleConfig("ar").bcp47).toBe("ar");
  });

  it("does not silently collapse the four language dimensions", () => {
    expect(
      resolveLocaleDimensions({
        originalLocale: "de",
        readingLocale: "fr",
        uiLocale: "ar",
        outputLocale: "en",
      }),
    ).toEqual({
      originalLocale: "de",
      readingLocale: "fr",
      uiLocale: "ar",
      outputLocale: "en",
    });
  });

  it("hands locale context over without identity data", () => {
    const url = new URL(
      buildLocaleHandoffUrl(
        "https://www.edebatte.org/",
        {
          originalLocale: "de",
          readingLocale: "fr",
          uiLocale: "fr",
          outputLocale: "fr",
        },
        { canonicalId: "vog-question-07" },
      ),
    );

    expect(url.searchParams.get("canonicalId")).toBe("vog-question-07");
    expect(url.searchParams.get("readingLocale")).toBe("fr");
    expect(url.searchParams.has("email")).toBe(false);
    expect(url.searchParams.has("memberId")).toBe(false);
  });
});

describe("VoiceOpenGov canonical questions", () => {
  it("contains exactly 50 unique stable question IDs", () => {
    const ids = VOG_QUESTION_GROUPS.flatMap((group) =>
      group.questions.map((question) => question.id),
    );

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
