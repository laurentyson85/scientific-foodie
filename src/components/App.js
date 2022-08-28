import React, { useState, useEffect } from "react";
import { Route, Switch} from "react-router-dom"
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import FoodContainer from "./FoodContainer";
import FoodForm from "./FoodForm";
import FoodDetails from "./FoodDetails";

function App() {
const [foods, setFoods] = useState([])
const [newFood, setNewFood] = useState({
  group: "Fruits",
  image: "https://envato-shoebox-0.imgix.net/1a4f/8df0-27b6-468f-875b-476c350cae88/EuropeanPlumsWithOneOpenFruitWoodenBowl.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=cd5acd267ab1422602f14e45b2e66d5e",
  subGroup: "Drupes",
  commonName: "European plum",
  foodieFact: "The European plum is also known as prune-plum because its fruits, with high sugar content, can be dried to produce prunes.",
  triedCount: 0,
  scientificName: "Prunus domestica"
})


useEffect(() => {
  fetch("http://localhost:3000/foods")
  .then(response => response.json())
  .then(data => setFoods(data))
}, [])




  return (
    <div>
      <Header />
      <Nav />
      <Switch>        
        <Route exact path="/foods">
          <FoodContainer foods={foods}/>
        </Route>
        <Route path="/foods/:id">
          <FoodDetails />
        </Route>
        <Route path="/form">
          <FoodForm />
        </Route>
        <Route exact path="/">
          <Home newFood={newFood}/>
        </Route>
        <Route path="*">
          <h1>404</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
