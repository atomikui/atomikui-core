import React, { Children } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Menu = ({ align, children, className, dividers, inline, ...others }) => {
  return (
    <ul
      className={classnames('rcl-menu', className, {
        'rcl-menu--inline': inline,
        'rcl-menu--with-dividers': dividers,
        [`rcl-menu--align-${align}`]: align,
      })}
      {...others}
    >
      {Children.map(children, (child) => {
        return <li>{child}</li>;
      })}
    </ul>
  );
};

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
};

Menu.defaultProps = {
  align: null,
  children: null,
  className: '',
  dividers: false,
  inline: false,
};

export default Menu;
