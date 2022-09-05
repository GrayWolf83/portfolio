import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Loader from './Loader'

describe('Loader component', () => {
	test('Loader render', () => {
		render(
			<BrowserRouter>
				<Loader />
			</BrowserRouter>,
		)

		const loader = screen.getByTestId('Loader')
		expect(loader).toBeInTheDocument()
	})

	test('Loader snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<Loader />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
