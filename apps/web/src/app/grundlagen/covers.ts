export type BandCovers = { front: string; back?: string };

export const COVERS: Record<string, BandCovers> = {
  weissbuch: {
    front: "/media/covers/v3/band1_front_lg.webp",
    back: "/media/covers/v3/band1_back_lg.webp",
  },
  "legitimation-2-0": {
    front: "/media/covers/v3/band2_front_lg.webp",
    back: "/media/covers/v3/band2_back_lg.webp",
  },
  repro: {
    front: "/media/covers/v3/band3_front_lg.webp",
    back: "/media/covers/v3/band3_back_lg.webp",
  },
  bundle: {
    front: "/media/covers/v3/bundle_front_lg.webp",
    back: "/media/covers/v3/bundle_back_lg.webp",
  },
};

export function getCovers(slug: string) {
  return COVERS[slug] ?? null;
}
