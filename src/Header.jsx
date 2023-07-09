import './Header.css'
import LOGOPKD from './images/Logo_Pokedex.png'

const Header = () => {
return (
    <div className='header_container'>
    <div className="red"></div>
    <div className="pokeball">   
    <div className="pokeballbig">
    <div className="line1"></div>
        <div className="pokeball2">
        <div className="line2"></div>    
        <div className="pokeball3">
        <div className="pokeball4">
        <div className="line3"></div>
        <div className="pokeball5"></div>
        <div className="line3"></div>
        </div>
        </div>
        <div className="line2"></div>
        </div>
        <div className="line1"></div>
    </div>
    </div>
    <div className="black"></div>
    <header className='header'><img src={LOGOPKD} alt='Logo' /></header>
    </div>
)
}

export default Header