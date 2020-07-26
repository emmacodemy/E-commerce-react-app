import React from "react";
import "./App.css";
import { HomePage } from "./pages/homepage/Homepage";
import { Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";


function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage}/>
    </div>
  );
}

export default App;
