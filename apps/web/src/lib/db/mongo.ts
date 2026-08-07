import { MongoClient } from "mongodb";

type MongoGlobal = {
  _mongoClientPromise?: Promise<MongoClient>;
};

const globalForMongo = globalThis as MongoGlobal;

function getMongoUri() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }
  return uri;
}

function getClientPromise() {
  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(getMongoUri()).connect();
  }
  return globalForMongo._mongoClientPromise;
}

export async function getMongoClient() {
  return getClientPromise();
}

export async function getMongoDb() {
  const client = await getClientPromise();
  return client.db(process.env.MONGODB_DB || "voiceopengov");
}
