import React from "react";
import "./category-item.scss";

import { addItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CategoryItem = ({ item, addItem }) => (
  <div className="category-item-container">
    <div className="item-container">
      <div
        className="background-container"
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      ></div>
      <div className="text-container">
        <button className="add-to-cart-button" onClick={() => addItem(item)}>
          add to cart
        </button>
      </div>
    </div>
    <div className="category-item-description">
      <span className="category-item-name">{item.name}</span>
      <span className="category-item-price">{item.price}</span>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CategoryItem);
