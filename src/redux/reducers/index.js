import products from './ProductReducer';
import categories from './CategoryReducer'
import orders from './OrderReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  products: products,
  categories: categories,
  orders: orders
});

export default rootReducer;