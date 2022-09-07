import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../hooks/useAppReduxHooks'
import { getUserLoadingStatus, getUserSkills } from '../../store/user'
import Loader from '../Loader'

interface IUserTechnologies {}

const UserTechnologies: React.FC<IUserTechnologies> = () => {
	const skills = useAppSelector(getUserSkills())
	const isLoading = useAppSelector(getUserLoadingStatus())

	return (
		<Grid item md={8} xs={12} data-testid='UserTechnologies'>
			<Card
				sx={{
					height: '100%',
					width: '100%',
					p: '5px 0 5px',
				}}>
				<Typography
					variant='h6'
					color='primary'
					sx={{ paddingLeft: '5px' }}>
					Технологии:
				</Typography>
				{skills.length && !isLoading ? (
					<Grid container spacing={2}>
						{skills.map((skill) => (
							<Grid
								item
								sm={3}
								xs={6}
								key={skill}
								sx={{
									width: '100%',
									mt: '10px',
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
										color='primary'
										textAlign='center'>
										{skill}
									</Typography>
								</Box>
							</Grid>
						))}
					</Grid>
				) : (
					<Loader />
				)}
			</Card>
		</Grid>
	)
}

export default UserTechnologies
