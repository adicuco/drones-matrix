import { combineReducers } from 'redux';

import router from 'reducers/router';
import auth from 'reducers/auth';

const rootReducer = combineReducers({
  router,
  auth,
});

export default rootReducer;
