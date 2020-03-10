import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

import { login } from 'actions/auth';

import Form from 'components/Form';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Message = styled.div`
  display: flex;

  span {
    padding-right: 5px;
  }
`;

const Login = ({ isAuth, loginUser }) => {
  if (isAuth) {
    return <Redirect to="/app" />;
  }

  const handleLogin = data => {
    loginUser(data);
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form
        fields={[
          {
            name: 'username',
            placeholder: 'Username',
            required: true,
          },
          {
            name: 'password',
            placeholder: 'Password',
            type: 'password',
            required: true,
          },
        ]}
        onSubmit={handleLogin}
        text="Login"
      />

      <Message>
        <span>Don&apos;t have an account?</span>
        <Link to="/register">Register</Link>
      </Message>
    </Container>
  );
};

Login.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  loginUser: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    isAuth: state.auth.isAuthenticated,
  }),
  { loginUser: login }
)(Login);
