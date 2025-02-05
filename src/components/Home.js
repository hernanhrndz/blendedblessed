import React, { } from 'react';
import "../styles/Home.css";
import { ImgCarousel } from './ImgCarousel';
import { Accordian } from './Accordian';
import { TabFilter } from './TabFilter';
import Scissors from "./Scissors";

import serviceImg from "../assets/services-img.jpeg";

export const Home = () => {
    return (
        <main>
            {/* top of page */}
            <section className="padding-block-900">
                <div className="container">
                    <div className="two-column | first-container-styling">
                        <div className="flow | left-section-content">
                            <h1 className="fw-bold txt-accent-clr-black services-header">Services</h1>
                            <p>We offer a wide range of styles for both male and female clients</p>
                            {/* <button className="button" >View Services</button> */}
                            <button className="button btn2-design">Call Now!</button>

                            {/* Scissors animation */}
                            <div className="scissors-animation-container">
                                <Scissors />
                            </div>

                        </div>

                        <div>
                            <TabFilter />
                            {/* <img src={place} alt="startingImg" /> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* mid page */}
            <section className="padding-block-900">
                <div className="container">
                    <div className="two-column-mid">
                        <div className="flow">
                            <h1 className="fw-medium fs-headings txt-accent-clr-black product-heading">Products</h1>
                            <p>We offer producst for hair styling</p>
                        </div>
                        <div>
                            <Accordian/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="padding-block-900">
                <div className="swiper-container">
                    <div className="flow">
                            <ImgCarousel />
                            {/* <h1> Samples </h1> */}

                            {/* <img src={startingImg} alt="working-sample" />
                        <img src={startingImg} alt="working-sample" /> */}
                    </div>
                </div>
            </section>

            {/* bottom page */}
            <section className="padding-block-500">
                <div className="container | bottom-divider" >
            
                        <div className="business-hours">
                            <h2>Hours of Operation</h2>
                                <ul>
                                    <li><span class="day">Sunday:</span> 10am - 5pm</li>
                                    <li><span class="day">Monday:</span> Closed </li>
                                    <li><span class="day">Tuesday:</span> 10am - 5pm</li>
                                    <li><span class="day">Wednesday:</span> 10am - 5pm</li>
                                    <li><span class="day">Thursday:</span> 10am - 5pm</li>
                                    <li><span class="day">Friday:</span> 10am - 5pm</li>
                            </ul>
                        </div> 
                        <div className="Location">
                            <h2>Location</h2>
                            <ul>
                                    <li><span class="day">Sunday:</span> 10am - 5pm</li>
                                    <li><span class="day">Monday:</span> Closed </li>
                                    <li><span class="day">Tuesday:</span> 10am - 5pm</li>
                                    <li><span class="day">Wednesday:</span> 10am - 5pm</li>
                                    <li><span class="day">Thursday:</span> 10am - 5pm</li>
                                    <li><span class="day">Friday:</span> 10am - 5pm</li>
                            </ul>
                        </div>
                        <div>
                            <button className="button">Book Now!</button>
                        </div>
                    </div>
                
            </section>
        </main>
    );
}
export default Home 