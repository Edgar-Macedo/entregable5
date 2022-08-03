import React from 'react';
import { Link } from "react-router-dom";

const Pagination = ({pokemonsPerPage, totalPokemons, paginate}) => {

    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <div>
            <ul className='pagination'>
                {
                    pageNumbers.map(number => (
                        <li key={number} style={{listStyle:"none", display:"inline"}}>
                            <button onClick={() => paginate(number)} className='page-link'>
                                {number}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pagination;