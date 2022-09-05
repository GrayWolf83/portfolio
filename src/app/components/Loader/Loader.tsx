import React from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import { Card } from '@mui/material'

interface ILoader {}

const Loader: React.FC<ILoader> = () => {
	return (
		<Card
			sx={{ width: '70%', m: '30% auto', padding: '30px' }}
			data-testid='Loader'>
			<Box sx={{ width: '100%' }}>
				<LinearProgress />
			</Box>
		</Card>
	)
}

export default Loader
