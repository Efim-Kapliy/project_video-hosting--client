import { Video } from 'lucide-react'

import { Heading } from '@/ui/Heading'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { channelService } from '@/services/channel.service'
import type { TPageSlugProp } from '@/types/page.types'

export const revalidate = 100
export const dynamic = 'force-static'

export default async function ChannelPage({ params }: TPageSlugProp) {
	const data = await channelService.bySlug(params.slug)
	const channel = data.data

	return (
		<section>
			<Heading
				isH1
				Icon={Video}
			>
				Videos
			</Heading>
			<section>
				{!!channel.videos.length ? (
					<div className='grid-6-cols mb-8'>
						{channel.videos.map(video => (
							<VideoItem
								key={video.id}
								video={video}
							/>
						))}
					</div>
				) : (
					<div>The list is empty</div>
				)}
			</section>
		</section>
	)
}
