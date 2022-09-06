import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import UserTechnologies from './UserTechnologies'

describe('UserTechnologies component', () => {
	test('UserTechnologies render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<UserTechnologies />
				</BrowserRouter>
			</Provider>,
		)

		const userTechnologies = screen.getByTestId('UserTechnologies')
		expect(userTechnologies).toBeInTheDocument()
	})

	test('UserTechnologies snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<UserTechnologies />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
