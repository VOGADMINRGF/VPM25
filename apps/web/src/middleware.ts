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

export function middleware(request: NextRequest) {
  const requestedLocale = request.nextUrl.searchParams.get("lang")?.toLowerCase();
  if (!requestedLocale || !PUBLIC_LOCALES.has(requestedLocale)) {
    return NextResponse.next();
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-vog-locale", requestedLocale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
