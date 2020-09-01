import { put, takeLatest, all, takeEvery, call, select } from 'redux-saga/effects';


function* addOrderAsync() {
   yield put({type:'ADD_ORDER_ASYNC', value:1})
}

export function* addOrder(){
   yield takeLatest('ADD_ORDER', addOrderAsync)
}

export default function* ProductSaga() {
   yield all([
    addOrder(),
   ]);
}
