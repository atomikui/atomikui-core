import React, { useEffect, Children, cloneElement } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Overlay = ({
  align,
  allowBodyScroll,
  children,
  className,
  isActive,
  theme,
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
      className={classnames('rcl-overlay', className, {
        [`rcl-overlay--${theme}`]: theme,
        [`rcl-overlay--align-${align}`]: align,
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
  className: PropTypes.string,
  /** Overlay content */
  children: PropTypes.node,
  /** Specifies if overlay is active */
  isActive: PropTypes.bool,
  /** Color theme variant */
  theme: PropTypes.oneOf(['blue', 'white']),
};

Overlay.defaultProps = {
  align: null,
  allowBodyScroll: false,
  className: '',
  children: <></>,
  isActive: false,
  theme: null,
};

export default Overlay;
