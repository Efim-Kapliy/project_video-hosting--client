'use client'

import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import { PUBLIC_PAGE } from '@/config/public-page.config'

import type { ISidebarItem } from '../sidebar.types'

import { MenuItem } from './MenuItem'
import { MyChannelMenuItem } from './MyChannelMenuItem'
import { useAppSelector } from '@/store'

interface Props {
	title?: string
	menu: ISidebarItem[]
	isShowedSidebar: boolean
}

export function SidebarMenu({ title, menu, isShowedSidebar }: Props) {
	const pathname = usePathname()
	const { isLoggedIn } = useAppSelector(state => state.auth)

	return (
		<nav>
			{title && <div className='opacity-45 uppercase font-medium text-xs mb-3'>{title}</div>}
			<ul>
				{menu.map(menuItem => {
					const props = {
						item: menuItem,
						isActive: !!match(menuItem.link, { sensitive: true })(pathname),
						isShowedSidebar
					}

					const isMyChannel = menuItem.link === PUBLIC_PAGE.MY_CHANEL
					const isMyChannelItem = isMyChannel && isLoggedIn

					return isMyChannelItem ? (
						<MyChannelMenuItem
							key={menuItem.label}
							{...props}
						/>
					) : !isMyChannel ? (
						<MenuItem
							key={menuItem.label}
							{...props}
						/>
					) : null
				})}
			</ul>
		</nav>
	)
}
