import React, { useState } from "react";
import { useHistory } from "react-router-dom"


function FoodForm({addNewFood}) {
  const history = useHistory();

  const [formData, setFormData] = useState({
    group: "",
    image: "",
    subGroup: "",
    commonName: "",
    foodieFact: "",
    scientificName: "",
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
      scientificName: ""
    })
    history.push("/")
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
