import React, { useState } from 'react';
import "../styles/Banner.css";
import sampleImg from "../assets/barbershop.jpeg";

export const Banner = () => {
    return (
        <main>
            <section className="banner-section padding-block-900">
                <div className='container'>
                    <div className='two-column'>
                        <div className='flow banner-content'>
                            <h1 className="fw-bold fs-headings ">Blended Blessed for all your needs</h1>
                            <button className="booking-btn"> Book Now </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Banner;