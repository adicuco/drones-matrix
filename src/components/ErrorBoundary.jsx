import React from 'react';
import propTypes from 'prop-types';
import * as Sentry from '@sentry/browser';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return <div>error</div>;
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: propTypes.oneOfType([propTypes.element, propTypes.func]),
};

ErrorBoundary.defaultProps = {
  children: null,
};
