import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PokeCard from '../components/Pokedex/PokeCard'
import './Styles/Pokedex.css'
import { useNavigate } from "react-router-dom"
import Types from '../components/Pokedex/Types'


const Pokedex = () => {
    const [selectValue, setSelectValue] = useState('All pokemons')
    const {nameTrainer}= useSelector(state=>state)
const [pokemons, setPokemons] = useState()
useEffect(() => {
    if (selectValue === 'All pokemons'){
const url = 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0' //CAMBIAR AL HAACER LA PAGINACIÓN
    axios.get(url)
    .then(res =>setPokemons(res.data))
    .catch(err=>console.log(err))
    }else{
    axios.get(selectValue)
    .then(res => {
        const results = res.data.pokemon.map(e => e.pokemon)
        setPokemons({results})
        console.log(res.data)})
    .catch(err => console.log(err))
    }
}, [selectValue])
const navigate = useNavigate()
const handleSubmit = e =>{
    e.preventDefault()
    e.target.pokemon.value.trim().toLowerCase()
    navigate(`/pokedex/${e.target.pokemon.value.trim().toLowerCase()}`)
    e.target.value = ''
}
return (
<div className='pkdx_container'>
    <h1 className='podedex_title'><span>Hi</span><span className='podedex_title-name'> {nameTrainer},</span> find here your favorite pokemon</h1>
    <form onSubmit={handleSubmit}>
        <div className="input_pkdx_container">
        <input placeholder='Write the name of your favorite pokemon' id='pokemon' type="text" className="input_pkdx" />
        <button className="custom-btn_pkdx btn-1_pkdx">Search</button>
        </div>
    </form>
        <Types setSelectValue={setSelectValue} />
        <div className='pokeCard_container'>
            {
                pokemons?.results.map(pokemon=>(
                    <PokeCard
                    key={pokemon.url}
                    pokemon={pokemon}
                    />
                ))
            }
        </div>
</div>
)
}

export default Pokedex