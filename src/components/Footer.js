import React from 'react';

import "../styles/Footer.css";

export const Footer = () => {
    return (
        <section className="padding-block-500  txt-clr-black">
                <div className='footer-section'>
                    <h1 className='title | fw-bold '>Blended Blessed</h1>
                    <hr className='divider'></hr>
                    {/* <a href="mailto:hernanghrndz@gmail.com"><AiOutlineMail size={35} /></a> */}
                    <span className='dot'>•</span>
                    {/* <a href="https://www.linkedin.com/in/HernanHrndz"> <FiLinkedin size={35} /></a> */}
                    <span className='dot'>•</span>
                    {/* <a href="https://www.instagram.com/hernanh_"> <FiInstagram size={35} /></a> */}
            
                    <p  className='copyright | txt-clr-gray'>© Blended & Blessed 2024 Copyright. Blessed Cuts!</p>
                </div>

        </section>
    )
}

export default Footer