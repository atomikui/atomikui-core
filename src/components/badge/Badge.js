import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Badge = ({ children, className, shape, theme, ...others }) => {
  return (
    <div
      className={classnames('atomikui-badge', className, {
        [`atomikui-badge--${theme}`]: theme,
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
  /** Specifies the badge theme variation. */
  theme: PropTypes.oneOf([
    'light-gray',
    'light-blue',
    'info',
    'warning',
    'error',
    'success',
    'outline',
  ]),
  /** Specifies a badge's shape. */
  type: PropTypes.oneOf(['pill', 'square']),
};

Badge.defaultProps = {
  className: '',
  children: '',
  theme: null,
  shape: null,
};

export default Badge;
