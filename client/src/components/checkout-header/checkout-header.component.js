import React from "react";
import "./checkout-header.scss";

const CheckoutHeader = () => (
  <div className="checkout-header-container">
    <div className="checkout-header-column">
      <span>Product</span>
    </div>
    <div className="checkout-header-column">
      <span>Description</span>
    </div>
    <div className="checkout-header-column">
      <span>Quantity</span>
    </div>
    <div className="checkout-header-column">
      <span>Price</span>
    </div>
    <div className="checkout-header-column">
      <span>Remove</span>
    </div>
  </div>
);

export default CheckoutHeader;
