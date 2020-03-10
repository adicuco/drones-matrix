import { all } from 'redux-saga/effects';

import auth from 'sagas/auth';

export default function* rootSaga() {
  yield all([auth()]);
}
