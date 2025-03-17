import { NextRequest, NextResponse } from "next/server";

const locales = ['pt', 'en', 'es'];
const defaultLocale = 'pt';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (!pathnameHasLocale) {
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|locales).*)"],
};