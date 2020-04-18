import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Avatar = ({
  alt,
  classes,
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
      className={classnames('avatar', {
        'avatar--flip': flipLabel,
        [`avatar--${size}`]: size,
      })}
      {...others}
    >
      <span
        className={classnames('avatar__content', classes, {
          [`avatar__content--${variant}`]: variant,
        })}
      >
        {src && <img className="avatar__image" src={src} alt={alt} />}
        {children && children}
      </span>
      {label && <span className="avatar__label">{label}</span>}
    </span>
  );
};

Avatar.propTypes = {
  /** Avatar image alt text attribute */
  alt: PropTypes.string,
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
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
  classes: '',
  children: null,
  flipLabel: false,
  label: '',
  size: null,
  src: '',
  variant: null,
};

export default Avatar;
