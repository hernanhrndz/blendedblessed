import React, { } from 'react';
import "../styles/Accordian.css";

import stylingPowder from "../assets/styling-powder.png";
import clay from "../assets/claymation.png";
import pomade from "../assets/suavecito-pomade.png";
import powder from "../assets/suavecito-texture-powder.png";

export const Accordian = () => {
    return (
        <ul className="accordion">
        <li>
            <img src={stylingPowder} />
            <div class="content">
            <span>
                <h2>Carmen Rios</h2>
                <p>Frontend</p>
            </span>
            </div>
        </li>
        <li>
            <img src={pomade} />
            <div class="content">
            <span>
                <h2>Lisa Scott</h2>
                <p>Backend</p>
            </span>
            </div>
        </li>
        <li>
            <img src={clay}/>
            <div class="content">
            <span>
                <h2>Pavel Dvorak</h2>
                <p>Backend</p>
            </span>
            </div>
        </li>
        <li>
            <img src={powder} />
            <div class="content">
            <span>
                <h2>Kelly Cox</h2>
                <p>Designer</p>
            </span>
            </div>
        </li>
    </ul>

    );
};

export default Accordian;


{/* <div className="accordion-panel">
            <h2 id="panel1-heading">
                <button
                    className="accordion-trigger"
                    aria-controls="panel1-content"
                    aria-expanded="true"
                > 
                    <span id="panel1-title">Texture Powder </span>
                    
                </button>
            </h2>

            <div 
                className="accordian-content" 
                id="panel1-content"
                aria-labelledby="panel1-heading"
                aria-hidden="false"
                role="region"
                >
                <p>
                    Lorem ipsum dolor sit amet, consectetur
                </p> 
                <img
                    className="accordion-image"
                    src={stylingPowder}
                    alt="level3 Styling Powder"
                /> 
            </div>
        </div> */}

        {/* second according panel */}
        {/* <div className="accordion-panel">
            <h2 id="panel2-heading">
                <button
                    className="accordion-trigger"
                    aria-controls="panel2-content"
                    aria-expanded="false"
                > 
                    <span id="panel2-title">Clay </span>
                    
                </button>
            </h2>

            <div 
                className="accordian-content" 
                id="panel2-content"
                aria-labelledby="panel2-heading"
                aria-hidden="true"
                role="region"
                >
                <p>
                    Lorem ipsum dolor sit amet, consectetur
                </p> 
                <img
                    className="accordion-image"
                    src={clay}
                    alt="Hanz de fuko claymation"
                /> 
            </div>
        </div> */}
        
        {/* Third according panel */}
        {/* <div className="accordion-panel">
            <h2 id="panel3-heading">
                <button
                    className="accordion-trigger"
                    aria-controls="panel3-content"
                    aria-expanded="false"
                > 
                    
                </button>
            </h2>

            <div 
                className="accordian-content" 
                id="panel3-content"
                aria-labelledby="panel3-heading"
                aria-hidden="true"
                role="region"
                >
                <p>
                    Lorem ipsum dolor sit amet, consectetur
                </p> 
                <img
                    className="accordion-image"
                    src={powder}
                    alt="Suavecito powder"
                /> 
            </div>
        </div> */}


        {/* Fourth according panel */}
        {/* <div className="accordion-panel">
            <h2 id="panel4-heading">
                <button
                    className="accordion-trigger"
                    aria-controls="panel4-content"
                    aria-expanded="false"
                > 
                    <span id="panel4-title">Pomade </span>
            
                </button>
            </h2>

            <div 
                className="accordian-content" 
                id="panel4-content"
                aria-labelledby="panel4-heading"
                aria-hidden="true"
                role="region"
                >
                <p>
                    Lorem ipsum dolor sit amet, consectetur
                </p> 
                <img
                    className="accordion-image"
                    src={pomade}
                    alt="pomade"
                /> 
            </div>
        </div> */}