import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../button';

const QuickActions = ({ className, actions, position, ...others }) => {
  return (
    <div
      className={classnames('atomikui-quick-actions', className, {})}
      {...others}
    >
      <Button className="atomikui-quick-actions__toggle" theme="primary">
        <Icon icon={faPlus} size="lg" color="white" />
      </Button>
      <div className="atomikui-quick-actions__action-btns">
        {actions.map(({ icon, label, onClick }) => {
          return (
            <Button key={Math.random()} aria-label={label} onClick={onClick}>
              {icon}
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
  /** Menu position */
  position: PropTypes.oneOf(['left', 'top', 'bottom']),
};

QuickActions.defaultProps = {
  className: '',
  actions: [],
  position: null,
};

export default QuickActions;
