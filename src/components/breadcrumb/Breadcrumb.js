import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Breadcrumb = ({ children, classes, ...others }) => {
  return (
    <nav>
      <ul className={classnames('breadcrumb', classes, {})} {...others}>
        {children}
      </ul>
    </nav>
  );
};

Breadcrumb.propTypes = {
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
  /** Breadcrumb link content */
  children: PropTypes.node,
};

Breadcrumb.defaultProps = {
  classes: '',
  children: null,
};

export default Breadcrumb;
