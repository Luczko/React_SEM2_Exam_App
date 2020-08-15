import React, { useEffect } from "react";

import Nav from "pages/Nav/Nav";
import HomePage from "pages/HomePage/HomePage";
import AboutPage from "pages/AboutPage/AboutPage";
import CatalogPage from "pages/CatalogPage/CatalogPage";
import CartPage from "pages/CartPage/CartPage";
import Footer from "pages/Footer/Footer";
import NotFound from "pages/NotFound/NotFound";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import * as actions from "./actions";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    if (!products) {
      dispatch(actions.getProducts());
    }
  });

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/catalog" component={CatalogPage} />
          <Route path="/cart" component={CartPage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
