import { put, takeLatest } from 'redux-saga/effects';

import {
  AUTH_LOGIN,
  AUTH_REGISTER,
  AUTH_AUTHENTIFICATE,
} from 'constants/actionTypes';
import api from 'constants/api';

import utils from 'utils';

function* authentificate() {
  try {
    const data = yield fetch(
      `${api.login()}`,
      utils.getAuthToken()
    ).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('An error occurred while authetificating');
    });

    yield put({
      type: AUTH_AUTHENTIFICATE.SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    yield put({ type: AUTH_AUTHENTIFICATE.FAILURE, err });
  }
}

function* login(action) {
  const { username, password } = action.payload.params;
  try {
    const data = yield fetch(`${api.login()}`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      if (response.status === 400) {
        throw new Error('Wrong credentials');
      }
      throw new Error('An error occurred while logging in');
    });

    yield put({
      type: AUTH_LOGIN.SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    yield put({ type: AUTH_LOGIN.FAILURE, err });
  }
}

function* register(action) {
  const { username, password } = action.payload.params;
  try {
    const data = yield fetch(`${api.register()}`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      if (response.status === 400) {
        throw new Error('User already exists');
      }
      throw new Error('An error occurred while registering');
    });

    console.log(data);

    yield put({
      type: AUTH_REGISTER.SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    yield put({ type: AUTH_REGISTER.FAILURE, err });
  }
}

export default function* watchWidget() {
  yield takeLatest(AUTH_LOGIN.REQUEST, login);
  yield takeLatest(AUTH_REGISTER.REQUEST, register);
  yield takeLatest(AUTH_AUTHENTIFICATE.REQUEST, authentificate);
}
