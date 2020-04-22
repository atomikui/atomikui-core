import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Link from '../link';
import ListItem from '../list-item';

const Step = ({ children, isActive, isComplete, href, label, topLabel }) => {
  const StepNumber = isComplete && href ? Link : 'span';

  return (
    <ListItem
      key={Math.random()}
      aria-current={isActive}
      className={classnames('rcl-step', {
        'is-complete': isComplete,
        'is-active': isActive,
        'rcl-step--top-label': topLabel,
      })}
    >
      <StepNumber
        className="rcl-step__number"
        {...(isComplete && href && { href })}
      >
        {!isComplete && children}
      </StepNumber>
      {label && (
        <div className="rcl-step__label">
          <span aria-hidden="true">{label}</span>
        </div>
      )}
    </ListItem>
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
