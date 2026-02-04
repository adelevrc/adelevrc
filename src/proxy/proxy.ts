import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export default function proxy(req: NextRequest) {
  // Ici tu peux faire d'autres traitements si nécessaire
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}