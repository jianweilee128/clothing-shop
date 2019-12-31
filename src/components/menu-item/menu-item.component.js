import React from "react";
import "./menu-item.scss";

import LinkButton from "../link-button/link-button.component";
const MenuItem = ({ category, imageUrl }) => (
  <div className="menu-container">
    <div
      className="background-container"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    >
      <div className="text-container">
        <h1>{category}</h1>
        <LinkButton description="ENTER" />
      </div>
    </div>
  </div>
);

export default MenuItem;
