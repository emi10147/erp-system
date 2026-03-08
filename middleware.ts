import { NextRequest, NextResponse } from "next/server"

// Routes that don't require authentication
const publicRoutes = ["/login"]
const publicApiRoutes = ["/api/auth/login", "/api/auth/logout"]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow public page routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next()
  }

  // Allow public API routes (auth endpoints)
  if (publicApiRoutes.includes(pathname)) {
    return NextResponse.next()
  }

  // Check for session cookie
  const sessionCookie = request.cookies.get("erp-session-token")

  // If no user session and trying to access protected route
  if (!sessionCookie) {
    if (pathname.startsWith("/api")) {
      // For API routes, return 401 Unauthorized
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    } else {
      // For page routes, redirect to login
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  // Allow the request to proceed if authenticated
  return NextResponse.next()
}

// Configure which paths the middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}
