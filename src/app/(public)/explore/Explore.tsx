'use client'

import { useQuery } from '@tanstack/react-query'
import { Compass } from 'lucide-react'

import { Heading } from '@/ui/Heading'
import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { videoService } from '@/services/video.service'

export function Explore() {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: () => videoService.getExploreVideos(),
		select: data => data?.data
	})

	return (
		<section>
			<Heading Icon={Compass}>Trending</Heading>
			<div className='grid grid-cols-6 gap-6'>
				{isLoading ? (
					<SkeletonLoader
						count={6}
						className='h-36 rounded-md'
					/>
				) : (
					!!data?.videos.length &&
					data.videos.map(video => (
						<VideoItem
							key={video.id}
							video={video}
						/>
					))
				)}
			</div>
		</section>
	)
}
