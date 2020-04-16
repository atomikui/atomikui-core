import React, { Children } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Link from '../link';

const PageItem = ({
  children,
  classes,
  disabled,
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
            classes={classnames({ 'is-disabled': disabled })}
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
  /** Specifies a page item as disabled */
  disabled: PropTypes.bool,
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
  disabled: false,
  href: null,
  isActive: false,
  onClick: null,
};

export default PageItem;
