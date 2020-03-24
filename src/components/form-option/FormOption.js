import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Hint from '../hint/Hint';
import Label from '../label/Label';
import { generateId } from '../../utilities/generateId';

const types = ['checkbox', 'radio'];

const FormOption = ({
  classes,
  defaultChecked,
  errorText,
  hasError,
  helpText,
  id,
  label,
  name,
  required,
  type,
  ...others
}) => {
  const uid = id || generateId();
  const inputName = name || uid;
  const inputHintId = `${inputName}_hint`;
  const inputErrorId = `${inputName}_error`;
  const fieldType = !types.includes(type) ? 'text' : type;

  return (
    <>
      <Label htmlFor={uid} classes={classnames('fomr-option', classes, {})}>
        <input
          id={uid}
          type={fieldType}
          name={inputName}
          defaultChecked={defaultChecked}
          aria-describedby={`${inputHintId} ${inputErrorId}`}
          required
          {...others}
        /> {label}
      </Label>
      {(helpText || errorText) && (
        <div className="formfield__hints">
          {helpText && <Hint id={inputHintId}>{helpText}</Hint>}
          {hasError && <Hint id={inputErrorId} type="error">{errorText}</Hint>}
        </div>
      )}
    </>
  );
};

FormOption.propTypes = {
  /** Specifies custom component classes */
  classes: PropTypes.string,
  /** Specifies and inputs default checked state */
  defaultChecked: PropTypes.string,
  /** Text to be displayed when there is an error */
  errorText: PropTypes.string,
  /** Specifies the error state */
  hasError: PropTypes.bool,
  /** Assistive text to be displayed with form field */
  helpText: PropTypes.string,
  /** A unique id */
  id: PropTypes.string,
  /** Specifies label text */
  label: PropTypes.string,
  /** Specifies input name attribute */
  name: PropTypes.string,
  /** Specifies if a field is required */
  required: PropTypes.bool,
  /** Specifies the type of input */
  type: PropTypes.oneOf(types),
};

FormOption.defaultProps = {
  classes: '',
  defaultChecked: '',
  errorText: '',
  hasError: false,
  helpText: '',
  id: null,
  label: '',
  name: '',
  required: false,
  type: 'checkbox',
};

export default FormOption;
