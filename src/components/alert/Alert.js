import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Alert = ({
  align, classes, children, type, ...others
}) => (
  <div
    className={classnames('alert', classes, {
      [`alert--${type}`]: type,
      [`alert--${align}`]: align,
    })}
    type={type}
    {...others}>
    {children}
  </div>
);

Alert.propTypes = {
  /** Aligns the text inside of the alert */
  align: PropTypes.oneOf(['', 'right', 'center']),
  /** Specifies custom component classes */
  classes: PropTypes.string,
  /** Children to be displayed inside of the alert */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Specifies the type of alert */
  type: PropTypes.oneOf(['', 'info', 'warning', 'error', 'success']),
};

Alert.defaultProps = {
  align: '',
  classes: '',
  children: null,
  text: '',
};

export default Alert;
