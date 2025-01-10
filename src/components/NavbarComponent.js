import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { IconContext } from "react-icons";

import "../styles/Navbar.css";
import logo from "../assets/mainLogo.png";

import { FaInstagram } from "react-icons/fa";


export const NavbarComponent = () => {
    const [navVisible, setNavVisible] = useState(false)

    const toggleNavbar = () => {
        setNavVisible(!navVisible);
        document.body.classList.toggle('no-scroll');
    }
    const handleClose = () => {
        setNavVisible(false);
        document.body.classList.remove('no-scroll');
    };

    console.log("Navbar rendered");

    return (
        <Navbar expand="lg" className="primary-navbar bg-clr-white">
        <Container className="navbar-container ">
            {/* Logo */}
            <Navbar.Brand href="#">
                <img src={logo} alt="BlendedBlessed" className="logo" />
            </Navbar.Brand>

            {/* Toggle Button for Mobile */}
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} /> */}

            {/* Navbar Links */}
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#">Services</Nav.Link>
                    <Nav.Link href="#">Products</Nav.Link>
                    <Nav.Link href="#">Contact Us!</Nav.Link>

                    {/* Instagram Icon */}
                    <Nav.Item className="icon-wrapper">
                        <Nav.Link href="#" aria-label="Instagram" className="insta-link">
                            <FaInstagram className="insta-icon-img" />
                            <span className="icon-text">BlendedBlessed</span>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}
export default NavbarComponent;


// import React, { useState } from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';

// const AppNavbar = () => {
//     const [activeLink, setActiveLink] = useState('services');

//     return (
//         <Navbar expand="lg" bg="light" variant="light" fixed="top">
//             <Container>
//                 <Navbar.Brand href="/">My Website</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="navbar-nav" />
//                 <Navbar.Collapse id="navbar-nav">
//                     <Nav className="ms-auto">
//                         <Nav.Link
//                             href="#services"
//                             className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'}
//                             onClick={() => setActiveLink('services')}
//                         >
//                             Services
//                         </Nav.Link>
//                         <Nav.Link
//                             href="#products"
//                             className={activeLink === 'products' ? 'active navbar-link' : 'navbar-link'}
//                             onClick={() => setActiveLink('products')}
//                         >
//                             Products
//                         </Nav.Link>
//                         <Nav.Link
//                             href="#contact"
//                             className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
//                             onClick={() => setActiveLink('contact')}
//                         >
//                             Contact Us
//                         </Nav.Link>
//                         <Nav.Link
//                             href="#instagram"
//                             className={activeLink === 'instagram' ? 'active navbar-link' : 'navbar-link'}
//                             onClick={() => setActiveLink('instagram')}
//                         >
//                             Instagram
//                         </Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// };

// export default AppNavbar;