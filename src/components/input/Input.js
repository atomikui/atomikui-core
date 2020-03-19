import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Input = ({ classes, placeholder, type, value, ...others }) => {
  return (
    <input 
      className={classnames('.btn', classes, {})} 
      type={type} 
      placeholder={placeholder} 
      value={value} 
      {...others} 
    />
  );
};

Input.propTypes = {
  /** Specifies custom component classes */
  classes: PropTypes.string,
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