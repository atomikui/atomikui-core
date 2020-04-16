import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Link from '../link';

const Step = ({ children, isActive, isComplete, href, label, topLabel }) => {
  const StepNumber = isComplete && href ? Link : 'span';

  return (
    <li
      key={Math.random()}
      aria-current={isActive}
      className={classnames('step', {
        'is-complete': isComplete,
        'is-active': isActive,
        'step--top-label': topLabel,
      })}
    >
      <StepNumber
        className="step__number"
        {...(isComplete && href && { href })}
      >
        {!isComplete && children}
      </StepNumber>
      {label && (
        <div className="step__label">
          <span aria-hidden="true">{label}</span>
        </div>
      )}
    </li>
  );
};

Step.propTypes = {
  /** Step content */
  children: PropTypes.node,
  /** Specifies if a step is currently active */
  isActive: PropTypes.bool,
  /** Specifies if a step is complete */
  isComplete: PropTypes.bool,
  /** Step anchor URL */
  href: PropTypes.string,
  /** Accompanying step label text */
  label: PropTypes.string,
  /** Postions label on top */
  topLabel: PropTypes.bool,
};

Step.defaultProps = {
  children: null,
  isActive: false,
  isComplete: false,
  href: null,
  label: '',
  topLabel: false,
};

export default Step;
