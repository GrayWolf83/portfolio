import React from 'react'
import { useParams } from 'react-router-dom'
import GoToHomeButton from '../../components/GoToHomeButton'

interface IUser {}

const User: React.FC<IUser> = () => {
	const { id } = useParams()
	React.useEffect(() => {
		document.title = 'Портфолио | GitHub view'
	}, [])

	return (
		<>
			<GoToHomeButton />
			<h2>User {id}</h2>
		</>
	)
}

export default User
