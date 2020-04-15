import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Alert from '../alert';

const Toast = ({ children, duration, remove, type }) => {
  const toastRef = useRef();
  toastRef.current = remove;

  useEffect(() => {
    const timer = setTimeout(() => {
      return toastRef.current();
    }, duration);

    return () => {
      return clearTimeout(timer);
    };
  }, []);

  return (
    <Alert classes="toaster__toast" variant={type} onClose={remove}>
      {children}
    </Alert>
  );
};

Toast.propTypes = {
  /** Toast content */
  children: PropTypes.string,
  /** Speciifies how long a toast is visible */
  duration: PropTypes.number,
  /** Removes a toast */
  remove: PropTypes.func,
  /** Type of toast - oneOf: info, warning, error, success */
  type: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
};

Toast.defaultProps = {
  children: null,
  duration: 7000,
  remove() {},
  type: null,
};

export default Toast;
