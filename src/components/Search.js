import React from "react";


function Search({search, handleSearch}) {
  return (
    <div className="search">
      <label>Search Database</label>
      <input
        type="text"        
        value={search}
        placeholder="Type a food and press enter to search..."
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
}

export default Search;

