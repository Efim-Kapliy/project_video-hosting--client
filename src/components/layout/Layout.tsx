'use client'

import cn from 'clsx'
import { type PropsWithChildren, useEffect, useRef, useState } from 'react'

import { Content } from './content/Content'
import { Sidebar } from './sidebar/Sidebar'

import styles from './Layout.module.scss'

export function Layout({ children }: PropsWithChildren<unknown>) {
	const [isShowedSidebar, setIsShowedSidebar] = useState(true)
	const firstRender = useRef(true)

	useEffect(() => {
		// TODO Можно в будущем вынести в store с сохранением состояния меню
		if (firstRender.current) {
			firstRender.current = false
			return
		}
	})

	const toggleSidebar = () => {
		setIsShowedSidebar(!isShowedSidebar)
	}

	return (
		<main
			className={cn(
				'flex min-h-screen',
				!firstRender.current && (isShowedSidebar ? styles.showedSidebar : styles.hidedSidebar)
			)}
		>
			<Sidebar toggleSidebar={toggleSidebar} />
			<Content>{children}</Content>
		</main>
	)
}
