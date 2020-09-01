import React from "react";
import { connect } from "react-redux";

import EditCategory from "./EditCategory";
import Category from "./Category";

const AllCategories = ({ categories, dispatch }) => {
  return (
    <div>
      {categories.length > 0 ? (
        categories.map((category) => {
          const { categoryId, editing } = category;
        
          return (
            <div key={categoryId}>
              {editing ? (
                <EditCategory key={categoryId} category={category} dispatch={dispatch} />
              ) : (
                <Category key={categoryId} category={category} dispatch={dispatch} />
              )}
            </div>
          );
        })
      ) : (
        <h6 className="card-subtitle mb-2">
          <strong>
            <em>No Categories Found</em>
          </strong>
        </h6>
      )}
    </div>
  );
};

const mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps)(AllCategories);
