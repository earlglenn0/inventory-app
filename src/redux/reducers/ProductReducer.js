const initialState = [
    {
      productId: "1",
      productName: "Chippy",
      categoryName: 'Food',
      price: "8",
      stock: "12",
      status: "available",
    },
  ];
 
 const ProductReducer = (state = initialState, action) => {
     switch (action.type) {
       case "ADD_PRODUCT":
          return [
            ...state,
            {
              id: new Date().toISOString(),
              ...action.payload,
            },
            console.log(action.payload)
          ];
          case "EDIT_PRODUCT":
             return [
               ...state.map((product) =>
                 product.productId === action.payload
                   ? {
                       ...product,
                       editing: !product.editing,
                     }
                   : product
               ),
             ];
       
           case "DELETE_PRODUCT":
             return [...state.filter((product) => product.productId !== action.payload)];
       
           case "UPDATE_PRODUCT":
             return state.map((product) => {
               if (product.productId === action.productId) {
                 const { newProductName, newStatus } = action.data;
                 return {
                   ...product,
                   productName: newProductName,
                   status: newStatus,
                   editing: !product.editing,
                 };
               } else return product;
             });
       
           default:
             return state;
      }
   };
   export default ProductReducer;