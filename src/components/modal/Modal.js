import React, { useRef, useEffect, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import createFocusTrap from 'focus-trap';
import Overlay from '../overlay';

const Modal = ({
  className,
  children,
  closeOnEscape,
  disableOverlayclick,
  footer,
  noOverlay,
  isOpen,
  onClose,
  title,
  variant,
  ...others
}) => {
  const [focusTrap, setFocusTrap] = useState(null);

  const modal = useRef();

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
        clickOutsideDeactivates: noOverlay,
        escapeDeactivates: false,
        fallbackFocus: modal,
      }),
    );
  }, [disableOverlayclick, noOverlay]);

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
      classes={classnames({
        'overlay--transparent': noOverlay,
      })}
      {...(!disableOverlayclick && {
        onClick: (e) => {
          return onClose();
        },
      })}
      {...(closeOnEscape && {
        onKeyDown: (e) => {
          return handleKeyDown(e);
        },
      })}
      {...others}
    >
      <div
        className={classnames('rcl-modal', className, {
          [`rcl-modal--${variant}`]: variant,
          'is-open': isOpen,
        })}
        ref={modal}
      >
        <div className="rcl-modal__header">
          <div className="rcl-modal__title">{title}</div>
          <button
            className="rcl-modal__close-button"
            onClick={(e) => {
              return onClose();
            }}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 60.963 60.842"
              xmlSpace="preserve"
            >
              <path
                d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611
	c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611
	l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
	l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
	C61.42,57.647,61.42,54.687,59.595,52.861z"
              />
            </svg>
          </button>
        </div>
        <div className="rcl-modal__body">{children}</div>
        {footer && <div className="rcl-modal__footer">{footer}</div>}
      </div>
    </Overlay>
  );
};

Modal.propTypes = {
  /** Specifies custom component classes. */
  className: PropTypes.string,
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
  /** Toggles modal visibility state. */
  isOpen: PropTypes.bool,
  /** Callback triggered on close. */
  onClose: PropTypes.func,
  /** title to be displayed in modal header */
  title: PropTypes.string,
  /** Modal theme variation */
  variant: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
};

Modal.defaultProps = {
  className: '',
  closeOnEscape: true,
  children: null,
  disableOverlayclick: false,
  footer: null,
  noOverlay: false,
  isOpen: false,
  onClose() {},
  title: '',
  variant: null,
};

export default Modal;
