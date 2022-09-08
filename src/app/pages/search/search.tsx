import React from 'react'
import AppPagination from '../../components/AppPagination'
import GoToHomeButton from '../../components/GoToHomeButton'
import SearchInput from '../../components/SearchInput'
import SearchResult from '../../components/SearchResult'

interface ISearch {}

const Search: React.FC<ISearch> = () => {
	React.useEffect(() => {
		document.title = 'Поиск | GitHub view'
	}, [])

	return (
		<div data-testid='Search'>
			<GoToHomeButton />
			<SearchInput />
			<SearchResult />
			<AppPagination />
		</div>
	)
}

export default Search
