import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Stepper = ({ classes, steps, ...others }) => (
  <div className={classnames('stepper', classes, {})} {...others}>
    {steps.map(({ label, isComplete, isActive }, i) => {
      let status = '';

      const step = i + 1;

      if (isComplete) {
        status = 'complete';
      }

      if (isActive) {
        status = 'in progress';
      }

      return (
        <div key={Math.random()} className={classnames('stepper__step', {
          'is-complete': isComplete,
          'is-active': isActive,
        })}>
          <div className="stepper__step__number" aria-hidden="true">
            {!isComplete && step}
          </div>
          <div className="stepper__step__label" aria-label={`step ${step} ${status} ${label}`}>
            <span aria-hidden="true">{label}</span>
          </div>
        </div>
      );
    })}
  </div>
);

Stepper.propTypes = {
  /** Specifies custom component classes */
  classes: PropTypes.string,
  /** Progress bar steps */
  steps: PropTypes.arrayOf(PropTypes.shape({
    /** Label to be displayed with each step */
    label: PropTypes.string,
    /** Sprcifies if step is complete */
    isComplete: PropTypes.bool,
    /** Sprcifies if step is active */
    isActive: PropTypes.bool,
  })),
};

Stepper.defaultProps = {
  classes: '',
  steps: [],
};

export default Stepper;
