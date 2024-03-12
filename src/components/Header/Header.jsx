import { SearchBar }  from "../SearchBar/SearchBar"
import { Logo } from "../Logo/Logo"

export const Header = ({onChange})=>{
	return <><Logo/><SearchBar onChange={onChange}/></>
}