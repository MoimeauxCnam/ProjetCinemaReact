import { useState } from 'react'
import { useEffect } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom"

import { Header } from './components/Header/Header'
import { MovieCardList } from "./components/MovieCardList/MovieCardList"
import { MovieDetails } from "./components/MovieDetails/MovieDetails"
import { apiFetch } from "./api/ApiFetch"
import { IMAGEPREFIX } from "./constant/ImagePrefix"
import { ROUTES } from "./routes/routes.js"

import './App.css'




function App() {
  	const [textInput, setTextInput] = useState("")
	const [movies, setMovies] = useState([])
	const [selectedMovie, setSelectedMovie ] = useState({})

	let selectedMovieImg = ""
	let moviesArray = []

	useEffect( ()=>{

		const getData = async ()=>{
			const value = await apiFetch.fetchAll()
			setMovies( () => value)
		}
		getData()
		

	}, [textInput])

  	function searchInputChange(newText){
		setTextInput(newText)
  	}

	function onMovieClick(newMovie){
		setSelectedMovie(newMovie)
	}


	moviesArray = movies.filter( (movie)=>{
		return movie.original_title.toLowerCase().includes(textInput.toLowerCase())
	})


	
	if (moviesArray[0] && !selectedMovie){
		selectedMovieImg = IMAGEPREFIX()+moviesArray[0].poster_path
	}
	else if(selectedMovie){
		console.log(selectedMovie)
		selectedMovieImg = IMAGEPREFIX()+selectedMovie.poster_path
	}


  	return (
		<div style={{backgroundImage:`url(${selectedMovieImg})`, heigth:'100vh'}}>
			<BrowserRouter>
    	    <Routes>
				<Route element={ <><Header onChange={searchInputChange} />  <MovieCardList cardData={moviesArray} onClick={onMovieClick}/> </>} path={ROUTES.index} />
    	      	<Route element={ <MovieDetails onClick={onMovieClick} />} path={ROUTES.movieData+`/:id`} />
    	    </Routes>
    	  </BrowserRouter>
		</div>
    
  	)
}

export default App
