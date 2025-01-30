import { LogIn } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { LinkButton } from '@/ui/button/LinkButton'

import { PUBLIC_PAGE } from '@/config/public-page.config'
import { STUDIO_PAGE } from '@/config/studio-page.config'

import { useAppSelector } from '@/store'

export function HeaderProfile() {
	const { isLoggedIn } = useAppSelector(state => state.auth)

	return isLoggedIn ? (
		<Link
			href={STUDIO_PAGE.SETTINGS}
			className='shrink-0'
		>
			{/* TODO: AUTH AVATAR*/}
			<Image
				src='/uploads/avatars/redgroup.jpg'
				alt=''
				width={40}
				height={40}
				className='rounded-lg'
			/>
		</Link>
	) : (
		<LinkButton href={PUBLIC_PAGE.AUTH}>
			<LogIn size={20} /> Auth
		</LinkButton>
	)
}
