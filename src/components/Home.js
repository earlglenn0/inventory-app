import React from "react";
import Product from "./products/Product";
import Category from "./categories/Category";
import Order from "./orders/Order";

const Home = () => {
  return (
    <div>
      <p>
          <Product />
          <Category />
          <Order />
      </p>
    </div>
  );
};

export default Home;
