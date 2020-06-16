import React, { useEffect, useState, useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import createFocusTrap from 'focus-trap';
import shortid from 'shortid';
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
  const [focusTrap, setFocusTrap] = useState(null);
  const [modal, setModal] = useState(null);
  const modalId = `modal-${shortid.generate()}`;

  const modalRef = useRef();

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      onClose();
    }
  };

  const modalWindow = (
    <Overlay
      theme={overlayTheme}
      isActive={isOpen}
      classes={classnames({
        'overlay--transparent': noOverlay,
      })}
      onClick={!disableOverlayclick ? onClose : null}
      onKeyDown={!disableEscapKey ? handleKeyDown : null}
      {...others}
    >
      <div
        ref={modalRef}
        className={classnames('atomikui-modal', className, {
          [`atomikui-modal--${theme}`]: theme,
          'is-open': isOpen,
        })}
      >
        <div className="atomikui-modal__header">
          <div className="atomikui-modal__title">{title}</div>
          <button className="atomikui-modal__close-button" onClick={onClose}>
            <Icon icon={faTimes} size="2x" color="white" />
          </button>
        </div>
        <div className="atomikui-modal__body">{children}</div>
        {footer && <div className="atomikui-modal__footer">{footer}</div>}
      </div>
    </Overlay>
  );

  useEffect(() => {
    if (modal) {
      setFocusTrap(
        createFocusTrap(modalRef.current, {
          allowOutsideClick: () => {
            return !disableOverlayclick || noOverlay;
          },
          clickOutsideDeactivates: noOverlay,
          escapeDeactivates: false,
          fallbackFocus: modalRef,
        }),
      );
    }
  }, [disableOverlayclick, modal, noOverlay]);

  useEffect(() => {
    if (focusTrap) {
      setTimeout(() => {
        focusTrap[isOpen ? 'activate' : 'deactivate']();
      }, 300);
    }
  }, [focusTrap, isOpen]);

  useEffect(() => {
    setModal(isOpen ? modalWindow : null);
  }, [isOpen]);

  return modal ? <Portal container={document.body}>{modal}</Portal> : null;
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
  /** Color theme variation */
  theme: PropTypes.oneOf(['dark', 'info', 'warning', 'error', 'success']),
};

Modal.defaultProps = {
  className: '',
  disableEscapKey: false,
  children: <></>,
  disableOverlayclick: false,
  footer: null,
  isOpen: false,
  noOverlay: false,
  overlayTheme: null,
  onClose() {},
  title: '',
  theme: null,
};

export default Modal;
