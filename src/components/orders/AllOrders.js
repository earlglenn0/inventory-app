import React from "react";

const AllOrders = () => {
  return (
    <div>
      <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Recipient</th>
      <th scope="col">Date</th>
      <th scope="col">Total Amount</th>
      <th scope="col">Actions</th>
      <th scope="col">Print</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>Mark</td>
      <td>Otto</td>
      <td><button>Edit</button></td>
      <td><button>Print Receipt</button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td><button>Edit</button></td>
      <td><button>Print Receipt</button></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td><button>Edit</button></td>
      <td><button>Print Receipt</button></td>
    </tr>
  </tbody>
</table>
    </div>
  );
};

export default AllOrders;
