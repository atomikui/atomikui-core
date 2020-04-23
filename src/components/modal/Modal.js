import React, { useRef, useEffect, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import createFocusTrap from 'focus-trap';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
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
            <Icon icon={faTimes} size="2x" color="white" />
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
  children: <></>,
  disableOverlayclick: false,
  footer: null,
  noOverlay: false,
  isOpen: false,
  onClose() {},
  title: '',
  variant: null,
};

export default Modal;
