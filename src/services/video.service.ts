import { axiosClassic } from '@/api/axios'

import type { IVideo, IVideos } from '@/types/video.types'

class VideoService {
	private readonly _BASE_URL = '/videos'

	public getAll = async (searchTerm?: string | null) => {
		return axiosClassic.get<IVideos>(
			`${this._BASE_URL}`,
			searchTerm
				? {
						params: {
							searchTerm
						}
					}
				: {}
		)
	}

	public readonly getExploreVideos = async () => {
		return axiosClassic.get<IVideos>(`${this._BASE_URL}/explore`)
	}

	public readonly getTrendingVideos = async () => {
		return axiosClassic.get<IVideo[]>(`${this._BASE_URL}/trending`)
	}

	public readonly getVideoGames = async () => {
		return axiosClassic.get<IVideos>(`${this._BASE_URL}/games`)
	}
}

export const videoService = new VideoService()
