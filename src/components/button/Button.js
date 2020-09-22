import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({
  block,
  className,
  children,
  condensed,
  disabled,
  shape,
  size,
  type,
  theme,
  themeVariant,
  ...others
}) => {
  return (
    <button
      className={classnames('atomikui-btn', className, {
        [`atomikui-btn--${theme}${
          themeVariant ? `-${themeVariant}` : ''
        }`]: theme,
        [`atomikui-btn--${shape}`]: shape,
        [`atomikui-btn--${size}`]: size,
        'atomikui-btn--condensed': condensed,
        'atomikui-btn--block': block,
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
  /** Condensed button horizontal padding */
  condensed: PropTypes.bool,
  /** Specifies if button is diabled. */
  disabled: PropTypes.bool,
  /** Specifies a button's shape. */
  shape: PropTypes.oneOf(['pill', 'square']),
  /** Specifies the size of a button. */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Specifies the type of button. */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** Specifies the button variation. */
  theme: PropTypes.oneOf([
    // Primary colors
    'red',
    'pink',
    'purple',
    'deep-purple',
    'indigo',
    'blue',
    'sky-blue',
    'cyan',
    'teal',
    'green',
    'light-green',
    'lime',
    'yellow',
    'light-orange',
    'orange',
    'deep-orange',
    'amber',
    'brown',
    'gray',
    'blue-gray',
    'black',
    'white',
    // Hollow and link
    'hollow',
    'link',
    'block',
  ]),
  /** Theme color cariant */
  themeVariant: PropTypes.oneOf(['light']),
};

Button.defaultProps = {
  block: false,
  className: '',
  children: '',
  condensed: false,
  disabled: false,
  shape: null,
  size: null,
  type: 'button',
  theme: null,
  themeVariant: null,
};

export default Button;
