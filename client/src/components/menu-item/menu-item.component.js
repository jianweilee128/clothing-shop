import React from "react";
import "./menu-item.scss";

import DirectoryButton from "../directory-button/directory-button.component";

const MenuItem = ({ routeName, title, imageUrl }) => (
  <div className="menu-container">
    <div
      className="background-container"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="text-container">
        <DirectoryButton description={title} routeName={routeName} />
      </div>
    </div>
  </div>
);

export default MenuItem;
