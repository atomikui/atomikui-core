import React, { Children, cloneElement, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import useTheme from '../../themeProvider';

const Tabs = useTheme(
  ({
    align,
    children,
    className,
    initialActiveTab,
    onChange,
    theme,
    ...others
  }) => {
    const [activeTab, setActiveTab] = useState(initialActiveTab);

    const handleChange = (index) => {
      setActiveTab(index);
      onChange(index);
    };

    return (
      <div
        className={classnames('rcl-tabs', className, {
          [`rcl-tabs--align-${align}`]: align,
          [`rcl-tabs--${theme}`]: theme,
        })}
        {...others}
      >
        {Children.map(children, (child, index) => {
          return cloneElement(child, {
            active: index === activeTab,
            onClick: () => {
              return handleChange(index);
            },
          });
        })}
      </div>
    );
  },
);

Tabs.propTypes = {
  /** Sets the alignment of the Tabs children */
  align: PropTypes.oneOf(['center', 'right', 'stretch']),
  /** Children to be rendered as tabs */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** The inital active tab */
  initialActiveTab: PropTypes.number,
  /** onChange callback */
  onChange: PropTypes.func,
  /** Color theme variant */
  theme: PropTypes.oneOf(['dark']),
};

Tabs.defaultProps = {
  align: null,
  children: <></>,
  className: '',
  initialActiveTab: 0,
  onChange() {},
  theme: null,
};

export default Tabs;
