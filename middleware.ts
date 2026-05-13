import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const hostname = request.headers.get('host') || ''

  // Subdomain Redirection Strategy (The "Traspaso de Poder")
  // Format: subdomain.tumapaia.com -> tumapaia.com/subdomain
  
  const subdomains = [
    'creadores', 'productividad', 'gratis', 'negocios', 
    'viajeros', 'finanzas', 'nocode', 'academicos'
  ]

  const subdomain = subdomains.find(s => hostname.startsWith(`${s}.`))

  if (subdomain) {
    // Permanent Redirect (301) to consolidate authority on the main domain
    return NextResponse.redirect(
      new URL(`/${subdomain}${url.pathname}${url.search}`, `https://tumapaia.com`),
      301
    )
  }

  return NextResponse.next()
}

// Only run on subdomain-like requests
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
