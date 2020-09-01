import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import CategoryReducer from './redux/reducers/CategoryReducer'
import ProductReducer from './redux/reducers/ProductReducer'
import OrderReducer from './redux/reducers/OrderReducer'
import CategorySaga from './redux/sagas/CategorySaga'
import ProductSaga from './redux/sagas/ProductSaga'
import OrderSaga from './redux/sagas/OrderSaga'
import "bootstrap/dist/css/bootstrap.min.css";
import rootSaga from './redux/sagas/rootSaga';
import { logger } from 'redux-logger';
import {addCategory} from './redux/sagas/CategorySaga'
import {addProduct} from './redux/sagas/ProductSaga'
import {addOrder} from './redux/sagas/OrderSaga'

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  categories: CategoryReducer,
  products: ProductReducer,
  orders: OrderReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(addCategory)
sagaMiddleware.run(CategorySaga)
sagaMiddleware.run(addProduct)
sagaMiddleware.run(ProductSaga)
sagaMiddleware.run(addOrder)
sagaMiddleware.run(OrderSaga)

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </Provider>, 
  
  document.getElementById('root')
)

