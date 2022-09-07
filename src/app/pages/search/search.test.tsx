import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Search from './search'

describe('Search page', () => {
	test('Search render', () => {
		render(
			<BrowserRouter>
				<Search />
			</BrowserRouter>,
		)

		const search = screen.getByTestId('Search')
		expect(search).toBeInTheDocument()
	})

	test('Search snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<Search />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
