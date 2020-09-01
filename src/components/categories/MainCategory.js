import React from "react";

import CategoryForm from "./CategoryForm";
import AllCategories from "./AllCategories";

const MainCategory = () => {
  return (
    <div className="container">
      <AllCategories />
      <CategoryForm />
    </div>
  );
};

export default MainCategory;
