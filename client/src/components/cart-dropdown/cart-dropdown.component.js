import React from "react";
import "./cart-dropdown.scss";
import { Link } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, toggleCartDropdown }) => (
  <div className="cart-dropdown-container">
    <div className="cart-dropdown-item-container">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="cart-empty">Your cart is empty</span>
      )}
    </div>
    <div className="dropdown-checkout-button">
      <Link
        className="btn-checkout"
        to="/checkout"
        onClick={toggleCartDropdown}
      >
        checkout
      </Link>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
