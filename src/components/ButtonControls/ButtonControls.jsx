import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ButtonControls = ({
  align,
  children,
  className,
  isBlock,
  isReverse,
  ...others
}) => (
  <div
    className={classnames('atomikui-button-controls', className, {
      [`atomikui-button-controls--align-${align}`]: align,
      'atomikui-button-controls--block': isBlock,
    })}
    {...others}
  >
    {(isReverse ? Children.toArray(children).reverse() : children).filter(
      (child) => child.type.name === 'Button',
    )}
  </div>
);

ButtonControls.propTypes = {
  /** Sets the horizontal alignment of the ButtonControls children */
  align: PropTypes.oneOf(['left', 'center', 'right']),
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
  className: '',
  isBlock: false,
  isReverse: false,
};

export default ButtonControls;
