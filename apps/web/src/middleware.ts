import { NextResponse, type NextRequest } from "next/server";

const PUBLIC_LOCALES = new Set([
  "de",
  "en",
  "fr",
  "es",
  "tr",
  "ar",
  "pl",
  "it",
  "ru",
  "zh",
]);

type NextResponseWithNext = typeof NextResponse & {
  next(init?: { request?: { headers?: Headers } }): Response;
};

const nextResponse = NextResponse as NextResponseWithNext;

export function middleware(request: NextRequest) {
  const requestedLocale = request.nextUrl.searchParams.get("lang")?.toLowerCase();
  if (!requestedLocale || !PUBLIC_LOCALES.has(requestedLocale)) {
    return nextResponse.next();
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-vog-locale", requestedLocale);

  return nextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
