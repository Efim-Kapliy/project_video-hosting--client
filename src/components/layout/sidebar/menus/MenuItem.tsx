import Link from 'next/link'

import type { ISidebarItem } from '../sidebar.types'

interface Props {
	item: ISidebarItem
}

export function MenuItem({ item }: Props) {
	return (
		<li>
			<Link
				href={item.link}
				className={'group py-3 flex items-center gap-6 '}
			>
				<item.icon className='group-hover:text-primary transition group-hover:rotate-6 min-w-6' />
				<span>{item.label}</span>
			</Link>
			{item.isBottomBorder && <span className='h-[1] bg-border w-full block my-5'></span>}
		</li>
	)
}
