import React from "react";
import "./navigation-bar.scss";
import { Link } from "react-router-dom";

import { ReactComponent as CartIcon } from "../../resources/icons/cartIcon.svg";

const NavigationBar = () => (
  <div className="nav-container">
    <Link to="/" className="title">
      Home
    </Link>
    <ul className="nav-items">
      <CartIcon className="item" />
      <li className="item">Login</li>
    </ul>
  </div>
);

export default NavigationBar;
