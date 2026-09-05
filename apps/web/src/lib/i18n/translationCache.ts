import type { Collection } from "mongodb";
import { vogDb } from "@/lib/vogMongo";

export type TranslationCacheStatus = "machine_assisted" | "human_reviewed";

type TranslationCacheDoc = {
  key: string;
  locale: string;
  sourceHash: string;
  promptVersion: string;
  value: unknown;
  status: TranslationCacheStatus;
  createdAt: Date;
  updatedAt: Date;
  reviewedAt?: Date;
};

let collectionPromise: Promise<Collection<TranslationCacheDoc> | null> | null = null;

async function getCollection(): Promise<Collection<TranslationCacheDoc> | null> {
  if (!process.env.MONGODB_URI) return null;
  if (collectionPromise) return collectionPromise;

  collectionPromise = (async () => {
    try {
      const db = await vogDb();
      const collection = db.collection<TranslationCacheDoc>("i18n_translation_cache");
      await collection.createIndex({ key: 1 }, { unique: true }).catch(() => {});
      await collection.createIndex({ locale: 1, updatedAt: -1 }).catch(() => {});
      await collection.createIndex({ sourceHash: 1 }).catch(() => {});
      return collection;
    } catch (error) {
      console.warn("[i18n-cache] persistent cache unavailable", error);
      return null;
    }
  })();

  return collectionPromise;
}

export async function readTranslationCache<T>(key: string): Promise<T | null> {
  try {
    const collection = await getCollection();
    if (!collection) return null;
    const doc = await collection.findOne({ key });
    return doc?.value == null ? null : (doc.value as T);
  } catch (error) {
    console.warn("[i18n-cache] read failed", error);
    return null;
  }
}

export async function writeMachineTranslationCache<T>(input: {
  key: string;
  locale: string;
  sourceHash: string;
  promptVersion: string;
  value: T;
}): Promise<void> {
  try {
    const collection = await getCollection();
    if (!collection) return;
    const now = new Date();
    await collection.updateOne(
      { key: input.key },
      {
        $set: {
          locale: input.locale,
          sourceHash: input.sourceHash,
          promptVersion: input.promptVersion,
          value: input.value,
          status: "machine_assisted",
          updatedAt: now,
        },
        $setOnInsert: { createdAt: now },
      },
      { upsert: true },
    );
  } catch (error) {
    console.warn("[i18n-cache] write failed", error);
  }
}
