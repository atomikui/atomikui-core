import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Spinner = ({ classes, color, ...others }) => (
  <div
    className={classnames('spinner', {
      [`spinner--${color}`]: color,
    })}
  ></div>
);

Spinner.propTypes = {
  /** Specifies custom component classes. */
  classes: PropTypes.string,
  /** Spinner color */
  color: PropTypes.oneOf(['', 'red', 'orange', 'green', 'blue']),
};

Spinner.defaultProps = {
  classes: '',
  color: '',
};

export default Spinner;
