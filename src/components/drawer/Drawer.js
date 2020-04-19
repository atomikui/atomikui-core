import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import createFocusTrap from 'focus-trap';
import Overlay from '../overlay';

const Drawer = ({ classes, isOpen, onClose, ...others }) => {
  const drawerRef = useRef();

  const [focusTrap, setFocusTrap] = useState(null);

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    setFocusTrap(
      createFocusTrap(drawerRef.current, {
        allowOutsideClick: () => {
          return true;
        },
        clickOutsideDeactivates: true,
        escapeDeactivates: true,
        fallbackFocus: drawerRef,
      }),
    );
  }, []);

  useEffect(() => {
    if (focusTrap) {
      setTimeout(() => {
        focusTrap[isOpen ? 'activate' : 'deactivate']();
      }, 300);
    }
  }, [focusTrap, isOpen]);

  return (
    <Overlay
      isActive={isOpen}
      onClick={(e) => {
        return onClose();
      }}
      onKeyDown={(e) => {
        return handleKeyDown(e);
      }}
    >
      <div
        ref={drawerRef}
        className={classnames('drawer', classes, {
          'is-open': isOpen,
        })}
        {...others}
      ></div>
    </Overlay>
  );
};

Drawer.propTypes = {
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
  /** Specifies if drawer is open */
  isOpen: PropTypes.bool,
  /** Callback triggered on close. */
  onClose: PropTypes.func,
};

Drawer.defaultProps = {
  classes: '',
  isOpen: false,
  onClose: false,
};

export default Drawer;
