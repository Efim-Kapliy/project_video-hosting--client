'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'

import { Logo } from '@/components/layout/sidebar/header/Logo'

import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { Button } from '@/ui/button/Button'
import { Field } from '@/ui/field/Field'

import { PUBLIC_PAGE } from '@/config/public-page.config'

import type { IAuthForm } from '../../types/auth-form.types'

import { useAuthForm } from './useAuthForm'
import { useAppSelector } from '@/store'

import styles from './captcha.module.scss'

export function Auth() {
	const [isLogin, setIsLogin] = useState(true)
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset
	} = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const { isLoading, onSubmit, recaptchaRef } = useAuthForm(isLogin ? 'login' : 'register', reset)

	const accessToken = useAppSelector(state => state.auth.accessToken)
	const router = useRouter()

	useEffect(() => {
		if (!accessToken) return
		router.push(PUBLIC_PAGE.HOME)
	}, [accessToken, router])

	return (
		<div className='w-screen h-screen flex justify-center items-center'>
			<div className='w-full max-w-80 p-layout border-border border rounded'>
				<div className='text-center mb-1'>
					<Logo />
				</div>
				<div className='flex justify-center mb-6'>
					<button
						type='button'
						className={`px-4 py-2 font-semibold ${isLogin ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
						onClick={() => setIsLogin(true)}
					>
						Login
					</button>
					<button
						type='button'
						className={`px-4 py-2 font-semibold ${!isLogin ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
						onClick={() => setIsLogin(false)}
					>
						Register
					</button>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					{isLoading ? (
						<SkeletonLoader count={isLogin ? 3 : 4} />
					) : (
						<>
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
							{!isLogin && (
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
							)}

							<ReCAPTCHA
								ref={recaptchaRef}
								size='normal'
								sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
								theme='light'
								className={styles.recaptcha}
							/>
						</>
					)}

					<div className='text-center mt-4'>
						<Button
							type='submit'
							isLoading={isLoading}
						>
							{isLogin ? 'Login' : 'Register'}
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}
