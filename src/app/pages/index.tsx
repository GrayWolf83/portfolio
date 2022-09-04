import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/main'
import Home from './home'
import Info from './info'

const Pages: React.FC = () => {
	return (
		<MainLayout>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/info' element={<Info />} />
			</Routes>
		</MainLayout>
	)
}

export default Pages
