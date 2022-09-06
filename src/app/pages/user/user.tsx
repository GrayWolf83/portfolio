import { Grid } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import GoToHomeButton from '../../components/GoToHomeButton'
import Loader from '../../components/Loader'
import UserInfo from '../../components/UserInfo'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import {
	getCurrentUser,
	getUserLoadingStatus,
	getUserRepos,
	loadUser,
	loadUserSkills,
} from '../../store/user'

interface IUser {}

const User: React.FC<IUser> = () => {
	const { login } = useParams()
	const dispatch = useAppDispatch()
	const currentUser = useAppSelector(getCurrentUser())
	const isLoading = useAppSelector(getUserLoadingStatus())
	const repos = useAppSelector(getUserRepos())

	React.useEffect(() => {
		document.title = 'Портфолио | GitHub view'
	}, [])

	const loadCurrentUser = () => {
		if (login && login !== currentUser?.login) {
			dispatch(loadUser(login))
		}
	}

	React.useEffect(() => {
		loadCurrentUser()
	}, [login])

	React.useEffect(() => {
		if (repos.length) {
			const names = repos.map((repo) => repo.full_name)
			dispatch(loadUserSkills(names))
		}
	}, [repos])

	console.log('repos', repos)

	return (
		<div data-testid='User'>
			<GoToHomeButton />
			{isLoading ? (
				<Loader />
			) : (
				<>{currentUser && <UserInfo user={currentUser} />}</>
			)}
		</div>
	)
}

export default User
