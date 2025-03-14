import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for API routes, static files, and images
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next/static') ||
    pathname.startsWith('/_next/image') ||
    pathname === '/favicon.ico' ||
    pathname.startsWith('/locales') // Permitir acesso aos arquivos de tradução
  ) {
    return NextResponse.next();
  }

  // Define supported languages
  const supportedLanguages = ['en', 'pt', 'es'];
  const defaultLanguage = 'en';

  // Extract the language from the pathname
  const pathParts = pathname.split('/');
  const lang = pathParts[1]; // First segment after the root (e.g., "en" in "/en/price")

  // If no language prefix or unsupported language, redirect to default language
  if (!lang || !supportedLanguages.includes(lang)) {
    const newPath = `/${defaultLanguage}${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  // Proceed with the request if language is valid
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|locales).*)'],
};