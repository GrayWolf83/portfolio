import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { Info } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<AppBar position='static'>
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
		</AppBar>
	)
}

export default Header
