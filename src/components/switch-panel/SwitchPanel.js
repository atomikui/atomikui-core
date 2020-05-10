import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SwitchPanel = ({ children, className, label, ...others }) => {
  return (
    <div className="rcl-switch-panel" {...others}>
      <div className="rcl-switch-panel__hd">{label}</div>
      <div className="rcl-switch-panel__bd">{children}</div>
    </div>
  );
};

SwitchPanel.propTypes = {
  /** Switch panel content. */
  children: PropTypes.node,
  /** Specifies custom component classes. */
  className: PropTypes.string,
  /** LSwitch panel group label */
  label: PropTypes.string,
};

SwitchPanel.defaultProps = {
  children: <></>,
  className: '',
  label: '',
};

export default SwitchPanel;
