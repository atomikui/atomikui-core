import React from 'react';
import PropTypes from 'prop-types';

const SwitchPanel = ({ children }) => (
  <ul className="switch-panel">
    {children}
  </ul>
);

SwitchPanel.propTypes = {
  children: PropTypes.node
}

SwitchPanel.defaultProps = {
  children: null
};

export default SwitchPanel;