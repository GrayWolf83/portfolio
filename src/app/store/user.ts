import { IRepo } from '../types/IRepo'
import { AppDispatch, RootState } from './index'
import { setLoadingError } from './error'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../types/IUser'
import userService from '../services/user.service'
import { ISkill } from '../types/ISkill'

type userState = {
	currentUser: IUser | null
	isLoading: boolean
	error: string | null
	dataLoaded: boolean
	repos: IRepo[]
	skills: ISkill[]
}

const initialState: userState = {
	currentUser: null,
	isLoading: false,
	error: null,
	dataLoaded: false,
	repos: [],
	skills: [],
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		userLoadingStart: (state) => {
			state.isLoading = true
		},
		userLoadingEnd: (state) => {
			state.isLoading = false
		},
		userLoadingError: (state, action: PayloadAction<string>) => {
			state.error = action.payload
		},
		userLoaded: (state, action: PayloadAction<IUser>) => {
			state.currentUser = action.payload
			state.dataLoaded = true
		},
		userReposLoaded: (state, action: PayloadAction<IRepo[]>) => {
			state.repos = action.payload
		},
		userSkillsLoaded: (
			state,
			action: PayloadAction<{ [key: string]: number }>,
		) => {
			let newSkills: ISkill[] = Object.keys(action.payload).map((key) => {
				return { name: key, value: action.payload[key] }
			})

			const updatedSkills = state.skills.map((skill) => {
				const currentSkill = newSkills.find(
					(item) => item.name === skill.name,
				)
				if (currentSkill) {
					newSkills = newSkills.filter(
						(item) => item.name !== currentSkill.name,
					)
					return {
						name: skill.name,
						value: currentSkill.value + skill.value,
					}
				}

				return skill
			})

			state.skills = [...updatedSkills, ...newSkills]
		},
	},
})

const {
	userLoadingStart,
	userLoadingEnd,
	userLoaded,
	userReposLoaded,
	userSkillsLoaded,
	userLoadingError,
} = userSlice.actions

export const loadUser = (login: string) => async (dispatch: AppDispatch) => {
	dispatch(userLoadingStart())
	try {
		const payload = await userService.getUser(login)
		dispatch(userLoaded(payload))

		const repos = await userService.getRepos(login)
		dispatch(userReposLoaded(repos))
	} catch (error: any) {
		dispatch(userLoadingError(error))
	} finally {
		dispatch(userLoadingEnd())
	}
}

export const loadUserSkills =
	(full_name: string) => async (dispatch: AppDispatch) => {
		dispatch(userLoadingStart())
		try {
			const skills = await userService.getSkills(
				`repos/${full_name}/languages`,
			)
			dispatch(userSkillsLoaded(skills))
		} catch (error: any) {
			dispatch(userLoadingError(error))
		} finally {
			dispatch(userLoadingEnd())
		}
	}

export const getCurrentUser = () => (state: RootState) => {
	return state.user.currentUser
}

export const getUserRepos = () => (state: RootState) => {
	return state.user.repos
}

export const getUserSkills = () => (state: RootState) => {
	return state.user.skills
}

export const getUserLoadingStatus = () => (state: RootState) => {
	return state.user.isLoading
}

export default userSlice.reducer
