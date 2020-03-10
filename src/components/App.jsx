import React from 'react';
import { Provider } from 'react-redux';
import Favicon from 'react-favicon';

import configureStore from 'store/configureStore';
import rootSaga from 'sagas';

import Router from 'components/Router';
// import ErrorBoundary from 'components/ErrorBoundary';

import favicon from 'assets/img/favicon.png';

const store = configureStore();
store.runSaga(rootSaga);

export default () => {
  return (
    // <ErrorBoundary>
    <Provider store={store}>
      <Favicon url={favicon} />
      <Router />
    </Provider>
    // </ErrorBoundary>
  );
};
