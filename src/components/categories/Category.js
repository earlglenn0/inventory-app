import React from "react";

const Category = (props) => {
  console.log('@categories', props.category)
  return (
    <>
      {
       
        <tr>
          <th>{props.category.categoryName}</th>
          <th>{props.category.status}</th>
          <th>

              <button
                color='default'
                onClick={() => props.handleCategoryEdit(props.category)}
              >Edit</button>
              <button
                color='secondary'
                onClick={() => props.handleCategoryDelete(props.category)}
              >
                Delete
              </button>
          </th>
        </tr>
      }
    </>
  )
}

export default Category
