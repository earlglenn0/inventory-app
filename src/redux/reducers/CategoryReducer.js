const initialState = [
   {
     categoryId: "2",
     categoryName: "Food",
     status: "Active",
   },
 ];

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CATEGORY":
         return [
           ...state,
           {
             id: new Date().toISOString(),
             ...action.payload,
           },
         ];
         case "EDIT_CATEGORY":
            return [
              ...state.map((category) =>
                category.categoryId === action.payload
                  ? {
                      ...category,
                      editing: !category.editing,
                    }
                  : category
              ),
            ];
      
          case "DELETE_CATEGORY":
            return [...state.filter((category) => category.categoryId !== action.payload)];
      
          case "UPDATE_CATEGORY":
            return state.map((category) => {
              if (category.categoryId === action.categoryId) {
                const { newCategoryName, newStatus } = action.data;
                return {
                  ...category,
                  categoryName: newCategoryName,
                  status: newStatus,
                  editing: !category.editing,
                };
              } else return category;
            });
      
          default:
            return state;
     }
  };
  export default CategoryReducer;