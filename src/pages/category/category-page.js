import React from "react";
import "./category-page.scss";
import NavigationBar from "../../components/navigation-bar/navigation-bar.component";
import CategoryDirectory from "../../components/category-directory/category-directory.component";

class CategoryPage extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div className="category-container">
        <NavigationBar />
        <CategoryDirectory category={match.params.category} />
      </div>
    );
  }
}

export default CategoryPage;
