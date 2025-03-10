import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Ignora rotas do NextAuth.js e outras rotas de API
  if (pathname.startsWith('/api/auth') || pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // Redireciona a raiz (`/`) para o idioma padrão (`/en`)
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  // Continua com a requisição normal
  return NextResponse.next();
}

export const config = {
  matcher: '/', // Aplica o middleware apenas na raiz (`/`)
};