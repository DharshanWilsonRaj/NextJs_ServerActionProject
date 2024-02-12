import { NextResponse } from 'next/server';

export default function middleware(req) {
  let loggedin = req.cookies.get('token');
  let user = req.cookies.get('user')?.value || '';
  const { pathname } = req.nextUrl;

  if (loggedin && pathname === '/login' && user === 'admin') {
    return NextResponse.redirect(new URL('/', req.url));
  }
  if (loggedin && pathname === '/' && pathname === '/login' && user !== 'admin') {
    return NextResponse.redirect(new URL('/employeeProfile', req.url));
  }

  if (!loggedin && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};




