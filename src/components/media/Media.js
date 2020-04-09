import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Media = ({ classes, ...others }) => {
  return <div className={classnames('media', classes, {})} {...others}></div>;
};

Media.propTypes = {
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
};

Media.defaultProps = {
  classes: '',
};

export default Media;
