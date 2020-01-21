import React from "react";
import "./link-button.scss";

import { Link } from "react-router-dom";

const LinkButton = ({ description }) => (
  <Link className="btn-link" to={`/${description}`}>
    {description}
  </Link>
);

export default LinkButton;
