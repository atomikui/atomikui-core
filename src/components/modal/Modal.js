import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool
};

const defaultProps = {
  classes: '',
  children: null,
  isOpen: false
};

const Modal = ({ classes, children, isOpen, ...others }) => {
  return(
    <div className={classnames('modal', classes, {
      'is-open': isOpen
    })} {...others}>
      <div className="modal__dialog">
        <div className="modal__header">

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