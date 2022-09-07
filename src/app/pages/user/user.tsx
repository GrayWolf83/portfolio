import { Grid } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import GoBackButton from '../../components/GoBackButton'
import GoToHomeButton from '../../components/GoToHomeButton'
import UserInfo from '../../components/UserInfo'
import UserRepos from '../../components/UserRepos'
import UserTechnologies from '../../components/UserTechnologies'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import { getCurrentUser, loadUser } from '../../store/user'

interface IUser {}

const User: React.FC<IUser> = () => {
	const { login } = useParams()
	const dispatch = useAppDispatch()
	const currentUser = useAppSelector(getCurrentUser())

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
