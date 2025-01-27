import { BadgeCheck, type LucideIcon } from 'lucide-react'
import * as m from 'motion/react-m'
import Image from 'next/image'
import Link from 'next/link'

import { PUBLIC_PAGE } from '@/config/public-page.config'

import { transformDate } from '@/utils/transform-date'
import { transformViews } from '@/utils/transform-views'

import type { IVideo } from '@/types/video.types'

interface Props {
	video: IVideo
	Icon?: LucideIcon
}

export function VideoItem({ video, Icon }: Props) {
	return (
		<m.div
			whileHover={{
				scale: 1.03,
				y: -5
			}}
			transition={{
				type: 'spring',
				stiffness: 500,
				damping: 35
			}}
		>
			<div className='relative'>
				<Link href={PUBLIC_PAGE.VIDEO(video.publicId)}>
					<Image
						src={video.thumbnailUrl}
						width={306}
						height={172}
						alt={video.title}
						className='rounded-md'
					/>
				</Link>
				<Link
					href={PUBLIC_PAGE.VIDEO(video.channel.slug)}
					className='absolute left-1.5 bottom-2'
				>
					<Image
						src={video.channel.avatarUrl}
						width={35}
						height={35}
						alt={video.channel.name}
						className='rounded-full shadow'
					/>
				</Link>
			</div>
			<div className='mt-1.5 flex item-center justify-between'>
				<div className='flex items-center gap-0.5'>
					{Icon && (
						<Icon
							className='text-red-600'
							size={20}
						/>
					)}
					<span className='text-gray-400 text-sm'>{transformViews(video.viewsCount)}</span>
				</div>
				<div>
					<span className='text-gray-400 text-xs'>{transformDate(video.createdAt)}</span>
				</div>
			</div>
			<div className='mt-1.5'>
				<Link
					href={PUBLIC_PAGE.VIDEO(video.publicId)}
					className='line-clamp-2 leading-[1.3]'
				>
					{video.title}
				</Link>
			</div>
			<div className='mt-1'>
				<Link
					href={PUBLIC_PAGE.VIDEO(video.channel.slug)}
					className='flex items-center gap-1'
				>
					<span className='text-gray-400 text-sm'>{video.channel.name}</span>
					{video.channel.isVerified && (
						<span>
							<BadgeCheck
								className='text-green-500'
								size={15}
							/>
						</span>
					)}
				</Link>
			</div>
		</m.div>
	)
}
