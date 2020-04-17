import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Overlay = ({
  children,
  classes,
  hasDrawer,
  isActive,
  variant,
  ...others
}) => {
  return (
    <div
      className={classnames('overlay', classes, {
        [`overlay--${variant}`]: variant,
        'is-active': isActive,
        'has-contextual-dialog': hasDrawer,
      })}
      {...others}
    >
      {children}
    </div>
  );
};

Overlay.propTypes = {
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
  /** Overlay content */
  children: PropTypes.node,
  /** Overlay child is a drawer */
  hasDrawer: PropTypes.bool,
  /** Specifies if overlay is active */
  isActive: PropTypes.bool,
  /** Specifies the overlay theme variation */
  variant: PropTypes.oneOf(['blue', 'white']),
};

Overlay.defaultProps = {
  classes: '',
  children: null,
  hasDrawer: false,
  isActive: false,
  variant: null,
};

export default Overlay;
