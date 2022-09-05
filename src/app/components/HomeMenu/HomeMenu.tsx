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

import photo from '../../images/photo.png'
import { Link } from 'react-router-dom'

interface IHomeMenu {}

const HomeMenu: React.FC<IHomeMenu> = () => {
	return (
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
						<Link to='/user/12345678'>
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
