import { auth } from "@/auth";
import { NextAuthRequest } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Exclude auth and public routes from middleware
  debugger
  const publicPaths = ["/sign-in", "/api/auth", "/_next", "/assets", "/favicon.ico"];
  const { pathname } = request.nextUrl;

  if (publicPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Call your auth middleware for protected routes
  return auth(request);
}