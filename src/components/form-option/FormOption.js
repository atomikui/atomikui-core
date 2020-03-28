import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Hint from '../hint/Hint';
import Label from '../label/Label';
import { generateId } from '../../utilities/generateId';

const types = ['checkbox', 'radio'];

const FormOption = ({
  classes,
  checked,
  disabled,
  errorText,
  hasError,
  helpText,
  id,
  label,
  name,
  onChange,
  required,
  type,
  ...others
}) => {
  const uid = id || generateId();
  const inputName = name || uid;
  const inputHintId = `${inputName}_hint`;
  const inputErrorId = `${inputName}_error`;
  const fieldType = !types.includes(type) ? 'checkbox' : type;

  return (
    <>
      <Label
        htmlFor={uid}
        classes={classnames('form-option', classes, {
          'has-error': hasError,
          'is-disabled': disabled,
          'form-option--radio': type === 'radio',
        })}
      >
        <input
          id={uid}
          type={fieldType}
          name={inputName}
          checked={checked}
          disabled={disabled}
          aria-describedby={`${inputHintId} ${inputErrorId}`}
          onChange={onChange}
          required
          {...others}
        />
        <span className="form-option__icon"></span>
        {label}
      </Label>
      {(helpText || errorText) && (
        <div className="formfield__hints">
          {helpText && <Hint id={inputHintId}>{helpText}</Hint>}
          {hasError && (
            <Hint id={inputErrorId} type="error">
              {errorText}
            </Hint>
          )}
        </div>
      )}
    </>
  );
};

FormOption.propTypes = {
  /** Specifies custom component classes. */
  classes: PropTypes.string,
  /** Specifies the form option checked state. */
  checked: PropTypes.bool,
  /** Specifies form option disabled state. */
  disabled: PropTypes.bool,
  /** Text to be displayed when there is an error. */
  errorText: PropTypes.string,
  /** Specifies the error state. */
  hasError: PropTypes.bool,
  /** Assistive text to be displayed with form field. */
  helpText: PropTypes.string,
  /** A unique id. */
  id: PropTypes.string,
  /** Specifies label text. */
  label: PropTypes.string,
  /** Specifies input name attribute. */
  name: PropTypes.string,
  /** OnChange callback. */
  onChange: PropTypes.func,
  /** Specifies if a field is required. */
  required: PropTypes.bool,
  /** Specifies the type of input. */
  type: PropTypes.oneOf(types),
};

FormOption.defaultProps = {
  classes: '',
  checked: false,
  disabled: false,
  errorText: '',
  hasError: false,
  helpText: '',
  id: null,
  label: '',
  name: '',
  onChange() {},
  required: false,
  type: 'checkbox',
};

export default FormOption;
