import React, { useRef, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../button';

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
    <li
      className={classnames('toaster__toast', {
        [`toaster__toast--${type}`]: type,
      })}
    >
      <div className="toaster__toast__content">{children}</div>
      <Button
        classes="toaster__toast__close-btn"
        variant="hollow"
        onClick={remove}
      >
        Close
      </Button>
    </li>
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
