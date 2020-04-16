import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Stepper = ({ children, classes, inline, ...others }) => {
  return (
    <nav>
      <ul
        className={classnames('stepper', classes, {
          'stepper--inline': inline,
        })}
        {...others}
      >
        {children}
      </ul>
    </nav>
  );
};

Stepper.propTypes = {
  /** Specifies custom component classes. */
  classes: PropTypes.string,
  /** Makes a stepper and its labels inline */
  inline: PropTypes.bool,
};

Stepper.defaultProps = {
  children: null,
  classes: '',
  inline: false,
};

export default Stepper;
