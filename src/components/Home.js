import React, { } from 'react';
import "../styles/Home.css";
import { ImgCarousel } from './ImgCarousel';
import { Accordian } from './Accordian';

import serviceImg from "../assets/services-img.jpeg";

export const Home = () => {
    return (
        <main>
            {/* top of page */}
            <section className="padding-block-900">
                <div className="container">
                    <div className="two-column | first-container-styling">
                        <div className="flow">
                            <h1 className="fw-medium fs-headings txt-accent-clr-black services-header">Services</h1>
                            <p>We offer a wide range of styles for both male and female clients</p>
                            <button className="button" >View Services</button>
                            <button className="button btn2-design">Book Now!</button>

                        </div>

                        <div>
                            <img src={serviceImg} alt="startingImg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* mid page */}
            <section className="padding-block-900 bg-clr-gray">
                <div className="container">
                    <div className="two-column">
                        <div>
                            <Accordian/>
                        </div>
                        <div className="flow">
                            <h1 className="fw-medium fs-headings txt-accent-clr-black">Products</h1>
                            <p>We offer producst for hair styling</p>
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
            <section className="padding-block-500 bg-clr-gray">
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