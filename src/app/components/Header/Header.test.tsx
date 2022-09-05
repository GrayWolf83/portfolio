import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

describe('Header component', () => {
	test('Header render', () => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>,
		)

		expect(screen.getByText(/github/i)).toBeInTheDocument()
	})

	test('Header snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<Header />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
