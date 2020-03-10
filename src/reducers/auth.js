import {
  AUTH_LOGIN,
  AUTH_REGISTER,
  AUTH_AUTHENTIFICATE,
} from 'constants/actionTypes';
import constants from 'constants';

import {
  localStorageGetItem,
  localStorageSetItem,
  localStorageRemoveItem,
} from 'utils/storage';

const { JWT_TOKEN_KEY } = constants;

const initialState = {
  token: localStorageGetItem(JWT_TOKEN_KEY),
  isAuthenticated: false,
  loading: false,
  user: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN.REQUEST:
    case AUTH_REGISTER.REQUEST:
    case AUTH_AUTHENTIFICATE.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AUTH_LOGIN.SUCCESS:
    case AUTH_REGISTER.SUCCESS:
      localStorageSetItem(JWT_TOKEN_KEY, payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case AUTH_AUTHENTIFICATE.SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case AUTH_LOGIN.FAILURE:
    case AUTH_REGISTER.FAILURE:
    case AUTH_AUTHENTIFICATE.FAILURE:
      localStorageRemoveItem(JWT_TOKEN_KEY);
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
};
