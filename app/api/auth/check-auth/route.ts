import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = cookies();
  const authToken = cookieStore.get(process.env.COOKIE_NAME as string);
  const authJsToken = cookieStore.get('authjs.session-token');

  if (!authToken || !authJsToken) {
    const response = NextResponse.json({ isAuthenticated: false }, { status: 401 });
    
    response.cookies.set(process.env.COOKIE_NAME as string, '', {
      expires: new Date(0),
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production'
    });
    
    return response;
  }

  return NextResponse.json({ isAuthenticated: true });
} 