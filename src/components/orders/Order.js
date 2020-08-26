import React from "react";

import OrderForm from "./OrderForm";
import AllOrders from "./AllOrders";

const Category = () => {
  return (
    <div className="container">
      <AllOrders />
      <OrderForm />
    </div>
  );
};

export default Category;
