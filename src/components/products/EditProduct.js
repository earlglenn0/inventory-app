import React, { PureComponent } from "react";

class EditProduct extends PureComponent {
  handleUpdate = (e) => {
    e.preventDefault();

    const newProductName = this.getProductName.value;
    const newPrice = this.getPrice.value;
    const newStock = this.getStock.value;
    const newStatus = this.getStatus.value;

    const {
      product: { productId },
      dispatch,
    } = this.props;

    const data = {
      newProductName,
      newPrice,
      newStock,
      newStatus,
    };

    dispatch({
      type: "UPDATE_PRODUCT",
      productId,
      data,
    });
  };

  render() {
    const { product } = this.props;
    const { productName, price, stock, status } = product;

    return (
      <div className="mb-3">
        <form onSubmit={this.handleUpdate}>
          <div className="row form-group">
            <div className="col">
              <input
                id="productName"
                className="form-control"
                placeholder="Enter Updated Product Name"
                ref={(input) => (this.getProductName = input)}
                defaultValue={productName}
                required
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col">
              <input
                id="price"
                className="form-control"
                placeholder="Price"
                ref={(input) => (this.getPrice = input)}
                defaultValue={price}
                required
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col">
              <input
                id="stock"
                className="form-control"
                placeholder="Stock"
                ref={(input) => (this.getStock = input)}
                defaultValue={stock}
                required
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col">
              <input
                id="status"
                className="form-control"
                placeholder="Status"
                ref={(input) => (this.getStatus = input)}
                defaultValue={status}
                required
              />
            </div>
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    );
  }
}

export default EditProduct;
