import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import '../styles/pokemon-detail.css'
import PokeNav from './PokeNav';

const PokemonDetail = () => {

    const [pokemon, setPokemon] = useState({})

    const { id } = useParams()

    useEffect(( ) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
    },[ id ])

    console.log(pokemon)

    return (
        <div className="pokemon-detail">
            <PokeNav/>
            <div className='pokemon-wrapper'>
                
                <img src={pokemon.sprites?.other?.['official-artwork'].front_default} alt="pokemon-sprite" className='sprite-detail'/>
                <h1>#{pokemon.id}</h1>
                <h1>{pokemon.name}</h1>
                <div className="anatomy">
                    <p>Weight </p>
                    <p >Height</p>
                    <p className='number'>{pokemon.weight}</p>
                    <p className='number'>{pokemon.height}</p>
                </div>
                <div className="details">
                    <div className="type-detail">
                        <h3>Types</h3>
                        <div className='slot1'>{pokemon.types?.[0]?.type.name}</div>
                        <div className="slot2">{pokemon.types?.[1]?.type.name}</div>
                    </div>
                    <div className="skills">
                        <h3>Skills</h3>
                        <div className="primary">{pokemon.abilities?.[0]?.ability.name}</div>
                        <div className="secondary">{pokemon.abilities?.[1]?.ability.name}</div>
                    </div>
                </div>
                <h3>Stats</h3>
                <div className="stat-container">
                    <div className='stat'>
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
                <h3>Movements</h3>
                <div className="move-container">
                    <div className="moves">
                        {
                            pokemon.moves?.map(move => (
                                <p>{move.move.name}</p>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PokemonDetail;