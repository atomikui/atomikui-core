import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Progress = ({
  classes, label, now, ...others
}) => (
  <div className={classnames('progress', classes)} {...others}>
    <div
      className="progress__bar"
      role="progressbar"
      aria-valuenow={now}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ width: `${now}%` }}
    >
      <span className="progress__label">{label}</span>
    </div>
  </div>
);

Progress.propTypes = {
  /** Specifies custom component classes */
  classes: PropTypes.string,
  /** Label to be displayed with progress */
  label: PropTypes.string,
  /** Specifies the percentage complete */
  now: PropTypes.number,
};

Progress.defaultProps = {
  classes: '',
  label: '',
  now: 0,
};

export default Progress;
