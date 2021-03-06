import { takeEvery, call, put } from 'redux-saga/effects'
import { GET_ORDERS, SET_ORDERS, POST_ORDER } from '../actions/CategoryActions';
import Axios from 'axios'

export const watchGetOrders = function* () {
  yield takeEvery(GET_ORDERS, workerGetOrders)
}

export const watchPostOrder = function* () {
  yield takeEvery(POST_ORDER, workerPostOrder)
}

function* workerGetOrders() {
  console.log('getting orders')
  try {
    const url = 'http://localhost:3000/orders'
    const result = yield call(Axios.get, url)
    yield put({ type: SET_ORDERS, value: result.data })
  }
  catch (error) {
    console.log('Failed', error)
  }
}

console.log('ORDER SAGA')

function* workerPostOrder(action) {
  console.log('creating new order')
  try {
    const url = 'http://localhost:3000/orders'
    const result = yield call(Axios.post, url, action.value)
    yield put({ type: GET_ORDERS })
    console.log('created successfully')
  }
  catch (error) {
    console.log('Failed', error)
  }
}