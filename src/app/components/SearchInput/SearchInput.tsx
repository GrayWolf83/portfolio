import { Alert, Box, Button, Snackbar, TextField } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import { getSearchValue, searchUsersList } from '../../store/search'

interface ISearchInput {}

const SearchInput: React.FC<ISearchInput> = () => {
	const [searchValue, setSearchValue] = React.useState<string>('')
	const [open, setOpen] = React.useState(false)
	const search = useAppSelector(getSearchValue())

	React.useEffect(() => {
		document.title = 'Поиск | GitHub view'
	}, [])

	React.useEffect(() => {
		if (search) {
			setSearchValue(search)
		}
	}, [])

	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string,
	) => {
		if (reason === 'clickaway') {
			return
		}

		setOpen(false)
	}
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

		setOpen(true)
	}

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
			<Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
				<Alert
					onClose={handleClose}
					severity='warning'
					sx={{ width: '100%' }}>
					Вы не ввели условия поиска!
				</Alert>
			</Snackbar>
		</Box>
	)
}

export default SearchInput
