import React from 'react'
import HomeTextBlock from '../../components/HomeTextBlock'
import HomeMenu from '../../components/HomeMenu'

const Home: React.FC = () => {
	React.useEffect(() => {
		document.title = 'Главная | GitHub view'
	}, [])

	return (
		<div data-testid='Home'>
			<HomeTextBlock />
			<HomeMenu />
		</div>
	)
}

export default Home
