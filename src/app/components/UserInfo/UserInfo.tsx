import React from 'react'
import {
	Avatar,
	Card,
	CardContent,
	Grid,
	Link,
	Typography,
} from '@mui/material'
import { useAppSelector } from '../../hooks/useAppReduxHooks'
import { getCurrentUser, getUserLoadingStatus } from '../../store/user'
import Loader from '../Loader'

interface IUserInfo {}

const UserInfo: React.FC<IUserInfo> = () => {
	const user = useAppSelector(getCurrentUser())
	const isLoading = useAppSelector(getUserLoadingStatus())

	return (
		<Grid item md={4} xs={12} data-testid='UserInfo'>
			<Card sx={{ width: '100%', height: '100%' }}>
				{user && !isLoading ? (
					<CardContent>
						<Avatar
							src={user.avatar_url}
							sx={{
								width: '150px',
								height: '150px',
								m: '10px auto',
							}}
						/>
						<Typography variant='h5' color='primary'>
							{user.login}
						</Typography>
						<Typography variant='h6'>{user.name}</Typography>
						{user.location && (
							<Typography variant='body1'>
								Локация: {user.location}
							</Typography>
						)}
						<Typography variant='body1'>
							Аккаунт создан:{' '}
							{new Date(user.created_at).toLocaleDateString()}
						</Typography>
						{user?.blog && (
							<Typography variant='body1'>
								Блог:{' '}
								<Link href={user.blog} target='_blank'>
									{user.blog}
								</Link>
							</Typography>
						)}
					</CardContent>
				) : (
					<Loader />
				)}
			</Card>
		</Grid>
	)
}

export default UserInfo
