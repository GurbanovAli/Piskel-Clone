import React from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/Landing.scss';
import cat from '../Assets/cat.gif';
import knight from '../Assets/knight.gif';
import nature from '../Assets/nature.gif';
import boy from '../Assets/boy.gif';
import sonic from '../Assets/sonic.gif';
import screenpage from '../Assets/screen.png';

function Landing () {
    return (
        <div className="main">
            <div className="description">
                <p>
                    Piskel Clone is a clone of the free online editor
                    <a href="https://www.piskelapp.com"> Piskelapp</a>
                    <br />
                    Create an animation online in your browser and then save the result to a
                    computer.
                </p>
                <p>
                   <img className="screen-list" src={screenpage} />
                </p>
            </div>
            <div>
                <NavLink className="nav-link" to="/piskel">Create sprite</NavLink>
            </div>
            <div className="piskel-item">
                <p>Example sprites:</p>
                <img src={cat} />
                <img src={knight} />
                <img src={nature} />
                <img src={boy} />
                <img src={sonic} />
            </div>

            <h3>
                Created by Gurbanov Ali
                <a href="https://github.com/GurbanovAli">( Github )</a>
            </h3>
        </div>
    );
}

export default Landing;
