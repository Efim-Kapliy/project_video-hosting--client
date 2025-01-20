import type { IVideo } from './video.types'

export interface IChannel {
	id: string
	name: string // разнится с бэком
	slug: string
	description: string
	isVerified: boolean
	avatarUrl: string
	bannerUrl: string
	// user:
	videos: IVideo[]
	subscribers: []
	createdAt: string
}
