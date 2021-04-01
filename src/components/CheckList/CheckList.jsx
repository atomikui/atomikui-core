import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import List from '../list';
import Button from '../button';

const CheckList = ({ items, onCheck, ...others }) => (
  <List
    data-test-id="check-list"
    className="atomikui-checklist"
    loose
    {...others}
  >
    {items.map(({ id, description, isChecked }, index) => (
      <List.Item key={`item-${index + 1}`}>
        <Button
          onClick={() => onCheck({ id, index, isChecked: !isChecked })}
          className={classnames('atomikui-checklist__item', {
            'is-checked': isChecked,
          })}
        >
          <Icon icon={faCheckCircle} size="lg" />
          <span>{description}</span>
        </Button>
      </List.Item>
    ))}
  </List>
);

CheckList.propTypes = {
  /** Items to be rendered as check list */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** Optional identifier. If no ID is specified, the item's index is used as a fallback */
      id: PropTypes.number,
      /** Item description */
      description: PropTypes.string.isRequired,
      /** Item checked state */
      isChecked: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  /** Callback triggered when item is clicked */
  onCheck: PropTypes.func.isRequired,
};

export default CheckList;
