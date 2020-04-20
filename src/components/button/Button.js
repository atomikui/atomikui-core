import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({
  block,
  className,
  children,
  disabled,
  shape,
  size,
  type,
  variant,
  ...others
}) => {
  return (
    <button
      className={classnames('rcl-btn', className, {
        [`rcl-btn--${variant}`]: variant,
        [`rcl-btn--${shape}`]: shape,
        [`rcl-btn--${size}`]: size,
        'rcl-btn--block': block,
      })}
      type={type}
      disabled={disabled}
      {...others}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /** Displays button as a block elment. */
  block: PropTypes.bool,
  /** Specifies custom component classes. */
  className: PropTypes.string,
  /** Specifies button content. */
  children: PropTypes.node,
  /** Specifies if button is diabled. */
  disabled: PropTypes.bool,
  /** Specifies a button's shape. */
  shape: PropTypes.oneOf(['pill', 'square']),
  /** Specifies the size of a button. */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Specifies the type of button. */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** Specifies the button variation. */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'warning',
    'white',
    'hollow',
    'link',
    'block',
  ]),
};

Button.defaultProps = {
  block: false,
  className: '',
  children: '',
  disabled: false,
  shape: null,
  size: null,
  type: 'button',
  variant: null,
};

export default Button;
