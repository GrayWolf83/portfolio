import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import AppPagination from './AppPagination'

describe('AppPagination component', () => {
	test('AppPagination render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<AppPagination />
				</BrowserRouter>
			</Provider>,
		)

		const appPagination = screen.getByTestId('AppPagination')
		expect(appPagination).toBeInTheDocument()
	})

	test('AppPagination snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<AppPagination />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
