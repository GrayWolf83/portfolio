import httpService from './http.service'

const userService = {
	getUser: async (login: string) => {
		const { data } = await httpService.get('users/' + login)
		return data
	},
	searchUsers: async (search: string, page: number) => {
		const { data } = await httpService.get(
			`search/users?q=${search}&per_page=8&page=${page}`,
		)

		return data
	},
	getRepos: async (login: string) => {
		const { data } = await httpService.get(`users/${login}/repos`)
		return data
	},
	getSkills: async (addr: string) => {
		const { data } = await httpService.get(addr)
		console.log('service', data)
		return data
	},
}

export default userService