import { render, screen } from '@testing-library/react'
import { BrowserRouter, Router } from 'react-router-dom'
import GoToHomeButton from './GoToHomeButton'

describe('GoToHomeButton component', () => {
	test('GoToHomeButton render', () => {
		render(
			<BrowserRouter>
				<GoToHomeButton />
			</BrowserRouter>,
		)

		expect(screen.getByTestId('GoToHomeButton')).toBeInTheDocument()
	})

	test('GoToHomeButton snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<GoToHomeButton />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
