import React, { useEffect, Children, cloneElement } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Overlay = ({
  align,
  allowBodyScroll,
  children,
  classes,
  isActive,
  variant,
  ...others
}) => {
  useEffect(() => {
    /* istanbul ignore next */
    if (!allowBodyScroll) {
      document.body.style.overflow = isActive ? 'hidden' : 'visible';
    }
  }, [isActive]);

  return (
    <div
      className={classnames('overlay', classes, {
        [`overlay--${variant}`]: variant,
        [`overlay--align-${align}`]: align,
        'is-active': isActive,
      })}
      {...others}
    >
      {Children.map(children, (child) => {
        return cloneElement(child, {
          onClick: (e) => {
            return e.stopPropagation();
          },
        });
      })}
    </div>
  );
};

Overlay.propTypes = {
  /** Content alignment */
  align: PropTypes.oneOf(['left', 'right']),
  /** Allosw body scroll when overlay is active */
  allowBodyScroll: PropTypes.bool,
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
  allowBodyScroll: false,
  classes: '',
  children: null,
  isActive: false,
  variant: null,
};

export default Overlay;
