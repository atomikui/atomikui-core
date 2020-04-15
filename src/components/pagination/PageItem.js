import React, { Children } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Link from '../link';

const PageItem = ({
  children,
  classes,
  isActive,
  href,
  onClick,
  ...others
}) => {
  return (
    <li
      className={classnames('pagination__item', classes, {
        'is-active': isActive,
      })}
      {...others}
    >
      {Children.map(children, (child, i) => {
        return (
          <Link
            key={`page-item-${i}`}
            {...(href && { href })}
            {...(onClick && { onClick, role: 'button' })}
          >
            {child}
          </Link>
        );
      })}
    </li>
  );
};

PageItem.propTypes = {
  /** Child elements */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
  /** Page item url */
  href: PropTypes.string,
  /** Specifies an active page item */
  isActive: PropTypes.bool,
  /** onClick callback to be triggered when clicked */
  onClick: PropTypes.func,
};

PageItem.defaultProps = {
  children: null,
  classes: '',
  href: '',
  isActive: false,
  onClick: null,
};

export default PageItem;
