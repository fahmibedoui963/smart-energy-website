import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["fr", "en"];
const defaultLocale = "fr";

function getLocale(request) {
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages().filter(lang => lang !== "*");
  if (languages.length === 0) return defaultLocale;
  return match(languages, locales, defaultLocale);
}

export function proxy(request) {
  const pathname = request.nextUrl.pathname;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Exclude API routes, Next internals, metadata files, and any static
    // asset (paths containing a file extension, e.g. /photos/*.png or *.svg)
    // so that files in the public/ folder are served directly.
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
