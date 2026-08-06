import { z } from "zod";

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

export const RegionalInterestInputSchema = z.object({
  contactName: z.string().trim().min(2).max(120),
  contactEmail: z.string().trim().email().max(320),
  location: z.string().trim().min(2).max(160),
  topic: z.string().trim().max(240).optional(),
  intents: z
    .array(z.enum(REGIONAL_INTEREST_INTENTS))
    .min(1)
    .max(REGIONAL_INTEREST_INTENTS.length),
  notes: z.string().trim().max(1500).optional(),
  contactConsent: z.literal(true),
  matchingConsent: z.boolean(),
  privacyAccepted: z.literal(true),
  humanToken: z.string().min(10),
  hp_regional: z.string().optional(),
});

export type RegionalInterestInput = z.infer<
  typeof RegionalInterestInputSchema
>;
