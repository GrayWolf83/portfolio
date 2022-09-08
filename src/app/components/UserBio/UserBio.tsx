import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../hooks/useAppReduxHooks'
import { getCurrentUser, getUserLoadingStatus } from '../../store/user'
import Loader from '../Loader'

interface IUserBio {}

const UserBio: React.FC<IUserBio> = () => {
	const user = useAppSelector(getCurrentUser())
	const isLoading = useAppSelector(getUserLoadingStatus())

	return (
		<Grid md={4} xs={12} item data-testid='UserBio'>
			<Card sx={{ width: '100%', height: '100%' }}>
				{user && !isLoading ? (
					<CardContent>
						<Typography variant='h6' color='primary'>
							О себе:
						</Typography>
						<Typography variant='body1' color='primary'>
							{user?.bio
								? user.bio
								: `${user.login} не заполнил этот блок`}
						</Typography>
					</CardContent>
				) : (
					<Loader />
				)}
			</Card>
		</Grid>
	)
}

export default UserBio
