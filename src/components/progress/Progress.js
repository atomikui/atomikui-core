import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Progress = ({ classes, now, ...others }) => (
  <div className={classnames('progress', classes, {})} {...others}>
    <div className="progress__bar" />
  </div>
);

Progress.propTypes = {
  /** Specifies custom component classes */
  classes: PropTypes.string,
  /** Specifies the percentage complete */
  now: PropTypes.number,
};

Progress.defaultProps = {
  classes: '',
  now: 0,
};

export default Progress;
