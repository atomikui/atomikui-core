import React, { useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import * as easings from 'd3-ease';
import PropTypes from 'prop-types';
import Alert from '../alert';

const Toast = ({ children, duration, remove, type }) => {
  const toastRef = useRef();

  const styleProps = useSpring({
    transform: 'scale(1)',
    opacity: 1,
    from: { transform: 'scale(0)', opacity: 0 },
    config: {
      duration: 500,
      easing: easings.easeBackOut.overshoot(1),
    },
  });

  toastRef.current = remove;

  useEffect(() => {
    if (duration !== -1) {
      const timer = setTimeout(() => {
        return toastRef.current();
      }, duration);

      return () => {
        return clearTimeout(timer);
      };
    }

    return undefined;
  }, []);

  return (
    <animated.div style={styleProps}>
      <Alert classes="toaster__toast" variant={type} onClose={remove}>
        {children}
      </Alert>
    </animated.div>
  );
};

Toast.propTypes = {
  /** Toast content */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Speciifies how long a toast is visible. Setting the duration to -1 will make the toast duration infinite. */
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
