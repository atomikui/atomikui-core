import React, { Children } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import generateId from '../../utilities/generateId';

const Breadcrumb = ({ children, className, ...others }) => {
  return (
    <nav>
      <ol className={classnames('rcl-breadcrumb', className, {})} {...others}>
        {Children.map(children, (child) => {
          return <li key={generateId()}>{child}</li>;
        })}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Breadcrumb content. A list of Links */
  children: PropTypes.node,
};

Breadcrumb.defaultProps = {
  className: '',
  children: null,
};

export default Breadcrumb;
