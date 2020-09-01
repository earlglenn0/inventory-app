const initialState = [
    {
      orderId: "3",
      recipient: "Masvidal",
      date: "9/1/2020",
      totalamount: "230"
    },
  ];
 
 const OrderReducer = (state = initialState, action) => {
     switch (action.type) {
       case "ADD_ORDER":
          return [
            ...state,
            {
              id: new Date().toISOString(),
              ...action.payload,
            },
          ];
          case "EDIT_ORDER":
             return [
               ...state.map((order) =>
                 order.orderId === action.payload
                   ? {
                       ...order,
                       editing: !order.editing,
                     }
                   : order
               ),
             ];
       
           case "DELETE_ORDER":
             return [...state.filter((order) => order.orderId !== action.payload)];
       
           case "UPDATE_ORDER":
             return state.map((order) => {
               if (order.orderId === action.orderId) {
                 const { newRecipient, newDate, newTotalAmount } = action.data;
                 return {
                   ...order,
                   recipient: newRecipient,
                   date: newDate,
                   totalamount: newTotalAmount,
                   editing: !order.editing,
                 };
               } else return order;
             });
       
           default:
             return state;
      }
   };
   export default OrderReducer;