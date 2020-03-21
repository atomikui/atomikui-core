import React from 'react';
import classnames from 'classnames';
import PropTypes, { bool } from 'prop-types';
import Hint from '../hint/Hint';
import Label from '../label/Label';
import { generateId } from '../../utilities/generateId';

const FormField = ({
  classes, 
  errorText, 
  hasError, 
  helpText, 
  id,
  label, 
  labelless,
  placeholder, 
  type, 
  value, 
  ...others 
}) => {
  const uid = id || generateId();
  return (
    <div className={classnames('formfield', classes, {
      'has-error': hasError
    })} {...others}>
      {!labelless && (
        <div className="formfield__label">
          <Label text={label} htmlFor={uid} />
        </div>
      )}
      {type === 'textarea'
      ? (
        <textarea 
          id={uid}
          className={classnames('formfield__textarea', classes, {})} 
          placeholder={placeholder} 
          value={value} 
          {...others} 
        />
      )
      : (
        <input 
          id={uid}
          className={classnames('formfield__input', classes, {})} 
          type={type} 
          placeholder={placeholder} 
          value={value} 
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
  /** Text to be displayed when there is an error */
  errorText: PropTypes.string,
  /** Specifies the error state */
  hasError: bool,
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
  ]),
  /** Specifies and inputs value */
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
}

FormField.defaultProps = {
  classes: '',
  errorText: '',
  hasError: false,
  helpText: '',
  id: null,
  label: '',
  labelless: false,
  text: '',
  type: 'text',
  value: ''
};

export default FormField;