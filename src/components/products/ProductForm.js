import React, { PureComponent } from "react";
import { connect } from "react-redux";

class ProductForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      productForm: {
        productName: "",
        category: "",
        status: "",
        price: "",
        stock: "",
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
    const { productForm } = this.state;
    const { productName, category, price, stock, status } = productForm;

    return (
      <div className="myContainer">
      <div className="mb-3">
        <form onSubmit={this.handleSubmit}>
          <div className="row form-group">
            <div className="col">
              <input
                id="productName"
                type="text"
                className="form-control"
                placeholder="Product Name"
                // value={name}
                onChange={this.handleChange}
                required
              />
            </div>
            </div>
            <div className="row form-group">
            <div className="col">
              <input
                id="category"
                type="text"
                className="form-control"
                placeholder="Category"
                // value={userName}
                onChange={this.handleChange}
                required
              />
            </div>
            </div>
            <div className="row form-group">
            <div className="col">
              <input
                id="stock"
                type="email"
                className="form-control"
                placeholder="Stock"
                // value={email}
                onChange={this.handleChange}
                required
              />
            </div>
            </div>
          <div className="row form-group">
            <div className="col">
              <input
                id="status"
                type="phone"
                className="form-control"
                placeholder="Status"
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

export default ProductForm;
