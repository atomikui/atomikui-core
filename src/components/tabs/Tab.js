import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../button';
import useTheme from '../../themeProvider';

const Tab = useTheme(
  ({ active, className, label, onClick, theme, ...others }) => {
    return (
      <Button
        theme="hollow"
        className={classnames('rcl-tab', className, {
          'is-active': active,
          [`rcl-tab--${theme}`]: theme,
        })}
        {...(onClick && { onClick })}
        {...others}
      >
        {label}
      </Button>
    );
  },
);

Tab.propTypes = {
  /** Makes a Tab active */
  active: PropTypes.bool,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Tab click event callback */
  onClick: PropTypes.func,
  /** Tab label text */
  label: PropTypes.string,
  /** Color theme variant */
  theme: PropTypes.oneOf(['dark']),
};

Tab.defaultProps = {
  active: false,
  className: '',
  onClick() {},
  label: '',
  theme: null,
};

export default Tab;
