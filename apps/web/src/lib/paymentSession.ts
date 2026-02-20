import { createHmac, randomBytes, timingSafeEqual } from "crypto";

export const PAYMENTS_COOKIE = "vog_payments_session";
const DEFAULT_TTL_DAYS = 7;

function hmac(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("base64url");
}

function safeEqual(a: string, b: string) {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);
  if (aBuf.length !== bBuf.length) return false;
  return timingSafeEqual(aBuf, bBuf);
}

export function createPaymentsCookie(secret: string, ttlDays = DEFAULT_TTL_DAYS) {
  const expiresAt = Date.now() + ttlDays * 24 * 60 * 60 * 1000;
  const nonce = randomBytes(16).toString("base64url");
  const payload = `${expiresAt}:${nonce}`;
  const sig = hmac(payload, secret);
  return { value: `${payload}.${sig}`, expiresAt };
}

export function verifyPaymentsCookie(cookieValue: string | undefined, secret: string) {
  if (!cookieValue) return false;
  const parts = cookieValue.split(".");
  if (parts.length !== 2) return false;
  const [payload, sig] = parts;
  if (!safeEqual(hmac(payload, secret), sig)) return false;
  const [expiresRaw] = payload.split(":");
  const expiresAt = Number(expiresRaw);
  if (!Number.isFinite(expiresAt)) return false;
  return Date.now() <= expiresAt;
}

export function isPaymentsPasswordValid(input: string, expected: string) {
  return safeEqual(input, expected);
}
