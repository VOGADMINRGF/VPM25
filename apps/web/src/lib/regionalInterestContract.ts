export const REGIONAL_INTEREST_INTENTS = [
  "stay_informed",
  "join_meetup",
  "start_meetup",
  "help_organize",
  "offer_space",
  "offer_contacts",
  "offer_expertise",
  "regional_long_term",
] as const;

export type RegionalInterestIntent =
  (typeof REGIONAL_INTEREST_INTENTS)[number];

export const REGIONAL_INTEREST_SOURCE_PATH = "/vor-ort" as const;
export const REGIONAL_INTEREST_COLLECTION =
  "regional_interest_intake" as const;

export type RegionalInterestStatus =
  | "new"
  | "reviewed"
  | "matched"
  | "closed";
