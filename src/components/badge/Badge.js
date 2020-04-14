import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Badge = ({ children, classes, shape, variant, ...others }) => {
  return (
    <div
      className={classnames('badge', classes, {
        [`badge--${variant}`]: variant,
        [`badge--${shape}`]: shape,
      })}
      {...others}
    >
      {children}
    </div>
  );
};

Badge.propTypes = {
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
  /** Content to be displayed inside badge */
  children: PropTypes.node,
  /** Specifies a badge's shape. */
  type: PropTypes.oneOf(['pill', 'square']),
  /** Specifies the badge theme variation. */
  variant: PropTypes.oneOf([
    'light-gray',
    'info',
    'warning',
    'error',
    'success',
    'outline',
  ]),
};

Badge.defaultProps = {
  classes: '',
  children: '',
  shape: null,
  variant: null,
};

export default Badge;
