import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import type { ISidebarItem } from '../sidebar.types'

import { MenuItem } from './MenuItem'

interface Props {
	title?: string
	menu: ISidebarItem[]
	isShowedSidebar: boolean
}

export function SidebarMenu({ title, menu, isShowedSidebar }: Props) {
	const pathname = usePathname()

	return (
		<nav>
			{title && <div className='opacity-45 uppercase font-medium text-xs mb-3'>{title}</div>}
			<ul>
				{menu.map(menuItem => (
					<MenuItem
						key={menuItem.label}
						item={menuItem}
						isActive={!!match(menuItem.link, { sensitive: true })(pathname)}
						isShowedSidebar={isShowedSidebar}
					/>
				))}
			</ul>
		</nav>
	)
}
