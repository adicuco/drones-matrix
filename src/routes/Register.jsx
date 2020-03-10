import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

import { register } from 'actions/auth';

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

const Register = ({ isAuth, registerUser }) => {
  if (isAuth) {
    return <Redirect to="/app" />;
  }

  const handleRegister = data => {
    registerUser(data);
  };

  return (
    <Container>
      <h1>Register</h1>
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
        onSubmit={handleRegister}
        text="Register"
      />

      <Message>
        <span>Already have an account?</span>
        <Link to="/login">Login</Link>
      </Message>
    </Container>
  );
};

Register.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  registerUser: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    isAuth: state.auth.isAuthenticated,
  }),
  { registerUser: register }
)(Register);
