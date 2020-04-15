import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Toaster = ({ children, position }) => {
  return (
    <div
      className={classnames('toaster', {
        [`toaster--${position}`]: position,
      })}
    >
      {children}
    </div>
  );
};

Toaster.propTypes = {
  /** Toasts to be rendered inside of Toaster */
  children: PropTypes.node,
  /** Specifies the position of the toaster */
  position: PropTypes.oneOf(['top=left', 'bottom-left', 'bottom-right']),
};

Toaster.defaultProps = {
  children: null,
  position: null,
};

export default Toaster;
