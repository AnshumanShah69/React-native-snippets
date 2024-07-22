import {takeEvery, put} from 'redux-saga/effects';
import {USER_LIST} from './constants';
import {SET_USER_DATA} from './constants';

function* userList() {
  const url = 'https://dummyjson.com/users';
  let data = yield fetch(url);
  data = yield data.json();
  yield put({type: SET_USER_DATA, data});
}

//first this is called then the userList is called
function* SagaData() {
  yield takeEvery(USER_LIST, userList);
}

export default SagaData;
