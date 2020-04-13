import React from "react";
import "./category-item.scss";

import { addItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CategoryItem = ({ item, addItem }) => (
  <div className="item-container">
    <div
      className="background-container"
      style={{
        backgroundImage: `url(${item.imageUrl})`,
      }}
    >
      <div className="text-container">
        <button className="add-to-cart-button" onClick={() => addItem(item)}>
          add to cart
        </button>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CategoryItem);
