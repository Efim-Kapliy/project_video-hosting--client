import axios from 'axios'

import type { IVideo, IVideos } from '@/types/video.types'

class VideoService {
	private readonly BASE_URL = 'http://localhost:4200/api/videos'

	public getAll = async (searchTerm?: string | null) => {
		return axios.get<IVideos>(
			`${this.BASE_URL}`,
			searchTerm
				? {
						params: {
							searchTerm
						}
					}
				: {}
		)
	}

	public readonly getTrendingVideos = async () => {
		return axios.get<IVideo[]>(`${this.BASE_URL}/trending`)
	}

	public readonly getExploreVideos = async () => {
		return axios.get<IVideos>(`${this.BASE_URL}/explore`)
	}
}

export const videoService = new VideoService()
