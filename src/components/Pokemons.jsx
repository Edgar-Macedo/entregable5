import React from 'react';
import PokemonItem from './PokemonItem'

const Pokemons = ({pokemons, loading}) => {
    
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <ul>
            <div className="pokemon-grid">    
                {
                    pokemons.map(pokemon => (
                        <PokemonItem 
                            pokemonURL={pokemon.url ? pokemon.url : pokemon.pokemon.url }
                            key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                        />
                    ))
                }
            </div>
        </ul>
    );
};

export default Pokemons;