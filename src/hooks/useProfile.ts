import { useQuery } from '@tanstack/react-query'

import { userService } from '@/services/user.service'

export function useProfile() {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile(),
		refetchInterval: 1_800_000, //30 min
		select: data => data?.data
	})

	return {
		profile: data,
		isLoading,
		isSuccess
	}
}
