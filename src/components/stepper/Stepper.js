import React, { Children, cloneElement } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Stepper = ({ children, classes, inline, topLabels, ...others }) => {
  return (
    <nav>
      <ul
        className={classnames('stepper', classes, {
          'stepper--inline': inline,
        })}
        {...others}
      >
        {topLabels
          ? Children.map(children, (child) => {
              return cloneElement(child, { topLabel: true });
            })
          : children}
      </ul>
    </nav>
  );
};

Stepper.propTypes = {
  /** Specifies custom component classes. */
  classes: PropTypes.string,
  /** Makes a stepper and its labels inline */
  inline: PropTypes.bool,
  /** Specifies stepper to have labels above step number */
  topLabels: PropTypes.bool,
};

Stepper.defaultProps = {
  children: null,
  classes: '',
  inline: false,
  topLabels: false,
};

export default Stepper;
