import React from "react";
import FoodCard from "./FoodCard";
import Search from "./Search";

function FoodContainer({foods}) {

    const myFoods = foods.map(food => {
        return(
            <FoodCard
            key={food.id}
            id={food.id}
            scientificName={food.scientificName}
            commonName={food.commonName}
            image={food.image}
            />
        )
    }) 

  return (
    <div>
        <Search/>
        <ul className="cards">{myFoods}</ul>
    </div>
    
  );
}

export default FoodContainer;