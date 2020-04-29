import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import useTheme from '../../themeProvider';

const ListItem = useTheme(
  ({ children, className, isMenu, theme, ...others }) => {
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
  },
);

ListItem.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** List item content */
  children: PropTypes.node,
  /** Applies menu list styles */
  isMenu: PropTypes.bool,
  /** Color theme variant */
  theme: PropTypes.oneOf(['dark']),
};

ListItem.defaultProps = {
  className: '',
  children: <></>,
  isMenu: false,
  theme: null,
};

export default ListItem;
