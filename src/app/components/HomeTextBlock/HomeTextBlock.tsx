import React from 'react'
import { Box, Typography } from '@mui/material'

interface IHomeTextBlock {}

const HomeTextBlock: React.FC<IHomeTextBlock> = () => {
	return (
		<>
			<Box
				sx={{
					mt: '20px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Box sx={{ ml: '20px' }}>
					<Typography color='primary' variant='h4'>
						Сергей Бернякович
					</Typography>
					<Typography color='primary' variant='h5'>
						Frontend разработчик (React)
					</Typography>
				</Box>
			</Box>
			<Typography
				variant='body1'
				sx={{ my: '20px', textAlign: 'justify', fontWeight: 'bold' }}
				color='primary'>
				Данный сервис преобразовывает информацию о пользователях GitHub
				в удобное портфолио и может использоваться рекрутерами для
				просмотра аккаунтов и оценки уровня кандидатов.
			</Typography>
		</>
	)
}

export default HomeTextBlock
