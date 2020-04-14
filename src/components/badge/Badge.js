import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Badge = ({ children, classes, shape, type, ...others }) => {
  return (
    <div
      className={classnames('badge', classes, {
        [`badge--${type}`]: type,
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
  /** Specifies the button variation. */
  variant: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
  /** Content to be displayed inside badge */
  children: PropTypes.node,
  /** Specifies a badge's shape. */
  type: PropTypes.oneOf(['pill', 'square']),
};

Badge.defaultProps = {
  classes: '',
  children: '',
  shape: null,
  type: null,
};

export default Badge;
