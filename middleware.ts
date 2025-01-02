import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales } from '@/config';
import { auth } from '@/lib/auth';

export default async function middleware(request: NextRequest) {
  const session = await auth();
  
  if (request.nextUrl.pathname.startsWith('/api')) {
    const response = NextResponse.next();
    
    if (session) {
      const sid = request.cookies.get(process.env.COOKIE_NAME as string);
      if (sid) {
        response.headers.set('Cookie', `${process.env.COOKIE_NAME}=${sid.value}`);
      }
    }
    
    return response;
  }

  // i18n middleware
  const defaultLocale = request.headers.get('autosrt-locale') || 'en';
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale
  });
  
  const response = handleI18nRouting(request);
  response.headers.set('autosrt-locale', defaultLocale);

  return response;
}

export const config = {
  matcher: ['/', '/(ar|en)/:path*', '/api/:path*']
};