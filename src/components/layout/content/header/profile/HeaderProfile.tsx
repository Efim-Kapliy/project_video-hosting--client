import { LogIn } from 'lucide-react'

import { LinkButton } from '@/ui/button/LinkButton'

import { PUBLIC_PAGE } from '@/config/public-page.config'

import { HeaderAvatar } from './HeaderAvatar'
import { useAppSelector } from '@/store'

export function HeaderProfile() {
	const { isLoggedIn } = useAppSelector(state => state.auth)

	return isLoggedIn ? (
		<HeaderAvatar />
	) : (
		<LinkButton href={PUBLIC_PAGE.AUTH}>
			<LogIn size={20} /> Auth
		</LinkButton>
	)
}
