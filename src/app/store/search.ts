import { AppDispatch, RootState } from './index'
import { setLoadingError } from './error'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../types/IUser'
import userService from '../services/user.service'

type SearchState = {
	entities: IUser[]
	isLoading: boolean
	error: string | null
	dataLoaded: boolean
	page: number
	search: string
	usersCount: number
}

const initialState: SearchState = {
	entities: [],
	isLoading: false,
	error: null,
	dataLoaded: false,
	page: 1,
	search: '',
	usersCount: 0,
}

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		serachLoadingStart: (state) => {
			state.isLoading = true
		},
		serachLoadingEnd: (state) => {
			state.isLoading = false
		},
		searchDataLoaded: (
			state,
			action: PayloadAction<{
				entities: IUser[]
				usersCount: number
				search: string
				page: number
			}>,
		) => {
			state.entities = action.payload.entities
			state.dataLoaded = true
			state.page = action.payload.page
			state.usersCount = action.payload.usersCount
			state.search = action.payload.search
		},
	},
})

const { serachLoadingStart, serachLoadingEnd, searchDataLoaded } =
	searchSlice.actions

export const searchUsersList =
	(search: string, page: number) => async (dispatch: AppDispatch) => {
		dispatch(serachLoadingStart())
		try {
			const payload = await userService.searchUsers(search, page)
			dispatch(
				searchDataLoaded({
					entities: payload.items,
					usersCount: payload.total_count,
					search,
					page,
				}),
			)
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(serachLoadingEnd())
		}
	}

export const getUsersList = () => (state: RootState) => {
	return state.search.entities
}

export const getUsersCount = () => (state: RootState) => {
	return state.search.usersCount
}

export const getSearchLoadingStatus = () => (state: RootState) => {
	return state.search.isLoading
}

export const getSearchCurrentPage = () => (state: RootState) => {
	return state.search.page
}

export default searchSlice.reducer
