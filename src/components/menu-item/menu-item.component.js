import React from "react";
import "./menu-item.scss";

import DirectoryButton from "../directory-button/directory-button.component";

const MenuItem = ({ description, categoryId, imageUrl, width, height }) => (
  <div className="menu-container" style={{ width: width, height: height }}>
    <div
      className="background-container"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="text-container">
        <DirectoryButton description={description} categoryId={categoryId} />
      </div>
    </div>
  </div>
);

export default MenuItem;
