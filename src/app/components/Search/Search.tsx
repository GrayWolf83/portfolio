import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Search from '@mui/icons-material/Search'
import { Button } from '@mui/material'

const SearchComponent: React.FC = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				my: '20px',
			}}>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'flex-end',
					justifyContent: 'center',
					width: '100%',
				}}>
				<TextField
					id='input-with-sx'
					sx={{ width: '60%' }}
					label='Поиск'
					variant='standard'
					placeholder='Введите имя пользователя'
				/>
				<Button
					variant='outlined'
					size='small'
					startIcon={<Search />}
					sx={{ ml: '10px' }}>
					Найти
				</Button>
			</Box>
		</Box>
	)
}

export default SearchComponent
