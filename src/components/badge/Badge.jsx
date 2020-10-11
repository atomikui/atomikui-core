import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Badge = ({ className, label, value, theme, themeVariant, ...others }) => {
  return (
    <div
      className={classnames('atomikui-badge', className, {
        [`atomikui-badge--${theme}${
          themeVariant ? `-${themeVariant}` : ''
        }`]: theme,
      })}
      {...others}
    >
      <div className="atomikui-badge__label">{label}</div>
      <div className="atomikui-badge__value">{value}</div>
    </div>
  );
};

Badge.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Describes the badge */
  label: PropTypes.string,
  /** The data value associated with the badge */
  value: PropTypes.string,
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
};

Badge.defaultProps = {
  className: '',
  label: '',
  value: '',
  theme: null,
  themeVariant: null,
};

export default Badge;
