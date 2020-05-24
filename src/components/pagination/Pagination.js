import React, { Children } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { List, ListItem } from '../list';

const Pagination = ({ children, className, ...others }) => {
  return (
    <List className="atomikui-pagination" {...others}>
      {Children.map(children, (child) => {
        return (
          <ListItem
            className={classnames('atomikui-pagination__item', {
              'is-active': child.props.active,
            })}
            key={shortid.generate()}
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
