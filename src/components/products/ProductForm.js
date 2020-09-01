import React, { PureComponent } from "react";
import { connect } from "react-redux";

class ProductForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      productForm: {
        productName: "",
        price: "",
        stock: "",
        status: "",
      },
    };
  }

  ProductHandleChange = (e) => {
    const { id, value } = e.target;
    const { productForm } = this.state;

    this.setState({
      productForm: {
        ...productForm,
        [id]: value,
      },
    });
  };

  ProductHandleSave = (e) => {
    e.preventDefault();
    const {
      productForm: { productName, price, stock, status },
    } = this.state;
    const { addProduct } = this.props;

    addProduct({
      productName,
      price,
      stock,
      status,
      editing: false,
    });

    this.setState({
      productForm: {
        productName,
        price,
        stock,
        status,
      },
    });
  };

  render() {
    const { categories } = this.props;
    const { productForm } = this.state;
    const { productName, price, stock, status } = productForm;

    return (
      <div className="myContainer">
      <div className="mb-3">
        <form onSubmit={this.handleSubmit}>
        <h4>New Product</h4>
          <div className="row form-group">
          <div className="col">
              <select
                id="categoryName"
                onChange={this.productHandleChange}
                className="form-control col-md-12"
              >
                <option selected disabled>
                  Select Category
                </option>
                {categories.map(({ categoryId, categoryName }) => {
                  return (
                    <option key={categoryId} value={categoryName}>
                      {categoryName}
                    </option>
                  );
                })}
              </select>
            </div>
            </div>
            <div className="row form-group">
            <div className="col">
              <input
                id="price"
                type="text"
                className="form-control"
                placeholder="Price"
                // value={name}
                onChange={this.handleChange}
                required
              />
            </div>
            </div>
            <div className="row form-group">
            <div className="col">
              <input
                id="stock"
                type="text"
                className="form-control"
                placeholder="Stock"
                // value={name}
                onChange={this.handleChange}
                required
              />
            </div>
            </div>
            <div className="row form-group">
            <div className="col">
            <select
                id="status"
                onChange={this.commentHandleChange}
                className="form-control mb-3 col-md-12"
              >
                
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                ))
              </select>
            </div>
          </div>
          <center><button className="btn btn-danger">Add</button></center>
        </form>
      </div>
      </div>
    );
  }
}

const mapStateToProps = ({ products, categories }) => {
  return {
    products,
    categories,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    addProduct: (payload) =>
      dispatch({
        type: "ADD_PRODUCT",
        payload,
      }),
  };
};

export default connect(mapStateToProps, mapActionToProps)(ProductForm)