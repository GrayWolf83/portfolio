import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../hooks/useAppReduxHooks'
import { getUserLoadingStatus, getUserSkills } from '../../store/user'
import Loader from '../Loader'

interface IUserTechnologies {}

const UserTechnologies: React.FC<IUserTechnologies> = () => {
	const skills = useAppSelector(getUserSkills())
	const isLoading = useAppSelector(getUserLoadingStatus())

	return (
		<Grid item md={4} xs={12} data-testid='UserTechnologies'>
			<Card sx={{ width: '100%', height: '100%' }}>
				<CardContent>
					{isLoading ? (
						<Loader />
					) : (
						<Typography variant='h6' color='primary'>
							Технологии:
						</Typography>
					)}
					{Boolean(skills.length) && !isLoading && (
						<Grid container spacing={2}>
							{skills.map((skill) => (
								<Grid item sm={4} xs={6} key={skill}>
									<Card
										sx={{
											height: '100%',
											width: '100%',
											border: '1px solid var(--primary-color)',
										}}>
										<Typography
											variant='body1'
											color='primary'
											textAlign='center'>
											{skill}
										</Typography>
									</Card>
								</Grid>
							))}
						</Grid>
					)}
					{!Boolean(skills.length) && !isLoading && (
						<Typography variant='body1' color='primary'>
							Нет данных для отображения
						</Typography>
					)}
				</CardContent>
			</Card>
		</Grid>
	)
}

export default UserTechnologies
