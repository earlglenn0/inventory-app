import React from "react";

const Category = ({ category, dispatch }) => {
  const { categoryId, categoryName, status } = category;

  return (
    <div>
      <table className="table table-bordered">
      <thead>
    <tr>
      <th scope="col">Category Name</th>
      <th scope="col">Status</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
          <tr>
            <td>{categoryName}</td>
            <td>{status}</td>
            <td>
          <button
            className="mx-2 text-success"
            onClick={() =>
              dispatch({
                type: "EDIT_CATEGORY",
                payload: categoryId,
              })
            }
          >
            Edit
          </button>
          <button
            className="mx-2 text-danger"
            onClick={() =>
              dispatch({
                type: "DELETE_CATEGORY",
                payload: categoryId,
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

export default Category;
