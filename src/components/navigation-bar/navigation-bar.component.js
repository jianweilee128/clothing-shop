import React, { Fragment } from "react";
import "./navigation-bar.scss";
import { ReactComponent as CartIcon } from "../../resources/icons/cartIcon.svg";

const NavigationBar = () => (
  <Fragment>
    <ul className="nav-items">
      <li>Home</li>
      <CartIcon />
      <li>Login</li>
    </ul>
  </Fragment>
);

export default NavigationBar;
