import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import List from '../list';
import useTheme from '../../themeProvider';

const Menu = useTheme(
  ({
    align,
    children,
    className,
    dividers,
    inline,
    inlineStretch,
    theme,
    ...others
  }) => {
    return (
      <List
        className={classnames('rcl-menu', className, {
          'rcl-menu--inline': inline,
          'rcl-menu--inline-stretch': inlineStretch,
          'rcl-menu--with-dividers': dividers,
          [`rcl-menu--align-${align}`]: align,
          [`rcl-menu--${theme}`]: theme,
        })}
        {...others}
      >
        {children}
      </List>
    );
  },
);

Menu.propTypes = {
  /** Menu item alignment */
  align: PropTypes.oneOf(['center', 'right']),
  /** Menu items */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Adds dividers between each menu item */
  dividers: PropTypes.bool,
  /** Displays menu inline */
  inline: PropTypes.bool,
  /** Displays menu inline 100% of parent width */
  inlineStretch: PropTypes.bool,
  /** Color theme variant */
  theme: PropTypes.oneOf(['dark']),
};

Menu.defaultProps = {
  align: null,
  children: <></>,
  className: '',
  dividers: false,
  inline: false,
  inlineStretch: false,
  theme: null,
};

export default Menu;
