import React from "react";
import headerImg from "../images/newHeader.png"

function Header() {
  return (
    <div className="header">        
      <img src={headerImg} alt="headerImg"/>
    </div>
  );
}

export default Header;