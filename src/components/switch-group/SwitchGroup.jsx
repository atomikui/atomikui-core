import React, { Children } from 'react';
import PropTypes from 'prop-types';
import List from '../list';

const SwitchGroup = ({ children, className, label, ...others }) => (
  <fieldset aria-describedby="atomikui-switch-group" {...others}>
    <legend id="switch-group-label" className="atomikui-label margin-bottom-8">
      {label}
    </legend>
    <List
      data-test-id="switch-group-list"
      className="atomikui-switch-group__list"
      loose
    >
      {Children.map(children, (child, index) => (
        <List.Item key={`switch-${index + 1}`}>{child}</List.Item>
      ))}
    </List>
  </fieldset>
);

SwitchGroup.propTypes = {
  /** Switch panel content. */
  children: PropTypes.node,
  /** Specifies custom component classes. */
  className: PropTypes.string,
  /** LSwitch panel group label */
  label: PropTypes.string,
};

SwitchGroup.defaultProps = {
  children: null,
  className: '',
  label: '',
};

export default SwitchGroup;
