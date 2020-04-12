import React from "react";
import "./category-item.scss";
import LinkButton from "../link-button/link-button.component";

const CategoryItem = ({ imageUrl }) => (
  <div className="item-container">
    <div
      className="background-container"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="text-container">
        <LinkButton description={"add to cart"} />
      </div>
    </div>
  </div>
);

export default CategoryItem;
