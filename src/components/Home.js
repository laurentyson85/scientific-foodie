import React from "react";


function Home({newFood}) {
  const {scientificName, commonName, foodieFact, group, image, subGroup} = newFood

  return (
    <div className="home">
      <h2>Welcome to the database that shares scientific information about fruits, vegatables, grains, gourds, and more!</h2>
      <p>Use the navigation at the top to view and learn about different foods and to submit a new food to the database.</p>
      <p><span style={{fontWeight: "bold"}}>Recently added food:</span></p>
      <div className="newFoodCard">
        <h3>Scientific Name: {scientificName}</h3>      
        <img src={image} alt={scientificName} />   
        <p><span style={{fontWeight: "bold"}}>Common Name:</span> {commonName}</p>
        <p><span style={{fontWeight: "bold"}}>Food Group:</span> {group}</p>
        <p><span style={{fontWeight: "bold"}}>Food Sub-group:</span> {subGroup}</p>
        <p><span style={{fontWeight: "bold"}}>Foodie Fact:</span> {foodieFact}</p>              
      </div>
    </div>
  );
}

export default Home;

//have the state that contains the newly submitted food default to the last food in the db.json