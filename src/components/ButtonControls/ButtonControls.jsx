import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ButtonControls = ({
  align,
  breakpoint,
  children,
  className,
  isBlock,
  isReverse,
  ...others
}) => (
  <div
    className={classnames('atomikui-button-controls', className, {
      [`atomikui-button-controls--align-${align}`]: align,
      [`atomikui-button-controls--breakpoint-${breakpoint}`]: breakpoint,
      'is-block': isBlock,
    })}
    {...others}
  >
    {isReverse ? Children.toArray(children).reverse() : children}
  </div>
);

ButtonControls.propTypes = {
  /** Sets the horizontal alignment of the ButtonControls children */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /** Sets the breakpoint at which all children stack */
  breakpoint: PropTypes.oneOf(['small', 'medium', 'large', 'extra-large']),
  /** Child elements, Must be of type Button */
  children: PropTypes.node.isRequired,
  /** Applies custom CSS classes to the parent container */
  className: PropTypes.string,
  /** Makes children stack and stretch full width at all viewport sizes */
  isBlock: PropTypes.bool,
  /** Reverses the order of the buttons */
  isReverse: PropTypes.bool,
};

ButtonControls.defaultProps = {
  align: 'left',
  breakpoint: 'medium',
  className: '',
  isBlock: false,
  isReverse: false,
};

export default ButtonControls;
