import React, { useRef, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Toast = ({ isNew, children, remove, type }) => {
  const toastRef = useRef();
  toastRef.current = remove;

  useEffect(() => {
    const timer = setTimeout(() => {
      return toastRef.current();
    }, 5000);

    return () => {
      return clearTimeout(timer);
    };
  }, []);

  return (
    <li
      className={classnames('toaster__toast', {
        [`toaster__toast--${type}`]: type,
        'is-new': isNew,
      })}
    >
      {children}
    </li>
  );
};

Toast.propTypes = {
  /** Is a new toast */
  isNew: PropTypes.bool,
  /** Toast content */
  children: PropTypes.string,
  /** Removes a toast */
  remove: PropTypes.func,
  /** Type of toast - oneOf: info, warning, error, success */
  type: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
};

Toast.defaultProps = {
  isNew: false,
  children: null,
  remove() {},
  type: null,
};

export default Toast;
