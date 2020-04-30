import React, { useContext } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ThemeContext from '../../themeContext';

const SwitchPanel = ({ children, className, ...others }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={classnames('rcl-switch-panel', className, {
        [`rcl-switch-panel--${theme}`]: theme,
      })}
      {...others}
    >
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
  children: <></>,
  className: '',
};

export default SwitchPanel;
