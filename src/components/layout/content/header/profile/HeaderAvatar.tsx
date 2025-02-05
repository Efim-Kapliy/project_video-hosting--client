import Image from 'next/image'
import Link from 'next/link'

import { SkeletonLoader } from '@/ui/SkeletonLoader'

import { STUDIO_PAGE } from '@/config/studio-page.config'

import { useProfile } from '@/hooks/useProfile'

export function HeaderAvatar() {
	const { isLoading, profile } = useProfile()

	if (isLoading) return <SkeletonLoader className='w-10 mb-0 rounded-md' />

	return (
		<div className='relative'>
			<Link
				href={STUDIO_PAGE.SETTINGS}
				className='shrink-0'
			>
				<Image
					src={profile?.channel?.avatarUrl || '/avatar.svg'}
					alt=''
					width={40}
					height={40}
					className='rounded-lg'
				/>
			</Link>
			{profile?.verificationToken && (
				<div className='absolute left-1/2 -translate-x-1/2 -bottom-3.5 bg-primary p-0.5 rounded text-xs w-max'>
					Not verified!
				</div>
			)}
		</div>
	)
}
