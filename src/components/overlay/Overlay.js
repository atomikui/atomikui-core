import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Overlay = ({
  align,
  children,
  classes,
  isActive,
  variant,
  ...others
}) => {
  return (
    <div
      className={classnames('overlay', classes, {
        [`overlay--${variant}`]: variant,
        'is-active': isActive,
      })}
      {...others}
    >
      {children}
    </div>
  );
};

Overlay.propTypes = {
  /** Content alignment */
  align: PropTypes.oneOf(['left', 'right']),
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
  /** Overlay content */
  children: PropTypes.node,
  /** Specifies if overlay is active */
  isActive: PropTypes.bool,
  /** Specifies the overlay theme variation */
  variant: PropTypes.oneOf(['blue', 'white']),
};

Overlay.defaultProps = {
  align: null,
  classes: '',
  children: null,
  isActive: false,
  variant: null,
};

export default Overlay;
