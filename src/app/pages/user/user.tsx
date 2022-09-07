import { Grid } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import GoBackButton from '../../components/GoBackButton'
import GoToHomeButton from '../../components/GoToHomeButton'
import UserInfo from '../../components/UserInfo'
import UserRepos from '../../components/UserRepos'
import UserTechnologies from '../../components/UserTechnologies'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import {
	getCurrentUser,
	getUserRepos,
	loadUser,
	loadUserSkills,
} from '../../store/user'

interface IUser {}

const User: React.FC<IUser> = () => {
	const { login } = useParams()
	const dispatch = useAppDispatch()
	const currentUser = useAppSelector(getCurrentUser())
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

	return (
		<div data-testid='User'>
			<GoBackButton />
			<Grid container spacing={3}>
				<UserInfo />
				<UserTechnologies />
				<UserRepos />
			</Grid>
		</div>
	)
}

export default User
