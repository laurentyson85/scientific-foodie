import React from "react";
import { Link } from "react-router-dom"


function Home({newFood}) {
  const {scientificName, commonName, image, id} = newFood

  return (
    <div className="home">
      <h2>Welcome to the database that shares scientific information about fruits, vegatables, grains, gourds, and more!</h2>
      <p>Use the navigation at the top to view and learn about different foods and to submit a new food to the database.</p>
      <p><span style={{fontWeight: "bold"}}>Recently added food:</span></p>
      <div className="newFoodCard">      
        <h4>{scientificName}</h4>
        <p>{commonName}</p>            
        <img src={image} alt={scientificName} />
        <br></br>      
        <Link className="learnLink" to={`/foods/${id}`}>Learn more</Link>               
      </div>
    </div>
  );
}

export default Home;

//have the state that contains the newly submitted food default to the last food in the db.json