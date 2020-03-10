import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const Input = styled.input`
  visibility: hidden;
`;

const Label = styled.label`
  background-color: ${props =>
    props.checked ? props.theme.checkboxColor : '#fff'};
  border: 1px solid ${props => props.theme.checkboxColor};
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  left: 0;
  position: absolute;
  top: 0;
  width: 20px;

  &:after {
    border: 1.5px solid
      ${props => props.theme.checkboxTickColor || '#000'};
    border-top: none;
    border-right: none;
    content: '';
    height: 4px;
    left: 5px;
    opacity: ${props => (props.checked ? '1' : '0')};
    position: absolute;
    top: 6px;
    transform: rotate(-45deg);
    width: 8px;
  }
`;

const CheckBox = ({ checked, disabled, onClick }) => (
  <Container onClick={onClick}>
    <Input type="checkbox" id="checkbox" />
    <Label htmlFor="checkbox" checked={checked} disabled={disabled} />
  </Container>
);

CheckBox.propTypes = {
  checked: propTypes.bool,
  onClick: propTypes.func,
  disabled: propTypes.bool,
};

CheckBox.defaultProps = {
  onClick: () => {},
  checked: false,
  disabled: false,
};

export default CheckBox;
