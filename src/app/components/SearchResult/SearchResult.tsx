import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppReduxHooks'
import { getSearchLoadingStatus, getSearchUsersList } from '../../store/search'
import Loader from '../Loader'

interface ISearchResult {}

const SearchResult: React.FC<ISearchResult> = () => {
	const users = useAppSelector(getSearchUsersList())
	const isLoading = useAppSelector(getSearchLoadingStatus())

	return (
		<Grid
			container
			spacing={2}
			data-testid='SearchResult'
			sx={{ my: '20px' }}>
			{isLoading && <Loader />}
			{Boolean(users.length) &&
				users.map((user) => (
					<Grid item xs={6} sm={3} key={user.login}>
						<Card
							sx={{
								height: '100%',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
							}}>
							<CardMedia
								component='img'
								image={user.avatar_url}
							/>

							<CardContent>
								<Typography>{user.login}</Typography>
							</CardContent>
							<CardActions>
								<Link to={`/user/${user.login}`}>
									<Button size='small'>Подробнее</Button>
								</Link>
							</CardActions>
						</Card>
					</Grid>
				))}
		</Grid>
	)
}

export default SearchResult
