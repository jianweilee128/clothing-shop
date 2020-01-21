import React from "react";
import "./directory-button.scss";

import { Link } from "react-router-dom";

const DirectoryButton = ({ description }) => (
  <Link className="btn-link" to={`/${description}`}>
    {description}
  </Link>
);

export default DirectoryButton;
