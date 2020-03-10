import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThreeBounce } from 'styled-spinkit';

const Loading = styled(ThreeBounce)`
  width: 100%;
  margin: auto;
`;

const Button = ({ className, children, title, onClick, loading }) => {
  return (
    <button className={className} onClick={onClick}>
      {loading ? (
        <Loading color="white" size={60} />
      ) : (
        children || title
      )}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  className: PropTypes.any,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  title: 'button',
  onClick: () => {},
  children: null,
  className: {},
  loading: false,
};

export default styled(Button)`
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: none;
`;
