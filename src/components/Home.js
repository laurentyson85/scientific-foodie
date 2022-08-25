import React from "react";


function Home() {
  return (
    <div className="home">
      <h2>Welcome to the database that shares scientific information about fruits, vegatables, grains, gourds, and more!</h2>
      <p>Use the navigation at the top to view and learn about different foods and to submit a new food to the database.</p>
      <p>Recently added food:</p>

    </div>
  );
}

export default Home;

//have the state that contains the newly submitted food default to the last food in the db.json