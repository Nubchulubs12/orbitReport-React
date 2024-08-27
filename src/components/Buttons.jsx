import React from "react";
import satData from "./satData";
import "./styling.css";


const Buttons = ({ filterByType, setSat, orbitTypes }) => {
  return (
    <div className="flex-container">
      
      {orbitTypes.map((type, index) => (
        <div key={index}>
          <button onClick={() => filterByType(type)} >
            {type} Orbit
          </button>
          
        </div>
      ))}

      <div>
        <button onClick={() => setSat(satData)}>
          All orbits
        </button>
      </div>
    </div>
  );
};

export default Buttons;