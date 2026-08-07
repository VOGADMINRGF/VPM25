import { describe, expect, it } from "vitest";
import {
  REGIONAL_INTEREST_COLLECTION,
  REGIONAL_INTEREST_INTENTS,
  REGIONAL_INTEREST_SOURCE_PATH,
  RegionalInterestInputSchema,
} from "@/lib/regionalInterestContract";
import { getRegionalActivationStrings } from "@/app/vor-ort/strings";

const VALID_INPUT = {
  contactName: "Ricky Fleischer",
  contactEmail: "ricky@example.org",
  location: "Berlin-Rahnsdorf",
  intents: ["join_meetup"],
  contactConsent: true,
  matchingConsent: false,
  privacyAccepted: true,
  humanToken: "human-token-valid",
};

describe("regional interest contract", () => {
  it("keeps exactly eight unique, non-political participation intents", () => {
    expect(REGIONAL_INTEREST_INTENTS).toHaveLength(8);
    expect(new Set(REGIONAL_INTEREST_INTENTS).size).toBe(8);
    expect(REGIONAL_INTEREST_INTENTS).toEqual([
      "stay_informed",
      "join_meetup",
      "start_meetup",
      "help_organize",
      "offer_space",
      "offer_contacts",
      "offer_expertise",
      "regional_long_term",
    ]);
  });

  it("requires contact and privacy consent while matching remains optional", () => {
    expect(RegionalInterestInputSchema.safeParse(VALID_INPUT).success).toBe(true);
    expect(
      RegionalInterestInputSchema.safeParse({
        ...VALID_INPUT,
        matchingConsent: true,
      }).success,
    ).toBe(true);
    expect(
      RegionalInterestInputSchema.safeParse({
        ...VALID_INPUT,
        contactConsent: false,
      }).success,
    ).toBe(false);
    expect(
      RegionalInterestInputSchema.safeParse({
        ...VALID_INPUT,
        privacyAccepted: false,
      }).success,
    ).toBe(false);
  });

  it("rejects empty and unknown intent sets", () => {
    expect(
      RegionalInterestInputSchema.safeParse({
        ...VALID_INPUT,
        intents: [],
      }).success,
    ).toBe(false);
    expect(
      RegionalInterestInputSchema.safeParse({
        ...VALID_INPUT,
        intents: ["vote_weight"],
      }).success,
    ).toBe(false);
  });

  it("keeps public copy aligned with the canonical intent values", () => {
    const german = getRegionalActivationStrings("de").form.intentionOptions.map(
      (option) => option.value,
    );
    const english = getRegionalActivationStrings("en").form.intentionOptions.map(
      (option) => option.value,
    );

    expect(german).toEqual([...REGIONAL_INTEREST_INTENTS]);
    expect(english).toEqual([...REGIONAL_INTEREST_INTENTS]);
  });

  it("stores interest separately and does not name an event collection", () => {
    expect(REGIONAL_INTEREST_SOURCE_PATH).toBe("/vor-ort");
    expect(REGIONAL_INTEREST_COLLECTION).toBe("regional_interest_intake");
    expect(REGIONAL_INTEREST_COLLECTION).not.toMatch(/event|meetup|chapter/);
  });
});
