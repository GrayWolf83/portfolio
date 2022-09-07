import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import SearchResult from './SearchResult'

describe('SearchResult component', () => {
	test('SearchResult render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<SearchResult />
				</BrowserRouter>
			</Provider>,
		)

		const searchResult = screen.getByTestId('SearchResult')
		expect(searchResult).toBeInTheDocument()
	})

	test('SearchResult snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<SearchResult />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
