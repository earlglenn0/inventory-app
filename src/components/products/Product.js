import React from "react";

import ProductForm from "./ProductForm";
import AllProducts from "./AllProducts";

const Product = () => {
  return (
    <div className="container">
      <AllProducts />
      <ProductForm />
    </div>
  );
};

export default Product;
