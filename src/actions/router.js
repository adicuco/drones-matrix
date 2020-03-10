import { UPDATE_ROUTER_STATE } from 'constants/actionTypes';

import { createAction } from 'utils/saga';

// eslint-disable-next-line import/prefer-default-export
export const updateRouterState = state =>
  createAction(UPDATE_ROUTER_STATE, { ...state });
