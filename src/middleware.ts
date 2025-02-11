import type { NextRequest, NextResponse } from 'next/server'

import { PUBLIC_PAGE } from './config/public-page.config'
import { STUDIO_PAGE } from './config/studio-page.config'
import { protectLoginPages } from './server-actions/middlewares/protect-login.middleware'
import { protectStudio } from './server-actions/middlewares/protect-studio.middleware'

export async function middleware(request: NextRequest, response: NextResponse) {
	const url = new URL(request.url)
	const pathname = url.pathname

	if (pathname.includes(STUDIO_PAGE.HOME)) {
		return protectStudio(request)
	}

	if (pathname.includes(PUBLIC_PAGE.AUTH)) {
		return protectLoginPages(request)
	}
}

export const config = {
	matcher: ['/studio/:path*', '/auth/:path*']
}
