import React from "react";
import "./directory-button.scss";

import { Link } from "react-router-dom";

const DirectoryButton = ({ description, routeName }) => (
  <Link className="btn-directory" to={`/category/${routeName}`}>
    {description}
  </Link>
);

export default DirectoryButton;
