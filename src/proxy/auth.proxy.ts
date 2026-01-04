import { clerkMiddleware } from '@clerk/nextjs/server'
import type { NextRequest } from 'next/server'

export default function authProxy(req: NextRequest) {
  return clerkMiddleware()
}

