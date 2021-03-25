import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import List from '../list';
import ListItem from '../list-item';
import Button from '../button';

const CheckList = ({ items, onCheck, ...others }) => (
  <List className="atomikui-checklist" loose {...others}>
    {items.map(({ id, description, isChecked }) => (
      <ListItem key={`item-${id}`}>
        <Button
          onClick={() => onCheck({ id, isChecked: !isChecked })}
          className={classnames('atomikui-checklist__item', {
            'is-checked': isChecked,
          })}
        >
          <Icon icon={faCheckCircle} size="lg" />
          <span>{description}</span>
        </Button>
      </ListItem>
    ))}
  </List>
);

CheckList.propTypes = {
  /** Items to be rendered as check list */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
      isChecked: PropTypes.bool,
    }),
  ).isRequired,
  /** Callback triggered when item is updated */
  onCheck: PropTypes.func.isRequired,
};

export default CheckList;
