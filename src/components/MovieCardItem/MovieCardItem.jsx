import { Link } from "react-router-dom"
import { ROUTES } from "../../routes/routes"
import { IMAGEPREFIX } from "../../constant/ImagePrefix"

export const MovieCardItem = ({onClick, cardData})=>{

	function handleClick(e){
		onClick(cardData)
		console.log(cardData)
	}

	return <div onClick={handleClick} style={{border:"solid 1px black",backgroundColor:"white"}}>
		<img src={IMAGEPREFIX()+cardData.backdrop_path} alt={cardData.original_title}/>
		<br></br>
		<Link to={ROUTES.movieData+"/"+cardData.id} >{cardData.original_title}</Link>
	</div>
}