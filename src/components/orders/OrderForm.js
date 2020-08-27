import React, { PureComponent } from "react";
import { connect } from "react-redux";

class OrderForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      orderForm: {
        recipient: "",
        product: "",
        quantity: "",
        subtotal: "",
        totalamount: "",
      },
    };
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { productForm } = this.state;
  //   const { productName, category, price, stock, status } = productForm;
  //   const { addProduct, products } = this.props;

  //   const productExist = products.find((product) => product.name === name);

  //   if (!productExist) {
  //     addProduct({
  //       categoryName,
  //       category,
  //       status,
  //       price,
  //       stock,
  //     });
  //   }

  //   this.setState({
  //     productForm: {
  //       productName: "",
  //       category: "",
  //       status: "",
  //       price: "",
  //       stock: "",
  //     },
  //   });
  // };

  // handleChange = (e) => {
  //   const { id, value } = e.target;
  //   const { productForm } = this.state;

  //   this.setState({
  //     productForm: {
  //       ...productForm,
  //       [id]: value,
  //     },
  //   });
  // };

  render() {
    const { orderForm } = this.state;
    const { recipient, product, quantity, subtotal, totalamount } = orderForm;

    return (
      <div className="myContainer">
        <div className="mb-3">
          <form onSubmit={this.handleSubmit}>
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
              <div className="row form-group">
              <div className="col">
                <input
                  id="product"
                  type="text"
                  className="form-control"
                  placeholder="Product"
                  // value={userName}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col">
                <input
                  id="quantity"
                  type="email"
                  className="form-control"
                  placeholder="Quantity"
                  // value={email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              </div>
              <div className="row form-group">
              <div className="col">
                <input
                  id="subtotal"
                  type="phone"
                  className="form-control"
                  placeholder="Subtotal"
                  // value={phone}
                  onChange={this.handleChange}
                  required
                />
              </div>
              </div>
              <div className="row form-group">
              <div className="col">
                <input
                  id="totalamount"
                  type="phone"
                  className="form-control"
                  placeholder="Total Amount"
                  // value={phone}
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

// const mapStateToProps = ({ users }) => ({ users });

// const mapActionToProps = (dispatch) => {
//   return {
//     addUser: (payload) =>
//       dispatch({
//         type: "ADD_USER",
//         payload,
//       }),
//   };
// };

export default OrderForm;
