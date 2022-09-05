import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Search from './search'

describe('Search page', () => {
	test('User render', () => {
		render(
			<BrowserRouter>
				<Search />
			</BrowserRouter>,
		)

		const search = screen.getByText(/Search/)
		expect(search).toBeInTheDocument()
	})

	test('User snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<Search />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
