class PublicPage {
	HOME = '/'
	TRENDING = '/trending'
	VIDEO_GAMES = '/video-games'

	SEARCH = '/search'

	MY_CHANEL = '/my-chanel'
	SUBSCRIPTIONS = '/subscriptions'
	HISTORY = '/history'
	LIKED_VIDEOS = '/liked-video'

	SETTINGS = '/settings'
	FEEDBACK = '/feedback'

	VIDEO(path: string) {
		return `/v/${path}`
	}

	CHANNEL(path: string) {
		return `/c/${path}`
	}
}

export const PUBLIC_PAGE = new PublicPage()
