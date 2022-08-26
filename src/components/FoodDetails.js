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
        <h4>Scientific Name: {scientificName}</h4>
        <p>Common Name: {commonName}</p>
        <p>Food Group: {group}</p>
        <p>Food Sub-group: {subGroup}</p>
        <p>Foodie Fact: {foodieFact}</p>        
    </div>
  );
}

export default FoodDetails;