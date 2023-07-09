import { useDispatch } from "react-redux"
import { setNameTrainer } from "../store/slices/trainerName.slice"
// import ASH from '../images/Ash-Ketchum.png'
import ASH from '../images/Ash-Ketchum.png'
import ASHPIKA from '../images/Ash-Pikachu.png'
import { useNavigate } from "react-router-dom"
import './Styles/Home.css'

const Home = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
const handleSubmit = e =>{
    e.preventDefault()
    dispatch(setNameTrainer(e.target.name.value.trim()))
    e.target.name.value = ''
    navigate('/pokedex')
}
    return (
    <div className="big_container">
    <div className="home_container bounce-in-fwd">
        <img src={ASH} alt='Ash' />
        <div className="info">
        <h2>Hi Trainer</h2>
        <form onSubmit={handleSubmit}>
        <div className="input_container">
            <input placeholder="To start, first give me your name" id='name' type="text" className="input" />
            <button className="custom-btn btn-1">Start</button>
        </div>
        </form>
        </div>
        <img src={ASHPIKA} alt='Ash-Pika' />
    </div>    
    </div>
)
}

export default Home