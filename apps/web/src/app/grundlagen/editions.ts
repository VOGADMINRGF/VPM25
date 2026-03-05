export const KDP_SELECT_ENABLED = process.env.VOG_KDP_SELECT === "1";

export type EditionLinks = {
  kindleUrl?: string;
  printUrl?: string;
};

export type EditionPricing = {
  ebookPrice: string;
  ebookBundlePrice: string;
  printPrice: string;
  printBundlePrice: string;
};

export const PRICES: EditionPricing = {
  ebookPrice: "1,99 €",
  ebookBundlePrice: "4,99 €",
  printPrice: "7,99 €",
  printBundlePrice: "34,99 €",
};

export const LINKS: Record<string, EditionLinks> = {
  weissbuch: {
    kindleUrl: process.env.VOG_KDP_WEISSBUCH,
    printUrl: process.env.VOG_PRINT_WEISSBUCH,
  },
  "legitimation-2-0": {
    kindleUrl: process.env.VOG_KDP_LEGITIMATION,
    printUrl: process.env.VOG_PRINT_LEGITIMATION,
  },
  repro: {
    kindleUrl: process.env.VOG_KDP_REPRO,
    printUrl: process.env.VOG_PRINT_REPRO,
  },
  bundle: {
    kindleUrl: process.env.VOG_KDP_BUNDLE,
    printUrl: process.env.VOG_PRINT_BUNDLE,
  },
};

export function getLinks(slug: string) {
  const value = LINKS[slug] ?? {};
  return {
    kindleUrl: value.kindleUrl?.trim() || undefined,
    printUrl: value.printUrl?.trim() || undefined,
  };
}
