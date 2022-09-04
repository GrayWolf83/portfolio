import {
	Avatar,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	Typography,
} from '@mui/material'
import Search from '@mui/icons-material/Search'
import React from 'react'
import photo from '../../images/photo.png'

const Home: React.FC = () => {
	console.log('photo', photo)

	return (
		<>
			<Box
				sx={{
					mt: '20px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Box sx={{ ml: '20px' }}>
					<Typography color='primary' variant='h4'>
						Сергей Бернякович
					</Typography>
					<Typography color='primary' variant='h5'>
						Frontend разработчик (React)
					</Typography>
				</Box>
			</Box>
			<Typography
				variant='body1'
				sx={{ my: '20px', textAlign: 'justify', fontWeight: 'bold' }}
				color='primary'>
				Данный сервис преобразовывает информацию о пользователях GitHub
				в удобное портфолио и может стать еще одним инструментом поиска
				IT специалистов для рекрутеров.
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<Card sx={{ height: '100%' }}>
						<Avatar
							src={photo}
							sx={{
								width: '150px',
								height: '150px',
								m: '10px auto',
							}}
						/>
						<CardContent>
							<Typography
								gutterBottom
								color='primary'
								variant='h5'
								component='div'>
								Мое портфолио
							</Typography>
						</CardContent>
						<CardActions>
							<Button size='small'>Открыть</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item xs={12} md={6}>
					<Card sx={{ height: '100%' }}>
						<Search
							sx={{
								fontSize: '150px',
								m: '10px auto',
								display: 'block',
							}}
							color='primary'
						/>
						<CardContent>
							<Typography
								gutterBottom
								color='primary'
								variant='h5'
								component='div'>
								Поиск пользователей
							</Typography>
						</CardContent>
						<CardActions>
							<Button size='small'>Открыть</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</>
	)
}

export default Home
