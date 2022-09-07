import React from 'react'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

interface ILoader {}

const Loader: React.FC<ILoader> = () => {
	return (
		<Box
			sx={{
				width: '100%',
				mt: '20%',
				display: 'flex',
				justifyContent: 'center',
			}}
			data-testid='Loader'>
			<CircularProgress />
		</Box>
	)
}

export default Loader
