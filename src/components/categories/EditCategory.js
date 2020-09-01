import React, { PureComponent } from "react";

class EditCategory extends PureComponent {
  handleUpdate = (e) => {
    e.preventDefault();

    const newCategoryName = this.getCategoryName.value;
    const newStatus = this.getStatus.value;

    const {
      category: { categoryId },
      dispatch,
    } = this.props;

    const data = {
      newCategoryName,
      newStatus,
    };

    dispatch({
      type: "UPDATE_CATEGORY",
      categoryId,
      data,
    });
  };

  render() {
    const { category } = this.props;
    const { categoryName, status } = category;

    return (
      <div className="mb-3">
        <form onSubmit={this.handleUpdate}>
          <div className="row form-group">
            <div className="col">
              <input
                id="categoryName"
                className="form-control"
                placeholder="Enter Category Name"
                ref={(input) => (this.getcategoryName = input)}
                defaultValue={categoryName}
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

export default EditCategory;
