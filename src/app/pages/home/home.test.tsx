import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './home'

describe('Home page', () => {
	test('Home render', () => {
		render(
			<BrowserRouter>
				<Home />
			</BrowserRouter>,
		)

		const home = screen.getByTestId('Home')

		expect(home).toBeInTheDocument()
	})

	test('In Home page rendered components HomeMenu & HomeTextBlock', () => {
		render(
			<BrowserRouter>
				<Home />
			</BrowserRouter>,
		)

		expect(screen.getByTestId('HomeMenu')).toBeInTheDocument()
		expect(screen.getByTestId('HomeTextBlock')).toBeInTheDocument()
	})

	test('Home snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<Home />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
