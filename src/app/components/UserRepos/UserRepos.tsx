import React from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { useAppSelector } from '../../hooks/useAppReduxHooks'
import { getUserLoadingStatus, getUserRepos } from '../../store/user'
import Loader from '../Loader'

interface IUserRepos {}

const UserRepos: React.FC<IUserRepos> = () => {
	const repos = useAppSelector(getUserRepos())
	const isLoading = useAppSelector(getUserLoadingStatus())

	return (
		<Grid item xs={12} data-testid='UserRepos' sx={{ width: '100%' }}>
			<Card>
				{repos.length && !isLoading ? (
					<CardContent>
						<Typography variant='h6' color='primary'>
							Проекты:
						</Typography>
						<Grid
							container
							spacing={2}
							sx={{ width: '100%', m: '0 auto' }}>
							{repos.map((repo) => (
								<Grid item key={repo.name} xs={12} sm={3}>
									<Card
										elevation={3}
										sx={{
											height: '100%',
											width: '100%',
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'space-between',
										}}>
										<CardContent>
											<Typography
												variant='h6'
												color='primary'>
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
										<CardActions>
											{repo.homepage && (
												<Link
													href={repo.homepage}
													target='_blank'>
													<Button>Открыть</Button>
												</Link>
											)}
										</CardActions>
									</Card>
								</Grid>
							))}
						</Grid>
					</CardContent>
				) : (
					<Loader />
				)}
			</Card>
		</Grid>
	)
}

export default UserRepos
