import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = new URL(request.url);
    if (url.pathname === '/login') {
        return NextResponse.next();
    }

    const token = request.cookies.get('token');
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/movie/:id*',
        '/search/:name*',
        '/genre/:id*'
    ],
};
