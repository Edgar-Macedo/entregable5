
import { HashRouter, Routes, Route} from 'react-router-dom'
import UserInput from './components/UserInput'
import Pokedex from './components/Pokedex'
import PokemonDetail from './components/PokemonDetail'
import ProtectedRoutes from './components/ProtectedRoutes'
import './App.css'

function App() {


  return (
    <div>

    <HashRouter>
      <Routes>
        <Route path="/" element = {<UserInput/>}/>

        <Route element= {<ProtectedRoutes/>}>
          
          <Route path="/pokedex/" element = {<Pokedex/>} />
          <Route path="/pokedex/:id" element = {<PokemonDetail/>} />
        </Route>
      </Routes>
    </HashRouter>
    </div>
  )
}

export default App
