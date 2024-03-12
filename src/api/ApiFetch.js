import { KEY } from "../constant/ApiKeyTMDB"

export const apiFetch = {
	fetchAll : async ()=>{
		const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY()}`)
		const data = await response.json()
		return data.results
	},
	fetchById: async (id)=>{
		const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY()}`)
		const data = await response.json()
		return data
	},
	fetchRecommendationById: async(id) =>{
		const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1&api_key=${KEY()}`)
		const data = await response.json()
		return data
	},

}
