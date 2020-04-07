import React from "react";
import "./homepage-directory.scss";
import menPreview from "../../resources/showcase/men-section.jpg";
import menTops from "../../resources/showcase/men-tops.jpg";
import menShorts from "../../resources/showcase/men-shorts.jpg";
import menPants from "../../resources/showcase/men-pants.jpg";

import womenPreview from "../../resources/showcase/women-section.jpg";
import womenTops from "../../resources/showcase/women-tops.jpg";
import womenDresses from "../../resources/showcase/women-dresses.jpg";
import womenSkirt from "../../resources/showcase/women-skirt.jpg";
import MenuItem from "../menu-item/menu-item.component";

const HomePageDirectory = () => (
  <div className="preview-container">
    <div className="men-container">
      <h1 className="title">men</h1>
      <MenuItem
        description="new arrivals"
        imageUrl={menPreview}
        width="100%"
        height="200px"
      />
      <MenuItem
        description="tops"
        imageUrl={menTops}
        width="100%"
        height="200px"
      />
      <div className="bottom-menu">
        <MenuItem
          description="pants"
          imageUrl={menPants}
          width="45%"
          height="200px"
        />
        <MenuItem
          description="shorts"
          imageUrl={menShorts}
          width="45%"
          height="200px"
        />
      </div>
    </div>
    <div className="women-container">
      <h1 className="title">women</h1>
      <MenuItem
        description="new arrivals"
        imageUrl={womenPreview}
        width="100%"
        height="200px"
      />
      <MenuItem
        description="tops"
        imageUrl={womenTops}
        width="100%"
        height="200px"
      />
      <div className="bottom-menu">
        <MenuItem
          description="dresses"
          imageUrl={womenDresses}
          width="45%"
          height="200px"
        />
        <MenuItem
          description="skirts"
          imageUrl={womenSkirt}
          width="45%"
          height="200px"
        />
      </div>
    </div>
  </div>
);

export default HomePageDirectory;
