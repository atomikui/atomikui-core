import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Icon = ({ className, ...others }) => {
  return (
    <svg className={classnames('rcl-icon', className, {})} {...others}>
      <path />
    </svg>
  );
};

Icon.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
