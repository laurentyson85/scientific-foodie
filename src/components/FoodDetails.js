import React from "react";


function FoodDetails({foods}) {
  const {id, group, image, subGroup, commonName, foodieFact, triedCount, scientificName} = foods

  return (
    <div>
      details! {id}
    </div>
  );
}

export default FoodDetails;