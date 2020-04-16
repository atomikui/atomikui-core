import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Link from '../link';

const BreadcrumbItem = ({ active, children, classes, href, ...others }) => {
  return (
    <li>
      {active ? (
        children
      ) : (
        <Link classes={classnames(classes)} href={href} {...others}>
          {children}
        </Link>
      )}
    </li>
  );
};

BreadcrumbItem.propTypes = {
  /** Sets breadcrumb item as active */
  active: PropTypes.bool,
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
  /** Breadcrumb link content */
  children: PropTypes.string,
  /** Breadcrumb link URL */
  href: PropTypes.string,
};

BreadcrumbItem.defaultProps = {
  active: false,
  classes: '',
  children: '',
  href: '#',
};

export default BreadcrumbItem;
