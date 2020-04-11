import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({
  block,
  classes,
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
      className={classnames('btn', classes, {
        [`btn--${variant}`]: variant,
        [`btn--${shape}`]: shape,
        [`btn--${size}`]: size,
        'btn--block': block,
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
  classes: PropTypes.string,
  /** Specifies button content. */
  children: PropTypes.node,
  /** Specifies if button is diabled. */
  disabled: PropTypes.bool,
  /** Specifies a buttons shape. */
  shape: PropTypes.oneOf(['pill']),
  /** Specifies the size of a button. */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Specifies the type of button. */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** Specifies the button variation. */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'hollow',
    'link',
    'block',
  ]),
};

Button.defaultProps = {
  block: false,
  classes: '',
  children: '',
  disabled: false,
  shape: null,
  size: null,
  type: 'button',
  variant: null,
};

export default Button;
