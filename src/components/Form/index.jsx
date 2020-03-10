import React, { useState } from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';
import Input from 'components/Input';

const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

const Form = ({ onSubmit, fields, text }) => {
  const [data, setData] = useState(
    fields.reduce((obj, field) => ({ ...obj, [field.name]: '' }), {})
  );
  const [errors, setErrors] = useState(
    fields.reduce(
      (obj, field) => ({ ...obj, [field.name]: false }),
      {}
    )
  );

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(data);
  };

  const handleOnChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleInvalid = e => {
    setErrors({
      ...errors,
      [e.target.name]: true,
    });
  };

  const removeInvalid = e => {
    setErrors({
      ...errors,
      [e.target.name]: false,
    });
  };

  return (
    <Container onSubmit={handleSubmit}>
      {fields.map(field => (
        <Input
          key={field.name}
          placeholder={field.placeholder}
          value={data[field.name]}
          onChange={handleOnChange}
          name={field.name}
          required={field.required}
          onInvalid={handleInvalid}
          onInput={removeInvalid}
          {...(field.type && { type: field.type })}
          error={errors[field.name]}
        />
      ))}
      <Button title={text} reverse />
    </Container>
  );
};

Form.defaultProps = {
  text: 'Submit',
  fields: [
    { name: 'username', placeholder: 'Username', required: true },
    {
      name: 'password',
      placeholder: 'Password',
      type: 'password',
      required: true,
    },
  ],
};

Form.propTypes = {
  text: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  fields: arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      placeholder: PropTypes.string,
      type: PropTypes.string,
    })
  ),
};

export default Form;
