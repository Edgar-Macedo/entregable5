import React from 'react';
import Pokeball from './Pokeball';
import '../styles/poke-nav.css'
import image12 from '../images/image12.png'

const PokeNav = () => {
    return (
        <div>
            <nav>
                <img src={image12} alt="pokedex" className='logo'/>
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
