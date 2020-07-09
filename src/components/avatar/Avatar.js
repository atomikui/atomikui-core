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
  ...others
}) => {
  return (
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
          [`atomikui-avatar__content--${theme}`]: theme,
        })}
      >
        {src && <img className="atomikui-avatar__image" src={src} alt={alt} />}
        {children && children}
      </span>
      {label && <span className="atomikui-avatar__label">{label}</span>}
    </span>
  );
};

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
  /** Avatar background color theme variation */
  theme: PropTypes.oneOf([
    'red',
    'orange',
    'yellow',
    'gold',
    'green',
    'light-blue',
    'medium-blue',
    'dark-blue',
    'light-purple',
    'medium-purple',
    'dark-purple',
    'light-gray',
    'medium-gray',
    'dark-gray',
    'black',
  ]),
};

Avatar.defaultProps = {
  alt: '',
  className: '',
  children: <></>,
  flipLabel: false,
  label: '',
  shape: null,
  size: null,
  src: '',
  theme: null,
};

export default Avatar;
