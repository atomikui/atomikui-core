import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../list-item';

const MenuItem = ({ children, ...props }) => {
  return <ListItem {...props}>{children}</ListItem>;
};

MenuItem.propTypes = {
  /** Menu item children */
  children: PropTypes.node,
};

MenuItem.defaultProps = {
  children: null,
};

export default MenuItem;
