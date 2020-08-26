import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import CategoryReducer from './redux/reducers/CategoryReducer'
import CategorySaga from './redux/sagas/CategorySaga'
import "bootstrap/dist/css/bootstrap.min.css";
import rootSaga from './redux/sagas/rootSaga';
import reducer from './redux/reducers';
import { logger } from 'redux-logger';

const sagaMiddleware = createSagaMiddleware()



const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </Provider>, 
  
  document.getElementById('root')
)

