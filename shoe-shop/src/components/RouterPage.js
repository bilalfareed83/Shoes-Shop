import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Products } from "./Products";
import { ProductsItem } from "./ProductsItem";
import { Home } from "./Home";
import NavBar from "./NavBar";

export const RouterPage = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/" exact component={Products} />
          <Route path="/:id" exact component={ProductsItem} />
        </Switch>
      </Router>
    </div>
  );
};
