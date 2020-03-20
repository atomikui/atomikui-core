import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Label from '../label/Label';

const Input = ({ classes, label, placeholder, type, value, ...others }) => {
  return (
    <div className={classnames('formfield', classes, {})} {...others}>
      <div className="formfield__label">
        <Label text={label} />
      </div>
      {type === 'textarea'
      ? (
        <textarea 
          className={classnames('formfield__textarea', classes, {})} 
          placeholder={placeholder} 
          value={value} 
          {...others} 
        />
      )
      : (
        <input 
          className={classnames('formfield__input', classes, {})} 
          type={type} 
          placeholder={placeholder} 
          value={value} 
          {...others} 
        />
      )}
    </div>
  );
};

Input.propTypes = {
  /** Specifies custom component classes */
  classes: PropTypes.string,
  /** Specifies label text */
  label: PropTypes.string,
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

Input.defaultProps = {
  classes: '',
  text: '',
  type: 'text'
};

export default Input;