import React from 'react'
import { Home } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Link } from 'react-router-dom'

const GoToHomeButton: React.FC = () => {
	return (
		<Link to='/' data-testid='GoToHomeButton'>
			<IconButton color='primary'>
				<Home sx={{ fontSize: '36px' }} />
			</IconButton>
		</Link>
	)
}

export default GoToHomeButton
