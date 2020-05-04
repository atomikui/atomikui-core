import React, { useContext } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ThemeContext from '../../theme-context';

const ProgressBar = ({
  animated,
  className,
  label,
  now,
  variant,
  ...others
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={classnames('rcl-progress-bar', className, {
        [`rcl-progress-bar--${variant}`]: variant,
        [`rcl-progress-bar--${theme}`]: theme,
        'rcl-progress-bar--animated': animated,
      })}
      {...others}
    >
      <div
        className="rcl-progress-bar__bar"
        role="progressbar"
        aria-valuenow={now}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: `${now}%` }}
      >
        <span className="rcl-progress-bar__label">{label}</span>
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
  /** Specifies the theme variant. */
  variant: PropTypes.string,
};

ProgressBar.defaultProps = {
  animated: false,
  className: '',
  label: '',
  now: 0,
  variant: '',
};

export default ProgressBar;
