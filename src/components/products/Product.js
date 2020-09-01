import React from "react";

const Product = ({ product, dispatch }) => {
  const { productId, productName, price, stock, status } = product;

  return (
    <div>
      <table className="table table-bordered">
      <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Stock</th>
      <th scope="col">Status</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
          <tr>
            <td>{productName}</td>
            <td>{price}</td>
            <td>{stock}</td>
            <td>{status}</td>
            <td>
          <button
            className="mx-2 text-success"
            onClick={() =>
              dispatch({
                type: "EDIT_PRODUCT",
                payload: productId,
              })
            }
          >
            Edit
          </button>
          <button
            className="mx-2 text-danger"
            onClick={() =>
              dispatch({
                type: "DELETE_PRODUCT",
                payload: productId,
              })
            }
          >
            Delete
          </button>
          </td>
          </tr>
        </tbody>
        </table>
      </div>
  );
};

export default Product;
