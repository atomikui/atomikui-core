import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const ProgressBar = ({ animated, className, label, now, theme, ...others }) => {
  return (
    <div
      className={classnames('atomikui-progress-bar', className, {
        [`atomikui-progress-bar--${theme}`]: theme,
        'atomikui-progress-bar--animated': animated,
      })}
      {...others}
    >
      <div
        className="atomikui-progress-bar__bar"
        role="progressbar"
        aria-valuenow={now}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: `${now}%` }}
      >
        <span className="atomikui-progress-bar__label">{label}</span>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  /** Animages the progress bar. */
  animated: PropTypes.bool,
  /** Specifies custom component classes. */
  className: PropTypes.string,
  /** Label to be displayed with progress. */
  label: PropTypes.string,
  /** Specifies the percentage complete. */
  now: PropTypes.number,
  /** Specifies the color theme. */
  theme: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
};

ProgressBar.defaultProps = {
  animated: false,
  className: '',
  label: '',
  now: 0,
  theme: null,
};

export default ProgressBar;
