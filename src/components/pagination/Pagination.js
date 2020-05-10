import React, { Children } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import generateId from '../../utilities/generateId';
import { List, ListItem } from '../list';

const Pagination = ({ children, className, ...others }) => {
  return (
    <List className="rcl-pagination" {...others}>
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
  children: <></>,
  className: '',
};

export default Pagination;
