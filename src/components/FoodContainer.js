import React, { useState } from "react";
import FoodCard from "./FoodCard";
import Search from "./Search";
import Filter from "./Filter";

function FoodContainer({foods}) {
  const [selectedGroup, setSelectedGroup] = useState("All");
  const [search, setSearch] = useState("")



  function handleFilter(event){
    console.log(event.target.value)
  }

  function handleSearch(event){
    console.log(event.target.value)
  }

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
        <Search search={search} handleSearch={handleSearch}/>
        <Filter handleFilter={handleFilter}/>
        <ul className="cards">{myFoods}</ul>
    </div>
    
  );
}

export default FoodContainer;