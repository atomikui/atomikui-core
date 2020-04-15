import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Pagination = ({ children, classes, ...others }) => {
  return (
    <ul className={classnames('pagination', classes, {})} {...others}>
      {children}
    </ul>
  );
};

Pagination.propTypes = {
  /** Child elements */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
};

Pagination.defaultProps = {
  children: null,
  classes: '',
};

export default Pagination;
