import React, { cloneElement, useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import isMobile from '../../utilities/mobile-detect';
import Button from '../button';

const QuickActions = ({ className, actions, position, ...others }) => {
  const isMobileDevice = isMobile();
  const buttonRef = useRef();
  const numActions = actions.length;

  if (numActions < 3 || numActions > 6) {
    throw new Error(`Expected 3-6 actions, but got ${numActions}`);
  }

  return (
    <div
      className={classnames('atomikui-quick-actions', className, {
        'is-mobile': isMobileDevice,
        'is-desktop': !isMobileDevice,
        [`atomikui-quick-actions--${position}`]: position,
      })}
      {...others}
    >
      <button
        ref={buttonRef}
        className="atomikui-quick-actions__toggle"
        theme="primary"
        {...(isMobileDevice && {
          onClick: () => {
            return buttonRef.current.focus();
          },
        })}
      >
        <Icon icon={faPlus} size="2x" color="white" />
      </button>
      <div className="atomikui-quick-actions__action-btns" role="menu">
        {actions.map(({ icon, label, onClick }) => {
          return (
            <Button
              tabIndex="-1"
              role="menuitem"
              key={Math.random()}
              title={label}
              onClick={onClick}
            >
              {icon && cloneElement(icon, { size: 'lg', 'aria-hidden': true })}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

QuickActions.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Array of actions to be rendered as buttons */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      /** Button icon */
      icon: PropTypes.object,
      /** Action label */
      label: PropTypes.string,
      /** Funnction to be triggered on click */
      onClick: PropTypes.func,
    }),
  ),
  /** Action menu position. Default: "right" */
  position: PropTypes.oneOf(['left', 'top', 'bottom']),
};

QuickActions.defaultProps = {
  className: '',
  actions: [],
  position: null,
};

export default QuickActions;
