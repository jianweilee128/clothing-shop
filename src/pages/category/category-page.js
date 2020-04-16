import React from "react";
import CategoryDirectory from "../../components/category-directory/category-directory.component";

const CategoryPage = ({ match }) => {
  return (
    <React.Fragment>
      <CategoryDirectory category={match.params.category} />
    </React.Fragment>
  );
};

export default CategoryPage;
