import axios from 'axios'

import type { IVideos } from '@/types/video.types'

class VideoService {
	private readonly BASE_URL = 'http://localhost:4200/api/videos'

	public readonly getExploreVideos = async () => {
		return axios.get<IVideos>(`${this.BASE_URL}/explore`)
	}
}

export const videoService = new VideoService()
