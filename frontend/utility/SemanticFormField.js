import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react';

export default function semanticFormField({ input, type, label, required, placeholder, meta: { touched, error, warning }, as: As = Input, ...props }) {
  function handleChange(e, { value }) {
    return input.onChange(value, e)
  }
  function handleKeyPress(e) {
    if (props.onKeyPress)
      return props.onKeyPress(e)
  }
  return (
    <Form.Field required>
      <label>{label} {touched && ((error && <span className="formError">{error}</span>) || (warning && <span className="formWarning">{warning}</span>))}</label>
      <As {...props} {...input} value={input.value} type={type} placeholder={placeholder} onChange={handleChange} onKeyPress={handleKeyPress} />
    </Form.Field>
  )
}

semanticFormField.propTypes = {
  as: PropTypes.any,
  input: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  meta: PropTypes.object
};
