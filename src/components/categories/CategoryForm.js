import React from "react";

const CategoryForm = (props) => {
    return (
      <div className="myContainer">
      <div className="mb-3">
        <form>
          <h4>New Category</h4>
          <div className="row form-group">
            <div className="col">
              <input
                id="categoryName"
                type="text"
                className="form-control"
                placeholder="Category Name"
                value={props.categoryForm.categoryName}
                onChange={props.handleInputChange}
                required
              />
            </div>
            </div>
            <div className="row form-group">
            <div className="col">
              <input
                id="status"
                type="text"
                className="form-control"
                placeholder="Status"
                value={props.categoryForm.status}
                onChange={props.handleInputChange}
                required
              />
            </div>
            </div>
          <center><button className="btn btn-danger" onClick={props.handleCategorySave} >Add</button></center>
        </form>
      </div>
      </div>
    );
  }
  
export default CategoryForm