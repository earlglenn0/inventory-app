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

  handleSubmit = (e) => {
    e.preventDefault();
    const { categoryForm } = this.state;
    const { categoryName, status } = categoryForm;
    const { addCategory, categories } = this.props;

    const categoryExist = categories.find((category) => category.categoryName === categoryName);

    if (!categoryExist) {
      addCategory({
        categoryName,
        status,
        editing: false,
      });
    }

    this.setState({
      categoryForm: {
        categoryName: "",
        status: "",
      },
    });
  };

  handleChange = (e) => {
    const { id, value } = e.target;
    const { categoryForm } = this.state;

    this.setState({
      categoryForm: {
        ...categoryForm,
        [id]: value,
      },
    });
  };

  render() {
    const { categoryForm } = this.state;
    const { categoryName, status } = categoryForm;

    return (
      <div className="myContainer">
      <div className="mb-3">
        <form onSubmit={this.handleSubmit}>
          <h4>New Category</h4>
          <div className="row form-group">
            <div className="col">
              <input
                id="categoryName"
                type="text"
                className="form-control"
                placeholder="Category Name"
                value={categoryName}
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
                <option disabled>
                  Status
                </option>
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

const mapStateToProps = ({ categories }) => ({ categories });

const mapActionToProps = (dispatch) => {
  return {
    addCategory: (payload) =>
      dispatch({
        type: "ADD_CATEGORY",
        payload,
      }),
  };
};

export default connect(mapStateToProps, mapActionToProps)(CategoryForm)