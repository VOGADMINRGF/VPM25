"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  SUPPORT_COOKIE,
  createSupportCookie,
  isSupportPasswordValid,
} from "@/lib/supportSession";

const COOKIE_TTL_DAYS = 7;

function getSupportPassword() {
  return process.env.VOG_SUPPORT_PASSWORD || process.env.EDITOR_TOKEN || "";
}

function getSupportSecret() {
  return process.env.JWT_SECRET || process.env.EDITOR_TOKEN || "support-session";
}

export async function loginSupporter(formData: FormData) {
  const password = String(formData.get("password") || "").trim();
  const expected = getSupportPassword();

  if (!expected) {
    redirect("/unterstuetzen?error=unconfigured");
  }

  if (!password || !isSupportPasswordValid(password, expected)) {
    redirect("/unterstuetzen?error=invalid");
  }

  const { value, expiresAt } = createSupportCookie(getSupportSecret(), COOKIE_TTL_DAYS);
  cookies().set(SUPPORT_COOKIE, value, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    expires: new Date(expiresAt),
    path: "/",
  });

  redirect("/unterstuetzen");
}

export async function logoutSupporter() {
  cookies().set(SUPPORT_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
    path: "/",
  });
  redirect("/unterstuetzen");
}
