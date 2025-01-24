import { Gamepad2 } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/ui/Heading'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { PUBLIC_PAGE } from '@/config/public-page.config'

import { videoService } from '@/services/video.service'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Video games',
	description: 'The best video games',
	alternates: {
		canonical: PUBLIC_PAGE.VIDEO_GAMES
	},
	openGraph: {
		type: 'website',
		url: PUBLIC_PAGE.VIDEO_GAMES,
		title: 'Video games'
	}
}

export default async function VideoGamesPage() {
	const videos = await videoService.getVideoGames()

	return (
		<section>
			<Heading
				isH1
				Icon={Gamepad2}
			>
				Video games
			</Heading>
			<div className='grid-6-cols'>
				{videos.data.videos.length ? (
					videos.data.videos.map(video => (
						<VideoItem
							key={video.id}
							video={video}
						/>
					))
				) : (
					<div>Video games are temporarily unavailable</div>
				)}
			</div>
		</section>
	)
}
