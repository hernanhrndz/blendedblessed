import React, { useState } from 'react';
import { IconContext } from "react-icons";
import "../styles/Navbar.css";
import logo from "../assets/mainLogo.png";

import { FaInstagram } from "react-icons/fa";


export const Navbar = () => {
    const [navVisible, setNavVisible] = useState(false)

    const toggleNavbar = () => {
        setNavVisible(!navVisible);
        document.body.classList.toggle('no-scrool');
    }
    const handleClose = () => {
        setNavVisible(false);
        document.body.classList.remove('no-scroll');
    };

    console.log("Navbar rendered");

    return (
        <nav className="primary-navbar bg-clr-white">
            <div className="container navbar-container">
                <a href="#"><img src={logo} alt="BlendedBlessed" className="logo"/></a>

                {/* <div className="nav-wrapper"> */}
                
                {/* **to do** need logo make responsive 
                    <img src={logo} alt="logo" />
                    */}

                <nav className={`primary-navigation ${navVisible ? 'visible' : ''}`} id="primary-navigation" aria-label="menu">
                    <ul aria-label="primary-links" className="nav-list">
                        <li> <a href="#"> Services </a> </li>
                        <li> <a href="#"> Products  </a> </li>
                        <li> <a href="#"> Contact Us!  </a> </li>
                        <li className="icon-wrapper">
                            <a aria-label="Instagram" href="#" className="insta-icon"> 
                                <FaInstagram className="insta-icon-img"/> 
                                <span className="icon-text">Instagram</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* <button className="button | display-sm-none display-md-inline-flex" aria-label="Instagram">
                    <FaInstagram className="insta-icon-img"/> 
                    <span className="icon-text"></span>
                </button> */}
                {/* </div> */}
            </div>
        </nav>
    )
}
export default Navbar;