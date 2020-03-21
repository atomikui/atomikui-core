import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
};

const defaultProps = {
  classes: '',
  children: null,
  isOpen: false,
  onClose() {}
};

const Modal = ({ classes, children, isOpen, onClose, ...others }) => {
  const handleClose = e => {
    const isOverlayClick = e.target.classList.contains('modal');
    
    if (isOverlayClick) {
      onClose();
    }
  };

  return(
    <div 
      className={classnames('modal', classes, {
        'is-open': isOpen
      })} 
      {...others}
      onClick={e => handleClose(e)}
    >
      <div className="modal__dialog">
        <div className="modal__header">
          <div className="modal__title">title</div>
          <button className="modal__close-button" onClick={() => onClose()}>close</button>
        </div>
        <div className="modal__body">
          {children}
        </div>
        <div className="modal__footer">

        </div>
      </div>
    </div>
  );
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;