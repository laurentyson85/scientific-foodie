import React from "react";
import { useParams } from "react-router-dom"


function FoodDetails({foods}) {

const { id } = useParams() 
        
    if (foods.length > 0){
      const {scientificName, commonName, foodieFact, group, image, subGroup} = foods.find(food => food.id === parseInt(id))
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
    } else{
       return null
    }
}

export default FoodDetails;
