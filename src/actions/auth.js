import {
  AUTH_LOGIN,
  AUTH_REGISTER,
  AUTH_AUTHENTIFICATE,
} from 'constants/actionTypes';

import { createAction } from 'utils/saga';

export const login = params =>
  createAction(AUTH_LOGIN.REQUEST, { params });

export const register = params =>
  createAction(AUTH_REGISTER.REQUEST, { params });

export const authentificate = params =>
  createAction(AUTH_AUTHENTIFICATE.REQUEST, { params });
