import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Badge = ({ classes, ...others }) => {
  return (
    <div
      className={classnames('component-class', classes, {})}
      {...others}
    ></div>
  );
};

Badge.propTypes = {
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
};

Badge.defaultProps = {
  classes: '',
};

export default Badge;
