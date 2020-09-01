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

  categoryHandleChange = (e) => {
    const { id, value } = e.target;
    const { categoryForm } = this.state;

    this.setState({
      categoryForm: {
        ...categoryForm,
        [id]: value,
      },
    });
  };

  categoryHandleSave = (e) => {
    e.preventDefault();
    const {
      categoryForm: { categoryName, status },
    } = this.state;
    const { addCategory } = this.props;

    addCategory({
      categoryName,
      status,
      editing: false,
    });

    this.setState({
      categoryForm: {
        categoryName,
        status,
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
                onChange={this.commentHandleChange}
                className="form-control mb-3 col-md-12"
              >
                <option selected disabled>
                  Status
                </option>
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