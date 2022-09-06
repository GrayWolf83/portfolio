import {
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	Link,
	Typography,
} from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../hooks/useAppReduxHooks'
import { getUserRepos } from '../../store/user'

interface IUserRepos {}

const UserRepos: React.FC<IUserRepos> = () => {
	const repos = useAppSelector(getUserRepos())

	return (
		<Grid item xs={12} data-testid='UserRepos'>
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
											<Button>Ссылка на проект</Button>
										</Link>
									)}
								</CardActions>
							</Card>
						</Grid>
					))}
			</Grid>
		</Grid>
	)
}

export default UserRepos
