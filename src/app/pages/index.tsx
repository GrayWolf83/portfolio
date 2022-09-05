import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/main'
import Home from './home'
import Search from './search'
import User from './user'

const Pages: React.FC = () => {
	return (
		<MainLayout>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/search' element={<Search />} />
				<Route path='/user/:id' element={<User />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</MainLayout>
	)
}

export default Pages
