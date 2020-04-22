import React, { Children } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import generateId from '../../utilities/generateId';
import List from '../list';
import ListItem from '../list-item';

// TODO: Add Button support

const Pagination = ({ children, className, ...others }) => {
  return (
    <List className={classnames('rcl-pagination', className, {})} {...others}>
      {Children.map(children, (child) => {
        return (
          <ListItem
            className={classnames('rcl-pagination__item', {
              'is-active': child.props.active,
            })}
            key={generateId()}
          >
            {child}
          </ListItem>
        );
      })}
    </List>
  );
};

Pagination.propTypes = {
  /** Child elements */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
};

Pagination.defaultProps = {
  children: null,
  className: '',
};

export default Pagination;
