import React from "react";
import NavigationBar from "../../components/navigation-bar/navigation-bar.component";
import HomePageDirectory from "../../components/homepage-directory/homepage-directory.component";
import "./homepage.scss";

import { useAuth0 } from "../../react-auth0-spa";

const HomePage = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <React.Fragment>
      <div className="navigation-bar">
        <NavigationBar />
      </div>
      <div className="homepage-directory">
        <HomePageDirectory />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
