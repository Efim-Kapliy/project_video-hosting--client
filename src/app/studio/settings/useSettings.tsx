import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { useProfile } from '@/hooks/useProfile'

import type { ISettingsData } from './settings.types'
import { userService } from '@/services/user.service'

export function useSettings() {
	const form = useForm<ISettingsData>({
		mode: 'onChange'
	})

	const { profile, isSuccess, isLoading, refetch } = useProfile()

	useEffect(() => {
		if (!isSuccess) return

		const channel = profile?.channel
			? {
					avatarUrl: profile?.channel?.avatarUrl,
					bannerUrl: profile?.channel?.bannerUrl,
					description: profile?.channel?.description,
					slug: profile?.channel?.slug
				}
			: {}

		form.reset({
			channel,
			email: profile?.email,
			name: profile?.name
		})
	}, [form, profile, isSuccess])

	const { mutateAsync, isPending } = useMutation({
		mutationKey: ['update-settings'],
		mutationFn: (data: ISettingsData) => userService.updateProfile(data)
	})

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const onSubmit: SubmitHandler<ISettingsData> = ({ confirmPassword, ...data }) => {
		toast.promise(mutateAsync(data), {
			loading: 'Saving...',
			success: () => {
				refetch()

				return 'Profile updated'
			},
			error: (e: Error) => {
				if (axios.isAxiosError(e)) {
					return e.response?.data?.message
				}
			}
		})
	}

	return {
		onSubmit,
		formObject: form,
		isLoading: isPending,
		isProfileLoading: isLoading
	}
}
