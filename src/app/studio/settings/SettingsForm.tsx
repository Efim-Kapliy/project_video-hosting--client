'use client'

import { Button } from '@/ui/button/Button'
import { Field } from '@/ui/field/Field'
import { Textarea } from '@/ui/field/Textarea'

import { useSettings } from './useSettings'

export function SettingsForm() {
	const {
		formObject: {
			handleSubmit,
			register,
			watch,
			formState: { errors }
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
							registration={register('password', { required: 'Password is required!' })}
							error={errors.password?.message}
							placeholder='Enter password:'
						/>
						<Field
							label='Password confirmation'
							type='password'
							registration={register('confirmPassword', {
								required: 'Password confirmation is required!',
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

					<div></div>
				</div>

				<div className='text-center mt-4'>
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
