import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../app'

describe('App component', () => {
	it('App render', () => {
		render(<App />)

		expect(screen.getByText(/app/i)).toBeInTheDocument()
	})

	it('App snapshot', () => {
		expect(render(<App />)).toMatchSnapshot()
	})
})
