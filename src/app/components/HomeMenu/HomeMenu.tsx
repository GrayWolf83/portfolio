import React from 'react'
import {
	Typography,
	Grid,
	Card,
	Avatar,
	CardContent,
	CardActions,
	Button,
	Link as MUILink,
} from '@mui/material'
import Search from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'
import { Email, Telegram } from '@mui/icons-material'

interface IHomeMenu {}

const HomeMenu: React.FC<IHomeMenu> = () => {
	return (
		<Grid container spacing={2} data-testid='HomeMenu'>
			<Grid item xs={12} md={4}>
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
							variant='h6'
							component='div'>
							Мое портфолио
						</Typography>
					</CardContent>
					<CardActions>
						<Link to='/user/GrayWolf83'>
							<Button size='small' variant='contained'>
								Открыть
							</Button>
						</Link>
					</CardActions>
				</Card>
			</Grid>
			<Grid item xs={12} md={4}>
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
							variant='h6'
							component='div'>
							Поиск пользователей
						</Typography>
					</CardContent>
					<CardActions>
						<Link to='/search'>
							<Button size='small' variant='contained'>
								Открыть
							</Button>
						</Link>
					</CardActions>
				</Card>
			</Grid>
			<Grid item xs={12} md={4}>
				<Card sx={{ height: '100%' }}>
					<CardContent>
						<Typography
							gutterBottom
							color='primary'
							variant='h6'
							component='div'>
							Мои контакты
						</Typography>
						<MUILink
							href='mailto: sb_aktau@bk.ru'
							sx={{ display: 'flex', mb: '10px' }}>
							<Email />
							<Typography sx={{ ml: '5px' }}>Email</Typography>
						</MUILink>
						<MUILink
							href='https://tlgg.ru/@SergeyBernyakovich'
							target='_blank'
							sx={{ display: 'flex' }}>
							<Telegram />
							<Typography sx={{ ml: '5px' }}>
								Telegramm
							</Typography>
						</MUILink>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	)
}

export default HomeMenu
