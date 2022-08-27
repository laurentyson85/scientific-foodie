import React from "react";
import { Link } from "react-router-dom"

function FoodCard({scientificName, commonName, image, id}) {
    

  return (
    <li className="card">      
      <h4>{scientificName}</h4>
      <p>{commonName}</p>            
      <img src={image} alt={scientificName} />
      <br></br>      
      <Link className="learnLink" to={`/foods/${id}`}>Learn more</Link>               
    </li>
  );
}

export default FoodCard;



//consider where to add the i tried this button count