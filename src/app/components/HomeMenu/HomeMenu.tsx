import React from 'react'
import {
	Typography,
	Grid,
	Card,
	Avatar,
	CardContent,
	CardActions,
	Button,
} from '@mui/material'
import Search from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'

interface IHomeMenu {}

const HomeMenu: React.FC<IHomeMenu> = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} md={6}>
				<Card sx={{ height: '100%' }}>
					<Avatar
						src='https://avatars.githubusercontent.com/u/78337844?v=4'
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
						<Link to='/user/GrayWolf83'>
							<Button size='small'>Открыть</Button>
						</Link>
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
						<Link to='/search'>
							<Button size='small'>Открыть</Button>
						</Link>
					</CardActions>
				</Card>
			</Grid>
		</Grid>
	)
}

export default HomeMenu
