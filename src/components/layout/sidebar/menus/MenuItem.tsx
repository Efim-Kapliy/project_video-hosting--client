import cn from 'clsx'
import Link from 'next/link'

import type { ISidebarItem } from '../sidebar.types'

interface Props {
	item: ISidebarItem
	isActive: boolean
}

export function MenuItem({ item, isActive }: Props) {
	return (
		<li>
			<Link
				href={item.link}
				className={'group py-3 flex items-center gap-6 '}
			>
				<item.icon
					className={cn('min-w-6', { 'group-hover:text-primary transition group-hover:rotate-6': !isActive })}
				/>
				<span
					className={cn('border-b', {
						'border-white': isActive,
						'border-transparent': !isActive
					})}
				>
					{item.label}
				</span>
			</Link>
			{item.isBottomBorder && <span className='h-[1] bg-border w-full block my-5'></span>}
		</li>
	)
}
