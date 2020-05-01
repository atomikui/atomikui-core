import React, { useEffect, useRef, useState, useContext } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import createFocusTrap from 'focus-trap';
import Overlay from '../overlay';
import ThemeContext from '../../themeContext';

const Drawer = ({
  children,
  className,
  isOpen,
  onClose,
  position,
  ...others
}) => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef();

  const [focusTrap, setFocusTrap] = useState(null);
  const [styles, setStyles] = useState({});

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    setFocusTrap(
      createFocusTrap(ref.current, {
        allowOutsideClick: () => {
          return true;
        },
        clickOutsideDeactivates: true,
        escapeDeactivates: true,
        fallbackFocus: ref,
      }),
    );
  }, []);

  useEffect(() => {
    setStyles({
      [position]: isOpen
        ? 0
        : `-${
            ref.current[
              position.match(/top|bottom/) ? 'clientHeight' : 'clientWidth'
            ]
          }px`,
    });

    if (focusTrap) {
      setTimeout(() => {
        focusTrap[isOpen ? 'activate' : 'deactivate']();
      }, 300);
    }
  }, [focusTrap, isOpen]);

  return (
    <>
      <Overlay isActive={isOpen} onClick={onClose} />
      <div
        ref={ref}
        onKeyDown={handleKeyDown}
        className={classnames('rcl-drawer', className, {
          'is-open': isOpen,
          [`rcl-drawer--${position}`]: position,
          [`rcl-drawer--${theme}`]: theme,
        })}
        style={styles}
        {...others}
      >
        {children}
      </div>
    </>
  );
};

Drawer.propTypes = {
  /** Drawer content */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Specifies if drawer is open */
  isOpen: PropTypes.bool,
  /** Callback triggered on close. */
  onClose: PropTypes.func,
  /** Drawer position */
  position: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
};

Drawer.defaultProps = {
  children: <></>,
  className: '',
  isOpen: false,
  onClose() {},
  position: 'left',
};

export default Drawer;
