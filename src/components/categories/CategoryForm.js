import React, { PureComponent } from "react";
import { connect } from "react-redux";

class CategoryForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      categoryForm: {
        categoryName: "",
        status: "",
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
    const { categoryForm } = this.state;
    const { categoryName, status } = categoryForm;

    return (
      <div className="myContainer">
      <div className="mb-3">
        <form onSubmit={this.handleSubmit}>
          <div className="row form-group">
            <div className="col">
              <input
                id="categoryName"
                type="text"
                className="form-control"
                placeholder="Category Name"
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
                // onChange={this.commentHandleChange}
                className="form-control mb-3 col-md-12"
              >
                <option selected disabled>
                  Status
                </option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                ))}
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

export default CategoryForm;
