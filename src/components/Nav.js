import React from "react";
import { Link } from "react-router-dom"


function Nav() {
  return (
    <div className="navBar">
        <nav>
        <Link to="/">Home</Link>
        <Link to="/foods">Foods</Link>
        <Link to="/form">Submit New Food</Link>
        </nav>
    </div>
    
  );
}

export default Nav;