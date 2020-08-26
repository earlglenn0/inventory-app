import React from "react";

const AllProducts = () => {
  return (
    <div>
      <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Category Name</th>
      <th scope="col">Status</th>
      <th scope="col">Price</th>
      <th scope="col">Stock</th>
      <th scope="col">Status</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
      <td><button>Edit</button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Otto</td>
      <td><button>Edit</button></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><button>Edit</button></td>
    </tr>
  </tbody>
</table>
    </div>
  );
};

export default AllProducts;