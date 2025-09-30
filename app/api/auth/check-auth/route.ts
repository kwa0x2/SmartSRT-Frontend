import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = cookies();
  const cookieName = process.env.COOKIE_NAME;
  const authJsTokenName = process.env.AUTHJS_SESSION_TOKEN;

  if (!cookieName || !authJsTokenName) {
    return NextResponse.json({ isAuthenticated: false, error: 'Missing environment variables' }, { status: 500 });
  }

  const authToken = cookieStore.get(cookieName);
  const authJsToken = cookieStore.get(authJsTokenName);

  if (!authToken || !authJsToken) {
    const response = NextResponse.json({ isAuthenticated: false }, { status: 401 });

    response.cookies.set(cookieName, '', {
      expires: new Date(0),
      path: '/',
      httpOnly: true,
      domain: process.env.NODE_ENV === 'production' ? process.env.DOMAIN_NAME : 'localhost',
      secure: process.env.NODE_ENV === 'production'
    });

    return response;
  }

  return NextResponse.json({ isAuthenticated: true });
} 