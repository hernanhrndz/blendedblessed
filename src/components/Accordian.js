import React, { } from 'react';
import "../styles/Accordian.css";

import stylingPowder from "../assets/styling-powder.png";
import clay from "../assets/claymation.png";
import pomade from "../assets/suavecito-pomade.png";
import powder from "../assets/suavecito-texture-powder.png";

const accordionData = [
    { id: 1, imgSrc: stylingPowder, name: "placeholder", description: "info info info" },
    { id: 2, imgSrc: pomade, name: "placeholder", description: "info info info" },
    { id: 3, imgSrc: clay, name: "placeholder", description: "info info info" },
    { id: 4, imgSrc: powder, name: "placeholder", description: "info info info" },

]

export const Accordian = () => {
    return (
        <div className="accordion">
        {accordionData.map((item) => (
          <div className="accordion-item" key={item.id}>
            <img src={item.imgSrc} alt={`${item.name}`} />
            <div className="content">
              <span>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </span>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Accordian;
