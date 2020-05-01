import React, { Children, useContext } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import generateId from '../../utilities/generateId';
import { List, ListItem } from '../list';
import ThemeContext from '../../themeContext';

const Pagination = ({ children, className, ...others }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <List
      className={classnames('rcl-pagination', className, {
        [`rcl-pagination--${theme}`]: theme,
      })}
      {...others}
    >
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
