import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Breadcrumb = ({ classes, ...others }) => {
  return (
    <div
      className={classnames('component-class', classes, {})}
      {...others}
    ></div>
  );
};

Breadcrumb.propTypes = {
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
};

Breadcrumb.defaultProps = {
  classes: '',
};

export default Breadcrumb;
