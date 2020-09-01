import { put, takeLatest, all, takeEvery, call, select } from 'redux-saga/effects';


function* addProductAsync() {
   yield put({type:'ADD_PRODUCT_ASYNC', value:1})
}

export function* addProduct(){
   yield takeLatest('ADD_PRODUCT', addProductAsync)
}

export default function* ProductSaga() {
   yield all([
    addProduct(),
   ]);
}
