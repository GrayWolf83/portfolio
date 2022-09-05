import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import User from './user'

describe('User page', () => {
	test('User render', () => {
		render(
			<BrowserRouter>
				<User />
			</BrowserRouter>,
		)

		const user = screen.getByText(/User/)

		expect(user).toBeInTheDocument()
	})

	test('User snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<User />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
