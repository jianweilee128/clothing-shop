import React from "react";
import "./checkout-item.scss";
import { removeItem, deleteItem, addItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { ReactComponent as RemoveIcon } from "../../resources/icons/trashIcon.svg";

const CheckoutItem = ({ item, addItem, removeItem, deleteItem }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="checkout-item-container">
      <div className="checkout-item-image">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="checkout-item-text description">{name}</span>
      <span className="checkout-item-quantity">
        <div onClick={() => deleteItem(item)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(item)}>&#10095;</div>
      </span>
      <span className="checkout-item-text">{price}</span>
      <div className="checkout-item-remove" onClick={() => removeItem(item)}>
        <RemoveIcon className="remove-icon" />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  deleteItem: (item) => dispatch(deleteItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
