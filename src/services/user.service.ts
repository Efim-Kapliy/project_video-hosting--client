import { instance } from '@/api/axios'

import type { ISettingsData } from '@/app/studio/settings/settings.types'
import type { IFullUser } from '@/types/user.types'

class UserService {
	private readonly _BASE_URL = '/users'

	public readonly getProfile = async () => {
		return instance.get<IFullUser>(`${this._BASE_URL}/profile`)
	}

	public readonly updateProfile = async (data: ISettingsData) => {
		return instance.put<boolean>(`${this._BASE_URL}/profile`, data)
	}
}

export const userService = new UserService()
