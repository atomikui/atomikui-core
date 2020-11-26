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
  // TODO: Needs test coverage
  /* istanbul ignore next */
  useEffect(() => {
    if (!allowBodyScroll) {
      document.body.style.overflow = isActive ? 'hidden' : 'visible';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isActive]);

  return (
    <div
      role="dialog"
      data-test-id="overlay"
      className={classnames('atomikui-overlay', className, {
        [`atomikui-overlay--${theme}`]: theme,
        [`atomikui-overlay--align-${align}`]: align,
        'is-active': isActive,
      })}
      {...others}
    >
      {Children.map(children, (child) =>
        cloneElement(child, {
          onClick: (e) => e.stopPropagation(),
        }),
      )}
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
  /** Specifies the color variation. */
  theme: PropTypes.oneOf(['blue', 'white']),
};

Overlay.defaultProps = {
  align: null,
  allowBodyScroll: false,
  className: '',
  children: null,
  isActive: false,
  theme: null,
};

export default Overlay;
