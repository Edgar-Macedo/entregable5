import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const PokemonItem = ( {pokemonURL}) => {

    const [pokemon, setPokemon] = useState({})
    let background = ""

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(pokemonURL)
            .then(res => setPokemon(res.data))

    },[])

    
    console.log(pokemon)
    
    switch(pokemon.types?.[0].type.name){
        case 'normal':
            background = "#7C3F4C"
            break
        case 'fighting':
            background = "#96402A"
            break
        case 'flying':
            background = "#ABC9FF"
            break
        case 'poison':
            background = "#CE9BFF"
            break
        case 'ground':
            background = "#D69638"
            break
        case 'rock':
            background = "#D3D3D3"
            break
        case 'bug':
            background = "#AAFFA8"
            break
        case 'ghost':
            background = "#787DDA"
            break
        case 'steel':
            background = "#A8A8A8"
            break
        case 'fire':
            background = "#E8AE1B"
            break
        case 'water':
            background = "#82B2F1"
            break
        case 'grass':
            background = "#CAE099"
            break
        case 'electric':
            background = "#7075D9"
            break
        case 'psychic':
            background = "#F07F7F"
            break
        case 'ice':
            background = "#BDEBFE"
            break
        case 'dragon':
            background = "#A2BEC1"
            break
        case 'dark':
            background = "#5A5E5D"
            break
        case 'fairy': 
            background = ""
            break 
        case 'unknown':
            background = ""
            break
        case 'shadow':
            background = ""
            break                                  
                
    }

    return (
        <div onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
            <div className="pokemon-card" style={{backgroundColor:background, borderColor:background}}>
                <img src={pokemon.sprites?.other?.['official-artwork'].front_default} alt="pokemon-sprite" className='sprite'/>
                <div className="card-data">
                    <h2 style={{color:background}} className={"pokemon-card-name"}>{pokemon.name}</h2>
                    <h3 className='pokemon-card-type'>{pokemon.types?.[0]?.type.name}  {pokemon.types?.[1]?.type.name ?  `/ ${pokemon.types?.[1]?.type.name}` : "" }  </h3>
                    <p className='type'>Type</p>
                    <br />
                    <div className="card-stats">
                        <div className="stat">
                            <h4>HP</h4>
                            <p>{pokemon.stats?.[0].base_stat}</p>
                        </div>
                        <div className="stat">
                             <h4>ATK</h4>
                            <p>{pokemon.stats?.[1].base_stat}</p>
                        </div>
                        <div className="stat">
                            <h4>DEF</h4>
                            <p>{pokemon.stats?.[2].base_stat}</p>
                        </div>
                        <div className="stat">
                            <h4>SPD</h4>
                            <p>{pokemon.stats?.[5].base_stat}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonItem;