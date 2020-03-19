import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Alert = ({ classes, text, type, ...others }) => {
  return (
    <div 
      className={classnames('.btn', classes, {})} 
      type={type} 
      {...others}>
      {text}
    </div>
  );
};

Alert.propTypes = {
  /** Specifies custom component classes */
  classes: PropTypes.string,
  /** Specifies text to be displayed in the alert */
  text: PropTypes.string,
  /** Specifies the type of alert */
  type: PropTypes.oneOf(['info', 'warning', 'error', 'success'])
}

Alert.defaultProps = {
  classes: '',
  type: 'info',
  text: ''
};

export default Alert;