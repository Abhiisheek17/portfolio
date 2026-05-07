import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Security Headers
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Basic bot filtering
  const userAgent = request.headers.get("user-agent") || "";

  const blockedBots = [
    "Bytespider",
    "SemrushBot",
    "MJ12bot",
    "DotBot",
    "AhrefsBot",
  ];

  const isBlocked = blockedBots.some((bot) =>
    userAgent.includes(bot)
  );

  if (isBlocked) {
    return new NextResponse("Blocked", { status: 403 });
  }

  return response;
}

export const config = {
  matcher: "/:path*",
};