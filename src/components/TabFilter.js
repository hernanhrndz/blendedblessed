import React, { useState, useEffect} from 'react';

import "../styles/TabFilter.css";


export const TabFilter = () => {
    const services = [
        // male service
        {id: 1, gender: "male", serviceName: "Haircut", Description: "Regualr hair cuts. No razor line up or skin work", price: "$20"},
        {id: 2, gender: "male", serviceName: "The Cutz", Description: "Taper/Fades", price: "$35+"},
        {id: 3, gender: "male", serviceName: "Haircut + Beard", Description: "", price: "$40"},
        //Female service
        {id: 4, gender: "women", serviceName: "Haircut", Description: "Hair wash, haircut and style💇🏻‍♀️✨", price: "$35"},
        {id: 5, gender: "women", serviceName: "HairStyle", Description: "Women’s Hairstyles. Up Dos or Styles!✨", price: "$45+"},
        {id: 6, gender: "women", serviceName: "Balayage", Description: "Up Dos or Styles!✨", price: "$175+"},
        {id: 7, gender: "women", serviceName: "Color", Description: "Phone Consultation Required Before the Service🔅📳 Prices vary on hair type, color base, and hair lengths.", price: "$65+"},
        {id: 8, gender: "women", serviceName: "Eyebrow + Upper Lip Wax", Description: "Eyebrow Shaping. Includes your choice for Upper Lip Wax.", price: "$20"},
        {id: 9, gender: "women", serviceName: "Make Up", Description: "Please call for consultation", price: "$50"},
        // Kid services
        {id: 10, gender: "kids", serviceName: "Kid Boy's/Girl's Haircut", Description: "", price: "$18+"},
    ];

    // Group services by category
    const categories = [
        { label: "Men", key: "male" },
        { label: "Women", key: "women" },
        { label: "Kids", key: "kids" }
    ];

    return ( 
        <main className="content-grid">
            <div className="full-width">
                <div className="service-container primary-header">
                    {categories.map(category => (
                        <div key={category.key} className="service-category">
                            <h2 className="category-heading">{category.label}</h2>
                            {services
                                .filter(service => service.gender === category.key)
                                .map(service => (
                                    <div className="service" key={service.id}>
                                        <div className="service-section">
                                            <h3 className="service-name">{service.serviceName}</h3>
                                            <p className="service-price">{service.price}</p>
                                        </div>
                                        <p className="service-details">{service.Description}</p>
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
export default TabFilter 