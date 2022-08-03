import React from 'react';
import '../styles/pokeball.css'

const Pokeball = () => {
    return (
        <div className='pokeball'> &nbsp;
            <div className='line black-line'> &nbsp;
                <div className='line white-line'> &nbsp;
                    <div className="line inner-black-line"> &nbsp;
                        <div className="line gray-circle"> &nbsp;</div>    
                    </div>    
                </div>            
            </div>            
        </div>
    );
};

export default Pokeball;