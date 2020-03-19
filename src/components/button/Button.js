import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ block, classes, disabled, shape, size, text, type, variant, ...others }) => {
  return (
    <button 
      className={classnames('btn', classes, {
        [`btn--${variant}`]: variant,
        [`btn--${shape}`]: shape,
        [`btn--${size}`]: size,
        'btn--block': block
      })} 
      type={type} 
      disabled={disabled}
      {...others}>
      {text}
    </button>
  );
};

Button.propTypes = {
  /** Displays button as a block elment */
  block: PropTypes.bool,
  /** Specifies custom component classes */
  classes: PropTypes.string,
  /** Specifies if button is diabled */
  disabled: PropTypes.bool,
  /** Specifies a buttons shape */
  shape: PropTypes.oneOf('pill'),
  /** Specifies the size of a button */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Specifies a buttons text */
  text: PropTypes.string,
  /** Specifies the type of button */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** Specifies the button variation */
  variant: PropTypes.oneOf('primary', 'secondary', 'tertiary', 'pill', 'block')
}

Button.defaultProps = {
  block: false,
  classes: '',
  disabled: false,
  shape: null,
  size: null,
  text: '',
  type: 'button',
  variant: null,
};

export default Button;