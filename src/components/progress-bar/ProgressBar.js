import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const ProgressBar = ({
  animated,
  classes,
  label,
  now,
  variant,
  ...others
}) => (
  <div className={classnames('progress-bar', classes, {
    [`progress-bar--${variant}`]: variant,
    'progress-bar--animated': animated,
  })} {...others}>
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
  /** Animages the progress bar. */
  animated: PropTypes.bool,
  /** Specifies custom component classes. */
  classes: PropTypes.string,
  /** Label to be displayed with progress. */
  label: PropTypes.string,
  /** Specifies the percentage complete. */
  now: PropTypes.number,
  /** Specifies the theme variant. */
  variant: PropTypes.string,
};

ProgressBar.defaultProps = {
  animated: false,
  classes: '',
  label: '',
  now: 0,
  variant: '',
};

export default ProgressBar;
