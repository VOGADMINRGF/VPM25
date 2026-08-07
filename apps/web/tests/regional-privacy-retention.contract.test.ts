import { describe, expect, it } from "vitest";
import {
  REGIONAL_INTEREST_PRIVACY_GUARDRAILS,
  REGIONAL_INTEREST_RETENTION_DAYS,
  REGIONAL_INTEREST_VISIBILITY,
  canIntroduceRegionalInterests,
  deriveRegionalInterestMatchingEligibility,
  regionalInterestPurposeFields,
  regionalInterestRetentionDays,
} from "@/lib/regionalPrivacyRetentionContract";

const ACTIVE = {
  contactConsent: true,
  matchingConsent: true,
  privacyAccepted: true,
};

describe("regional privacy and retention contract", () => {
  it("is private and fail-closed by default", () => {
    expect(REGIONAL_INTEREST_VISIBILITY).toBe("private");
    expect(REGIONAL_INTEREST_PRIVACY_GUARDRAILS).toMatchObject({
      autoMatch: false,
      autoIntroduce: false,
      autoPublish: false,
      autoEdebateHandoff: false,
      politicalProfilingAllowed: false,
      contactRequiresMutualConsent: true,
      exactPrivateAddressRequired: false,
    });
  });

  it("requires separate matching consent", () => {
    expect(
      deriveRegionalInterestMatchingEligibility({
        ...ACTIVE,
        matchingConsent: false,
      }),
    ).toEqual({ eligible: false, reason: "matching_consent_missing" });
  });

  it("withdrawal and deletion always block matching", () => {
    expect(
      deriveRegionalInterestMatchingEligibility({
        ...ACTIVE,
        withdrawnAt: "2026-08-07T10:00:00.000Z",
      }).reason,
    ).toBe("withdrawn");
    expect(
      deriveRegionalInterestMatchingEligibility({
        ...ACTIVE,
        deletedAt: "2026-08-07T10:00:00.000Z",
      }).reason,
    ).toBe("deleted");
  });

  it("treats missing or expired expiry state fail-closed when expiry is supplied", () => {
    const now = new Date("2026-08-07T12:00:00.000Z");
    expect(
      deriveRegionalInterestMatchingEligibility(
        { ...ACTIVE, expiresAt: "invalid" },
        now,
      ).reason,
    ).toBe("expired");
    expect(
      deriveRegionalInterestMatchingEligibility(
        { ...ACTIVE, expiresAt: "2026-08-07T11:59:59.000Z" },
        now,
      ).reason,
    ).toBe("expired");
  });

  it("requires both sides to remain eligible before an introduction", () => {
    expect(
      canIntroduceRegionalInterests({ left: ACTIVE, right: ACTIVE }),
    ).toBe(true);
    expect(
      canIntroduceRegionalInterests({
        left: ACTIVE,
        right: { ...ACTIVE, matchingConsent: false },
      }),
    ).toBe(false);
  });

  it("keeps retention in one central lifecycle policy", () => {
    expect(REGIONAL_INTEREST_RETENTION_DAYS).toEqual({
      new: 90,
      reviewed: 180,
      introduction_pending: 30,
      introduced: 180,
      closed: 30,
    });
    expect(regionalInterestRetentionDays("closed")).toBe(30);
  });

  it("binds persisted input fields to explicit purposes", () => {
    const purposes = regionalInterestPurposeFields();
    expect(purposes.contactEmail).toBe("contact_and_controlled_introduction");
    expect(purposes.location).toBe("regional_context");
    expect(purposes.matchingConsent).toBe("matching_authorization");
    expect(Object.keys(purposes)).not.toContain("humanToken");
    expect(Object.keys(purposes)).not.toContain("hp_regional");
  });
});
