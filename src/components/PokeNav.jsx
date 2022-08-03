import React from 'react';
import Pokeball from './Pokeball';
import '../styles/poke-nav.css'

const PokeNav = () => {
    return (
        <div>
            <nav>
                <img src="https://github.com/Edgar-Macedo/entregable5/blob/master/src/images/image12.png?raw=true" alt="pokedex" className='logo'/>
                <div className='red-bar-inner'>&nbsp;</div>
                <div className='black-bar-inner'>&nbsp;</div>
                <div className="pokeball-inner">
                    <Pokeball/>
                </div>
            </nav>
        </div>
    );
};

export default PokeNav;
