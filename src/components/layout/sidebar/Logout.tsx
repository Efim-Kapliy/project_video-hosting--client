import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

import { PUBLIC_PAGE } from '@/config/public-page.config'
import { STUDIO_PAGE } from '@/config/studio-page.config'

import { authService } from '@/services/auth.service'
import { useAppSelector } from '@/store'

export function Logout() {
	const router = useRouter()
	const pathname = usePathname()

	const { mutate, isPending } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => {
			if (pathname.includes(STUDIO_PAGE.HOME) || pathname.includes(STUDIO_PAGE.SETTINGS)) {
				router.push(PUBLIC_PAGE.HOME)
			}
		}
	})

	const { isLoggedIn } = useAppSelector(state => state.auth)

	if (!isLoggedIn) return null

	return (
		<button
			className={'group py-3 flex items-center gap-6 '}
			onClick={() => mutate()}
		>
			<LogOut className={'min-w-6 group-hover:text-primary transition group-hover:rotate-6'} />
			<span>{isPending ? 'Loading...' : 'Logout'}</span>
		</button>
	)
}
