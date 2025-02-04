import dynamic from 'next/dynamic'

import { SidebarHeader } from './header/SidebarHeader'
import { SidebarMenu } from './menus/SidebarMenu'
import { SidebarSubscription } from './menus/subscriptions/SidebarSubscription'
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from './sidebar.data'

const DynamicLogout = dynamic(() => import('./Logout').then(mod => mod.Logout), { ssr: false })

export function Sidebar({ toggleSidebar, isShowedSidebar }: { toggleSidebar: () => void; isShowedSidebar: boolean }) {
	return (
		<aside className='w-60 p-layout border-r border-border whitespace-nowrap overflow-hidden'>
			<SidebarHeader toggleSidebar={toggleSidebar} />
			<SidebarMenu
				menu={SIDEBAR_DATA}
				isShowedSidebar={isShowedSidebar}
			/>
			<SidebarSubscription />
			<SidebarMenu
				title='More from youtube'
				menu={MORE_SIDEBAR_DATA}
				isShowedSidebar={isShowedSidebar}
			/>
			<DynamicLogout />
		</aside>
	)
}
