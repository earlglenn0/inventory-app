import React, { PureComponent } from "react";
import { connect } from "react-redux";

class ProductForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      productForm: {
        productName: "",
        categoryName: "",
        stock: "",
        price: "",
        status: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { productForm } = this.state;
    const { productName, categoryName, price, stock, status } = productForm;
    const { addProduct, products } = this.props;

    const productExist = products.find((product) => product.productName === productName);

    if (!productExist) {
      addProduct({
        productName,
        categoryName,
        stock,
        price,
        status,
        editing: false,
      });
    }

    this.setState({
      productForm: {
        productName: "",
        categoryName: "",
        stock: "",
        price: "",
        status: "",
      },
    });
  };

  handleChange = (e) => {
    const { id, value } = e.target;
    const { productForm } = this.state;

    this.setState({
      productForm: {
        ...productForm,
        [id]: value,
      },
    });
  };

  render() {
    const { categories } = this.props;
    const { productForm } = this.state;
    const { productName, categoryName, price, stock, status } = productForm;

    return (
      <div className="myContainer">
      <div className="mb-3">
        <form onSubmit={this.handleSubmit}>
        <h4>New Product</h4>
        <div className="row form-group">
            <div className="col">
              <input
                id="productName"
                type="text"
                className="form-control"
                placeholder="Product Name"
                value={productName}
                onChange={this.handleChange}
                required
              />
            </div>
            </div>
          <div className="row form-group">
          <div className="col">
              <select
                id="categoryName"
                onChange={this.handleChange}
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
                value={price}
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
                value={stock}
                onChange={this.handleChange}
                required
              />
            </div>
            </div>
            <div className="row form-group">
            <div className="col">
            <select
                id="status"
                onChange={this.handleChange}
                className="form-control mb-3 col-md-12"
              >
                
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
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