import React from "react";
import "./category-page.scss";
import NavigationBar from "../../components/navigation-bar/navigation-bar.component";
import CategoryDirectory from "../../components/category-directory/category-directory.component";
import { useAuth0 } from "../../react-auth0-spa";

const CategoryPage = ({ match }) => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="category-container">
      <NavigationBar />
      <CategoryDirectory category={match.params.category} />
    </div>
  );
};

export default CategoryPage;
