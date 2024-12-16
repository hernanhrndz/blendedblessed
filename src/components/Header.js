import React, { useState } from 'react';
import { IconContext } from "react-icons";
import "../styles/Header.css";

import { FaInstagram } from "react-icons/fa";


export const Header = () => {
    const [navVisible, setNavVisible] = useState(false)

    const toggleNavbar = () => {
        setNavVisible(!navVisible);
        document.body.classList.toggle('no-scrool');
    }
    const handleClose = () => {
        setNavVisible(false);
        document.body.classList.remove('no-scroll');
    };

    return (
        <header className="primary-header bg-clr-black">
            <div className="container">
                <a href="#"><img src="placeholder.jpg" alt="BlendedBlessed"></img></a>

                {/* <div className="nav-wrapper"> */}
                
                {/* **to do** need logo make responsive 
                    <img src={"http://placehold.it/"} alt="logo" />
                    */}

                <nav className={`primary-navigation ${navVisible ? 'visible' : ''}`} id="primary-navigation" aria-label="menu">
                    <ul aria-label="primary-links" className="nav-list">
                        <li> <a href="#"> Services </a> </li>
                        <li> <a href="#"> Products  </a> </li>
                        <li> <a href="#"> Contact Us!  </a> </li>
                        {/* <hr className="nav-divider"></hr> */}
                        <li className="icon-wrapper">
                            <a aria-label="Instagram" href="#" className="insta-icon"> <FaInstagram /> </a>
                            {/* <a href=""> Book Now! </a> */}
                        </li>
                    </ul>
                </nav>
                {/* </div> */}
            </div>
        </header>
    )
}
export default Header;