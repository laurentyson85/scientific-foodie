import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function FoodDetails() {
    const [food, setFood] = useState([]);
    const { id } = useParams()    
    
    useEffect(() => {
        fetch(`http://localhost:3000/foods/${id}`)
            .then(response => response.json())
            .then(data => setFood(data))
    }, [])

    const { scientificName, commonName, foodieFact, group, image, subGroup} = food
  

  return (
    <div className="detailCard">
        <h3>Scientific Name: {scientificName}</h3>      
        <img src={image} alt={scientificName} />
        <p><span style={{fontWeight: "bold"}}>Common Name:</span> {commonName}</p>
        <p><span style={{fontWeight: "bold"}}>Food Group:</span> {group}</p>
        <p><span style={{fontWeight: "bold"}}>Food Sub-group:</span> {subGroup}</p>
        <p><span style={{fontWeight: "bold"}}>Foodie Fact:</span> {foodieFact}</p>        
    </div>
  );
}

export default FoodDetails;

//consider adding full crud. An i tried it button, and the ability to delete a food from the database