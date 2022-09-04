import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import App from './app/app'
import theme from './app/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ThemeProvider>,
)
