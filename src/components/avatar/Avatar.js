import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Avatar = ({
  alt,
  className,
  children,
  flipLabel,
  label,
  size,
  src,
  variant,
  ...others
}) => {
  return (
    <span
      className={classnames('rcl-avatar', {
        'rcl-avatar--flip': flipLabel,
        [`rcl-avatar--${size}`]: size,
      })}
      {...others}
    >
      <span
        className={classnames('rcl-avatar__content', className, {
          [`rcl-avatar__content--${variant}`]: variant,
        })}
      >
        {src && <img className="rcl-avatar__image" src={src} alt={alt} />}
        {children && children}
      </span>
      {label && <span className="rcl-avatar__label">{label}</span>}
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
  /** Controls the size of the avatar */
  size: PropTypes.oneOf(['sm', 'lg']),
  /** Image to be displayed aiside Avatar */
  src: PropTypes.string,
  /** Avatar background color theme variation */
  variant: PropTypes.oneOf([
    'red',
    'orange',
    'yellow',
    'green',
    'light-blue',
    'medium-blue',
    'dark-blue',
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
  size: null,
  src: '',
  variant: null,
};

export default Avatar;
