import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import '../Styles/Types.css'

const Types = ({setSelectValue}) => {
    const [types, setTypes] = useState()
    useEffect(() => {
const url = 'https://pokeapi.co/api/v2/type/'
axios.get(url)
.then(res => setTypes(res.data))
.catch(err => console.log(err))
    }, [])
const handleChange = e => {
    setSelectValue(e.target.value)
}
    
return (
    <select className='types_container' onChange={handleChange}>
        <span>Filter pokemons by type</span>
        <option className="option" value="allpokemons">All pokemons</option>
            {
            types?.results.map(type => (
                <option key={type.url} value={type.url}>{type?.name}</option>
            ))
            }
        </select>
)
}

export default Types