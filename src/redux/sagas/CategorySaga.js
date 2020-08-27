import { put, takeLatest, all } from 'redux-saga/effects';

export default function* CategorySaga() {
   yield all([
    console.log('Hello Sagas!')
   ]);
}