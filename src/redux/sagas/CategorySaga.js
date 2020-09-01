import { put, takeLatest, all, takeEvery, call, select } from 'redux-saga/effects';


function* addCategoryAsync() {
   yield put({type:'ADD_CATEGORY_ASYNC', value:1})
}

export function* addCategory(){
   yield takeLatest('ADD_CATEGORY', addCategoryAsync)
}

export default function* CategorySaga() {
   yield all([
    addCategory(),
   ]);
}
