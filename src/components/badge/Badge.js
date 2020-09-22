import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Badge = ({
  children,
  className,
  shape,
  theme,
  themeVariant,
  ...others
}) => {
  return (
    <div
      className={classnames('atomikui-badge', className, {
        [`atomikui-badge--${theme}${
          themeVariant ? `-${themeVariant}` : ''
        }`]: theme,
        [`atomikui-badge--${shape}`]: shape,
      })}
      {...others}
    >
      {children}
    </div>
  );
};

Badge.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Content to be displayed inside badge */
  children: PropTypes.node,
  /** Specifies the badge theme variation. */
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
  /** Theme color cariant */
  themeVariant: PropTypes.oneOf(['light']),
  /** Specifies a badge's shape. */
  type: PropTypes.oneOf(['pill', 'square']),
};

Badge.defaultProps = {
  className: '',
  children: '',
  theme: null,
  shape: null,
  themeVariant: null,
};

export default Badge;
