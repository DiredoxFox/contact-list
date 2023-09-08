import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const authToken = request.cookies.get('authToken')

    if(authToken){
        if(request.nextUrl.pathname === '/'){
            return NextResponse.redirect(new URL('/dashboard', request.url))
        }
    }else{
        if(request.nextUrl.pathname.startsWith('/dashboard')){
            return NextResponse.redirect(new URL('/', request.url))
        }
    }
}
