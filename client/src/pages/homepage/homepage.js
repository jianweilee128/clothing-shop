import React from "react";
import HomePageDirectory from "../../components/homepage-directory/homepage-directory.component";
import "./homepage.scss";

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="homepage-directory">
        <HomePageDirectory />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
