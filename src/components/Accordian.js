import React, { useState } from 'react';
import "../styles/Accordian.css";

import stylingPowder from "../assets/styling-powder.png";
import clay from "../assets/claymation.png";
import pomade from "../assets/suavecito-pomade.png";
import powder from "../assets/suavecito-texture-powder.png";

export const Accordian = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    // Define your accordion data inside the component
    const products = {
      all: [
        { id: 1, imgSrc: stylingPowder, name: "Styling Powder", description: "info info info", category: "Men" },
        { id: 2, imgSrc: pomade, name: "Pomade", description: "info info info", category: "Women" },
        { id: 3, imgSrc: clay, name: "Clay", description: "info info info", category: "Men" },
        // { id: 4, imgSrc: powder, name: "Texture Powder", description: "info info info", category: "Women" },
        // { id: 4, imgSrc: powder, name: "Texture Powder", description: "info info info", category: "Women" },
        // { id: 4, imgSrc: powder, name: "Texture Powder", description: "info info info", category: "Women" }
      ],
      men: [
        { id: 1, imgSrc: stylingPowder, name: "Styling Powder", description: "info info info", category: "Men" },
        { id: 3, imgSrc: clay, name: "Clay", description: "info info info", category: "Men" }
      ],
      women: [
        { id: 2, imgSrc: pomade, name: "Pomade", description: "info info info", category: "Women" },
        { id: 4, imgSrc: powder, name: "Texture Powder", description: "info info info", category: "Women" }
      ]
    };

   // transtion tab style
   const handleFilterChange = (category) => {
    if (document.startViewTransition) {
        // Smooth transition
        document.startViewTransition(() => {
            setActiveFilter(category);
        });
    } else {
        // Fallback for browsers without ViewTransition API
        setActiveFilter(category);
      }
    };
        // filter
    const filteredProducts = products[activeFilter];


    return (
      <div>
        {/* Filter Tabs */}
        <div className="filter">
          <button 
          className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => handleFilterChange("all")}>All
          </button>
          <button
          className={`filter-btn ${activeFilter === "men" ? "active" : ""}`}
          onClick={() => handleFilterChange("men")}
        >
          Men Products
        </button>
        <button
          className={`filter-btn ${activeFilter === "women" ? "active" : ""}`}
          onClick={() => handleFilterChange("women")}
        >
          Women Products
        </button>
         
      </div>

        <div className="accordion">
        {filteredProducts.map((product) => (
          <div className="accordion-item" key={product.id}>
            <img src={product.imgSrc} alt={`${product.name}`} />
            <div className="content">
              <span>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </span>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
};

export default Accordian;
