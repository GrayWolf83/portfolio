import { Pagination, Stack } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import {
	getSearchCurrentPage,
	getSearchValue,
	getUsersCount,
	searchUsersList,
} from '../../store/search'

interface IAppPagination {}

const AppPagination: React.FC<IAppPagination> = () => {
	const search = useAppSelector(getSearchValue())
	const usersCount = useAppSelector(getUsersCount())
	const dispatch = useAppDispatch()
	const pagesCount = Math.ceil(usersCount / 8)
	const page = useAppSelector(getSearchCurrentPage())

	const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
		dispatch(searchUsersList(search, value))
	}

	return (
		<div data-testid='AppPagination'>
			{pagesCount > 1 && (
				<Stack sx={{ width: '100%' }}>
					<Pagination
						count={pagesCount}
						page={page}
						variant='outlined'
						shape='rounded'
						color='primary'
						sx={{ m: '10px auto' }}
						onChange={handleChange}
					/>
				</Stack>
			)}
		</div>
	)
}

export default AppPagination
