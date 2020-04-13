import React from "react";
import "./category-directory.scss";
import CategoryItem from "../category-item/category-item.component";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectItemsInSection } from "../../redux/directory/directory.selector";

const CategoryDirectory = ({ category, section }) => (
  <div className="category-directory-container">
    <h1>{category}</h1>
    <div className="category-directory-items">
      {section[0].items.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, props) =>
  createStructuredSelector({
    section: selectItemsInSection(props.category),
  });

export default connect(mapStateToProps)(CategoryDirectory);
