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
    addNewFood(formData)
  }

  //After I do my post request I should be able to access the id. double check

  return (
    <div className="newFood">
      <h2>Submit a new food to the database</h2>
      <form onSubmit={handleSubmit}>
        <label>
            Scientific name:
            <input type="text" name="Scientific Name" value={formData.scientificName} onChange={handleForm}/>
        </label>
        <label>
            Common name:
            <input type="text" name="Common Name" value={formData.commonName} onChange={handleForm} />
        </label>
        <label>
            Food image url:
            <input type="text" name="image" value={formData.image} onChange={handleForm}/>
        </label>
        <label>
            Food group:
            <input type="text" name="Food Group" value={formData.group} onChange={handleForm}/>
        </label>
        <label>
            Food sub-group:
            <input type="text" name="Food Sub-group" value={formData.subGroup} onChange={handleForm}/>
        </label>
        <label>
            Foodie Fact:
            <textarea type="text" name="Foodie Fact" value={formData.foodieFact} onChange={handleForm}/>
        </label>      
        <button type="submit">Add Food!</button>
      </form>
    </div>
  );
}

export default FoodForm;

//tried count will default to 0 when new food is added
//...as new foods are added, research how I can alphabatize my foods after new array is saved in State