import React from "react";


function Search() {
  return (
    <div className="search">
      <label>Search Database</label>
      <input
        type="text"
        // id="search"
        // value={search}
        placeholder="Type a food to search..."
        // onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default Search;

