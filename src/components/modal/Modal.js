import React, { useRef, useEffect, useState, useContext } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import createFocusTrap from 'focus-trap';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Overlay from '../overlay';
import ThemeContext from '../../themeContext';

const Modal = ({
  className,
  children,
  closeOnEscape,
  disableOverlayclick,
  footer,
  noOverlay,
  isOpen,
  onClose,
  overlayThemeVariant,
  title,
  type,
  ...others
}) => {
  const { theme } = useContext(ThemeContext);

  const [focusTrap, setFocusTrap] = useState(null);

  const modal = useRef();

  const modalTheme = type || theme;

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
      {...(overlayThemeVariant && { theme: overlayThemeVariant })}
      isActive={isOpen}
      classes={classnames({
        'overlay--transparent': noOverlay,
      })}
      {...(!disableOverlayclick && {
        onClick: onClose,
      })}
      {...(closeOnEscape && {
        onKeyDown: handleKeyDown,
      })}
      {...others}
    >
      <div
        className={classnames('rcl-modal', className, {
          [`rcl-modal--${modalTheme}`]: modalTheme,
          'is-open': isOpen,
        })}
        ref={modal}
      >
        <div className="rcl-modal__header">
          <div className="rcl-modal__title">{title}</div>
          <button className="rcl-modal__close-button" onClick={onClose}>
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
  /** Set the overlay theme variation */
  overlayThemeVariant: PropTypes.oneOf(['white', 'blue']),
  /** title to be displayed in modal header */
  title: PropTypes.string,
  /** Color theme variation */
  type: PropTypes.oneOf(['dark', 'info', 'warning', 'error', 'success']),
};

Modal.defaultProps = {
  className: '',
  closeOnEscape: true,
  children: <></>,
  disableOverlayclick: false,
  footer: null,
  isOpen: false,
  noOverlay: false,
  onClose() {},
  overlayThemeVariant: null,
  title: '',
  type: null,
};

export default Modal;
