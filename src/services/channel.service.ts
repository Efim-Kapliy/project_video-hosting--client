import { axiosClassic } from '@/api/axios'

import type { IChannel } from '@/types/channel.types'

class ChannelService {
	private readonly _BASE_URL = '/channels'

	public readonly bySlug = async (slug?: string | null) => {
		return axiosClassic.get<IChannel>(`${this._BASE_URL}/by-slug/${slug}`)
	}
}

export const channelService = new ChannelService()
