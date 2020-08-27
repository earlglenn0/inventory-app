import React from "react";

const AllCategories = () => {
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
      <td>0</td>
      <td>Mark</td>
      <td><button>Edit</button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td><button>Edit</button></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry the Bird</td>
      <td><button>Edit</button></td>
    </tr>
  </tbody>
</table>
    </div>
  );
};

export default AllCategories;
