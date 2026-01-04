import createMiddleware from 'next-intl/middleware'
import { routing } from '../i18n/routing'
import type { NextRequest } from 'next/server'

export default function intlProxy(req: NextRequest) {
  return createMiddleware(routing)(req)
}