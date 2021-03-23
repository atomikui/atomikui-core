import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Overlay from '../overlay';
import Portal from '../portal';

const Modal = ({
  className,
  children,
  disableEscapKey,
  disableOverlayclick,
  footer,
  noOverlay,
  overlayTheme,
  isOpen,
  onClose,
  theme,
  title,
  ...others
}) => {
  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      onClose();
    }
  };

  const handleOverlayclick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Portal container={document.body}>
      <Overlay
        theme={overlayTheme}
        isActive={isOpen}
        classes={classnames({
          'overlay--transparent': noOverlay,
        })}
        {...(!disableOverlayclick && { onClick: handleOverlayclick })}
        {...(!disableEscapKey && { onKeyDown: handleKeyDown })}
        {...others}
      >
        {isOpen ? (
          <FocusTrap
            focusTrapOptions={{
              clickOutsideDeactivates: !disableOverlayclick,
              escapeDeactivates: !disableEscapKey,
            }}
          >
            <div
              data-test-id="modal"
              className={classnames('atomikui-modal', className, {
                [`atomikui-modal--${theme}`]: theme,
                'is-open': isOpen,
              })}
            >
              <div className="atomikui-modal__header">
                <div className="atomikui-modal__title">{title}</div>
                <button
                  data-test-id="modal-close-btn"
                  className="atomikui-modal__close-button"
                  aria-label="close-button"
                  onClick={onClose}
                >
                  <Icon icon={faTimes} size="2x" color="white" />
                </button>
              </div>
              <div className="atomikui-modal__body">{children}</div>
              {footer && <div className="atomikui-modal__footer">{footer}</div>}
            </div>
          </FocusTrap>
        ) : null}
      </Overlay>
    </Portal>
  );
};

Modal.propTypes = {
  /** Specifies custom component classes. */
  className: PropTypes.string,
  /** Child elements that will be rendered inside of the modal body. */
  children: PropTypes.node,
  /** Closes the modal when the escape key is pressed. */
  disableEscapKey: PropTypes.bool,
  /** Disables the overlay's clock event. */
  disableOverlayclick: PropTypes.bool,
  /** Content to bre rendered inside of the modal footer. */
  footer: PropTypes.node,
  /** Toggles modal visibility state. */
  isOpen: PropTypes.bool,
  /** Specifies if modal has an overlay. */
  noOverlay: PropTypes.bool,
  /** Sets the overlay theme color */
  overlayTheme: PropTypes.oneOf(['blue', 'white']),
  /** Callback triggered on close. */
  onClose: PropTypes.func,
  /** title to be displayed in modal header */
  title: PropTypes.string,
  /** Specifies the color variation. */
  theme: PropTypes.oneOf(['dark', 'info', 'warning', 'error', 'success']),
};

Modal.defaultProps = {
  className: '',
  disableEscapKey: false,
  children: null,
  disableOverlayclick: false,
  footer: null,
  isOpen: false,
  noOverlay: false,
  overlayTheme: null,
  onClose: null,
  title: '',
  theme: null,
};

export default Modal;
