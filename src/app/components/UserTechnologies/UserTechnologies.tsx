import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../hooks/useAppReduxHooks'
import { getUserSkills } from '../../store/user'

interface IUserTechnologies {}

const UserTechnologies: React.FC<IUserTechnologies> = () => {
	const skills = useAppSelector(getUserSkills())

	return (
		<Grid item md={8} xs={12} padding='10px' data-testid='UserTechnologies'>
			<Card sx={{ height: '100%', p: '10px' }}>
				<Typography variant='h6' color='primary'>
					Технологии:
				</Typography>
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
								<Typography variant='body1' textAlign='center'>
									{skill}
								</Typography>
							</Box>
						</Grid>
					))}
				</Grid>
			</Card>
		</Grid>
	)
}

export default UserTechnologies
