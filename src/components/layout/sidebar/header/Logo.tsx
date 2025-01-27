import { SquarePlay } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/colors.constants'

import { PUBLIC_PAGE } from '@/config/public-page.config'

export function Logo() {
	return (
		<Link
			href={PUBLIC_PAGE.HOME}
			className='inline-flex items-center gap-1.5'
		>
			<SquarePlay
				color={COLORS.primary}
				size={29}
			/>
			<span className='font-medium text-xl'>MY Video</span>
		</Link>
	)
}
