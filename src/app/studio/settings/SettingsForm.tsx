'use client'

import { Controller } from 'react-hook-form'

import { Button } from '@/ui/button/Button'
import { Field } from '@/ui/field/Field'
import { Textarea } from '@/ui/field/Textarea'
import { UploadField } from '@/ui/upload-field/UploadField'

import { useSettings } from './useSettings'

export function SettingsForm() {
	const {
		formObject: {
			handleSubmit,
			register,
			watch,
			formState: { errors },
			control
		},
		isLoading,
		isProfileLoading,
		onSubmit
	} = useSettings()

	if (isProfileLoading) return <div>Loading...</div>

	return (
		<div className='w-3/5'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='grid grid-cols-2 gap-10'>
					<div>
						<Field
							label='Email'
							type='email'
							registration={register('email', { required: 'Email is required!' })}
							error={errors.email?.message}
							placeholder='Enter email:'
						/>
						<Field
							label='Password'
							type='password'
							registration={register('password')}
							error={errors.password?.message}
							placeholder='Enter password:'
						/>
						<Field
							label='Password confirmation'
							type='password'
							registration={register('confirmPassword', {
								validate: value => value === watch('password') || "Passwords don't match!"
							})}
							error={errors.confirmPassword?.message}
							placeholder='Enter password again:'
						/>
						<Field
							label='Name'
							type='text'
							registration={register('name')}
							error={errors.name?.message}
							placeholder='Enter name:'
						/>
						<Field
							label='Slug (alias)'
							type='text'
							registration={register('channel.slug')}
							error={errors.channel?.slug?.message}
							placeholder='Enter slug:'
						/>
						<Textarea
							label='Description'
							registration={register('channel.description')}
							error={errors.channel?.description?.message}
							placeholder='Enter description:'
							rows={4}
						/>
					</div>

					<div>
						<Controller
							name='channel.avatarUrl'
							control={control}
							render={({ field: { onChange, value }, fieldState: { error } }) => (
								<UploadField
									label='Avatar:'
									onChange={onChange}
									value={value}
									error={error}
									folder='avatars'
									className='mb-5'
								/>
							)}
						/>
						<Controller
							name='channel.bannerUrl'
							control={control}
							render={({ field: { onChange, value }, fieldState: { error } }) => (
								<UploadField
									label='Banner:'
									onChange={onChange}
									value={value}
									error={error}
									folder='banners'
									aspectRation='16:9'
									overlay='/overlay.png'
								/>
							)}
						/>
					</div>
				</div>

				<div className='text-center mt-8'>
					<Button
						type='submit'
						isLoading={isLoading}
					>
						Update
					</Button>
				</div>
			</form>
		</div>
	)
}
