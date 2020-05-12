import React from "react";
import "./homepage-directory.scss";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectMenSection,
  selectWomenSection,
} from "../../redux/directory/directory.selector";

import MenuItem from "../menu-item/menu-item.component";

const HomePageDirectory = ({ menSections, womenSections }) => (
  <div className="preview-container">
    <div className="men-container">
      {menSections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
    <div className="women-container">
      {womenSections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  menSections: selectMenSection,
  womenSections: selectWomenSection,
});

export default connect(mapStateToProps)(HomePageDirectory);
