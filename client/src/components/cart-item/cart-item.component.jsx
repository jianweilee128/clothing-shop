import React from "react";
import "./cart-item.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item-container">
    <img className="cart-item-image" src={imageUrl} alt="item" />
    <div className="cart-item-info">
      <div className="cart-item-name">{name}</div>
      <span>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
