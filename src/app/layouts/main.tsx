import { Container } from '@mui/material'
import React from 'react'
import Header from '../components/Header'

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Header />
			<Container>{children}</Container>
		</>
	)
}

export default MainLayout
