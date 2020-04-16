import React, { useRef, useEffect, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import createFocusTrap from 'focus-trap';
import { useSpring, animated } from 'react-spring';
import * as easings from 'd3-ease';
import Overlay from '../overlay';

const Modal = ({
  classes,
  children,
  closeOnEscape,
  disableOverlayclick,
  footer,
  noOverlay,
  isDrawer,
  isOpen,
  onClose,
  title,
  ...others
}) => {
  const [focusTrap, setFocusTrap] = useState(null);
  const [visibility, setVisibility] = useState('hidden');

  const modal = useRef();

  const [styleProps, set] = useSpring(() => {
    return {
      opacity: 1,
      transform: 'scale(0)',
      config: {
        duration: 500,
        easing: easings.easeBackOut.overshoot(1),
      },
    };
  });

  const close = (e) => {
    onClose();

    const isOverlayClick = e.target.classList.contains('overlay');

    if (isOverlayClick) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    setFocusTrap(
      createFocusTrap(modal.current, {
        allowOutsideClick: () => {
          return !disableOverlayclick || noOverlay;
        },
        clickOutsideDeactivates: isDrawer && noOverlay,
        escapeDeactivates: false,
        fallbackFocus: modal,
      }),
    );
  }, [disableOverlayclick, noOverlay, isDrawer]);

  useEffect(() => {
    set({
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? 'scale(1)' : 'scale(0)',
      config: {
        duration: 500,
        easing: easings.easeBackInOut.overshoot(1),
      },
    });

    if (isOpen) {
      setVisibility('visible');
    } else {
      setTimeout(() => {
        setVisibility('hidden');
      }, 400);
    }

    if (focusTrap) {
      setTimeout(() => {
        focusTrap[isOpen ? 'activate' : 'deactivate']();
      }, 300);
    }
  }, [focusTrap, isOpen]);

  return (
    <Overlay
      classes={classnames({
        'overlay--transparent': noOverlay,
        'has-drawer': isDrawer,
      })}
      style={{ visibility }}
      {...(!disableOverlayclick && {
        onClick: (e) => {
          return close(e);
        },
      })}
      {...(closeOnEscape && {
        onKeyDown: (e) => {
          return handleKeyDown(e);
        },
      })}
      {...others}
    >
      <animated.div
        className={classnames('modal', {
          'is-drawer': isDrawer,
        })}
        ref={modal}
        style={styleProps}
      >
        <div className="modal__header">
          <div className="modal__title">{title}</div>
          <button
            className="modal__close-button"
            onClick={(e) => {
              return close(e);
            }}
          >
            close
          </button>
        </div>
        <div className="modal__body">{children}</div>
        {footer && <div className="modal__footer">{footer}</div>}
      </animated.div>
    </Overlay>
  );
};

Modal.propTypes = {
  /** Specifies custom component classes. */
  classes: PropTypes.string,
  /** Child elements that will be rendered inside of the modal body. */
  children: PropTypes.node,
  /** Closes the modal when the escape key is pressed. */
  closeOnEscape: PropTypes.bool,
  /** Disables the overlay's clock event. */
  disableOverlayclick: PropTypes.bool,
  /** Content to bre rendered inside of the modal footer. */
  footer: PropTypes.node,
  /** Specifies if modal has an overlay. */
  noOverlay: PropTypes.bool,
  /** Displays the modal as a drawer that slides out from the left or right. */
  isDrawer: PropTypes.bool,
  /** Toggles modal visibility state. */
  isOpen: PropTypes.bool,
  /** Callback triggered on close. */
  onClose: PropTypes.func,
  /** title to be displayed in modal header */
  title: PropTypes.string,
};

Modal.defaultProps = {
  classes: '',
  closeOnEscape: true,
  children: null,
  disableOverlayclick: false,
  footer: null,
  noOverlay: false,
  isDrawer: true,
  isOpen: false,
  onClose() {},
  title: '',
};

export default Modal;
