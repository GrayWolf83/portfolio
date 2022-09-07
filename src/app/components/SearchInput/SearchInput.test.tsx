import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import SearchInput from './SearchInput'

describe('SearchInput component', () => {
	test('SearchInput render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<SearchInput />
				</BrowserRouter>
			</Provider>,
		)

		const searchInput = screen.getByTestId('SearchInput')
		expect(searchInput).toBeInTheDocument()
	})

	test('SearchInput snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<SearchInput />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
