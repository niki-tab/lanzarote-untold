import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, resolveInternalPath } from "@/infrastructure/i18n/config";
import type { Locale } from "@/infrastructure/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/img") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // --- Admin auth ---
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin")) {
    const token =
      request.cookies.get("next-auth.session-token")?.value ||
      request.cookies.get("__Secure-next-auth.session-token")?.value;

    if (!token) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  // --- i18n routing (public pages only) ---

  // Check if pathname starts with a locale
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If /en/... → redirect to /... (strip default locale)
  if (pathnameLocale === defaultLocale) {
    const newPathname = pathname.replace(`/${defaultLocale}`, "") || "/";
    const url = request.nextUrl.clone();
    url.pathname = newPathname;
    return NextResponse.redirect(url, 308);
  }

  // Non-default locale: rewrite translated slug to internal path
  if (pathnameLocale) {
    const rest = pathname.slice(pathnameLocale.length + 1); // strip /{locale}
    const internalPath = resolveInternalPath(rest || "/", pathnameLocale as Locale);
    const internalUrl = `/${pathnameLocale}${internalPath}`;

    if (internalUrl !== pathname) {
      const url = request.nextUrl.clone();
      url.pathname = internalUrl;
      return NextResponse.rewrite(url);
    }

    return NextResponse.next();
  }

  // No locale prefix → rewrite to /en/...
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|img|favicon.ico).*)"],
};
