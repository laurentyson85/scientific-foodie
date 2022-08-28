import React from "react";


function FoodForm() {
  return (
    <div className="newFood">
      <h2>Submit a new food to the database</h2>
      <form >
        <label>
            Scientific name:
            <input type="text" name="Scientific Name"/>
        </label>
        <label>
            Common name:
            <input type="text" name="Common Name" />
        </label>
        <label>
            Food image url:
            <input type="text" name="image"/>
        </label>
        <label>
            Food group:
            <input type="text" name="Food Group"/>
        </label>
        <label>
            Food sub-group:
            <input type="text" name="Food Sub-group"/>
        </label>
        <label>
            Foodie Fact:
            <textarea type="text" name="Foodie Fact"/>
        </label>      
        <button type="submit">Add Food!</button>
      </form>
    </div>
  );
}

export default FoodForm;

//tried count will default to 0 when new food is added
//...as new foods are added, research how I can alphabatize my foods after new array is saved in State