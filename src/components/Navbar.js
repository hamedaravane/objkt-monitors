import React from 'react';
import logo from '../assets/tezos-nft-analyctics-logo.png'
import {Link} from "react-router-dom";
import "../styles/Navbar.css"


const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <img src={logo}/>
            </div>
            <div>
                <Link to="/">Live</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Help">Help</Link>
            </div>
        </div>
    );
};

export default Navbar;