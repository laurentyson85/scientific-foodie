import React from "react";


function Search({search, handleSearch}) {
  return (
    <div className="search">
      <label>Search Database</label>
      <input
        type="text"        
        // value={search}
        placeholder="Type a food to search..."
        // onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default Search;

