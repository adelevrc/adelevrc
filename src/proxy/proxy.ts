// src/proxy/proxy.ts
import type { NextRequest } from 'next/server'
import intlProxy from './intl.proxy'
import authProxy from './auth.proxy'

export default function proxy(req: NextRequest) {
  // 1️⃣ Auth d’abord
  const authResult = authProxy(req)
  if (authResult) return authResult

  // 2️⃣ I18n ensuite
  return intlProxy(req)
}

export const config = {
  matcher: [
    // Combine les matchers des deux proxies
    '/', '/(fr|en)/:path*',
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
