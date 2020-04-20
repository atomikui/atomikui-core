import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../button';

const Alert = ({ align, classes, children, variant, onClose, ...others }) => {
  return (
    <div
      className={classnames('alert', classes, {
        [`alert--${variant}`]: variant,
        [`alert--${align}`]: align,
      })}
      role="alert"
      aria-live={variant === 'error' ? 'assertive' : 'polite'}
      aria-atomic="true"
      {...others}
    >
      <div className="alert__body">{children}</div>
      {onClose && (
        <div className="alert__footer">
          <Button
            className="alert__btn"
            variant="hollow"
            onClick={onClose}
            aria-hidden="true"
          >
            Close
          </Button>
        </div>
      )}
    </div>
  );
};

Alert.propTypes = {
  /** Aligns the text inside of the alert. */
  align: PropTypes.oneOf(['right', 'center']),
  /** Specifies custom component classes. */
  classes: PropTypes.string,
  /** onClose Callback */
  onClose: PropTypes.func,
  /** Alert content. */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Specifies the alert theme variation. */
  variant: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
};

Alert.defaultProps = {
  align: null,
  classes: '',
  onClose: null,
  children: null,
  text: '',
  variant: null,
};

export default Alert;
