import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Breadcrumb = ({ children, classes, ...others }) => {
  return (
    <nav>
      <ol className={classnames('breadcrumb', classes, {})} {...others}>
        {children}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
  /** Breadcrumb content. A list of BreadcrumbItems */
  children: PropTypes.node,
};

Breadcrumb.defaultProps = {
  classes: '',
  children: null,
};

export default Breadcrumb;
