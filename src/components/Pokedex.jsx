import React, { useEffect, useState } from 'react';
import { useSelector, useStore } from 'react-redux/es/exports';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom' 
import Pokemons from './Pokemons';
import Pagination from './Pagination';
import PokeNav from './PokeNav';
import '../styles/pokedex.css'

const Pokedex = () => {
    const user = useSelector(state => state.user)

    const [pokemons, setPokemons] = useState([])
    const [pokeSearch, setPokeSearch] = useState("")
    const [types, setTypes] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonsPerPage] = useState(32)

    const navigate = useNavigate()
   
    useEffect (() => { // REMEMBER TO REMOVE THE OFFSET HERE AND IN FILTER TYPES
        const fetchPokemons = async () => {
            setLoading(true)
            let res = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000') 
            setPokemons(res.data.results)
            res = await axios.get('https://pokeapi.co/api/v2/type/')
            setTypes(res.data.results)
            setLoading(false)
        }
        
        fetchPokemons()
    
    },[])
    
    //Get current pokemons 
    const indexOfLastPokemon = currentPage * pokemonsPerPage
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
    const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

    //change page 
    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber)
    
    } 

    const search = e => {
        e.preventDefault()
        navigate(`/pokedex/${pokeSearch}`)
    }

    const filterTypes = e => {
        
        if (e.target.value === 'https://pokeapi.co/api/v2/type/'){
            axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000')
                .then(res => setPokemons(res.data.results))
        } else {
            axios.get(e.target.value)
                .then(res => setPokemons(res.data.pokemon))
        }
    }

    return (
        <div>
            <PokeNav/>
            <h2 className='welcome'> <span style={{color:"#FE1936"}}>Welcome! {user}, </span>  &nbsp;here you can find your favorite pokemon</h2>
            <form onSubmit={search} className='searh-form' >
                <input 
                    type="text"
                    value={pokeSearch}
                    onChange={e => setPokeSearch((e.target.value).toLowerCase())}
                    placeholder={"type name to search"}
                    className="search-bar"
                />
                <button className='search'>search</button>
            </form>

            <select onChange={filterTypes} className='type-query'>
                <option value="https://pokeapi.co/api/v2/type/" className='option-type'> All types</option>
                {
                    types.map(type => (
                        <option value={type.url} key={type.name} className='option-type'>
                            {type.name}
                        </option>
                    ))
                }
            </select>

            <Pokemons 
                pokemons={currentPokemons} 
                loading={loading} 
            />
            <Pagination 
                pokemonsPerPage={pokemonsPerPage} 
                totalPokemons ={pokemons.length}
                paginate={paginate}
            />
        </div>
    );
};

export default Pokedex;