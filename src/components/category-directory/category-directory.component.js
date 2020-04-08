import React from "react";
import "./category-directory.scss";
import CategoryItem from "../category-item/category-item.component";
import testPreview from "../../resources/men/new-arrivals/black-teal-shirt.jpg";

const CategoryDirectory = ({ category }) => (
  <div className="category-directory-container">
    <h1>{category}</h1>
    <CategoryItem imageUrl={testPreview} />
  </div>
);

export default CategoryDirectory;
