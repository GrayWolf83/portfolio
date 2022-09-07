import { ArrowBack } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface IGoBackButton {}

const GoBackButton: React.FC<IGoBackButton> = () => {
	const navigate = useNavigate()

	return (
		<div data-testid='GoBackButton'>
			<IconButton color='primary' onClick={() => navigate(-1)}>
				<ArrowBack sx={{ fontSize: '36px' }} />
			</IconButton>
		</div>
	)
}

export default GoBackButton
