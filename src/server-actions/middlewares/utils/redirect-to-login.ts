import type { NextRequest } from 'next/server'

import { PUBLIC_PAGE } from '@/config/public-page.config'

import { NextRedirect } from './next-redirect'

export const redirectToLogin = (request: NextRequest) => {
	return NextRedirect(PUBLIC_PAGE.AUTH, request.url)
}
