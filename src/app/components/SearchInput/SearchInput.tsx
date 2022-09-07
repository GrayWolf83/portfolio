import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useAppDispatch } from '../../hooks/useAppReduxHooks'
import { searchUsersList } from '../../store/search'

interface ISearchInput {}

const SearchInput: React.FC<ISearchInput> = () => {
	const [searchValue, setSearchValue] = React.useState<string>('')
	const dispatch = useAppDispatch()

	const onChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setSearchValue(e.target.value)
	}

	const handleSearch = (pageNumber: number) => {
		if (searchValue) {
			return dispatch(searchUsersList(searchValue, pageNumber))
		}
	}

	React.useEffect(() => {
		document.title = 'Поиск | GitHub view'
	}, [])

	return (
		<Box
			data-testid='SearchInput'
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'flex-end',
			}}>
			<TextField
				label='Поиск'
				variant='standard'
				sx={{ width: '80%' }}
				placeholder='Введите имя пользователя'
				value={searchValue}
				onChange={onChange}
				required
			/>
			<Button
				variant='contained'
				size='medium'
				sx={{ ml: '5px' }}
				onClick={() => handleSearch(1)}>
				Найти
			</Button>
		</Box>
	)
}

export default SearchInput
