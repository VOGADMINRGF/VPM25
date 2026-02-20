"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  PAYMENTS_COOKIE,
  createPaymentsCookie,
  isPaymentsPasswordValid,
} from "@/lib/paymentSession";

const COOKIE_TTL_DAYS = 7;

function getPaymentsPassword() {
  return process.env.VOG_PAYMENTS_PASSWORD || "";
}

function getPaymentsSecret() {
  return process.env.JWT_SECRET || process.env.EDITOR_TOKEN || "payments-session";
}

export async function loginPayments(formData: FormData) {
  const password = String(formData.get("password") || "").trim();
  const expected = getPaymentsPassword();

  if (!expected) {
    redirect("/zahlungen?error=unconfigured");
  }

  if (!password || !isPaymentsPasswordValid(password, expected)) {
    redirect("/zahlungen?error=invalid");
  }

  const { value, expiresAt } = createPaymentsCookie(getPaymentsSecret(), COOKIE_TTL_DAYS);
  cookies().set(PAYMENTS_COOKIE, value, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    expires: new Date(expiresAt),
    path: "/",
  });

  redirect("/zahlungen");
}

export async function logoutPayments() {
  cookies().set(PAYMENTS_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
    path: "/",
  });
  redirect("/zahlungen");
}
