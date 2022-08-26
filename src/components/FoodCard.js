import React from "react";
import { Link } from "react-router-dom"

function FoodCard({scientificName, image, id}) {
    

  return (
    <li className="card">      
      <h4>{scientificName}</h4>            
      <img src={image} alt={scientificName} />
      <br></br>      
      <Link className="learnLink" to={`/foods/${id}`}>Learn more</Link>               
    </li>
  );
}

export default FoodCard;



//consider where to add the i tried this button count