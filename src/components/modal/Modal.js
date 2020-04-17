import React, { useRef, useEffect, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import createFocusTrap from 'focus-trap';
import Overlay from '../overlay';

const Modal = ({
  classes,
  children,
  closeOnEscape,
  disableOverlayclick,
  footer,
  noOverlay,
  isContextual,
  isOpen,
  onClose,
  title,
  ...others
}) => {
  const [focusTrap, setFocusTrap] = useState(null);

  const modal = useRef();

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
        clickOutsideDeactivates: isContextual && noOverlay,
        escapeDeactivates: false,
        fallbackFocus: modal,
      }),
    );
  }, [disableOverlayclick, noOverlay, isContextual]);

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
      hasDrawer={isContextual}
      classes={classnames({
        'overlay--transparent': noOverlay,
        'has-contextual-dialog': isContextual,
      })}
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
      <div
        className={classnames('modal', {
          'is-contextual': isContextual,
        })}
        ref={modal}
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
      </div>
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
  isContextual: PropTypes.bool,
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
  isContextual: false,
  isOpen: false,
  onClose() {},
  title: '',
};

export default Modal;
