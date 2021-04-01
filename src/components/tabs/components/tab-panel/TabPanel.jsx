import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TabPanel = ({ className, state, ...others }) => {
  const [currentIndex, panelIndex] = state;

  return (
    <div
      className={classnames('atomikui-tabs__panel', className, {
        'is-active': currentIndex === panelIndex,
      })}
      {...others}
    />
  );
};

TabPanel.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** The Tab panel state */
  state: PropTypes.arrayOf(PropTypes.number),
};

TabPanel.defaultProps = {
  className: '',
  state: [-1, 0],
};

export default TabPanel;
