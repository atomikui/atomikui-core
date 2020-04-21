import React, { Children } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Menu = ({ children, className, ...others }) => {
  return (
    <ul className={classnames('rcl-menu', className)} {...others}>
      {Children.map(children, (child) => {
        return <li>{child}</li>;
      })}
    </ul>
  );
};

Menu.propTypes = {
  /** Menu items */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
};

Menu.defaultProps = {
  children: null,
  className: '',
};

export default Menu;
