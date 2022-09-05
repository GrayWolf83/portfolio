import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import HomeTextBlock from './HomeTextBlock'

describe('HomeTextBlock component', () => {
	test('HomeTextBlock render', () => {
		render(
			<BrowserRouter>
				<HomeTextBlock />
			</BrowserRouter>,
		)

		const homeTextBlock = screen.getByText(/Frontend/)
		expect(homeTextBlock).toBeInTheDocument()
	})

	test('HomeTextBlock snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<HomeTextBlock />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
