import React, { Children } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import generateId from '../../utilities/generateId';

const Pagination = ({ children, classes, ...others }) => {
  return (
    <ul className={classnames('pagination', classes, {})} {...others}>
      {Children.map(children, (child) => {
        return (
          <li
            className={classnames('pagination__item', {
              'is-active': child.props.active,
            })}
            key={generateId()}
          >
            {child}
          </li>
        );
      })}
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
