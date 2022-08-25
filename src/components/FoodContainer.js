import React from "react";
import FoodCard from "./FoodCard";

function FoodContainer({foods}) {

    const myFoods = foods.map(food => {
        return(
            <FoodCard
            key={food.id}
            scientificName={food.scientificName}
            image={food.image}
            />
        )
    }) 

  return (
    <ul className="cards">{myFoods}</ul>
  );
}

export default FoodContainer;