import React, { useState } from "react";


function FoodForm({addNewFood}) {

  const [formData, setFormData] = useState({
    group: "",
    image: "",
    subGroup: "",
    commonName: "",
    foodieFact: "",
    triedCount: 0,
    scientificName: ""
  })


  function handleForm(event){
    setFormData({
      ...formData, [event.target.name]:event.target.value
    })
  }

  function handleSubmit(event){
    event.preventDefault()

    fetch("http://localhost:3000/foods", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "group": formData.group,
        "image": formData.image,
        "subGroup": formData.subGroup,
        "commonName": formData.commonName,
        "foodieFact": formData.foodieFact,
       "triedCount": formData.triedCount,
        "scientificName": formData.scientificName,
      })
    })
    .then(response => response.json())
    .then(addNewFood)
    setFormData({
      group: "",
      image: "",
      subGroup: "",
      commonName: "",
      foodieFact: "",
      triedCount: 0,
      scientificName: ""
    })
  }

  

  return (
    <div className="newFood">
      <h2>Submit a new food to the database</h2>
      <form onSubmit={handleSubmit}>
        <label>
            Scientific name:
            <input type="text" name="scientificName" value={formData.scientificName} onChange={handleForm}/>
        </label>
        <label>
            Common name:
            <input type="text" name="commonName" value={formData.commonName} onChange={handleForm} />
        </label>
        <label>
            Food image url:
            <input type="text" name="image" value={formData.image} onChange={handleForm}/>
        </label>
        <label>
            Food group:
            <input type="text" name="group" value={formData.group} onChange={handleForm}/>
        </label>
        <label>
            Food sub-group:
            <input type="text" name="subGroup" value={formData.subGroup} onChange={handleForm}/>
        </label>
        <label>
            Foodie Fact:
            <textarea type="text" name="foodieFact" value={formData.foodieFact} onChange={handleForm}/>
        </label>      
        <button type="submit">Add Food!</button>
      </form>
    </div>
  );
}

export default FoodForm;

//tried count will default to 0 when new food is added
//...as new foods are added, research how I can alphabatize my foods after new array is saved in State