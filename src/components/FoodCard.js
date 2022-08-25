import React from "react";
import { Link } from "react-router-dom"

function FoodCard({scientificName, image, id}) {
  return (
    <li className="card">      
      <h4>{scientificName}</h4>  
      <img src={image} alt={scientificName} />          
    </li>
  );
}

export default FoodCard;

//<Link to={`/foods/${id}`}>Learn more</Link>