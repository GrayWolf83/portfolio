import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

describe('Header component', () => {
	it('Header render', () => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>,
		)

		expect(screen.getByText(/github/i)).toBeInTheDocument()
	})

	it('Header snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<Header />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
