import React from "react";


function Filter() {
  return (    
      <div className="Filter">
        <label>Filter by Food Group</label>        
        <select name="filter" >
          <option value="All">All</option>
          <option value="Cereals and cereal products">Cereals</option>
          <option value="Coffee and coffee products">Coffee</option>
          <option value="Fruits">Fruits</option>
          <option value="Gourds">Gourds</option>
          <option value="Herbs and Spices">Herbs and Spices</option>
          <option value="Nuts">Nuts</option>
          <option value="Pulses">Pulses</option>
          <option value="Vegetabels">Vegetabels</option>
        </select>
      </div>
  );
}

export default Filter;