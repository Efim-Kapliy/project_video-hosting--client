import { instance } from '@/api/axios'

import type { IFullUser } from '@/types/user.types'

class UserService {
	private readonly _BASE_URL = '/users'

	public readonly getProfile = async () => {
		return instance.get<IFullUser>(`${this._BASE_URL}/profile`)
	}
}

export const userService = new UserService()
