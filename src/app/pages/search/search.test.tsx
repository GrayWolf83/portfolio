import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import Search from './search'

describe('Search page', () => {
	test('Search render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Search />
				</BrowserRouter>
			</Provider>,
		)

		const search = screen.getByTestId('Search')
		expect(search).toBeInTheDocument()
	})

	test('Search page rendered components GoToHomeButton & SearchInput & SearchResult', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Search />
				</BrowserRouter>
			</Provider>,
		)

		expect(screen.getByTestId('GoToHomeButton')).toBeInTheDocument()
		expect(screen.getByTestId('SearchInput')).toBeInTheDocument()
		expect(screen.getByTestId('SearchResult')).toBeInTheDocument()
	})

	test('Search snapshot', () => {
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
