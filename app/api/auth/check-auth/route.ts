import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = cookies();
  const sid = cookieStore.get('sid');
  const authJsToken = cookieStore.get('authjs.session-token');

  if (!sid || !authJsToken) {
    return NextResponse.json({ isAuthenticated: false }, { status: 401 });
  }

  return NextResponse.json({ isAuthenticated: true });
} 