import React from "react";
import "./homepage-directory.scss";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectMenLowerSection,
  selectMenUpperSection,
  selectWomenLowerSection,
  selectWomenUpperSection,
} from "../../redux/directory/directory.selector";

import MenuItem from "../menu-item/menu-item.component";

const HomePageDirectory = ({
  menLowerSections,
  menUpperSections,
  womenLowerSections,
  womenUpperSections,
}) => (
  <div className="preview-container">
    <div className="men-container">
      {menUpperSections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}

      <div className="bottom-menu">
        {menLowerSections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    </div>
    <div className="women-container">
      {womenUpperSections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
      <div className="bottom-menu">
        {womenLowerSections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  menUpperSections: selectMenUpperSection,
  womenUpperSections: selectWomenUpperSection,
  menLowerSections: selectMenLowerSection,
  womenLowerSections: selectWomenLowerSection,
});

export default connect(mapStateToProps)(HomePageDirectory);
