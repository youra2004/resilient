import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/courses';

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
