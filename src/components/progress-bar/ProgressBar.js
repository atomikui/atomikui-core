import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const ProgressBar = ({ classes, percentComplete, ...others }) => (
  <div className={classnames('progress-bar', classes, {})} {...others}></div>
);

ProgressBar.propTypes = {
  /** Specifies custom component classes */
  classes: PropTypes.string,
  /** Specifies the percentage complete */
  percentComplete: PropTypes.number,
};

ProgressBar.defaultProps = {
  classes: '',
  percentComplete: 0,
};

export default ProgressBar;
