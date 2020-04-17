import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Avatar = ({ classes, ...others }) => {
  return <div className={classnames('avatar', classes, {})} {...others}></div>;
};

Avatar.propTypes = {
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
};

Avatar.defaultProps = {
  classes: '',
};

export default Avatar;
