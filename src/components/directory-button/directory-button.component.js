import React from "react";
import "./directory-button.scss";

import { Link } from "react-router-dom";

const DirectoryButton = ({ description, categoryId }) => (
  <Link className="btn-link" to={`/${categoryId}`}>
    {description}
  </Link>
);

export default DirectoryButton;
