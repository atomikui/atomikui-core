import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Badge = ({ classes, variant, ...others }) => {
  return (
    <div
      className={classnames('badge', classes, {
        [`badge--${variant}`]: variant,
      })}
      {...others}
    ></div>
  );
};

Badge.propTypes = {
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
  /** Specifies the button variation. */
  variant: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
};

Badge.defaultProps = {
  classes: '',
  variant: null,
};

export default Badge;
