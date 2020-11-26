import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Avatar = ({
  alt,
  className,
  children,
  flipLabel,
  label,
  shape,
  size,
  src,
  theme,
  themeVariant,
  ...others
}) => (
  <span
    className={classnames('atomikui-avatar', {
      'atomikui-avatar--flip': flipLabel,
      [`atomikui-avatar--${size}`]: size,
      [`atomikui-avatar--${shape}`]: shape,
    })}
    {...others}
  >
    <span
      className={classnames('atomikui-avatar__content', className, {
        [`atomikui-avatar__content--${theme}${
          themeVariant ? `-${themeVariant}` : ''
        }`]: theme,
      })}
      data-test-id="avatar-content"
    >
      {src && <img className="atomikui-avatar__image" src={src} alt={alt} />}
      {children}
    </span>
    {label && (
      <span className="atomikui-avatar__label" data-test-id="avatar-label">
        {label}
      </span>
    )}
  </span>
);

Avatar.propTypes = {
  /** Avatar image alt text attribute */
  alt: PropTypes.string,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Content to be displayed inside Avatar */
  children: PropTypes.node,
  /** Aligns label to the left of the avatar */
  flipLabel: PropTypes.bool,
  /** Label to be displayed to the right or left of the avatar */
  label: PropTypes.string,
  /** Avatar shape variation - default is round */
  shape: PropTypes.oneOf(['square', 'bevel']),
  /** Controls the size of the avatar */
  size: PropTypes.oneOf(['sm', 'lg']),
  /** Image to be displayed aiside Avatar */
  src: PropTypes.string,
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

Avatar.defaultProps = {
  alt: '',
  className: '',
  children: null,
  flipLabel: false,
  label: '',
  shape: null,
  size: null,
  src: '',
  theme: null,
  themeVariant: null,
};

export default Avatar;
