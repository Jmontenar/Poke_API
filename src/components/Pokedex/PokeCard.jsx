import axios from "axios"
import { useEffect, useState } from "react"
import '../Styles/PokeCard.css'
import { useNavigate } from "react-router-dom"

const PokeCard = ({pokemon}) => {
const [poke, setPoke] = useState()
const navigate = useNavigate()
useEffect(() => {
  axios.get(pokemon.url)
  .then(res=> setPoke(res.data))
  .catch(err=>console.log(err))
}, [])
const handdleClick = () =>{
    navigate(`/pokedex/${poke.id}`)
}

return (
    <article onClick={handdleClick} className={`card border-${poke?.types[0].type.name}`}>
        <header className={ `card_header bg-${poke?.types[0].type.name}`}>
            <img className='card_avatar' src={poke?.sprites.other["official-artwork"]["front_default"]} alt='' />
        </header>
            <h2 className={`card_name color-${poke?.types[0].type.name}`}>{poke?.name}</h2>
            <p className='Type'>Type</p>
            <ul className='card_type-list'>
                {poke?.types.map(slot =>(
                    <li className="card_type-item" key={slot.type.url}>{slot.type.name}</li>
                ))
                }
            </ul>
            < hr className='card_hr' />
            <p className="Stats">Stats</p>
            <ul className='card_stat-list'>
                {
                poke?.stats.map(stat=>(
                    <li className="card_type-item" key={stat.stat.url}>
                        <span>{stat.stat.name}</span>
                        <span>{stat.base_stat}</span>
                    </li>
                ))
                }
            </ul>
            < hr className='card_hr2' />
            <p className="Abilities">Abilities</p>
            <ul className='card_stat-abilities'>
                {
                poke?.abilities.map(ability=>(
                    <li className="card_type-item" key={ability.ability.url}>
                        <span>{ability.ability.name}</span>
                        
                    </li>
                ))
                }
            </ul>
    </article>
)
}

export default PokeCard