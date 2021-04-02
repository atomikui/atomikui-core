import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TabPanel = ({ className, isActive, ...others }) => (
  <div
    className={classnames('atomikui-tabs__panel', className, {
      'is-active': isActive,
    })}
    {...others}
  />
);

TabPanel.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** The tab panel active state */
  isActive: PropTypes.bool,
};

TabPanel.defaultProps = {
  className: '',
  isActive: false,
};

export default TabPanel;
