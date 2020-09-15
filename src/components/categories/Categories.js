import React from "react";
import { connect } from "react-redux"
import CategoryForm from "./CategoryForm";
import AllCategories from "./AllCategories";

import { 
  GET_CATEGORIES, 
  POST_CATEGORIES, 
  DELETE_CATEGORIES, 
  EDIT_CATEGORY, 
  CANCEL_CATEGORY_UPDATE, 
  PUT_CATEGORY } 
  from '../../redux/actions/CategoryActions'

class Categories extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      categoryForm: {
        categoryName: '',
        status: ''
      },
      searchField: '',
      updatedCategory: ''
    }
  }

  componentDidMount() {
    this.props.getCategories()
  }

  handleInputChange = e => {
    const { id, value } = e.target
    const { categoryForm } = this.state

    this.setState({
      categoryForm: {
        ...categoryForm,
        [id]: value
      }
    })
  }

  handleCategorySave = e => {
    e.preventDefault();
    const {
      categoryForm: {
        categoryName,
        status
      }
    } = this.state
    const { addCategory } = this.props

    addCategory({
      categoryName,
      status
    })

    this.setState({
      categoryForm: {
        categoryName: '',
        status: ''
      }
    })
  }

  handleCategoryDelete = category => {
    this.props.deleteCategory(category.id)
  }

  handleCategoryEdit = category => {
    this.props.editCategory(category.id)
    console.log('edit', category)
  }

  handleSearch = e => {
    this.setState({ searchField: e.target.value })
  }

  updateCategory = category => {
    this.props.updateCategory(category)
  }

  cancelUpdate = category => {
    this.props.cancelUpdate(category.id)
  }



  render() {
    const { categoryForm } = this.state
    const { categories } = this.props

    console.log('categories here', this.props)
    return (
    <div className="container">
      
      <table className="table table-bordered">
        <thead>
          <tr>
          <th scope="col">Category Name</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
          </tr>
        </thead>
      <AllCategories 
      categories={categories}
      handleCategoryDelete={this.handleCategoryDelete}
      handleCategoryEdit={this.handleCategoryEdit}
      updateCategory={this.updateCategory}
      cancelUpdate={this.cancelUpdate}
      handleInputChange={this.handleInputChange}
      updatedCategory={this.state.updatedCategory}
      handleCategorySave={this.handleCategorySave}/>
      </table>
      <hr />
      <CategoryForm 
      handleInputChange={this.handleInputChange}
      categoryForm={categoryForm}
      handleCategorySave={this.handleCategorySave}/>
    </div>
  )
}
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => {
      dispatch({ type: GET_CATEGORIES })
    },
    addCategory: (category) => {
      dispatch({ type: POST_CATEGORIES, value: category })
    },
    deleteCategory: (id) => {
      dispatch({ type: DELETE_CATEGORIES, value: id})
    },
    editCategory: (id) => {
      dispatch({ type: EDIT_CATEGORY, value: id })
    },
    updateCategory: (category) => {
      console.log('dispatch an update', category)
      dispatch({ type: PUT_CATEGORY, value: category})
    },
    cancelUpdate: (id) => {
      dispatch({ type: CANCEL_CATEGORY_UPDATE, value: id })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Categories)
