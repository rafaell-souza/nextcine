import { NextResponse, type NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
    const url = new URL(request.url);
    if (url.pathname === '/login') return NextResponse.next();

    const token = request.cookies.get('token')?.value;
    if (!token) return NextResponse.redirect(new URL('/login', request.url));

    try {
        await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET!));
    } catch (err) {
        console.log("JWT Verification Error:", err);
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/movie/:id*',
        '/search/:name*',
        '/genre/:id*',
    ],
};
