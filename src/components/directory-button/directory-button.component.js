import React from "react";
import "./directory-button.scss";

import { Link } from "react-router-dom";

const DirectoryButton = ({ description, routeName }) => (
  <Link className="btn-directory" to={`/${routeName}`}>
    {description}
  </Link>
);

export default DirectoryButton;
