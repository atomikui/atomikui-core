import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  /** Specifies custom component classes */
  classes: PropTypes.string,
  /** Child elements that will be rendered inside of the modal body */
  children: PropTypes.node,
  /** Disables the overlay's clock event */
  disableOverlayclick: PropTypes.bool,
  /** Content to bre rendered inside of the modal footer */
  footer: PropTypes.node,
  /** Specifies if modal has an overlay */
  hasOverlay: PropTypes.bool,
  /** Displays the modal as a drawer that slides out from the left or right */
  isDrawer: PropTypes.bool,
  /** Toggles modal visibility state */
  isOpen: PropTypes.bool,
  /** Callback triggered on close */
  onClose: PropTypes.func,
};

const defaultProps = {
  classes: '',
  children: null,
  disableOverlayclick: false,
  footer: null,
  hasOverlay: true,
  isDrawer: false,
  isOpen: false,
  onClose() {},
};

const Modal = ({
  classes,
  children,
  disableOverlayclick,
  footer,
  hasOverlay,
  isDrawer,
  isOpen,
  onClose,
  ...others
}) => {
  const handleClose = (e) => {
    if (disableOverlayclick || !hasOverlay) return;

    const isOverlayClick = e.target.classList.contains('modal');

    if (isOverlayClick) {
      onClose();
    }
  };

  return (
    <div
      className={classnames('modal', classes, {
        'is-open': isOpen,
        'modal--no-overlay': !hasOverlay,
        'modal--drawer': isDrawer,
      })}
      {...others}
      onClick={(e) => handleClose(e)}
    >
      <div className="modal__dialog">
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

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
