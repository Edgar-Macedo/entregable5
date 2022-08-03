import React, { useState } from 'react';
import { changeName } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import '../styles/user-input.css'
import Pokeball from './Pokeball';


const UserInput = () => {

    const [userName, setUserName] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault
        dispatch(changeName(userName))
        navigate("/Pokedex")

    }

    return (
        <div>
            <div className='hero'>
                <div>
                    <img src="../src/images/image11.png" alt="pokedex-logo" />
                    <h1 style={{fontSize: "50px", color: "#FE1936"}}>Hello trainer!</h1>
                    <p style={{color:"#302F2F", fontWeight:"500", fontSize:"25px"}}>Enter your name to get started</p>
                    <form onSubmit={submit}>
                        <input 
                            type="text" 
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                            placeholder={"Your name..."}
                            className="name"
                        />
                        <button className='login'>Get started</button>
                    </form>
                </div>
            </div>
            <footer>
                <Pokeball/>
                <div className='red-bar'>&nbsp;</div>
                <div className='black-bar'>&nbsp;</div>
            </footer>
        </div>
    );
};

export default UserInput;