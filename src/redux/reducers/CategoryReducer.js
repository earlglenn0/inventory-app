import { SET_CATEGORIES, SET_EDIT_MODE } from '../actions/CategoryActions'

const CategoryReducer = (state = [], action) => {
  switch(action.type) {
    case SET_CATEGORIES:
      return [...state, action.value]
    case SET_EDIT_MODE: {
      const categories = (state || []).map(x => {
        if(x.id === action.value.id) {
          x.editMode = action.value.editMode
        }
        return {...x}
      })
      return [...categories]
      
    }
    default: return state
  }
}

export default CategoryReducer