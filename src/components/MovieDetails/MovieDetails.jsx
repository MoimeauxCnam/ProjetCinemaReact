import { MovieCardList } from "../MovieCardList/MovieCardList"
import { MovieDescription } from "../MovieDescription/MovieDescription"
import { apiFetch } from "../../api/ApiFetch"

import { useParams } from 'react-router-dom'
import { useState } from "react"
import { useEffect } from 'react'


export const MovieDetails = ({onClick})=>{
	const [isLoading, setIsLoading] = useState(true)
	const [overview, setOverview] = useState(null)
	const [recommendation, setRecommandation] = useState([])

	const {id} = useParams()

	
	useEffect( ()=>{
		if (isLoading){
			setIsLoading(false)
		}

		const _movie = async () => {
			try{
				let mv = await apiFetch.fetchById(id)
				setOverview(mv.overview)
			}
			catch(e){
				console.log(e)
			}
		}
	
		const _recommendation = async () => {
			try{
				let mv = await apiFetch.fetchRecommendationById(id)
				setRecommandation(mv.results)
			}
			catch(e){
				console.log(e)
			}
		}

		_movie()
		_recommendation()
	}, [id])

	
	if(!id){
		return <p>Film introuvable</p>
	}

	if(isLoading){
		return <p>Loading</p>
	}

	console.log(overview, recommendation)

	
	
	return <>
		<MovieDescription text={overview}/>
		<MovieCardList onClick={onClick} cardData={ recommendation} />
	</>

}
