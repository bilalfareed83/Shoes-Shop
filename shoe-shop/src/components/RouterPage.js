import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Products } from './Products';
import { ProductsItem } from './ProductsItem';
import { Home } from './Home';
import NavBar from './NavBar';
import ShoesSlide from './AnimetionComponent/Slide';
import AnimatedText from './AnimetionComponent/Text';
import Buttom from './Bottom';
import { NotFound } from './NotFound';
export const RouterPage = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <ShoesSlide />
        <AnimatedText />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/" exact component={Products} />
          <Route path="/:id" exact component={ProductsItem} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      <Buttom />
    </div>
  );
};
