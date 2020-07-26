import React from "react";
import "./menu-item.scss";

import { Link } from "react-router-dom";

const MenuItem = ({ routeName, title, imageUrl }) => (
  <div className="menu-container">
    <div
      className="background-container"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <Link className="btn-directory" to={`/category/${routeName}`}>
        {title}
      </Link>
    </div>
  </div>
);

export default MenuItem;
