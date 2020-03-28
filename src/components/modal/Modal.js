import React, { useRef, useEffect, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import createFocusTrap from 'focus-trap';

const Modal = ({
  classes,
  children,
  closeOnEscape,
  disableOverlayclick,
  footer,
  hasOverlay,
  isDrawer,
  isOpen,
  onClose,
  ...others
}) => {
  const [focusTrap, setFocusTrap] = useState(null);

  const modal = useRef();

  const handleClose = (e) => {
    if (disableOverlayclick || !hasOverlay) return;

    const isOverlayClick = e.target.classList.contains('modal');

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
    setFocusTrap(createFocusTrap(modal.current, {
      allowOutsideClick: () => !disableOverlayclick || !hasOverlay,
      clickOutsideDeactivates: isDrawer && !hasOverlay,
      escapeDeactivates: false,
      fallbackFocus: modal,
    }));
  }, [disableOverlayclick, hasOverlay, isDrawer]);

  useEffect(() => {
    if (focusTrap) {
      setTimeout(() => {
        focusTrap[isOpen ? 'activate' : 'deactivate']();
      }, 200);
    }
  }, [focusTrap, isOpen]);

  return (
    <div
      className={classnames('modal', classes, {
        'is-open': isOpen,
        'modal--no-overlay': !hasOverlay,
        'modal--drawer': isDrawer,
      })}
      onClick={(e) => handleClose(e)}
      {...(closeOnEscape && { onKeyDown: (e) => handleKeyDown(e) })}
      {...others}
    >
      <div className="modal__dialog" ref={modal}>
        <div className="modal__header">
          <div className="modal__title">title</div>
          <button className="modal__close-button" onClick={() => onClose()}>close</button>
        </div>
        <div className="modal__body">
          {children}
        </div>
        {footer && <div className="modal__footer">{footer}</div>}
      </div>
    </div>
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
  hasOverlay: PropTypes.bool,
  /** Displays the modal as a drawer that slides out from the left or right. */
  isDrawer: PropTypes.bool,
  /** Toggles modal visibility state. */
  isOpen: PropTypes.bool,
  /** Callback triggered on close. */
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  classes: '',
  closeOnEscape: true,
  children: null,
  disableOverlayclick: false,
  footer: null,
  hasOverlay: true,
  isDrawer: false,
  isOpen: false,
  onClose() {},
};

export default Modal;
