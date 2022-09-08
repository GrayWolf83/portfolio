import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import UserBio from './UserBio'

describe('UserBio component', () => {
	test('UserBio render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<UserBio />
				</BrowserRouter>
			</Provider>,
		)

		const userBio = screen.getByTestId('UserBio')
		expect(userBio).toBeInTheDocument()
	})

	test('UserBio snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<UserBio />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
