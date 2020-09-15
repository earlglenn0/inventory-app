import React from 'react'
import Category from './Category'


const AllCategories = (props) => {
  return (
    <tbody>
      {
        props.categories.map(category => (
          <Category
            category={category}
            handleCategoryDelete={props.handleCategoryDelete}
            handleCategoryEdit={props.handleCategoryEdit}
            cancelUpdate={props.cancelUpdate}
            updateCategory={props.updateCategory}
            handleInputChange={props.handleInputChange}
            updatedCategory={props.updatedCategory}
            handleCategorySave={props.handleCategorySave}
          />
        ))
      }
    </tbody>
  )
}

export default AllCategories
