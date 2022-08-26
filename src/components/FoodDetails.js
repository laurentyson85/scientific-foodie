import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function FoodDetails() {
    const [food, setFood] = useState(null);
    const { id } = useParams()
    //console.log(params)
    
    useEffect(() => {
        fetch(`http://localhost:3000/foods/${id}`)
            .then(response => response.json())
            .then(data => setFood(data))
    }, [id])

    console.log(food)

    const { scientificName } = food
  

  return (
    <div>
      {scientificName}
    </div>
  );
}

export default FoodDetails;