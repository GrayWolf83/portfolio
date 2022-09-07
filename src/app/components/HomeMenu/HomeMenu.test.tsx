import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import HomeMenu from './HomeMenu'

describe('HomeMenu component', () => {
	test('HomeMenu render', () => {
		render(
			<BrowserRouter>
				<HomeMenu />
			</BrowserRouter>,
		)

		const homeMenu = screen.getByTestId('HomeMenu')
		expect(homeMenu).toBeInTheDocument()
	})

	test('HomeMenu snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<HomeMenu />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
