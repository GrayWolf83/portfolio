import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import User from './user'

describe('User page', () => {
	test('User render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<User />
				</BrowserRouter>
			</Provider>,
		)

		const user = screen.getByTestId('User')
		expect(user).toBeInTheDocument()
	})

	test('User page rendered components GoBackButton & UserInfo & UserTechnologies & UserRepos', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<User />
				</BrowserRouter>
			</Provider>,
		)

		expect(screen.getByTestId('GoBackButton')).toBeInTheDocument()
		expect(screen.getByTestId('UserInfo')).toBeInTheDocument()
		expect(screen.getByTestId('UserTechnologies')).toBeInTheDocument()
		expect(screen.getByTestId('UserRepos')).toBeInTheDocument()
	})

	test('User snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<User />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
