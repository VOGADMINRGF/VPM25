export type ReleaseStatus = "entwurf" | "stabil";

export type GrundlagenRelease = {
  version: string;
  status: ReleaseStatus;
  date: string;
  changelog: string[];
};

export const GRUNDLAGEN_RELEASES: Record<string, GrundlagenRelease[]> = {
  weissbuch: [
    {
      version: "0.1.0",
      status: "entwurf",
      date: "2026-02-20",
      changelog: [
        "Erstveröffentlichung (Text-first).",
        "Band-Branding: Band I–III + Untertitel + Zitierfähigkeit.",
      ],
    },
  ],
  "legitimation-2-0": [
    {
      version: "0.1.0",
      status: "entwurf",
      date: "2026-02-20",
      changelog: [
        "Erstveröffentlichung (Text-first).",
        "Band-Branding: Band I–III + Untertitel + Zitierfähigkeit.",
      ],
    },
  ],
  repro: [
    {
      version: "0.1.0",
      status: "entwurf",
      date: "2026-02-20",
      changelog: [
        "Erstveröffentlichung (Text-first).",
        "Band-Branding: Band I–III + Untertitel + Zitierfähigkeit.",
      ],
    },
  ],
};

export function getLatestRelease(slug: string) {
  return GRUNDLAGEN_RELEASES[slug]?.[0] ?? null;
}
