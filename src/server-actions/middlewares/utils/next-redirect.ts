import { NextResponse } from 'next/server'

export function NextRedirect(toUrl: string | URL, currentUrl: string | URL) {
	return NextResponse.redirect(new URL(toUrl, currentUrl))
}
