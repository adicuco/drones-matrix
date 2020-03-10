import styled from 'styled-components';

const color = props =>
  props.error ? props.theme.error : props.theme.primary;

const Input = styled.input`
  font-size: 1em;
  padding: 0.7em;
  margin: 1em;
  border: 2px solid ${color};
  border-radius: 3px;
  text-align: center;
  color: ${color};
  background: transparent;

  ::placeholder {
    color: ${color};
  }
`;

Input.defaultProps = {
  error: false,
};

export default Input;
