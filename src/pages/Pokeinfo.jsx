import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import './Styles/Pokeinfo.css'

const Pokeinfo = () => {
    const [hasError, setHasError] = useState(false)

const {id} = useParams()
const [poke, setPoke] = useState()
useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
axios.get(url)
.then(res => {
    setHasError(false)
    setPoke(res.data)})
.catch(err => {
    setHasError(true)
    console.log(err)})
}, [id])
if(hasError) {
    return <h1>No existe</h1>
}else{

return (
    <div className="pokeinfo_container">
        <div className="pokeinfo">
        <img src={poke?.sprites.other['official-artwork']['front_default']} alt="" />
        <h1 className="poke_name">{poke?.name}</h1>
        < hr className='card_hr' />
        <h2 className="experience">Base experience: {poke?.base_experience}</h2>
        <h2 className="heigth">Heigth: {poke?.height} cms</h2>
        <h2 className="weigth">Weigth: {poke?.weight} Kg</h2>
        <span>Moves</span>
        <ul className='card_type-list'>
                {poke?.moves.map(move =>(
                    <li key={move.url}>{move.name}</li>
                ))
                }
            </ul>
        </div>
    </div>
)
}
}

export default Pokeinfo