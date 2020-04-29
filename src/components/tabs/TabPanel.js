import React, { useContext } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ThemeContext from '../../themeContext';

const TabPanel = ({ className, state, ...others }) => {
  const { theme } = useContext(ThemeContext);
  const [currentIndex, panelIndex] = state;

  return (
    <div
      className={classnames('rcl-tab-panel', className, {
        'is-active': currentIndex === panelIndex,
        [`rcl-tab-panel--${theme}`]: theme,
      })}
      {...others}
    ></div>
  );
};

TabPanel.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Sets tabe panel theme as inverse */
  inverse: PropTypes.bool,
  /** The Tab panel state */
  state: PropTypes.arrayOf(PropTypes.number),
};

TabPanel.defaultProps = {
  className: '',
  inverse: false,
  state: [-1, 0],
};

export default TabPanel;
