import React from "react";

const Order = ({ order, dispatch }) => {
  const { orderId, recipient, date, totalamount } = order;

  return (
    <div>
      <table className="table table-bordered">
      <thead>
    <tr>
      <th scope="col">Recipient</th>
      <th scope="col">Date</th>
      <th scope="col">Total Amount</th>
      <th scope="col">Actions</th>
      <th scope="col">Receipt</th>
    </tr>
  </thead>
  <tbody>
          <tr>
            <td>{recipient}</td>
            <td>{date}</td>
            <td>{totalamount}</td>
            <td>
          <button
            className="mx-2 text-success"
            onClick={() =>
              dispatch({
                type: "EDIT_ORDER",
                payload: orderId,
              })
            }
          >
            Edit
          </button>
          <button
            className="mx-2 text-danger"
            onClick={() =>
              dispatch({
                type: "DELETE_ORDER",
                payload: orderId,
              })
            }
          >
            Delete
          </button>
          </td>
          <td>
            <button>
              Print Receipt
            </button>
          </td>
          </tr>
        </tbody>
        </table>
      </div>
  );
};

export default Order;
