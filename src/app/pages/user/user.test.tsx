import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import Search from './user'

describe('Search page', () => {
	test('User render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Search />
				</BrowserRouter>
			</Provider>,
		)

		const user = screen.getByTestId('User')
		expect(user).toBeInTheDocument()
	})

	test('User snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<Search />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
