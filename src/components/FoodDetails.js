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

    const { scientificName } = food
  

  return (
    <div>
      {scientificName}
    </div>
  );
}

export default FoodDetails;