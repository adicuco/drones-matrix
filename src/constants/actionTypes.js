import { createAsyncTypes } from 'utils/saga';

export const UPDATE_ROUTER_STATE = 'UPDATE_ROUTER_STATE';

export const AUTH_LOGIN = createAsyncTypes('AUTH_LOGIN');
export const AUTH_REGISTER = createAsyncTypes('AUTH_REGISTER');
export const AUTH_AUTHENTIFICATE = createAsyncTypes(
  'AUTH_AUTHENTIFICATE'
);
