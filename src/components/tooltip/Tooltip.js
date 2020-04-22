import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Tooltip = ({ className, ...others }) => {
  return (
    <div className={classnames('rcl-tooltip', className, {})} {...others}></div>
  );
};

Tooltip.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
};

Tooltip.defaultProps = {
  className: '',
};

export default Tooltip;
