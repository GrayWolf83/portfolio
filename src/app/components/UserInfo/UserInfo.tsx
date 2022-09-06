import React from 'react'
import {
	Avatar,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	Link,
	Typography,
} from '@mui/material'
import { useAppSelector } from '../../hooks/useAppReduxHooks'
import { getUserRepos, getUserSkills } from '../../store/user'
import { IUser } from '../../types/IUser'

interface IUserInfo {
	user: IUser
}

const UserInfo: React.FC<IUserInfo> = ({ user }) => {
	const skills = useAppSelector(getUserSkills())
	const repos = useAppSelector(getUserRepos())

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
			<Grid item md={8} xs={12} padding='10px'>
				<Card sx={{ height: '100%', p: '10px' }}>
					<Typography variant='h6'>Технологии:</Typography>
					<Grid container spacing={2}>
						{skills.map((skill) => (
							<Grid
								item
								sm={3}
								xs={6}
								key={skill}
								sx={{
									width: '100%',
									mt: '20px',
								}}>
								<Box
									sx={{
										width: '90px',
										height: '90px',
										border: '10px solid var(--primary-color)',
										borderRadius: '50%',
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center',
										margin: '0 auto',
									}}>
									<Typography
										variant='body1'
										textAlign='center'>
										{skill}
									</Typography>
								</Box>
							</Grid>
						))}
					</Grid>
				</Card>
			</Grid>
			<Grid item xs={12} padding='10px'>
				<Card sx={{ width: '100%', p: '10px' }}>
					<Typography variant='h6'>Проекты:</Typography>
					<Grid container spacing={2}>
						{repos.length &&
							repos.map((repo) => (
								<Grid item key={repo.name} xs={12} sm={4}>
									<Card
										elevation={3}
										sx={{
											height: '100%',
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'space-between',
										}}>
										<CardContent>
											<Typography variant='h5'>
												{repo.name}
											</Typography>
											{repo.description && (
												<Typography variant='body2'>
													{repo.description}
												</Typography>
											)}
											<Typography variant='body1'>
												ЯП: {repo.language}
											</Typography>
											<Typography variant='body1'>
												Создан:{' '}
												{new Date(
													repo.created_at,
												).toLocaleDateString()}
											</Typography>
										</CardContent>
										<CardActions
											sx={{
												display: 'flex',
												justifyContent: 'space-between',
											}}>
											<Button>Подробнее</Button>
											{repo.homepage && (
												<Link
													href={repo.homepage}
													target='_blank'>
													<Button>
														Ссылка на проект
													</Button>
												</Link>
											)}
										</CardActions>
									</Card>
								</Grid>
							))}
					</Grid>
				</Card>
			</Grid>
		</Grid>
	)
}

export default UserInfo
