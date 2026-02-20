export const GRUNDLAGEN_BANDS: Record<
  string,
  { roman: "I" | "II" | "III"; title: string; subtitle: string }
> = {
  weissbuch: {
    roman: "I",
    title: "Weißbuch",
    subtitle: "Problemraum & Anforderungen",
  },
  "legitimation-2-0": {
    roman: "II",
    title: "Legitimation 2.0",
    subtitle: "Governance-Modell & Legitimationslogik",
  },
  repro: {
    roman: "III",
    title: "RePro",
    subtitle: "Referenzprozess & Operationalisierung",
  },
};

export function getBand(slug: string) {
  return GRUNDLAGEN_BANDS[slug] ?? null;
}
