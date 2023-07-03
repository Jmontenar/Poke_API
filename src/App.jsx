import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Pokedex from './pages/Pokedex'
import Pokeinfo from './pages/Pokeinfo'
import Header from './Header'


function App() {

return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
            <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:id' element={<Pokeinfo />} />
            </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
