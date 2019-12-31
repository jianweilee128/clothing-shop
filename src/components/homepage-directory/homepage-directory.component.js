import React from "react";
import "./homepage-directory.scss";
import menPreview from "../../resources/showcase/men-section.jpg";
import womenPreview from "../../resources/showcase/women-section.jpg";

import MenuItem from "../menu-item/menu-item.component";

const HomePageDirectory = () => (
  <div className="preview-container">
    <div className="description-container">
      <h1>We provide the best</h1>
    </div>
    <div className="category-container">
      <MenuItem
        className="men-container"
        category="MEN"
        imageUrl={menPreview}
      />
      <MenuItem
        className="women-container"
        category="WOMEN"
        imageUrl={womenPreview}
      />
    </div>
  </div>
);

export default HomePageDirectory;
