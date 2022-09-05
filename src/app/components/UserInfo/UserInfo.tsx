import { Avatar, Card, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { IUser } from '../../types/IUser'

interface IUserInfo {
	user: IUser
}

const UserInfo: React.FC<IUserInfo> = ({ user }) => {
	return (
		<Grid container spacing={4} data-testid='UserInfo'>
			<Grid item md={4} xs={12} padding='10px'>
				<Card sx={{ height: '100%', p: '10px' }}>
					<Avatar
						src={user.avatar_url}
						sx={{ width: '150px', height: '150px', m: '10px auto' }}
					/>
					<Typography variant='h5'>{user.login}</Typography>
					<Typography variant='h6'>{user.name}</Typography>
				</Card>
			</Grid>
			<Grid item sm={4} xs={12} padding='10px'>
				<Card
					sx={{
						height: '100%',
						p: '10px',
						md: { textAlign: 'center' },
					}}>
					{user.location && (
						<Typography variant='body1'>
							Локация: {user.location}
						</Typography>
					)}
					<Typography variant='body1'>
						Аккаунт создан:{' '}
						{new Date(user.created_at).toLocaleDateString()}
					</Typography>
					{user.blog && (
						<Typography variant='body1'>
							Блог:{' '}
							<Link href={user.blog} target='_blank'>
								{user.blog}
							</Link>
						</Typography>
					)}
				</Card>
			</Grid>
			<Grid item md={4} sm={8} xs={12} padding='10px'>
				<Card sx={{ height: '100%', p: '10px' }}>
					<Typography variant='h6'>Технологии:</Typography>
				</Card>
			</Grid>
			<Grid item xs={12} padding='10px'>
				<Card sx={{ height: '100%', p: '10px' }}>
					<Typography variant='h6'>Проекты:</Typography>
				</Card>
			</Grid>
		</Grid>
	)
}

export default UserInfo
