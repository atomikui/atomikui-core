import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Stepper = ({ classes, steps, ...others }) => (
  <nav>
    <ul className={classnames('stepper', classes, {})} {...others}>
      {steps.map(({
        label, isComplete, href, isActive,
      }, i) => {
        const StepNumber = isComplete && href ? 'a' : 'div';
        return (
          <li
            key={Math.random()}
            aria-current={isActive}
            className={classnames('stepper__step', {
              'is-complete': isComplete,
              'is-active': isActive,
            })}>
            <StepNumber
              className="stepper__step__number"
              {...(isComplete && href && { href })}
            >
              {!isComplete && i + 1}
            </StepNumber>
            <div className="stepper__step__label">
              <span aria-hidden="true">{label}</span>
            </div>
          </li>
        );
      })}
    </ul>
  </nav>
);

Stepper.propTypes = {
  /** Specifies custom component classes. */
  classes: PropTypes.string,
  /** Progress bar steps. */
  steps: PropTypes.arrayOf(PropTypes.shape({
    /** Label to be displayed with each step. */
    label: PropTypes.string,
    /** Sprcifies if step is complete. */
    isComplete: PropTypes.bool,
    /** Sprcifies if step is active. */
    isActive: PropTypes.bool,
  })),
};

Stepper.defaultProps = {
  classes: '',
  steps: [],
};

export default Stepper;
