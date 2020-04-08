import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Link from '../link';

const Stepper = ({ classes, inline, steps, ...others }) => {
  return (
    <nav>
      <ul
        className={classnames('stepper', classes, {
          'stepper--inline': inline,
        })}
        {...others}
      >
        {steps.map(({ label, isComplete, href, isActive }, index) => {
          const StepNumber = isComplete && href ? Link : 'div';
          return (
            <li
              key={`step-${index}`}
              aria-current={isActive}
              className={classnames('stepper__step', {
                'is-complete': isComplete,
                'is-active': isActive,
              })}
            >
              <StepNumber
                className="stepper__step__number"
                {...(isComplete && href && { href })}
              >
                {!isComplete && index + 1}
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
};

Stepper.propTypes = {
  /** Specifies custom component classes. */
  classes: PropTypes.string,
  /** Makes a stepper and its labels inline */
  inline: PropTypes.bool,
  /** Progress bar steps. */
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      /** Label to be displayed with each step. */
      label: PropTypes.string,
      /** Sprcifies if step is complete. */
      isComplete: PropTypes.bool,
      /** Sprcifies if step is active. */
      isActive: PropTypes.bool,
    }),
  ),
};

Stepper.defaultProps = {
  classes: '',
  inline: false,
  steps: [],
};

export default Stepper;
