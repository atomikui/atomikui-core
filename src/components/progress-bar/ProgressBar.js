import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const ProgressBar = ({
  animated,
  className,
  label,
  now,
  shape,
  theme,
  thickness,
  ...others
}) => {
  return (
    <div
      className={classnames(
        'atomikui-progress-bar',
        className,
        [animated && 'animated', shape, theme, thickness].map((prop) => {
          return { [`atomikui-progress-bar--${prop}`]: prop };
        }),
      )}
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
  /** Progress bar shape */
  shape: PropTypes.oneOf(['pill', 'square']),
  /** Specifies the color theme. */
  theme: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
  /** Progress bar thickness */
  thickness: PropTypes.oneOf(['thin', 'thick', 'extra-thick']),
};

ProgressBar.defaultProps = {
  animated: false,
  className: '',
  label: '',
  now: 0,
  shape: null,
  theme: null,
  thickness: null,
};

export default ProgressBar;
