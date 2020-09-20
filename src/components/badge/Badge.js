import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Badge = ({ children, className, light, shape, theme, ...others }) => {
  return (
    <div
      className={classnames('atomikui-badge', className, {
        [`atomikui-badge--${theme}${light ? '-light' : ''}`]: theme,
        [`atomikui-badge--${shape}`]: shape,
      })}
      {...others}
    >
      {children}
    </div>
  );
};

Badge.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Content to be displayed inside badge */
  children: PropTypes.node,
  /** Light theme variant */
  light: PropTypes.bool,
  /** Specifies the badge theme variation. */
  theme: PropTypes.oneOf([
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
    'pickle',
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
  ]),
  /** Specifies a badge's shape. */
  type: PropTypes.oneOf(['pill', 'square']),
};

Badge.defaultProps = {
  className: '',
  children: '',
  light: false,
  theme: null,
  shape: null,
};

export default Badge;
