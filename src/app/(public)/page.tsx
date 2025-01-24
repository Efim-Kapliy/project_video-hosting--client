import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/ui/Heading'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { PUBLIC_PAGE } from '@/config/public-page.config'

import { Explore } from './explore/Explore'
import { videoService } from '@/services/video.service'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
	description: 'The best video viewing platform.',
	alternates: {
		canonical: PUBLIC_PAGE.HOME
	},
	openGraph: {
		type: 'website',
		url: PUBLIC_PAGE.HOME,
		title: 'MY Video'
	}
}

export default async function Home() {
	const data = await videoService.getTrendingVideos()
	const trendingVideos = data.data.slice(0, 6)

	return (
		<section>
			{!!trendingVideos.length && (
				<section>
					<Heading
						isH1
						Icon={Flame}
					>
						Trending
					</Heading>
					<div className='grid-6-cols mb-8'>
						{trendingVideos.map(video => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={Flame}
							/>
						))}
					</div>
				</section>
			)}
			<Explore />
		</section>
	)
}
