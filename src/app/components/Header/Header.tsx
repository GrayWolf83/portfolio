import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
	return (
		<AppBar position='static'>
			<Container>
				<Toolbar>
					<Link to='/'>
						<Typography
							variant='h5'
							component='h2'
							sx={{
								flexGrow: 1,
								letterSpacing: 1.5,
							}}>
							GitHub view
						</Typography>
					</Link>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default Header
