import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Link from '../link';

const Step = ({ children, label, isComplete, href, isActive }) => {
  const StepNumber = isComplete && href ? Link : 'span';

  return (
    <li
      key={Math.random()}
      aria-current={isActive}
      className={classnames('step', {
        'is-complete': isComplete,
        'is-active': isActive,
      })}
    >
      <StepNumber
        className="step__number"
        {...(isComplete && href && { href })}
      >
        {!isComplete && children}
      </StepNumber>
      <div className="step__label">
        <span aria-hidden="true">{label}</span>
      </div>
    </li>
  );
};

Step.propTypes = {};

Step.defaultProps = {};

export default Step;
