import React from "react";
import foodie from "../images/Foodie.png"

function Header() {
  return (
    <div className="header">        
      <h1>Scientific {<img src={foodie}/>}</h1>
    </div>
  );
}

export default Header;