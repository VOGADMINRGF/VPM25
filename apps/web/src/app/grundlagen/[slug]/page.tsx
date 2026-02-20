import { notFound } from "next/navigation";
import { getRequestLocale } from "@/lib/locale";
import { getAutoTranslatedStrings } from "@/lib/i18n/autoTranslateStrings";
import { getGrundlagenStrings } from "../strings";
import { getGrundlagenSourceEntry } from "../source";
import { getLatestRelease } from "../versioning";
import { getPrintPriceLabel } from "@/config/print";
import GrundlagenReaderClient from "./reader-client";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const locale = await getRequestLocale();

  const entry = getGrundlagenSourceEntry(slug);
  if (!entry) return {};

  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://voiceopengov.org").replace(
    /\/$/,
    "",
  );
  const canonical = `${base}/grundlagen/${slug}`;
  const ogImage = `${base}/api/og?type=band&slug=${encodeURIComponent(
    slug,
  )}&locale=${encodeURIComponent(locale)}`;

  return {
    title: entry.meta.title,
    description: entry.meta.description,
    alternates: { canonical },
    openGraph: {
      title: entry.meta.title,
      description: entry.meta.description,
      url: canonical,
      siteName: "VoiceOpenGov",
      type: "article",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.meta.title,
      description: entry.meta.description,
      images: [ogImage],
    },
  };
}

export default async function GrundlagenDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const locale = await getRequestLocale();
  const strings = await getAutoTranslatedStrings(
    locale,
    getGrundlagenStrings("de"),
    getGrundlagenStrings(locale),
  );

  const entry = getGrundlagenSourceEntry(slug);
  if (!entry) notFound();

  const orderPrice = getPrintPriceLabel(locale);
  const release = getLatestRelease(slug);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://voiceopengov.org";

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pb-16 text-slate-100">
      <section className="mx-auto max-w-5xl px-4 pt-12">
        <GrundlagenReaderClient
          locale={locale}
          strings={strings}
          entry={entry}
          orderPrice={orderPrice}
          release={release}
          siteUrl={siteUrl}
        />
      </section>
    </main>
  );
}
