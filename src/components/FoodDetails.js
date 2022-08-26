import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function FoodDetails() {
    const [food, setFood] = useState([]);
    const { id } = useParams()
    //console.log(params)
    
    useEffect(() => {
        fetch(`http://localhost:3000/foods/${id}`)
            .then(response => response.json())
            .then(data => setFood(data))
    }, [])

    const { scientificName, commonName, foodieFact, group, image, subGroup} = food
  

  return (
    <div className="card">
        <img src={image} alt={scientificName} />      
        <h3>Scientific Name: {scientificName}</h3>
        <p><span style={{fontWeight: "bold"}}>Common Name:</span> {commonName}</p>
        <p><span style={{fontWeight: "bold"}}>Food Group:</span> {group}</p>
        <p><span style={{fontWeight: "bold"}}>Food Sub-group:</span> {subGroup}</p>
        <p><span style={{fontWeight: "bold"}}>Foodie Fact:</span> {foodieFact}</p>        
    </div>
  );
}

export default FoodDetails;