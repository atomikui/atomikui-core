import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import * as easings from 'd3-ease';
import PropTypes from 'prop-types';
import Alert from '../alert';

const Toast = ({ children, duration, remove, type }) => {
  const [transition, setTransition] = useState({
    transform: 'scale(1)',
    opacity: 1,
    from: { transform: 'scale(0)', opacity: 0 },
    config: {
      duration: 500,
      easing: easings.easeBackOut.overshoot(1),
    },
  });

  const toastRef = useRef();

  const props = useSpring(transition);

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
    <animated.div style={props}>
      <Alert classes="toaster__toast" variant={type} onClose={remove}>
        {children}
      </Alert>
    </animated.div>
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
