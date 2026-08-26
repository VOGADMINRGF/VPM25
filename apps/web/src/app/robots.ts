import type { MetadataRoute } from "next";
import { VOICEOPENGOV_URL } from "@/config/links";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${VOICEOPENGOV_URL}/sitemap.xml`,
    host: VOICEOPENGOV_URL,
  };
}
