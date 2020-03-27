import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const ProgressBar = ({
  classes, label, now, ...others
}) => (
  <div className={classnames('progress-bar', classes)} {...others}>
    <div
      className="progress-bar__bar"
      role="progressbar"
      aria-valuenow={now}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ width: `${now}%` }}
    >
      <span className="progress-bar__label">{label}</span>
    </div>
  </div>
);

ProgressBar.propTypes = {
  /** Specifies custom component classes */
  classes: PropTypes.string,
  /** Label to be displayed with progress */
  label: PropTypes.string,
  /** Specifies the percentage complete */
  now: PropTypes.number,
};

ProgressBar.defaultProps = {
  classes: '',
  label: '',
  now: 0,
};

export default ProgressBar;
