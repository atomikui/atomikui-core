import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Hint from '../hint/Hint';
import Label from '../label/Label';
import { generateId } from '../../utilities/generateId';

const FormField = ({
  classes, 
  defaultValue,
  errorText, 
  hasError, 
  helpText, 
  id,
  label, 
  labelless,
  placeholder, 
  required,
  type, 
  ...others 
}) => {
  const uid = id || generateId();
  return (
    <div className={classnames('formfield', classes, {
      'has-error': hasError
    })}>
      {!labelless && (
        <div className="formfield__label">
          <Label htmlFor={uid}>{label}</Label>
        </div>
      )}
      {type === 'textarea'
      ? (
        <textarea 
          id={uid}
          className={classnames('formfield__textarea', classes, {})} 
          placeholder={placeholder} 
          defaultValue={defaultValue} 
          required
          {...others} 
        />
      )
      : (
        <input 
          id={uid}
          className={classnames('formfield__input', classes, {})} 
          type={type} 
          placeholder={placeholder} 
          defaultValue={defaultValue} 
          required
          {...others} 
        />
      )}
      {(helpText || errorText) && (
        <div className="formfield__hints">
          {helpText && <Hint text={helpText} />}
          {hasError && <Hint text={errorText} type="error" />}
        </div>
      )}
    </div>
  );
};

FormField.propTypes = {
  /** Specifies custom component classes */
  classes: PropTypes.string,
  /** Specifies and inputs default default value */
  defaultValue: PropTypes.string,
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
  /** Hides label */
  labelless: PropTypes.bool,
  /** Specifies input placeholder text */
  placeholder: PropTypes.string,
  /** Specifies if a field is required */
  required: PropTypes.bool,
  /** Specifies the type of input */
  type: PropTypes.oneOf([
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'textarea',
    'time',
    'url',
    'week'
  ])
}

FormField.defaultProps = {
  classes: '',
  defaultValue: '',
  errorText: '',
  hasError: false,
  helpText: '',
  id: null,
  label: '',
  labelless: false,
  placeholder: '',
  required: false,
  type: 'text'
};

export default FormField;