import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Alert = ({ align, classes, children, variant, ...others }) => {
  return (
    <div
      className={classnames('alert', classes, {
        [`alert--${variant}`]: variant,
        [`alert--${align}`]: align,
      })}
      {...others}
    >
      {children}
    </div>
  );
};

Alert.propTypes = {
  /** Aligns the text inside of the alert. */
  align: PropTypes.oneOf(['right', 'center']),
  /** Specifies custom component classes. */
  classes: PropTypes.string,
  /** Alert content. */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Specifies the alert theme variation. */
  variant: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
};

Alert.defaultProps = {
  align: null,
  classes: '',
  children: null,
  text: '',
  variant: null,
};

export default Alert;
