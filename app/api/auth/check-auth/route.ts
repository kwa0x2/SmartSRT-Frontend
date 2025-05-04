import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = cookies();
  const sid = cookieStore.get('sid');
  const authJsToken = cookieStore.get('authjs.session-token');

  if (!sid || !authJsToken) {
    const response = NextResponse.json({ isAuthenticated: false }, { status: 401 });
    
    response.cookies.set('sid', '', {
      expires: new Date(0),
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production'
    });
    
    return response;
  }

  return NextResponse.json({ isAuthenticated: true });
} 