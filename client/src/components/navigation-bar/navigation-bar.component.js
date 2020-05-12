import React from "react";
import "./navigation-bar.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as CartIcon } from "../../resources/icons/cartIcon.svg";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { useAuth0 } from "../../utils/react-auth0-spa";

import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import { selectCartHidden } from "../../redux/cart/cart.selector";

const NavigationBar = ({ toggleCartDropdown, cartHidden }) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <div className="nav-container">
      <Link to="/" className="title">
        Home
      </Link>
      <ul className="nav-items">
        <CartIcon className="item" onClick={toggleCartDropdown} />
        {cartHidden ? null : <CartDropdown />}
        <div>
          {!isAuthenticated && (
            <li className="item" onClick={() => loginWithRedirect({})}>
              Login
            </li>
          )}

          {isAuthenticated && (
            <li className="item" onClick={() => logout()}>
              Logout
            </li>
          )}
        </div>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

const mapStateToProps = createStructuredSelector({
  cartHidden: selectCartHidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
