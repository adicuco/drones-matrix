import { UPDATE_ROUTER_STATE } from 'constants/actionTypes';

const initialState = {
  pathname: '/',
  params: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_ROUTER_STATE:
      return {
        pathname: payload.pathname,
        params: {
          ...state.params,
          ...payload.params,
        },
      };
    default:
      return state;
  }
};
