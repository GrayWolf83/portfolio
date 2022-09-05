import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import UserInfo from './UserInfo'
import { IUser } from '../../types/IUser'

const user: IUser = {
	name: 'a',
	avatar_url: 'aaa',
	login: 'aa',
	html_url: 'ssss',
	blog: 'ddd',
	location: 'Rus',
	created_at: String(new Date()),
	public_repos: 5,
}

describe('UserInfo component', () => {
	test('UserInfo render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<UserInfo user={user} />
				</BrowserRouter>
			</Provider>,
		)

		const userInfo = screen.getByTestId('UserInfo')
		expect(userInfo).toBeInTheDocument()
	})

	test('UserInfo snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<UserInfo user={user} />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
