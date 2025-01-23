class PublicPage {
	HOME = '/'
	TRENDING = '/trending'
	VIDEO_GAMES = '/video-games'

	MY_CHANEL = '/my-chanel'
	SUBSCRIPTIONS = '/subscriptions'
	HISTORY = '/history'
	LIKED_VIDEOS = '/liked-video'

	FEEDBACK = '/feedback'

	VIDEO(path: string) {
		return `/v/${path}`
	}

	CHANNEL(path: string) {
		return `/c/${path}`
	}

	SEARCH(searchTerm: string) {
		return `/s?term=${searchTerm}`
	}
}

export const PUBLIC_PAGE = new PublicPage()
