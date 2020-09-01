import React from "react";
import { connect } from "react-redux";

import EditOrder from "./EditOrder";
import Order from "./Order";

const AllOrders = ({ orders, dispatch }) => {
  return (
    <div>
      {orders.length > 0 ? (
        orders.map((order) => {
          const { orderId, editing } = order;
        
          return (
            <div key={orderId}>
              {editing ? (
                <EditOrder key={orderId} order={order} dispatch={dispatch} />
              ) : (
                <Order key={orderId} order={order} dispatch={dispatch} />
              )}
            </div>
          );
        })
      ) : (
        <h6 className="card-subtitle mb-2">
          <strong>
            <em>No Orders Found</em>
          </strong>
        </h6>
      )}
    </div>
  );
};

const mapStateToProps = ({ orders }) => ({ orders });

export default connect(mapStateToProps)(AllOrders);
