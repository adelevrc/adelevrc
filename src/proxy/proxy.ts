// src/proxy/proxy.ts
import type { NextRequest } from 'next/server'
import authProxy from './auth.proxy'

export default function proxy(req: NextRequest) {
  const authResult = authProxy(req)
  if (authResult) return authResult


}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
