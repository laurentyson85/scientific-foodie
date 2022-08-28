import React, { useState } from "react";
import FoodCard from "./FoodCard";
import Search from "./Search";
import Filter from "./Filter";

function FoodContainer({foods}) {
  const [selectedGroup, setSelectedGroup] = useState("All");
  const [search, setSearch] = useState("")

  function handleFilter(event){
    setSelectedGroup(event.target.value)
  }

  function handleSearch(newSearch){
    setSearch(newSearch)    
  }

  

  const foodsToDisplay = foods.filter((food) => {
    if (selectedGroup === "All") return true;

    return food.group === selectedGroup;
  }).filter(food => food.commonName.toLowerCase().includes(search.toLowerCase()));

  
  const myFoods = foodsToDisplay.sort((a, b) => {    
    if (a.scientificName < b.scientificName) {
      return -1;
    }
    if (a.scientificName > b.scientificName) {
      return 1;
    } 
    return 0;
  }).map(food => {
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