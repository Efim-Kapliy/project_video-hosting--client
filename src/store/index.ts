import { configureStore } from '@reduxjs/toolkit'
import { type TypedUseSelectorHook, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { authSlice } from './auth.slice'

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer
	}
})

export type TAppDispatch = typeof store.dispatch

export type TRootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<TAppDispatch>
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector
