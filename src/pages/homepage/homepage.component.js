import React from "react";
import NavigationBar from "../../components/navigation-bar/navigation-bar.component";
import HomePageDirectory from "../../components/homepage-directory/homepage-directory.component";
import "./homepage.scss";

const HomePage = () => (
  <React.Fragment>
    <div className="navigation-bar">
      <NavigationBar />
    </div>
    <div className="homepage-directory">
      <HomePageDirectory />
    </div>
  </React.Fragment>
);

export default HomePage;
