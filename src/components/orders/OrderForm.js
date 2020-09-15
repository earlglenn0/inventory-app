import React, { PureComponent } from "react";
import { connect } from "react-redux";

class OrderForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      orderForm: {
        recipient: "",
        date: "",
        totalamount: "",
        status: "",
      },
    };
  }

  orderHandleChange = (e) => {
    const { id, value } = e.target;
    const { orderForm } = this.state;

    this.setState({
      orderForm: {
        ...orderForm,
        [id]: value,
      },
    });
  };

  orderHandleSave = (e) => {
    e.preventDefault();
    const {
      orderForm: { recipient, date, totalamount, status },
    } = this.state;
    const { addorder } = this.props;

    addorder({
      recipient,
      date,
      totalamount,
      editing: false,
    });

    this.setState({
      orderForm: {
        recipient,
        date,
        totalamount,
        status,
      },
    });
  };

  render() {
    const { products } = this.props;
    const { orderForm } = this.state;
    const { recipient, date, totalamount } = orderForm;

    return (
      <div className="myContainer">
      <div className="mb-3">
        <form onSubmit={this.handleSubmit}>
        <h4>New Order</h4>
          <div className="row form-group">
            <div className="col">
              <input
                id="recipient"
                type="text"
                className="form-control"
                placeholder="Recipient"
                // value={name}
                onChange={this.handleChange}
                required
              />
            </div>
            </div>
            {/* <div className="row form-group">
          <div className="col">
              <select
                id="productName"
                onChange={this.orderHandleChange}
                className="form-control col-md-12"
              >
                <option selected disabled>
                  Select Product
                </option>
                {products.map(({ productId, productName }) => {
                  return (
                    <option key={productId} value={productName}>
                      {productName}
                    </option>
                  );
                })}
              </select>
            </div>
            </div> */}
            <div className="row form-group">
            <div className="col">
              <input
                id="totalamount"
                type="text"
                className="form-control"
                placeholder="Total Amount"
                // value={name}
                onChange={this.handleChange}
                required
              />
            </div>
            </div>
          <center><button className="btn btn-danger">Add</button></center>
        </form>
      </div>
      </div>
    );
  }
}

const mapStateToProps = ({ orders, products }) => {
  return {
    orders,
    products,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    addorder: (payload) =>
      dispatch({
        type: "ADD_ORDER",
        payload,
      }),
  };
};

export default connect(mapStateToProps, mapActionToProps)(OrderForm)