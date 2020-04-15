import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Pagination = ({ classes, ...others }) => {
  return (
    <div
      className={classnames('component-class', classes, {})}
      {...others}
    ></div>
  );
};

Pagination.propTypes = {
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
};

Pagination.defaultProps = {
  classes: '',
};

export default Pagination;
