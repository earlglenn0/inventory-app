import React from "react";
import { connect } from "react-redux";

import EditProduct from "./EditProduct";
import Product from "./Product";

const AllProducts = ({ products, dispatch }) => {
  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => {
          const { productId, editing } = product;
        
          return (
            <div key={productId}>
              {editing ? (
                <EditProduct key={productId} product={product} dispatch={dispatch} />
              ) : (
                <Product key={productId} product={product} dispatch={dispatch} />
              )}
            </div>
          );
        })
      ) : (
        <h6 className="card-subtitle mb-2">
          <strong>
            <em>No Products Found</em>
          </strong>
        </h6>
      )}
    </div>
  );
};

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps)(AllProducts);
