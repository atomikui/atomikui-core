import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ children, className, ...others }) => {
  return (
    <li {...(className && { className })} {...others}>
      {children}
    </li>
  );
};

ListItem.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** List item content */
  children: PropTypes.node,
};

ListItem.defaultProps = {
  className: '',
  children: <></>,
};

export default ListItem;
