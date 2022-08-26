import React from "react";


function FoodForm() {
  return (
    <div className="newFood">
      <h2>Submit a new food to the database</h2>
      <form >
        <label>
            Scientific Name:
            <input type="text" name="Scientific Name" placeholder="..." />
        </label>
        <input type="text" name="Common Name" placeholder="common name" />
        <input type="text" name="image" placeholder="image URL" />
        <input type="text" name="Food Group" placeholder="food group" />
        <input type="text" name="Food Sub-group" placeholder="food sub-group" />
        <textarea type="text" name="Foodie Fact" placeholder="add foodie fact" />
        <button type="submit">Add Food!</button>
      </form>
    </div>
  );
}

export default FoodForm;

//tried count will default to 0 when new food is added