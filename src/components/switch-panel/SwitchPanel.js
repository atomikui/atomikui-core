import React from 'react';
import PropTypes from 'prop-types';

const SwitchPanel = ({ children }) => {
  return (
  <div className="switch-panel">{children}</div>
  );
};

SwitchPanel.propTypes = {
  /** Switch panel content. */
  children: PropTypes.node,
};

SwitchPanel.defaultProps = {
  children: null,
};

export default SwitchPanel;
