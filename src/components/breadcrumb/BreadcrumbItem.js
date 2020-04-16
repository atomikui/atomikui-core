import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const BreadcrumbItem = ({ children, classes, ...others }) => {
  return (
    <div className={classnames('breadcrumb', classes, {})} {...others}>
      {children}
    </div>
  );
};

BreadcrumbItem.propTypes = {
  /** Breadcrum items */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
};

BreadcrumbItem.defaultProps = {
  children: null,
  classes: '',
};

export default BreadcrumbItem;
