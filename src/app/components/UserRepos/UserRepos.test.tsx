import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import UserRepos from './UserRepos'

describe('UserRepos component', () => {
	test('UserRepos render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<UserRepos />
				</BrowserRouter>
			</Provider>,
		)

		const userRepos = screen.getByTestId('UserRepos')
		expect(userRepos).toBeInTheDocument()
	})

	test('UserRepos snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<UserRepos />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
