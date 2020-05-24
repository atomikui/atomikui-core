import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import shortid from 'shortid';
import Link from '../link';
import { ListItem } from '../list';

const Step = ({ children, isActive, isComplete, href, label, topLabel }) => {
  const StepNumber = isComplete && href ? Link : 'span';

  return (
    <ListItem
      key={shortid.generate()}
      aria-current={isActive}
      className={classnames('atomikui-step', {
        'is-complete': isComplete,
        'is-active': isActive,
        'atomikui-step--top-label': topLabel,
      })}
    >
      <StepNumber
        className="atomikui-step__number"
        {...(isComplete && href && { href })}
      >
        {isComplete && <Icon icon={faCheck} color="white" />}
        {!isComplete && children}
      </StepNumber>
      {label && (
        <div className="atomikui-step__label">
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
  children: <></>,
  isActive: false,
  isComplete: false,
  href: null,
  label: '',
  topLabel: false,
};

export default Step;
