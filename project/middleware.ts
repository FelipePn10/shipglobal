import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./next-i18next.config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locales = i18n.locales;
  const defaultLocale = i18n.defaultLocale;

  // Verifique se o caminho já inclui um locale válido
  const pathLocale = locales.find((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  if (!pathLocale) {
    // Redirecione para o locale padrão
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|locales).*)"],
};