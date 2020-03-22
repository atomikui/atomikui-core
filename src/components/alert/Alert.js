import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Alert = ({ align, classes, text, type, ...others }) => (
  <div 
    className={classnames('alert', classes, {
      [`alert--${type}`]: type,
      [`alert--${align}`]: align
    })} 
    type={type} 
    {...others}>
    {text}
  </div>
);

Alert.propTypes = {
  /** Aligns the text inside of the alert */
  align: PropTypes.oneOf(['', 'right', 'center']),
  /** Specifies custom component classes */
  classes: PropTypes.string,
  /** Specifies text to be displayed in the alert */
  text: PropTypes.string,
  /** Specifies the type of alert */
  type: PropTypes.oneOf(['', 'info', 'warning', 'error', 'success'])
};

Alert.defaultProps = {
  align: '',
  classes: '',
  type: '',
  text: ''
};

export default Alert;