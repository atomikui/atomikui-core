import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import shortid from 'shortid';
import Link from '../../../link';
import ListItem from '../../../list-item';

const StepperItem = ({
  children,
  isActive,
  isComplete,
  href,
  label,
  topLabel,
}) => {
  const StepNumber = isComplete && href ? Link : 'span';

  return (
    <ListItem
      key={shortid.generate()}
      aria-current={isActive}
      data-test-id="step"
      className={classnames('atomikui-stepper__step', {
        'is-complete': isComplete,
        'is-active': isActive,
        'has-top-labels': topLabel,
      })}
    >
      <StepNumber
        data-test-id="step-number"
        className="atomikui-stepper__step__number"
        href={isComplete ? href : null}
        aria-label={isComplete ? 'step complete' : `step ${children} ${label}`}
      >
        {isComplete && <Icon icon={faCheck} color="white" />}
        {!isComplete && children}
      </StepNumber>
      {label && (
        <div className="atomikui-stepper__step__label">
          <span aria-hidden="true">{label}</span>
        </div>
      )}
    </ListItem>
  );
};

StepperItem.propTypes = {
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

StepperItem.defaultProps = {
  children: null,
  isActive: false,
  isComplete: false,
  href: null,
  label: '',
  topLabel: false,
};

export default StepperItem;
