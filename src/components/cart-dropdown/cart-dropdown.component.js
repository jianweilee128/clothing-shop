import React from "react";
import "./cart-dropdown.scss";
import LinkButton from "../link-button/link-button.component";
import CartItem from "../cart-item/cart-item.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";

const CartDropdown = ({ cartItems }) => (
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
    <div className="checkout-button">
      <LinkButton description="checkout" />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
