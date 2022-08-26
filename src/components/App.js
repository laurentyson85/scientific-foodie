import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom"
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import FoodContainer from "./FoodContainer";
import FoodForm from "./FoodForm";
import FoodDetails from "./FoodDetails";

function App() {
const [foods, setFoods] = useState([])

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
        <Route path="/foods">
          <FoodContainer exact foods={foods}/>
        </Route>
        <Route path="/foods/:id">
          <FoodDetails />
        </Route>
        <Route path="/form">
          <FoodForm />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1>404 Lauren add a cute veggie image here + note that no page exists</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
