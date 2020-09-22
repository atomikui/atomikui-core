import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Spinner = ({ className, theme, themeVariant, size, ...others }) => {
  return (
    <div
      className={classnames('atomikui-spinner', className, {
        [`atomikui-spinner--${size}`]: size,
        [`atomikui-spinner--${theme}${
          themeVariant ? `-${themeVariant}` : ''
        }`]: theme,
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
  /** Specifies the color variation. */
  theme: PropTypes.oneOf([
    'red',
    'pink',
    'purple',
    'deep-purple',
    'indigo',
    'blue',
    'sky-blue',
    'cyan',
    'teal',
    'green',
    'light-green',
    'lime',
    'yellow',
    'light-orange',
    'orange',
    'deep-orange',
    'amber',
    'brown',
    'gray',
    'blue-gray',
    'black',
    'white',
  ]),
  /** The theme color variant */
  themeVariant: PropTypes.oneOf(['light']),
  /** Spinner size */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xlg']),
};

Spinner.defaultProps = {
  className: '',
  theme: null,
  themeVariant: null,
  size: null,
};

export default Spinner;
