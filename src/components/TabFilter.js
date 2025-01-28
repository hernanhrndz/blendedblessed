import React, { useState, useEffect} from 'react';

import "../styles/TabFilter.css";


export const TabFilter = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const services = [
        // male service
        {id: 1, gender: "male", serviceName: "Men's Haircut", Description: "Regualr hair cuts. No razor line up or skin work", price: "$20"},
        {id: 2, gender: "male", serviceName: "The Cutz", Description: "Taper/Fades", price: "$35+"},
        {id: 3, gender: "male", serviceName: "Haircut + Beard", Description: "", price: "$40"},
        //Female service
        {id: 4, gender: "women", serviceName: "Women's Haircut", Description: "Hair wash, haircut and style💇🏻‍♀️✨", price: "$35"},
        {id: 5, gender: "women", serviceName: "HairStyle", Description: "Hair wash, haircut and style💇🏻‍♀️✨", price: "$45+"},
        {id: 6, gender: "women", serviceName: "Balayage", Description: "Up Dos or Styles!✨", price: "$175+"},
        {id: 7, gender: "women", serviceName: "Color", Description: "Phone Consultation Required Before the Service🔅📳 Prices vary on hair type, color base, and hair lengths.", price: "$65+"},
        {id: 8, gender: "women", serviceName: "Eyebrow + Upper Lip Wax", Description: "Eyebrow Shaping. Includes your choice for Upper Lip Wax.", price: "$20"},
        {id: 9, gender: "women", serviceName: "Make Up", Description: "Please call for consultation", price: "$50"},
        // Kid services
        {id: 10, gender: "kids", serviceName: "Kid Boy's/Girl's Haircut", Description: "", price: "$18+"},
    ];

    // transtion tab style
    const handleGenderChange = (gender) => {
        if (document.startViewTransition) {
            // Smooth transition
            document.startViewTransition(() => {
                setActiveFilter(gender);
            });
        } else {
            // Fallback for browsers without ViewTransition API
            setActiveFilter(gender);
        }
    };

    // filter
    const filteredServices = services.filter(
        (service) => activeFilter === "all" || service.gender === activeFilter
    );


    return ( 
        <main className="content-grid">
        <div className="full-width">
            <div className="primary-header">
            <div className="primary-header__layout filter">
                <button 
                className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
                onClick={() => handleGenderChange("all")}
                >
                All
                </button>
                <button 
                className={`filter-btn ${activeFilter === "male" ? "active" : ""}`}
                onClick={() => handleGenderChange("male")}
                >
                Male
                </button>
                <button 
                className={`filter-btn ${activeFilter === "women" ? "active" : ""}`}
                onClick={() => handleGenderChange("women")}
                >
                Women
                </button>
                <button 
                className={`filter-btn ${activeFilter === "kids" ? "active" : ""}`}
                onClick={() => handleGenderChange("kids")}
                >
                Kids
                </button>
            </div>
            </div>

            <div className="service-container">
            {filteredServices.map((service) => (
                <div className="service" key={service.id}>
                    <div className="service-section">
                        <h2 className="service-name">{service.serviceName}</h2>
                        <p className="service-price">{service.price}</p>
                    </div>
                <p className="service-details">{service.Description}</p>
                </div>
                
            ))}
            </div>
        </div>
        </main>

    );
}
export default TabFilter 