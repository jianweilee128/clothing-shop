import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomePage from "./pages/homepage/homepage.component";
import CategoryPage from "./pages/category/category-page";
import CheckoutPage from "./pages/checkout/checkout-page";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/checkout" component={CheckoutPage} />
      <Route match path={`/category/:category`} component={CategoryPage} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
