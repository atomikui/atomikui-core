import React, { useContext } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ThemeContext from '../../theme-context';

const ListItem = ({ children, className, isMenu, ...others }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <li
      className={classnames('rcl-list-item', className, {
        'is-menu-item': isMenu,
        [`rcl-list-item--${theme}`]: theme,
      })}
      {...others}
    >
      {children}
    </li>
  );
};

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
  children: <></>,
  isMenu: false,
};

export default ListItem;
