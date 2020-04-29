import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Spinner = ({ className, theme, size, ...others }) => {
  const themes = {
    default: '#333',
    white: '#fff',
    red: '#D0191F',
    orange: '#ff8400',
    green: '#4fa009',
    blue: '#027abf',
  };

  return (
    <div
      className={classnames('rcl-spinner', className, {
        [`rcl-spinner--${size}`]: size,
      })}
      {...others}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke={themes[theme]}
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
          transform="rotate(88.8631 50 50)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          />
        </circle>
      </svg>
    </div>
  );
};

Spinner.propTypes = {
  /** Specifies custom component classes. */
  className: PropTypes.string,
  /** Spinner color variant */
  theme: PropTypes.oneOf([
    'default',
    'red',
    'orange',
    'green',
    'blue',
    'white',
  ]),
  /** Spinner size */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xlg']),
};

Spinner.defaultProps = {
  className: '',
  theme: 'default',
  size: null,
};

export default Spinner;
