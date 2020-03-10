/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FiSun } from 'react-icons/fi';
import { IoMdMoon } from 'react-icons/io';

import utils from 'utils';
import { THEME_LIGHT } from 'constants/theme';

import Button from 'components/Button';
import Toggle from 'components/Toggle';

const Container = styled.div`
  width: 100vw;
  height: 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  position: fixed;
  top: 0;
  flex-direction: row-reverse;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = ({ theme, isAuth }) => {
  return (
    <Container>
      <SubContainer>
        <Toggle
          onChange={utils.toggleTheme}
          defaultChecked={theme === THEME_LIGHT}
          icons={{
            checked: <IoMdMoon />,
            unchecked: <FiSun />,
          }}
        />
        {!isAuth && (
          <Link to="/login">
            <Button title="Log In" reverse />
          </Link>
        )}
      </SubContainer>
    </Container>
  );
};

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

export default Header;
