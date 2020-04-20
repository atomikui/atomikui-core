import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SwitchPanel = ({ children, className, ...others }) => {
  return (
    <div className={classnames('rcl-switch-panel', className)} {...others}>
      {children}
    </div>
  );
};

SwitchPanel.propTypes = {
  /** Switch panel content. */
  children: PropTypes.node,
  /** Specifies custom component classes. */
  className: PropTypes.string,
};

SwitchPanel.defaultProps = {
  children: null,
  className: '',
};

export default SwitchPanel;
