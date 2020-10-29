import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Toaster = ({ children, className, position, ...others }) => {
  return (
    <div
      data-test-id="toaster"
      className={classnames('atomikui-toaster', className, {
        [`atomikui-toaster--${position}`]: position,
      })}
      {...others}
    >
      {children}
    </div>
  );
};

Toaster.propTypes = {
  /** Toasts to be rendered inside of Toaster */
  children: PropTypes.node,
  /** Specifies custom component classes. */
  className: PropTypes.string,
  /** Specifies the position of the toaster */
  position: PropTypes.oneOf([
    'top-left',
    'bottom-left',
    'bottom-right',
    'top-center',
    'bottom-center',
  ]),
};

Toaster.defaultProps = {
  children: null,
  className: '',
  position: null,
};

export default Toaster;
