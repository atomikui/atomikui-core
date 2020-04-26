import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Tabs = ({ className, ...others }) => {
  return (
    <div className={classnames('rcl-tabs', className, {})} {...others}></div>
  );
};

Tabs.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
};

Tabs.defaultProps = {
  className: '',
};

export default Tabs;
