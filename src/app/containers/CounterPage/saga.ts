import { takeLatest, delay, put, call } from 'redux-saga/effects';
import { actions } from './slice';

export function* getCounter() {
  console.log('===== counter =====');
  yield delay(500);
  console.log('===== counter =====');
  yield put(actions.increment());
  //更改状态
  yield put(actions.changeState(false));
}

export function* counterFromSaga() {
  yield takeLatest(actions.incrementAsync.type, getCounter)
}
