export const SearchBar = ({onChange})=>{

	function updateSearchBar(e){
		const valeur = e.target.value
		onChange(valeur)
	}


	return <input type="text" onChange={updateSearchBar} />
}