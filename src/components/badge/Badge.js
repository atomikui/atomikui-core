import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Badge = ({ children, className, shape, variant, ...others }) => {
  return (
    <div
      className={classnames('atomikui-badge', className, {
        [`atomikui-badge--${variant}`]: variant,
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
  /** Specifies a badge's shape. */
  type: PropTypes.oneOf(['pill', 'square']),
  /** Specifies the badge theme variation. */
  variant: PropTypes.oneOf([
    'light-gray',
    'light-blue',
    'info',
    'warning',
    'error',
    'success',
    'outline',
  ]),
};

Badge.defaultProps = {
  className: '',
  children: '',
  shape: null,
  variant: null,
};

export default Badge;
