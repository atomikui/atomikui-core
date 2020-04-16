import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Overlay = ({ children, classes, variant, ...others }) => {
  return (
    <div
      className={classnames('overlay', classes, {
        [`overlay--${variant}`]: variant,
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
  /** Specifies the overlay theme variation */
  variant: PropTypes.oneOf(['black', 'blue', 'white']),
};

Overlay.defaultProps = {
  classes: '',
  children: null,
  variant: 'black',
};

export default Overlay;
