import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const ListItem = ({ children, className, isMenu, ...others }) => (
  <li
    className={classnames('atomikui-list-item', className, {
      'is-menu-item': isMenu,
    })}
    {...others}
  >
    {children}
  </li>
);

ListItem.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** List item content */
  children: PropTypes.node,
  /** Applies menu list styles */
  isMenu: PropTypes.bool,
};

ListItem.defaultProps = {
  className: '',
  children: null,
  isMenu: false,
};

export default ListItem;
