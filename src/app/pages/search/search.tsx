import React from 'react'
import GoToHomeButton from '../../components/GoToHomeButton'

interface ISearch {}

const Search: React.FC<ISearch> = () => {
	React.useEffect(() => {
		document.title = 'Поиск | GitHub view'
	}, [])

	return (
		<>
			<GoToHomeButton />
			<h2>Search</h2>
		</>
	)
}

export default Search
