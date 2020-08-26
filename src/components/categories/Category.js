import React from "react";

import CategoryForm from "./CategoryForm";
import AllCategories from "./AllCategories";

const Category = () => {
  return (
    <div className="container">
      <AllCategories />
      <CategoryForm />
    </div>
  );
};

export default Category;
