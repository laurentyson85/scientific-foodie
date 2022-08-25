import React from "react";
import headerImg from "../images/newHeader.png"

function Header() {
  return (
    <div className="header">        
      <img id="headerImg" src={headerImg} alt="headerImg"/>
    </div>
  );
}

export default Header;