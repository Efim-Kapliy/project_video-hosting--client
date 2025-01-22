import type { Metadata } from 'next'

import { PUBLIC_PAGE } from '@/config/public-page.config'

export const metadata: Metadata = {
	title: 'Trending',
	description: 'Trending videos.',
	alternates: {
		canonical: PUBLIC_PAGE.TRENDING
	},
	openGraph: {
		type: 'website',
		url: PUBLIC_PAGE.TRENDING,
		title: 'Trending'
	}
}

export default function TrendingPage() {
	return <div>Trending</div>
}
