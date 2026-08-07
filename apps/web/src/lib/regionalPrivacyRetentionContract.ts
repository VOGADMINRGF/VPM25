import type { RegionalInterestInput } from "@/lib/regionalInterestContract";

export const REGIONAL_INTEREST_VISIBILITY = "private" as const;

export const REGIONAL_INTEREST_RETENTION_DAYS = {
  new: 90,
  reviewed: 180,
  introduction_pending: 30,
  introduced: 180,
  closed: 30,
} as const;

export type RegionalInterestLifecycleStatus =
  keyof typeof REGIONAL_INTEREST_RETENTION_DAYS;

export type RegionalInterestPrivacyState = {
  contactConsent: boolean;
  matchingConsent: boolean;
  privacyAccepted: boolean;
  withdrawnAt?: string | null;
  deletedAt?: string | null;
  expiresAt?: string | null;
};

export type RegionalInterestMatchingEligibility = {
  eligible: boolean;
  reason:
    | "eligible"
    | "contact_consent_missing"
    | "matching_consent_missing"
    | "privacy_acceptance_missing"
    | "withdrawn"
    | "deleted"
    | "expired";
};

export function deriveRegionalInterestMatchingEligibility(
  state: RegionalInterestPrivacyState,
  now: Date = new Date(),
): RegionalInterestMatchingEligibility {
  if (state.deletedAt) return { eligible: false, reason: "deleted" };
  if (state.withdrawnAt) return { eligible: false, reason: "withdrawn" };
  if (!state.contactConsent) {
    return { eligible: false, reason: "contact_consent_missing" };
  }
  if (!state.matchingConsent) {
    return { eligible: false, reason: "matching_consent_missing" };
  }
  if (!state.privacyAccepted) {
    return { eligible: false, reason: "privacy_acceptance_missing" };
  }
  if (state.expiresAt) {
    const expiresAt = Date.parse(state.expiresAt);
    if (!Number.isFinite(expiresAt) || expiresAt <= now.getTime()) {
      return { eligible: false, reason: "expired" };
    }
  }
  return { eligible: true, reason: "eligible" };
}

export function canIntroduceRegionalInterests(params: {
  left: RegionalInterestPrivacyState;
  right: RegionalInterestPrivacyState;
  now?: Date;
}): boolean {
  return (
    deriveRegionalInterestMatchingEligibility(params.left, params.now).eligible &&
    deriveRegionalInterestMatchingEligibility(params.right, params.now).eligible
  );
}

export function regionalInterestRetentionDays(
  status: RegionalInterestLifecycleStatus,
): number {
  return REGIONAL_INTEREST_RETENTION_DAYS[status];
}

export function regionalInterestPurposeFields(): Readonly<
  Record<keyof Omit<RegionalInterestInput, "humanToken" | "hp_regional">, string>
> {
  return {
    contactName: "contact_and_controlled_introduction",
    contactEmail: "contact_and_controlled_introduction",
    location: "regional_context",
    topic: "optional_interest_context",
    intents: "participation_preferences",
    notes: "optional_coordination_context",
    contactConsent: "contact_authorization",
    matchingConsent: "matching_authorization",
    privacyAccepted: "privacy_acknowledgement",
  };
}

export const REGIONAL_INTEREST_PRIVACY_GUARDRAILS = {
  visibility: REGIONAL_INTEREST_VISIBILITY,
  exactPrivateAddressRequired: false,
  autoMatch: false,
  autoIntroduce: false,
  autoPublish: false,
  autoEdebateHandoff: false,
  politicalProfilingAllowed: false,
  contactRequiresMutualConsent: true,
} as const;
